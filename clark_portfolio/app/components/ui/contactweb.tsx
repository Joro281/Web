"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"" | "success" | "error">("");
  const [showAlert, setShowAlert] = useState(false);
  const [animationClass, setAnimationClass] = useState("animate-slide-in-right");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_w1hzwd4", 
        "template_c7fdgom", 
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "T4JRuzqz_W47DgWrG"
      )
      .then(
        () => {
          setStatus("success");
          setShowAlert(true);
          setAnimationClass("animate-slide-in-right");
          setForm({ name: "", email: "", message: "" });
        },
        (error: unknown) => {
          console.error(error);
          setStatus("error");
          setShowAlert(true);
          setAnimationClass("animate-slide-in-right");
        }
      );
  };

  useEffect(() => {
    if (showAlert) {
      const timer1 = setTimeout(() => {
        setAnimationClass("animate-slide-out-right");
      }, 2500);

      const timer2 = setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [showAlert]);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-6 flex items-center justify-center">
      <div className="w-full max-w-xl relative">
        <h2 className="text-2xl sm:text-3xl mb-6 font-bold">Contact</h2>

        <p className="mb-4">
          <span className="text-green-500">👤</span> user@portfolio:~${" "}
          <span className="text-white">nano contact-form</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1">Enter your name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="$ your_name_here"
              required
              className="w-full bg-black border border-green-500 text-green-200 px-3 py-2 placeholder-green-400"
            />
          </div>

          <div>
            <label className="block mb-1">Enter your email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="$ your.email@domain.com"
              required
              className="w-full bg-black border border-green-500 text-green-200 px-3 py-2 placeholder-green-400"
            />
          </div>

          <div>
            <label className="block mb-1">Enter your message:</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="$ Type your message here..."
              required
              className="w-full h-[150px] resize-none overflow-y-auto bg-black border border-green-500 text-green-200 px-3 py-2 placeholder-green-400"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-black px-6 py-2 font-semibold hover:bg-green-400 transition-all"
          >
            send_message
          </button>
        </form>

        {showAlert && (
          <div
            className={`fixed bottom-4 right-4 px-4 py-2 rounded shadow-lg bg-opacity-90 text-white transition-all duration-500 z-50 ${
              status === "success" ? "bg-green-700" : "bg-red-700"
            } ${animationClass}`}
          >
            {status === "success"
              ? "✅ Message sent successfully!"
              : "❌ Failed to send message."}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
