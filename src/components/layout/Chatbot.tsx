"use client";

import { useEffect, useState, useRef } from "react";

interface Message {
  text: string;
  sender: "user" | "bot";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "👋 Welcome to Digivixo! Your strategic digital partner for professional IT and E-commerce solutions. I can help you learn about our 8 core service pillars, pricing, processes, and more. What would you like to know?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const createSystemPrompt = () => {
    return `You are Digivixo's AI assistant helping visitors understand our professional IT and E-commerce services.

COMPANY INFO:
Your strategic digital partner providing professional IT and E-commerce solutions with one commitment to technical excellence.
Mission: Building the digital infrastructure for the next generation of business
Leadership: Abdullah and Hassan - Experts in technical innovation and digital transformation

8 CORE SERVICE PILLARS:
- Website Development: High-performance, responsive websites optimized for speed, security, and conversion
- Web Applications & SaaS: Custom dashboards, admin panels, and business tools
- Graphic Design & UI/UX: Professional design services for brand identity
- Shopify Development: Custom theme engineering for high-growth brands
- Amazon Management: Data-driven marketplace growth and PPC optimization
- Digital Marketing: Social media management, SEO, and Google Ads
- WordPress Development: Secure, high-performance CMS solutions
- Automation & AI: Business process automation and AI integrations

CONTACT INFO:
Email: contact@digivixo.com
Phone: +1 (425) 477-8523
Address: 22 Southville Road, Feltham, Middlesex London, TW14 8AU
Response Time: 24 hours

GUIDELINES:
- Be professional, helpful, and strategic
- Focus on how our 8 service pillars solve business challenges
- Keep responses concise (2-4 sentences) unless detailed info is requested
- For pricing or project inquiries, invite them to contact us
- Highlight our 24hr response time and dedicated partnership approach`;
  };

  const sendQuickMessage = (message: string) => {
    handleSend(message);
  };

  const handleSend = async (messageText?: string) => {
    const message = messageText || inputValue;
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = { text: message, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const chatMessages = messages
        .filter((m) => m.sender !== "bot" || !m.text.startsWith("👋 Welcome"))
        .map((m) => ({
          role: m.sender === "user" ? "user" : "assistant",
          content: m.text,
        }));

      chatMessages.push({ role: "user", content: message });

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          systemPrompt: createSystemPrompt(),
          messages: chatMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "API Error");
      }

      const botMessage: Message = {
        text: data.choices[0].message.content,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error: any) {
      const errorMessage: Message = {
        text: `Error: ${error.message}. Please try again or contact us at contact@digivixo.com`,
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      <style jsx global>{`
        .dg-chat-button {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0066ff 0%, #0052cc 100%);
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(0, 102, 255, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 9998;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            box-shadow: 0 8px 24px rgba(0, 102, 255, 0.4);
          }
          50% {
            box-shadow: 0 8px 32px rgba(0, 102, 255, 0.6);
          }
        }

        .dg-chat-button:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 32px rgba(21, 53, 122, 0.5);
        }

        .dg-chat-button svg {
          width: 32px;
          height: 32px;
          fill: white;
        }

        .dg-chat-container {
          position: fixed;
          bottom: 100px;
          right: 24px;
          width: 400px;
          height: 650px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 9999;
          font-family:
            -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          opacity: 0;
          visibility: hidden;
          transition:
            opacity 0.3s ease,
            visibility 0.3s ease;
        }

        .dg-chat-container.active {
          opacity: 1;
          visibility: visible;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dg-chat-header {
          background: linear-gradient(135deg, #0066ff 0%, #0052cc 100%);
          color: white;
          padding: 24px 20px;
        }

        .dg-header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .dg-header-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .dg-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #0066ff;
          font-size: 18px;
        }

        .dg-header-text h3 {
          font-size: 18px;
          margin: 0 0 4px 0;
          font-weight: 600;
        }

        .dg-header-text p {
          font-size: 13px;
          opacity: 0.95;
          margin: 0;
        }

        .dg-close {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          cursor: pointer;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }

        .dg-close:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .dg-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
        }

        .dg-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          animation: blink 2s infinite;
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .dg-messages {
          flex: 1;
          overflow-y: auto;
          padding: 24px 20px;
          background: linear-gradient(to bottom, #f9fafb 0%, #ffffff 100%);
        }

        .dg-message {
          margin-bottom: 20px;
          display: flex;
          gap: 10px;
          animation: fadeIn 0.4s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dg-message.user {
          flex-direction: row-reverse;
        }

        .dg-message-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 12px;
          flex-shrink: 0;
        }

        .dg-message.bot .dg-message-avatar {
          background: linear-gradient(135deg, #0066ff 0%, #0052cc 100%);
          color: white;
        }

        .dg-message.user .dg-message-avatar {
          background: #e5e7eb;
          color: #374151;
        }

        .dg-message-content {
          max-width: 75%;
          padding: 14px 18px;
          border-radius: 16px;
          font-size: 14px;
          line-height: 1.6;
        }

        .dg-message.bot .dg-message-content {
          background: white;
          color: #1f2937;
          border-bottom-left-radius: 4px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .dg-message.user .dg-message-content {
          background: linear-gradient(135deg, #0066ff 0%, #0052cc 100%);
          color: white;
          border-bottom-right-radius: 4px;
        }

        .dg-typing {
          display: flex;
          gap: 6px;
          padding: 14px 18px;
          background: white;
          border-radius: 16px;
          width: fit-content;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          margin-bottom: 20px;
        }

        .dg-typing-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #0066ff;
          animation: typing 1.4s infinite;
        }

        .dg-typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .dg-typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%,
          60%,
          100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
        }

        .dg-quick-actions {
          display: flex;
          gap: 8px;
          padding: 0 20px 16px;
          background: linear-gradient(to bottom, #f9fafb 0%, #ffffff 100%);
          flex-wrap: wrap;
        }

        .dg-quick-action {
          padding: 10px 18px;
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 24px;
          font-size: 13px;
          cursor: pointer;
          color: blue;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .dg-quick-action:hover {
          background: linear-gradient(135deg, #0066ff 0%, #0052cc 100%);
          color: white;
          border-color: transparent;
          transform: translateY(-2px);
        }

        .dg-input-container {
          padding: 20px;
          background: white;
          border-top: 1px solid #e5e7eb;
        }

        .dg-input-wrapper {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .dg-input {
          flex: 1;
          padding: 14px 20px;
          border: 2px solid #e5e7eb;
          border-radius: 28px;
          font-size: 14px;
          outline: none;
          font-family: inherit;
          transition: all 0.3s ease;
        }

        .dg-input:focus {
          border-color: #0066ff;
          box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
        }

        .dg-send {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0066ff 0%, #0052cc 100%);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .dg-send:hover:not(:disabled) {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0, 102, 255, 0.4);
        }

        .dg-send:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .dg-send svg {
          width: 22px;
          height: 22px;
          fill: white;
        }

        .dg-messages::-webkit-scrollbar {
          width: 6px;
        }
        .dg-messages::-webkit-scrollbar-track {
          background: transparent;
        }
        .dg-messages::-webkit-scrollbar-thumb {
          background: #0066ff;
          border-radius: 3px;
        }

        @media (max-width: 480px) {
          .dg-chat-container {
            width: 100%;
            height: 100%;
            bottom: 0;
            right: 0;
            border-radius: 0;
          }
          .dg-message-content {
            max-width: 80%;
          }
        }
      `}</style>

      {/* Chat Button */}
      <button
        className="dg-chat-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat"
        title="Chat with us"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.28-3.87-.78l-.28-.13-2.85.48.48-2.85-.13-.28C4.78 14.68 4.5 13.38 4.5 12c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z" />
        </svg>
      </button>

      {/* Chat Container */}
      <div className={`dg-chat-container ${isOpen ? "active" : ""}`}>
        <div className="dg-chat-header">
          <div className="dg-header-top">
            <div className="dg-header-info">
              <div className="dg-avatar">DV</div>
              <div className="dg-header-text">
                <h3>Digivixo AI Assistant</h3>
                <p>Strategic Digital Partner</p>
              </div>
            </div>
            <button
              className="dg-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              title="Close"
            >
              &times;
            </button>
          </div>
          <div className="dg-status">
            <div className="dg-status-dot"></div>
            <span>Available 24/7 • Responds in 24hrs</span>
          </div>
        </div>

        <div className="dg-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`dg-message ${msg.sender}`}>
              <div className="dg-message-avatar">
                {msg.sender === "bot" ? "AI" : "You"}
              </div>
              <div className="dg-message-content">{msg.text}</div>
            </div>
          ))}
          {isTyping && (
            <div className="dg-typing">
              <div className="dg-typing-dot"></div>
              <div className="dg-typing-dot"></div>
              <div className="dg-typing-dot"></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="dg-quick-actions">
          <div
            className="dg-quick-action"
            onClick={() => sendQuickMessage("What services do you offer?")}
          >
            🚀 Services
          </div>
          <div
            className="dg-quick-action"
            onClick={() => sendQuickMessage("Tell me about web development")}
          >
            💻 Web Dev
          </div>
          <div
            className="dg-quick-action"
            onClick={() => sendQuickMessage("E-commerce solutions")}
          >
            🛒 E-commerce
          </div>
          <div
            className="dg-quick-action"
            onClick={() => sendQuickMessage("How can I contact you?")}
          >
            📞 Contact
          </div>
        </div>

        <div className="dg-input-container">
          <div className="dg-input-wrapper">
            <input
              type="text"
              className="dg-input"
              placeholder="Ask about our services..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              autoComplete="off"
            />
            <button
              className="dg-send"
              onClick={() => handleSend()}
              disabled={isTyping || !inputValue.trim()}
              aria-label="Send message"
              title="Send"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
