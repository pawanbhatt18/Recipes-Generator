import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { X, Bot, Send } from 'lucide-react';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const sendMessage = async () => {
        if (!userInput.trim()) return;
        const newMessages = [...messages, { role: "user", content: userInput }];
        setMessages(newMessages);
        setUserInput('');
        setIsTyping(true);

        try {
            const response = await axios.post("http://localhost:3000/chatbot", { message: userInput });
            setTimeout(() => {
                setMessages([...newMessages, { role: "bot", content: response.data.response }]);
                setIsTyping(false);
            }, 2000);
        } catch (error) {
            console.error("Error communicating with chatbot:", error);
            setIsTyping(false);
        }
    };

    return (
        <div>
            {!isOpen && (
                <motion.button 
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-green-600 transition-all"
                    whileHover={{ scale: 1.1 }}
                >
                    <Bot size={32} />
                    {/* Circular Dots Animation */}
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white rounded-full"
                            animate={{
                                x: [0, Math.cos((i * Math.PI) / 2) * 15, 0],
                                y: [0, Math.sin((i * Math.PI) / 2) * 15, 0],
                            }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                        />
                    ))}
                </motion.button>
            )}

            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed bottom-24 right-6 w-80 bg-white shadow-2xl rounded-lg border border-gray-300"
                >
                    <div className="flex justify-between items-center bg-green-600 text-white p-3 rounded-t-lg">
                        <h2 className="text-lg font-semibold">Recipe Assistant</h2>
                        <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
                            <X size={20} />
                        </button>
                    </div>
                    <div className="h-80 overflow-y-auto p-3 flex flex-col space-y-2 bg-gray-700">
                        {messages.map((msg, index) => (
                            <motion.div 
                                key={index} 
                                className={`p-3 rounded-lg text-white text-sm max-w-xs ${msg.role === "user" ? "bg-green-500 self-end" : "bg-green-600 self-start"}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {msg.content}
                            </motion.div>
                        ))}
                        {isTyping && <motion.div className="text-gray-500 italic animate-pulse" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ yoyo: Infinity }}>🍽️ Finding recipe...</motion.div>}
                    </div>
                    <div className="flex p-3 border-t bg-white">
                        <input
                            type="text"
                            className="flex-grow border border-gray-300 rounded-lg p-2 focus:outline-none"
                            placeholder="Ask for a recipe..."
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <motion.button 
                            className="ml-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                            onClick={sendMessage}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Send size={20} />
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Chatbot;
