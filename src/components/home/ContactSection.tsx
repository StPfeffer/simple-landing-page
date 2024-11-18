import { useState } from "react";
import "../../styles/contact.css";

import React from 'react'
import Container from "../Container";
import Button from "../Button";

const ContactSection = () => {
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Insira um email válido.");
            return;
        }

        if (!content) {
            setError("Por favor, escreva a sua mensagem.");
            return;
        }

        setError("");
        setLoading(true);
        setSuccessMessage("");

        try {
            const response = await fetch("/api", {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ toMail: email, message: content }),
            });

            if (response.ok) {
                setSuccessMessage("E-mail enviado com sucesso!");
                setEmail("");
                setContent("");
            } else {
                setError(`Erro ao enviar e-mail: ${await response.text()}`);
            }
        } catch (err) {
            console.error("Erro ao enviar e-mail:", err);
            setError("Erro ao enviar e-mail. Tente novamente mais tarde.");
        } finally {
            setLoading(false);
        }
    };

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <section id="contact">
            <Container>
                <header>
                    <p className="desktop-only reverse-color">Envie sua dúvida</p>
                    <h1>Entre em contato</h1>

                    <p>
                        Entre em contato, estamos dispostos a tirar qualquer dúvida,seja um orçamento, uma dúvida técnica de algum de nossos produtos.
                    </p>
                </header>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="flex flex-col gap-1.5">
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Seu email"
                            type="email"
                        />
                        <textarea
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            placeholder="Sua mensagem"
                        />
                    </div>

                    <div className="py-lg">
                        <Button
                            disabled={loading}
                            text={loading ? "Enviando..." : "Enviar"}
                        />

                        {error &&
                            <p className="error">
                                {error}
                            </p>
                        }
                        {successMessage &&
                            <p className="success">
                                {successMessage}
                            </p>
                        }
                    </div>
                </form>
            </Container>
        </section>
    );
}

export default ContactSection;
