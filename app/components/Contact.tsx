'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    time: '',
    agree: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.time) newErrors.time = 'Preferred time is required';
    if (!formData.agree) newErrors.agree = 'You must agree to be contacted';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Thank you! We will be in touch soon.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        time: '',
        agree: false,
      });
    }
  };

  return (
    <section id="contact" className="w-full">
      {/* Contact Form */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">What brings you here?</label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Preferred time to reach you</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            />
            {errors.time && <p className="text-sm text-red-500 mt-1">{errors.time}</p>}
          </div>
          <div className="flex items-start">
            <input
              type="checkbox"
              className="mr-2 mt-1"
              checked={formData.agree}
              onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
            />
            <label className="text-gray-700 text-sm">
              I agree to be contacted by Dr. Serena Blake
            </label>
          </div>
          {errors.agree && <p className="text-sm text-red-500">{errors.agree}</p>}
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition font-medium"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Full-Width Contact Info */}
      <div
        className="w-full py-10 px-4"
        style={{
          backgroundColor: '#f9f5f0',
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")',
        }}
      >
        <div className="max-w-4xl mx-auto text-center text-gray-800 space-y-2 text-sm">
          <h3 className="text-xl font-semibold text-gray-900">Dr. Serena Blake, PsyD</h3>
          <p>Licensed Clinical Psychologist</p>
          <p>
            <a href="mailto:serena@blakepsychology.com" className="text-teal-600 hover:underline">
              serena@blakepsychology.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+13235550192" className="text-teal-600 hover:underline">
              (323) 555-0192
            </a>
          </p>
          <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
          <p>
            <strong>Office Hours:</strong> Tue & Thu (10AM–6PM), Mon/Wed/Fri Virtual (1PM–5PM)
          </p>
          <p>
            <strong>Session Fees:</strong> $200 individual / $240 couples
          </p>
        </div>
      </div>
    </section>
  );
}
