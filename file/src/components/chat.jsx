import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase'; 
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useLanguageStore } from '../useLanguageStore';
import AgoraCall from './AgoraCall'; // Ներմուծում ենք մեր Agora զանգի ֆայլը

export default function Chat() {
  const { language } = useLanguageStore(); 

  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null); 
  const [activeCall, setActiveCall] = useState(null); // Ավելացրեցինք զանգի state-ը ('video', 'audio' կամ null)

  const provider = new GoogleAuthProvider();
  const chatId = "room_admin_and_user_1"; 

  const translations = {
    hy: {
      supportTitle: "Աջակցություն",
      voiceCall: "Ձայնային զանգ",
      videoCall: "Տեսազանգ",
      googleLogin: "Մուտք գործել Google-ով",
      messagePlaceholder: "Գրեք հաղորդագրություն..."
    },
    ru: {
      supportTitle: "Поддержка",
      voiceCall: "Голосовой звонок",
      videoCall: "Видеозвонок",
      googleLogin: "Войти через Google",
      messagePlaceholder: "Напишите сообщение..."
    },
    en: {
      supportTitle: "Support",
      voiceCall: "Voice Call",
      videoCall: "Video Call",
      googleLogin: "Sign in with Google",
      messagePlaceholder: "Type a message..."
    }
  };

  const t = translations[language] || translations.hy;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  useEffect(() => {
    if (!isOpen || !user) return;

    const messagesRef = collection(db, "chats", chatId, "messages");
    const q = query(messagesRef, orderBy("createdAt", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [isOpen, user]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim() || !user) return;

    const msgText = message;
    setMessage(''); 

    try {
      await addDoc(collection(db, "chats", chatId, "messages"), {
        text: msgText,
        createdAt: serverTimestamp(),
        sender: user.displayName,
        email: user.email
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setMessage(msgText); 
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-14 h-14 bg-[#fca34d] text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:bg-[#e5923c]"
      >
        {isOpen ? "✖" : "💬"}
      </button>

      {isOpen && (
        <div className="absolute bottom-18 right-0 w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-[#2d3748] text-white px-4 py-3 text-sm font-bold flex justify-between items-center">
            <span>{t.supportTitle}</span>
            <div className="flex gap-3">
              {/* Այստեղ փոխեցինք Google Meet-ը Agora-յի զանգի վրա */}
              <button 
                onClick={() => setActiveCall('audio')}
                className="hover:text-[#fca34d] transition-colors"
                title={t.voiceCall}
              >
                📞
              </button>
              <button 
                onClick={() => setActiveCall('video')}
                className="hover:text-[#fca34d] transition-colors"
                title={t.videoCall}
              >
                📹
              </button>
            </div>
          </div>

          {!user ? (
            <div className="flex-1 flex items-center justify-center p-4">
              <button 
                onClick={handleGoogleLogin} 
                className="bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
                 {t.googleLogin}
              </button>
            </div> 
          ) : activeCall ? (
            /* Եթե զանգը ակտիվ է, ցույց ենք տալիս Agora զանգի պատուհանը */
            <div className="flex-1 p-2 bg-gray-900">
              <AgoraCall 
                channelName={chatId} 
                callType={activeCall} 
                onLeave={() => setActiveCall(null)} 
              />
            </div>
          ) : (
            /* Հակառակ դեպքում սովորական չատն է */
            <>
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-2">
                {messages.map(msg => (
                  <div key={msg.id} className={`p-2 rounded-lg text-sm max-w-[80%] ${msg.email === user.email ? 'bg-[#fca34d] text-white self-end' : 'bg-gray-200 self-start'}`}>
                    {msg.text}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="p-3 border-t flex gap-2 bg-white">
                <input 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none" 
                  placeholder={t.messagePlaceholder} 
                />
                <button type="submit" className="bg-[#2d3748] text-white px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity">🚀</button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}