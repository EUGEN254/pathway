// components/Chatbot.jsx
import React, { useState } from 'react';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi! How can I help you plan your trip?', sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user'
    };
    setMessages([...messages, userMessage]);
    setInputText('');

    // Simulate bot response 
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thanks for your message! Our team will get back to you soon.",
        sender: 'bot'
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Icon */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 z-50 group"
        aria-label="Open chat"
      >
        {isOpen ? (
          <FiX className="text-2xl" />
        ) : (
          <FiMessageCircle className="text-2xl group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-orange-500 text-white p-4">
            <h3 className="font-semibold">Travel Assistant</h3>
            <p className="text-xs opacity-90">Ask me anything about your trip</p>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-orange-500 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="border-t border-gray-200 p-3 flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition"
            >
              <FiSend />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;