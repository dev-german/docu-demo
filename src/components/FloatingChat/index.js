// src/components/FloatingChat/index.js
import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";

// Icono SVG para el botón de chat (puedes reemplazarlo o mejorarlo)
const ChatIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
  </svg>
);

// Icono SVG para cerrar
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="20"
    height="20"
  >
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "initial",
      text: "¡Hola! Soy Sofi, tu asistente virtual. ¿En qué puedo ayudarte con la documentación del módulo?",
      sender: "ai",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const API_URL = "http://localhost:5001/api/ask";
  // Reemplaza esta URL con la de tu imagen de avatar para "Sofi"
  const AVATAR_URL = "/docu-demo/img/sofi.png";

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setError("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userQuery = inputValue.trim();
    if (!userQuery || isLoading) return;

    const newUserMessage = { id: Date.now(), text: userQuery, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInputValue("");
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: userQuery }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(
          errData.error || `Error del servidor: ${response.status}`
        );
      }

      const data = await response.json();

      const aiResponse = {
        id: Date.now() + 1,
        text: data.answer,
        sender: "ai",
        sources: data.sources,
      };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    } catch (err) {
      console.error("Error al contactar la API del chat:", err);
      setError(
        err.message || "No se pudo obtener una respuesta. Intenta de nuevo."
      );
      const errorMessage = {
        id: Date.now() + 1,
        text: `Error: ${
          err.message || "No se pudo conectar con el asistente."
        }`,
        sender: "ai",
        isError: true,
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <>
      <button
        className={`${styles.floatingButton} ${isOpen ? styles.hidden : ""}`}
        onClick={toggleChat}
        aria-label="Abrir chat de ayuda"
      >
        <ChatIcon />
      </button>

      {isOpen && (
        <div
          className={styles.chatWindow}
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-window-title"
        >
          <div className={styles.chatHeader}>
            {/* Contenedor para el avatar y el título */}
            <div className={styles.headerContent}>
              <img
                src={AVATAR_URL}
                alt="Avatar de Sofi"
                className={styles.chatAvatar}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/40x40/777/FFF?text=Error&font=roboto";
                }} // Fallback
              />
              <h3 id="chat-window-title" className={styles.chatTitle}>
                Preguntale a Sofi
              </h3>{" "}
            </div>
            <button
              onClick={toggleChat}
              className={styles.closeButton}
              aria-label="Cerrar chat"
            >
              <CloseIcon />
            </button>
          </div>

          <div className={styles.chatMessages}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`${styles.message} ${styles[msg.sender]} ${
                  msg.isError ? styles.errorMessage : ""
                }`}
              >
                <p className={styles.messageText}>{msg.text}</p>
                {msg.sender === "ai" &&
                  msg.sources &&
                  msg.sources.length > 0 && (
                    <div className={styles.sourcesContainer}>
                      <strong>Fuentes:</strong>
                      <ul>
                        {msg.sources.map((source, index) => (
                          <li key={index}>
                            <a
                              href={source.path}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {source.title || "Fuente"}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {error && <p className={styles.errorTextDialog}>{error}</p>}

          <form onSubmit={handleSubmit} className={styles.chatInputForm}>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Escribe tu pregunta aquí..."
              className={styles.chatInput}
              disabled={isLoading}
              aria-label="Escribe tu pregunta"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className={styles.sendButton}
            >
              {isLoading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
