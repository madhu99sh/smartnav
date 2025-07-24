"use client"; // if using Next.js App Router
import Image from "next/image";
import { db } from "../libs/firebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

export default function GetAQuoteSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = { name: "", email: "", phone: "" };
    let isValid = true;

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(form.phone)) {
      newErrors.phone = "Phone number is invalid";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error as user types
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      await addDoc(collection(db, "quotes"), form);
      alert("Message sent!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Error adding document: ", err);
      alert("Failed to send message.");
    }
    setSubmitting(false);
  };

  return (
    <section id="quote-form" className="px-4 md:px-16 py-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-10 items-stretch">
        {/* Form Section (30%) */}
        <div className="md:col-span-3 h-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-black">
            Get a Quote
          </h2>
          <p className="text-gray-700 mb-10 text-md md:text-xl">
            We&apos;re here to help! Reach out, whether you have questions about
            our services, need support, or want to explore partnership
            opportunities.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="border rounded-xl px-4 py-3 w-full text-black"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="border rounded-xl px-4 py-3 w-full text-black"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="border rounded-xl px-4 py-3 w-full text-black"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Message"
              className="border rounded-xl px-4 py-3 w-full text-black"
            />
            <button
              type="submit"
              disabled={submitting}
              className="bg-orange-500 text-white px-6 py-6 rounded-xl font-bold hover:bg-orange-600 transition"
            >
              {submitting ? "Submiting..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Image Section (70%, square) */}
        <div className="md:col-span-7 w-full h-full flex items-center justify-center">
          <div className="w-full aspect-square relative">
            <Image
              src="/images/get-a-quote.png"
              alt="Drone Operator"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
