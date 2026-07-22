import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase'; 
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null); 

  const provider = new GoogleAuthProvider();
  const chatId = "room_admin_and_user_1"; 

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
            <span>Աջակցություն</span>
            <div className="flex gap-3">
              <button 
                onClick={() => window.open("https://meet.google.com/new", "_blank")}
                className="hover:text-[#fca34d] transition-colors"
                title="Ձայնային զանգ"
              >
                📞
              </button>
              <button 
                onClick={() => window.open("https://meet.google.com/new", "_blank")}
                className="hover:text-[#fca34d] transition-colors"
                title="Տեսազանգ"
              >
                📹
              </button>
            </div>
          </div>

          {!user ? (
            <div className="flex-1 flex items-center justify-center p-4">
              <button 
                onClick={handleGoogleLogin} 
                className="bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 flex items-center gap-2 shadow-sm"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
                 Մուտք գործել Google-ով
              </button>
            </div> 
          ) : (
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
                  placeholder="Գրեք հաղորդագրություն..." 
                />
                <button type="submit" className="bg-[#2d3748] text-white px-4 py-2 rounded-lg font-bold">🚀</button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}