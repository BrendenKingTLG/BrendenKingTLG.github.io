import { useState } from "react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    from: "",
    textBody: "",
  });
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/mailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: formData.from,
          textBody: `Name: ${formData.name}\n\nMessage:\n${formData.textBody}`,
        }),
      });
      const result = await response.json();
      setMessage(result.message);
    } catch (error: any) {
      setMessage("Failed to send email: " + error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-30 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-400"
      >
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <form
        onSubmit={handleSubmit}
        className="bg-black p-8 rounded-lg shadow-lg w-11/12 md:w-1/2 max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>

        <label htmlFor="name" className="block text-sm font-medium text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 mb-4 p-2 w-full border border-gray-300 rounded-md focus:ring-black focus:border-black"
          placeholder="Your Name"
        />

        <label htmlFor="from" className="block text-sm font-medium text-white">
          Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          value={formData.from}
          onChange={handleChange}
          className="mt-1 mb-4 p-2 w-full border border-gray-300 rounded-md focus:ring-black focus:border-black"
          placeholder="Your Email"
          required
        />

        <label
          htmlFor="textBody"
          className="block text-sm font-medium text-white"
        >
          Message
        </label>
        <textarea
          id="textBody"
          name="textBody"
          value={formData.textBody}
          onChange={handleChange}
          rows={4}
          className="mt-1 mb-6 p-2 w-full border border-gray-300 rounded-md focus:ring-black focus:border-black"
          placeholder="Your Message"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full border bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 transition"
        >
          Send Message
        </button>
        {message && (
          <p className="mt-4 text-center text-green-500">{message}</p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
