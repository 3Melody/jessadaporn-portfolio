import React, { useRef, useState } from 'react';
import axios from 'axios';

const ContactEmail = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError('');
    setSent(false);

    const formData = {
      name: formRef.current.user_name.value,
      email: formRef.current.user_email.value,
      message: formRef.current.message.value
    };

    try {
      // URL ของ backend ของคุณ
      const API_URL = import.meta.env.VITE_BACKEND_URL;
      // const API_KEY = import.meta.env.VITE_BACKEND_API_KEY || 'YOUR_API_KEY';

      await axios.post(API_URL + '/send-email' , formData, {
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${API_KEY}`
        }
      });

      setSent(true);
      formRef.current.reset();
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to send message');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="section portfolio contact">
      <div data-aos="fade-down" className="container mx-auto max-w-3xl">
        <div className="text-white text-4xl font-bold mb-6 text-center xl:text-left">Contact Me</div>
        <form ref={formRef} onSubmit={handleSubmit} className="bg-black/40 border-primary rounded-lg p-6">
          <div className="grid gap-4">
            <div>
              <label htmlFor="user_name" className="white">Name</label>
              <input name="user_name" id="user_name" type="text" required className="w-full p-3 mt-2 rounded-lg text-black" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="user_email" className="white">Email</label>
              <input name="user_email" id="user_email" type="email" required className="w-full p-3 mt-2 rounded-lg text-black" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="white">Message</label>
              <textarea name="message" id="message" rows="5" required className="w-full p-3 mt-2 rounded-lg text-black" placeholder="Details" />
            </div>
          </div>
          {error && <div className="text-red-400 mt-3">{error}</div>}
          {sent && <div className="text-green-400 mt-3">Message sent successfully!</div>}
          <button type="submit" disabled={sending} className="w-full text-black p-3 rounded-lg bg-primary mt-4 disabled:opacity-60">
            {sending ? 'Sending…' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactEmail;
