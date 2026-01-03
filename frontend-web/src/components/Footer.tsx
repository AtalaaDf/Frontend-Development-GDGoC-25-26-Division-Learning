import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";
import gdgocLogo from "@/assets/gdgoc-logo.png";
import { socialLinks } from "@/data/data";
const Footer = () => {


  return (
    <footer className="py-12 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <img src={gdgocLogo} alt="GDGOC Logo" className="h-12 mb-4" />

          {/* Title & Description */}
          <h3 className="font-display text-xl font-semibold mb-2">
            GDGOC UNSRI - Frontend Development
          </h3>
          <p className="text-muted-foreground text-sm mb-2 max-w-md">
            Building the future of web, one component at a time.
          </p>

          {/* Social Media Links */}
          <div className="flex gap-3 mb-2">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground transition-colors duration-200 ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Google Colors Divider */}
          <div className="flex gap-1 mb-4">
            <div className="w-12 h-1 rounded-full bg-google-blue" />
            <div className="w-12 h-1 rounded-full bg-google-red" />
            <div className="w-12 h-1 rounded-full bg-google-yellow" />
            <div className="w-12 h-1 rounded-full bg-google-green" />
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-xs">
            © 2025 Google Developer Group on Campus - Universitas Sriwijaya
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;