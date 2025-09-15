"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Send, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { contactEmail, socialLinks } from "@/constants/contact";
import emailjs from '@emailjs/browser'
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

     const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if(!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing.");
    }
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: `
          ${formData.message}
          ----------------------
          ${formData.email}
          ${formData.name}
          `,
          to_email: contactEmail, 
        },
        publicKey
      );

      toast.success("Message sent!", {
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
        console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-black text-white p-1 md:p-6"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div className="flex items-center gap-4" variants={item}>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ChevronLeft className="w-6 h-6" />
            </Link>
          </Button>
          <h1 className="text-3xl font-mono">Contact Me</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            className="bg-gray-900/50 rounded-xl p-6"
            variants={item}
          >
            <h2 className="text-2xl font-semibold mb-6">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 bg-gray-800 border-gray-700 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 bg-gray-800 border-gray-700 text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="mt-1 bg-gray-800 border-gray-700 text-white"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 bg-gray-800 border-gray-700 text-white resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black hover:bg-gray-100"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="space-y-6" variants={item}>
            {/* Personal Info */}
            <motion.div
              className="bg-gray-900/50 rounded-xl p-6"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-gray-300 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects,
                or just having a chat about technology and development. Feel free to
                reach out through any of the channels below.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="bg-gray-900/50 rounded-xl p-6"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-4">Social Media</h3>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      className="w-full justify-start h-auto p-4 bg-gray-800/50 hover:bg-gray-700"
                      asChild
                    >
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <link.icon className="w-5 h-5" />
                        <div className="text-left">
                          <div className="font-medium">{link.name}</div>
                          <div className="text-sm text-gray-400">
                            {link.name === "Email" && "aceiny.dev@gmail.com"}
                            {link.name === "GitHub" && "github.com/aceiny"}
                            {link.name === "LinkedIn" && "Connect with me"}
                          </div>
                        </div>
                      </Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              className="bg-gray-900/50 rounded-xl p-6"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-4">Response Time</h3>
              <div className="space-y-2 text-gray-300">
                <p>📧 Email: Within 24 hours</p>
                <p>💼 LinkedIn: Within 12 hours</p>
                <p>⚡ Urgent matters: Use email with "URGENT" in subject</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div className="text-center text-gray-400" variants={item}>
          <p>
            Based in Algeria • Available for remote work worldwide
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}