import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SITE_TAGLINE } from "@/lib/constants";
import heroBanner from "@/assets/images/hero-banner.jpg";
import blueHeart from "@/assets/images/blue-heart.png";
import pinkHeart from "@/assets/images/pink-heart.jpg";

/**
 * Full-viewport hero section with background image, gradient overlay,
 * decorative heart images, and call-to-action buttons.
 * Content animates in on mount with staggered framer-motion transitions.
 */
export function HeroSection() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroBanner}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div className="from-primary-900/80 via-primary-800/70 to-accent-900/60 absolute inset-0 bg-linear-to-br" />

      {/* Decorative hearts */}
      <motion.img
        src={blueHeart}
        alt=""
        className="absolute top-20 left-10 w-32 opacity-20 blur-[1px] md:w-48"
        aria-hidden="true"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
      />
      <motion.img
        src={pinkHeart}
        alt=""
        className="absolute right-10 bottom-20 w-32 opacity-20 blur-[1px] md:w-48"
        aria-hidden="true"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 text-center">
        <motion.h1
          className="font-display text-split text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          GIFTED HEARTS
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg font-medium text-white/90 md:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {SITE_TAGLINE}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <Button variant="accent" size="lg" to="/get-involved">
            Donate Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            to="/about"
            className="border-white text-white hover:bg-white/10"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
