import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; 
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { useLanguageStore } from '../useLanguageStore';
import AgoraCall from './AgoraCall'; // Ներմուծում ենք Agora զանգի կոմպոնենտը

export default function AdminChat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [activeCall, setActiveCall] = useState(null); // Ավելացրեցինք զանգի state-ը ('video', 'audio' կամ null)
  
  const chatId = "room_admin_and_user_1"; 

  useEffect(() => {
    const messagesRef = collection(db, "chats", chatId, "messages");
    const q = query(messagesRef, orderBy("createdAt", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(fetchedMessages);
    });

    return () => unsubscribe();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const messagesRef = collection(db, "chats", chatId, "messages");

    try {
      await addDoc(messagesRef, {
        text: message,
        createdAt: new Date(),
        sender: "admin" 
      });
      
      setMessage(''); 
    } catch (error) {
      console.error("Firebase սխալ:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col h-[500px] overflow-hidden font-sans">
      
      {/* Header */}
      <div className="bg-[#2d3748] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <h1 className="text-base font-bold">Օգտատիրոջ Աջակցման Պանել (Ադմին)</h1>
        </div>

        {/* Ադմինի զանգի կոճակներ */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button 
              onClick={() => setActiveCall('audio')}
              className="bg-gray-700 hover:bg-gray-600 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors"
              title="Ձայնային զանգ"
            >
              📞
            </button>
            <button 
              onClick={() => setActiveCall('video')}
              className="bg-[#fca34d] hover:bg-[#e5923c] px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors"
              title="Տեսազանգ"
            >
              📹
            </button>
          </div>
          <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300">Room 1</span>
        </div>
      </div>

      {/* Մարմին (Body)՝ Եթե զանգը ակտիվ է, ցույց ենք տալիս տեսազանգը, հակառակ դեպքում՝ չատը */}
      {activeCall ? (
        <div className="flex-1 p-2 bg-gray-900">
          <AgoraCall 
            channelName={chatId} 
            callType={activeCall} 
            onLeave={() => setActiveCall(null)} 
          />
        </div>
      ) : (
        <>
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                  msg.sender === 'admin'
                    ? 'bg-[#fca34d] text-white self-end rounded-br-none' 
                    : 'bg-white text-gray-800 self-start rounded-bl-none shadow-sm border border-gray-100' 
                }`}
              >
                <div className="text-[10px] text-gray-400 mb-0.5 font-bold">
                  {msg.sender === 'admin' ? 'Դուք' : 'Հաճախորդ'}
                </div>
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-150 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Պատասխանեք օգտատիրոջը..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#fca34d] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#2d3748] hover:bg-[#1a202c] text-white px-5 py-3 rounded-xl text-sm font-medium transition-colors"
            >
              Ուղարկել
            </button>
          </form>
        </>
      )}

    </div>
  );
}