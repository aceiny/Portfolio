"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@heroui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { fadeInUp } from "@/lib/animations";
import { useContactForm } from "@/hooks/use-contact-form.hook";

export default function ContactForm() {
  const { formData, isSubmitting, handleInputChange, handleSubmit } =
    useContactForm();

  return (
    <motion.div className="bg-content1 rounded-xl p-6" variants={fadeInUp}>
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
              className="mt-1 bg-content2 border-divider"
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
              className="mt-1 bg-content2 border-divider"
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
            className="mt-1 bg-content2 border-divider"
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
            className="mt-1 bg-content2 border-divider resize-none"
            placeholder="Your message here..."
          />
        </div>
        <Button
          type="submit"
          isDisabled={isSubmitting}
          className="w-full bg-foreground text-background hover:bg-foreground/90"
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-4 h-4 border-2 border-background border-t-transparent rounded-full"
            />
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}
