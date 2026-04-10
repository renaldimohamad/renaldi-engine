"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      subtitle="Let's work together on your next project">
      <motion.div
        className="grid md:grid-cols-2 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}>
        {/* Contact Info */}
        <motion.div variants={staggerItem} className="space-y-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4 text-text-light dark:text-text-dark">
              Get in Touch
            </h3>
            <p className="text-text-light/70 dark:text-text-dark/70 text-lg leading-relaxed mb-8">
              Whether you have a question or just want to say hello, feel free
              to reach out. I&apos;m always interested in hearing about new
              projects and opportunities.
            </p>
          </div>

          {/* Contact Methods */}
          <motion.div variants={staggerContainer} className="space-y-4">
            {[
              {
                icon: "🔗",
                label: "LinkedIn",
                value: "linkedin.com/in/renaldimohamad",
                href: "http://linkedin.com/in/renaldimohamad",
              },
              {
                icon: "🐙",
                label: "GitHub",
                value: "github.com/renaldimohamad",
                href: "https://github.com/renaldimohamad",
              },
              {
                icon: "📧",
                label: "Email",
                value: "Contact me for business inquiries",
                href: "#contact-form",
              },
            ].map((contact) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                variants={staggerItem}
                whileHover={{
                  x: 8,
                }}
                className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-subtle dark:bg-gradient-subtle-dark border border-tertiary-light dark:border-tertiary-dark hover:border-text-light/50 dark:hover:border-text-dark/50 hover:shadow-xl hover:shadow-text-light/5 dark:hover:shadow-text-dark/5 transition-all duration-200 group">
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {contact.icon}
                </span>
                <div>
                  <h4 className="font-semibold text-text-light dark:text-text-dark">
                    {contact.label}
                  </h4>
                  <p className="text-text-light/60 dark:text-text-dark/60 group-hover:text-text-light dark:group-hover:text-text-dark transition-colors text-sm">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Response Time Badge */}
          <motion.div
            variants={staggerItem}
            className="p-4 rounded-lg bg-secondary-light dark:bg-secondary-dark border border-tertiary-light dark:border-tertiary-dark">
            <p className="text-sm text-text-light/70 dark:text-text-dark/70">
              <span className="inline-block w-2 h-2 bg-text-light dark:bg-text-dark rounded-full mr-2" />
              I typically respond within 24 hours
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={staggerItem}
          className="space-y-6">
          <motion.div variants={staggerContainer} className="space-y-4">
            {[
              {
                name: "name",
                label: "Your Name",
                type: "text",
                required: true,
              },
              {
                name: "email",
                label: "Your Email",
                type: "email",
                required: true,
              },
              {
                name: "subject",
                label: "Subject",
                type: "text",
                required: true,
              },
            ].map((field) => (
              <motion.div key={field.name} variants={staggerItem}>
                <label className="block text-sm font-semibold mb-2 text-text-light dark:text-text-dark">
                  {field.label}
                </label>
                <motion.input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  required={field.required}
                  className="w-full px-4 py-3 rounded-lg bg-secondary-light dark:bg-secondary-dark border border-tertiary-light dark:border-tertiary-dark text-text-light dark:text-text-dark focus:border-text-light/50 dark:focus:border-text-dark/50 focus:ring-4 focus:ring-text-light/10 dark:focus:ring-text-dark/10 focus:outline-none transition-all duration-200"
                />
              </motion.div>
            ))}

            <motion.div variants={staggerItem}>
              <label className="block text-sm font-semibold mb-2 text-text-light dark:text-text-dark">
                Message
              </label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-secondary-light dark:bg-secondary-dark border border-tertiary-light dark:border-tertiary-dark text-text-light dark:text-text-dark focus:border-text-light/50 dark:focus:border-text-dark/50 focus:ring-4 focus:ring-text-light/10 dark:focus:ring-text-dark/10 focus:outline-none transition-all duration-200 resize-none"
              />
            </motion.div>
          </motion.div>

          {/* Submit Button - High Contrast */}
          <motion.button
            type="submit"
            variants={staggerItem}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-3 bg-text-light dark:bg-text-dark text-primary-light dark:text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-glow">
            {isSubmitted ? "✓ Message Sent!" : "Send Message"}
          </motion.button>

          <motion.p
            variants={staggerItem}
            className="text-xs text-text-light/50 dark:text-text-dark/50 text-center">
            I respect your privacy. No spam, ever.
          </motion.p>
        </motion.form>
      </motion.div>
    </SectionWrapper>
  );
}
