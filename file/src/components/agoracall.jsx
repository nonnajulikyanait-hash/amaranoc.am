import React, { useEffect, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';

const APP_ID = "30bba9d0afe042eca4c33d4768b44f65"; // Գրեք ձեր Agora App ID-ն console.agora.io-ից

export default function AgoraCall({ channelName, onLeave, callType = "video" }) {
  const [client] = useState(() => AgoraRTC.createClient({ mode: "rtc", codec: "vp8" }));
  const [joined, setJoined] = useState(false);
  const [remoteUsers, setRemoteUsers] = useState([]);
  const [micActive, setMicActive] = useState(true);
  const [videoActive, setVideoActive] = useState(callType === "video");

  useEffect(() => {
    let localAudioTrack;
    let localVideoTrack;

    const initCall = async () => {
      try {
        // Միանում ենք Agora ալիքին (channelName-ը օգտագործում ենք որպես ռումբի ID)
        await client.join(APP_ID, channelName, null, null);

        // Ստեղծում ենք ձայնային թրեք
        localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        
        // Եթե տեսազանգ է, ստեղծում ենք նաև տեսախցիկի թրեք
        if (callType === "video") {
          localVideoTrack = await AgoraRTC.createCameraVideoTrack();
          localVideoTrack.play("local-video");
          await client.publish([localAudioTrack, localVideoTrack]);
        } else {
          // Եթե միայն ձայնային է
          await client.publish([localAudioTrack]);
        }

        setJoined(true);

        // Երբ դիմացինը միանում է
        client.on("user-published", async (user, mediaType) => {
          await client.subscribe(user, mediaType);
          
          if (mediaType === "video") {
            setRemoteUsers((prev) => [...prev, user]);
            // Փոքրիկ դանդաղեցում՝ DOM-ում դիվը հայտնվելուց հետո նվագարկելու համար
            setTimeout(() => {
              user.videoTrack.play(`remote-video-${user.uid}`);
            }, 100);
          }
          
          if (mediaType === "audio") {
            user.audioTrack.play();
          }
        });

        // Երբ դիմացինը դուրս է գալիս
        client.on("user-unpublished", (user) => {
          setRemoteUsers((prev) => prev.filter((u) => u.uid !== user.uid));
        });

      } catch (error) {
        console.error("Agora join error:", error);
      }
    };

    initCall();

    return () => {
      // Մաքրման պրոցես (Cleanup)
      if (localAudioTrack) {
        localAudioTrack.stop();
        localAudioTrack.close();
      }
      if (localVideoTrack) {
        localVideoTrack.stop();
        localVideoTrack.close();
      }
      client.leave();
      client.removeAllListeners();
    };
  }, [client, channelName, callType]);

  // Միկրոֆոնի անջատում/միացում
  const toggleMic = async () => {
    if (client.localTracks[0]) {
      await client.localTracks[0].setEnabled(!micActive);
      setMicActive(!micActive);
    }
  };

  // Տեսախցիկի անջատում/միացում (եթե վիդեո զանգ է)
  const toggleVideo = async () => {
    const videoTrack = client.localTracks.find(t => t.mediaType === "video") || client.localTracks[1];
    if (videoTrack) {
      await videoTrack.setEnabled(!videoActive);
      setVideoActive(!videoActive);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white rounded-2xl overflow-hidden p-3 shadow-2xl">
      {/* Տեսանյութերի հատված */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 relative min-h-[220px]">
        {/* Իմ տեսանյութը */}
        {callType === "video" && (
          <div id="local-video" className="w-full h-full bg-black rounded-xl overflow-hidden relative border border-gray-700">
            <span className="absolute bottom-2 left-2 bg-black/60 text-xs px-2 py-1 rounded">Դուք</span>
          </div>
        )}

        {/* Դիմացինի տեսանյութը */}
        {callType === "video" ? (
          <div id={`remote-video-${remoteUsers[0]?.uid}`} className="w-full h-full bg-black rounded-xl overflow-hidden relative border border-gray-700 flex items-center justify-center">
            {remoteUsers.length === 0 ? (
              <span className="text-xs text-gray-400 animate-pulse">Սպասում ենք զրուցակցին...</span>
            ) : (
              <span className="absolute bottom-2 left-2 bg-black/60 text-xs px-2 py-1 rounded">Զրուցակից</span>
            )}
          </div>
        ) : (
          <div className="col-span-2 flex flex-col items-center justify-center bg-gray-800 rounded-xl">
            <div className="w-20 h-20 bg-[#fca34d] rounded-full flex items-center justify-center text-3xl mb-3 animate-bounce">
              📞
            </div>
            <p className="text-sm font-semibold">
              {remoteUsers.length > 0 ? "Զանգը ընթացքի մեջ է..." : "Զանգահարում ենք..."}
            </p>
          </div>
        )}
      </div>

      {/* Կառավարման կոճակներ */}
      <div className="flex justify-center items-center gap-4 mt-3 bg-gray-800 p-2 rounded-xl">
        <button 
          onClick={toggleMic} 
          className={`p-3 rounded-full text-sm font-bold transition-colors ${micActive ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-600'}`}
          title="Միկրոֆոն"
        >
          {micActive ? "🎙️" : "🔇"}
        </button>

        {callType === "video" && (
          <button 
            onClick={toggleVideo} 
            className={`p-3 rounded-full text-sm font-bold transition-colors ${videoActive ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-600'}`}
            title="Տեսախցիկ"
          >
            {videoActive ? "📹" : "🚫"}
          </button>
        )}

        <button 
          onClick={onLeave} 
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl text-sm font-bold transition-colors"
        >
          Ավարտել ❌
        </button>
      </div>
    </div>
  );
}