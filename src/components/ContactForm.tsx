import React, { useState } from 'react';
import { Send } from 'lucide-react';

const budgetRanges = [
  '£10k - £20k',
  '£20k - £50k',
  '£50k - £100k',
  '£100k+'
];

const timeframes = [
  '1-2 months',
  '2-3 months',
  '3-6 months',
  '6+ months'
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDescription: '',
    timeframe: '',
    budget: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Google Form submission URL
    const formUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
    
    // Create form data with Google Form field IDs
    const googleFormData = new FormData();
    googleFormData.append('entry.XXXXX', formData.name); // Replace XXXXX with actual field IDs
    googleFormData.append('entry.XXXXX', formData.email);
    googleFormData.append('entry.XXXXX', formData.phone);
    googleFormData.append('entry.XXXXX', formData.projectDescription);
    googleFormData.append('entry.XXXXX', formData.timeframe);
    googleFormData.append('entry.XXXXX', formData.budget);

    try {
      // Submit to Google Form
      await fetch(formUrl, {
        method: 'POST', 
        mode: 'no-cors', // Required for Google Forms
        body: googleFormData
      });

      // Clear form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectDescription: '',
        timeframe: '',
        budget: '',
      });
      
      alert("Thanks for reaching out! I'll get back to you soon.");
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 to-pink-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
          <p className="text-gray-600">
            Tell me about your project and I'll help you bring it to life
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            {/* Project Description */}
            <div>
              <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1">
                Tell me about your project *
              </label>
              <textarea
                id="project"
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={formData.projectDescription}
                onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
              />
            </div>

            {/* Timeframe Selection */}
            <div>
              <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">
                Expected Timeline *
              </label>
              <select
                id="timeframe"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={formData.timeframe}
                onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
              >
                <option value="">Select a timeframe</option>
                {timeframes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget Selection */}
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                Budget Range *
              </label>
              <select
                id="budget"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              >
                <option value="">Select a budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 flex items-center justify-center space-x-2 transition-colors"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;