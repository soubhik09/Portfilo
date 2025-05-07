import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "motion/react";

function ContactForm() {
  const [fromData, setFromData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setError] = useState({});

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData({ ...fromData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!fromData.name) errors.name = "Name is required";
    if (!fromData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(fromData.email)) {
      errors.email = "Email is invalid";
    }
    if (!fromData.message) errors.message = "Message is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      setError({});
      setIsSending(true);

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          fromData,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((res) => {
          console.log("SUCCESS!", res.status, res.text);
          toast.success("Message sent successfully!");
          setFromData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message. Please try again later.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };
  return (
    <div className="mx-auto max-w-3xl p-4" id="contact">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Let's Connect
      </h2>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            value={fromData.name}
            placeholder="Name"
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
          />
          {errors.name && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              aria-live="polite"
              className="text-sm text-pink-700"
            >
              {errors.name}
            </motion.p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={fromData.email}
            placeholder="Email"
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              aria-live="polite"
              className="text-sm text-pink-700"
            >
              {errors.email}
            </motion.p>
          )}
        </div>
        <div className="mb-4">
          <textarea
            type="text"
            id="message"
            name="message"
            value={fromData.message}
            placeholder="Message"
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-gray-900 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none resize-none"
            rows="4"
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              aria-live="polite"
              className="text-sm text-pink-700"
            >
              {errors.message}
            </motion.p>
          )}
        </div>
        <button
          type="submit"
          className={`mb-8 w-full rounded bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-yellow-500 ${
            isSending && "cursor-not-allowed opacity-50"
          }`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </motion.form>
    </div>
  );
}

export default ContactForm;
