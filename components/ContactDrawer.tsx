"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ContactDrawer({ open, onClose }: Props) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_jwzb91p",
        "template_ikriifv",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "k2_YLBzSWP2PdGvdq"
      );

      alert("Message Sent Successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      onClose();
    } catch (error) {
      console.log(error);
      alert("Failed to send message");
    }

    setLoading(false);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-[90] transition-all duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-screen w-full md:w-[520px] bg-[#0b0b09] z-[100] border-l border-white/10 transition-all duration-700 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-10 h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="serif text-5xl text-[#e9e5dc]">
              Chat With Us
            </h2>

            <button
              onClick={onClose}
              className="text-white/50 hover:text-white text-3xl"
            >
              ×
            </button>
          </div>

          <form
            onSubmit={sendEmail}
            className="flex flex-col gap-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              className="bg-transparent border border-white/10 px-5 py-4 outline-none text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={handleChange}
              className="bg-transparent border border-white/10 px-5 py-4 outline-none text-white"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={handleChange}
              className="bg-transparent border border-white/10 px-5 py-4 outline-none text-white"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              value={form.message}
              onChange={handleChange}
              className="bg-transparent border border-white/10 px-5 py-4 outline-none text-white resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="border border-[#c9ba9b]/30 text-[#c9ba9b] py-4 uppercase tracking-[0.3em] text-sm hover:bg-[#c9ba9b] hover:text-black transition-all duration-500 mt-4"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="mt-16 text-white/40 text-sm leading-8">
            <p>Rajwada Infotech</p>
            <p>ERP Solutions</p>
            <p>support@rajwadainfotech.com</p>
          </div>
        </div>
      </div>
    </>
  );
}