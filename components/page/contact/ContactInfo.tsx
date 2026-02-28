import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { fadeInUp } from "@/lib/animations";
import { socialLinks } from "@/constants/contact";

export default function ContactInfo() {
  return (
    <motion.div className="space-y-6" variants={fadeInUp}>
      {/* Personal Info */}
      <div className="bg-content1 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-default-600 leading-relaxed">
          I'm always open to discussing new opportunities, interesting projects,
          or just having a chat about technology and development. Feel free to
          reach out through any of the channels below.
        </p>
      </div>

      {/* Social Links */}
      <div className="bg-content1 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Social Media</h3>
        <div className="space-y-3">
          {socialLinks.map((link) => (
            <div key={link.name}>
              <Button
                as={Link}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                className="w-full justify-start h-auto p-4 bg-content2 hover:bg-content3 flex items-center gap-3"
              >
                <link.icon className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-medium">{link.name}</div>
                  <div className="text-sm text-default-500">
                    {link.name === "Email" && "aceiny.dev@gmail.com"}
                    {link.name === "GitHub" && "github.com/aceiny"}
                    {link.name === "LinkedIn" && "Connect with me"}
                  </div>
                </div>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Response Time */}
      <div className="bg-content1 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Response Time</h3>
        <div className="space-y-2 text-default-600">
          <p>Email: Within 24 hours</p>
          <p>LinkedIn: Within 12 hours</p>
          <p>Urgent matters: Use email with "URGENT" in subject</p>
        </div>
      </div>
    </motion.div>
  );
}
