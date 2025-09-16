import React, { useState, useRef, useEffect } from "react";

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "bot", text: "Tashi Delek 🙏! I am BodhiBot, your guide to Sikkim's sacred wonders. How may I assist your journey?" }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages, loading]);

    const sendMessage = async () => {
        if (!input.trim()) return;
        const newMessage = { role: "user", text: input };
        setMessages((prev) => [...prev, newMessage]);
        setInput("");
        setLoading(true);

        try {
            const response = await fetch("http://localhost:8080/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [
                        {
                            role: "system",
                            content: `You are BodhiBot 🕉️, Monastery360's AI guide. 
Answer questions about monasteries, culture, and tourism in Sikkim. 
Be friendly, respectful, and serene. Use 🙏 or 🕉️ emoji where appropriate.

Knowledge base:
- Enchey Monastery: Located in Gangtok, built in the 19th century.
- Rumtek Monastery: Largest in Sikkim, seat of the Karmapa.
- Pemayangtse Monastery: One of the oldest.
- Tashiding Monastery: Famous for Bhumchu festival.`
                        },
                        ...messages.map((msg) => ({
                            role: msg.role === "user" ? "user" : "assistant",
                            content: msg.text,
                        })),
                        { role: "user", content: input },
                    ],
                }),
            });

            const data = await response.json();
            let botReply;
            if (data?.choices?.[0]?.message?.content) {
                botReply = data.choices[0].message.content;
            } else if (data?.error?.message) {
                botReply = `⚠️ Groq Error: ${data.error.message}`;
            } else {
                botReply = "🙏 Sorry, I couldn’t understand that.";
            }

            setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { role: "bot", text: "⚠️ Error connecting to Groq. Try again later." }
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="z-50 font-sans">
            {/* Floating Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 right-8 z-50 h-20 w-20 rounded-full overflow-hidden transition-transform duration-200 hover:scale-110"
            >
                <img className="h-full w-full object-cover" src="./bot.png" alt="AI Bot" />
            </button>

            {isOpen && (
                <div className="fixed bottom-32 right-8 w-80 sm:w-96 bg-amber-50 text-gray-900 shadow-2xl rounded-xl overflow-hidden border z-[9999]">
                    {/* Header */}
                    <div className="bg-red-950 text-white p-4 flex justify-between items-center">
                        <span className="font-bold text-lg">BodhiBot 🕉️ AI Guide</span>
                        <button onClick={() => setIsOpen(false)}>✖</button>
                    </div>

                    {/* Messages */}
                    <div className="h-80 bg-white overflow-y-auto p-4 flex flex-col space-y-3">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`p-3 rounded-xl max-w-[85%] shadow-sm ${msg.role === "user"
                                    ? "bg-red-950 text-white self-end"
                                    : "bg-gray-100 text-gray-800 self-start"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}

                        {loading && (
                            <div className="self-start p-3 rounded-xl bg-gray-100 animate-pulse">
                                ...
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="flex border-t border-gray-200 bg-white">
                        <input
                            type="text"
                            className="flex-1 p-3 outline-none"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && !loading && sendMessage()}
                            placeholder="Ask me about monasteries..."
                            disabled={loading}
                        />
                        <button
                            onClick={sendMessage}
                            disabled={loading}
                            className="bg-red-950 text-white px-5 py-3 hover:bg-orange-700 disabled:bg-gray-400"
                        >
                            ➤
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBot;
