import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_r1vvq2a",
        "template_ifyt9l8",
        { from_name: form.name, from_email: form.email, message: form.message },
        "0-2VBAESePt6jRghL"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-gradient-to-b from-purple-50 via-blue-50 to-white min-h-screen">
      {/* Hero */}
      <section className="text-center py-16 px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-purple-700 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          Have questions or suggestions? Reach out through any of the channels below, or send us a message directly.
        </p>
      </section>

      {/* Contact Cards + Form */}
      <section className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {[
            { icon: MdEmail, title: "Email", text: "mirhimel012@gmail.com", color: "text-purple-600" },
            { icon: FaWhatsapp, title: "WhatsApp", text: "+8801764630254", color: "text-green-500" },
            { icon: FaFacebookMessenger, title: "Messenger", text: "m.me/amargolpo", color: "text-blue-600" },
            { icon: GrLocation, title: "Office", text: "İstanbul, Türkiye", color: "text-purple-600" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center hover:scale-105 transform transition-all duration-300 border border-purple-100"
              >
                <Icon className={`text-3xl sm:text-4xl mb-3 sm:mb-4 ${item.color}`} />
                <h3 className="text-lg sm:text-xl font-semibold text-purple-700 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.text}</p>
              </div>
            );
          })}
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-6 text-center">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 peer"
              />
              <label className="absolute left-3 -top-2.5 bg-white px-1 text-purple-700 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 peer"
              />
              <label className="absolute left-3 -top-2.5 bg-white px-1 text-purple-700 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 peer resize-none"
              ></textarea>
              <label className="absolute left-3 -top-2.5 bg-white px-1 text-purple-700 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all">
                Message
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl text-white font-bold transition-all duration-200 ${
                loading ? "bg-purple-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-800"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-64 sm:h-96 mt-12 sm:mt-16 rounded-xl shadow-lg overflow-hidden mx-auto max-w-6xl">
        <iframe
          title="AmarGolpo Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d91560.46581176866!2d28.93354085232214!3d41.02072492175918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1761234213850!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;