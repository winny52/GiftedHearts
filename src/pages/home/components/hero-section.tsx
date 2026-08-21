// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { SITE_TAGLINE } from "@/lib/constants";
// import heroBanner from "@/assets/images/hero-banner.jpg";
// import blueHeart from "@/assets/images/blue-heart.png";
// import pinkHeart from "@/assets/images/pink-heart.jpg";

// /**
//  * Full-viewport hero section with background image, gradient overlay,
//  * decorative heart images, and call-to-action buttons.
//  * Content animates in on mount with staggered framer-motion transitions.
//  */
// export function HeroSection() {
//   return (
//     <section className="relative flex h-screen items-center justify-center overflow-hidden">
//       {/* Background image */}
//       <img
//         src={heroBanner}
//         alt=""
//         className="absolute inset-0 h-full w-full object-cover"
//         aria-hidden="true"
//       />

//       {/* Gradient overlay */}
//       <div className="from-primary-200/80 via-primary-500/70 to-accent-900/60 absolute inset-0 bg-linear-to-br" />

//       {/* Decorative hearts */}
//       <motion.img
//         src={blueHeart}
//         alt=""
//         className="absolute top-20 left-10 w-32 opacity-20 blur-[1px] md:w-48"
//         aria-hidden="true"
//         initial={{ opacity: 0, x: -40 }}
//         animate={{ opacity: 0.2, x: 0 }}
//         transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
//       />
//       <motion.img
//         src={pinkHeart}
//         alt=""
//         className="absolute right-10 bottom-20 w-32 opacity-20 blur-[1px] md:w-48"
//         aria-hidden="true"
//         initial={{ opacity: 0, x: 40 }}
//         animate={{ opacity: 0.2, x: 0 }}
//         transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
//       />

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl px-4 text-center">
//      <motion.div
//   className="relative"
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8, ease: "easeOut" }}
// >
//   {/* Pink heart popping into the title */}
//   <motion.img
//     src={pinkHeart}
//     alt=""
//     aria-hidden="true"
//     className="absolute -right-6 -top-10 z-20 w-16 rotate-12 md:-right-12 md:-top-16 md:w-24"
//     initial={{ opacity: 0, scale: 0, rotate: -30 }}
//     animate={{ opacity: 1, scale: 1, rotate: 12 }}
//     transition={{
//       delay: 0.7,
//       duration: 0.7,
//       type: "spring",
//       stiffness: 180,
//     }}
//   />

//   <motion.div
//   className="relative"
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8, ease: "easeOut" }}
// >
//   {/* Blue heart */}
//   <motion.img
//     src={blueHeart}
//     alt=""
//     aria-hidden="true"
//     className="absolute -left-16 top-2 z-20 w-16 -rotate-12 md:-left-28 md:-top-4 md:w-24 lg:-left-36"
//     initial={{ opacity: 0, scale: 0, rotate: -35 }}
//     animate={{ opacity: 1, scale: 1, rotate: -12 }}
//     transition={{
//       delay: 0.5,
//       duration: 0.7,
//       type: "spring",
//       stiffness: 180,
//     }}
//   />

//   {/* Pink heart */}
//   <motion.img
//     src={pinkHeart}
//     alt=""
//     aria-hidden="true"
//     className="absolute -right-12 -top-14 z-20 w-16 rotate-12 md:-right-28 md:-top-20 md:w-24 lg:-right-36"
//     initial={{ opacity: 0, scale: 0, rotate: 35 }}
//     animate={{ opacity: 1, scale: 1, rotate: 12 }}
//     transition={{
//       delay: 0.7,
//       duration: 0.7,
//       type: "spring",
//       stiffness: 180,
//     }}
//   />

//   <motion.h1 className="font-display text-6xl font-black leading-[0.85] tracking-[-0.06em] md:text-8xl lg:text-9xl">
//     <motion.span
//       className="block text-white"
//       initial={{ x: -50 }}
//       animate={{ x: 0 }}
//       transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
//     >
//       GIFTED
//     </motion.span>

//     <motion.span
//       className="block text-accent-400"
//       initial={{ x: 50 }}
//       animate={{ x: 0 }}
//       transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
//     >
//       HEARTS
//     </motion.span>
//   </motion.h1>

//   {/* Small accent */}
//   <motion.div
//     className="absolute -bottom-6 left-1/2 h-3 w-3 rounded-full bg-secondary-400 md:h-4 md:w-4"
//     initial={{ scale: 0 }}
//     animate={{ scale: 1 }}
//     transition={{ delay: 0.9, type: "spring" }}
//   />
// </motion.div>
//   {/* Small amber accent */}
//   <motion.span
//     className="absolute -bottom-5 left-1/2 h-3 w-3 rounded-full bg-secondary-400 md:h-4 md:w-4"
//     initial={{ scale: 0 }}
//     animate={{ scale: 1 }}
//     transition={{ delay: 0.9, type: "spring" }}
//   />
// </motion.div>

//         <motion.p
//           className="mx-auto mt-6 max-w-2xl text-lg font-medium text-white/90 md:text-xl"
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
//         >
//           {SITE_TAGLINE}
//         </motion.p>

//         <motion.div
//           className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
//         >
//           <Button variant="a" size="lg" to="/get-involved">
//             Donate Now
//           </Button>
//           <Button
//             variant="outline"
//             size="lg"
//             to="/about"
//             className="border-white text-white hover:bg-white/10"
//           >
//             Learn More
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SITE_TAGLINE } from "@/lib/constants";
import heroBanner from "@/assets/images/hero-banner.jpg";
// import blueHeart from "@/assets/images/blue-heart.png";
// import pinkHeart from "@/assets/images/pink-heart.jpg";

/**
 * Full-viewport hero section with background image,
 * gradient overlay, animated heart halves, and CTA buttons.
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
      <div className="from-primary-700/70 via-primary-500/40 to-accent-500/50 absolute inset-0 bg-linear-to-br" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-4 text-center">
        {/* Heart halves */}
        <motion.div
          className="relative mx-auto mb-8 h-20 w-36 md:h-28 md:w-48"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        ></motion.div>

        {/* Main heading */}
        <motion.h1
          className="font-display text-6xl leading-[0.85] font-black tracking-[-0.06em] md:text-8xl lg:text-9xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.span
            className="block text-white"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{
              delay: 0.75,
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            GIFTED
          </motion.span>

          <motion.span
            className="text-accent-400 block"
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            HEARTS
          </motion.span>
        </motion.h1>

        {/* Accent dot */}

        {/* Tagline */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed font-medium text-white/90 md:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 1.1,
            ease: "easeOut",
          }}
        >
          {SITE_TAGLINE}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 1.3,
            ease: "easeOut",
          }}
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
