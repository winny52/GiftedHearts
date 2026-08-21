// import { Link } from "react-router";

// /**
//  * Foundation logo/brand mark linking to the homepage.
//  * Uses the Syne display font for a distinctive look.
//  */
// export function Logo() {
//   return (
//     <Link to="/" className="group flex items-center gap-2">
//       <span className="font-display group-hover:text-accent-400 text-xl font-bold text-black transition-colors duration-300 md:text-2xl">
//         Gifted Hearts
//       </span>
//     </Link>
//   );
// }
import { Link } from "react-router";
import blueHeart from "@/assets/images/blue-heart.png";
import pinkHeart from "@/assets/images/pink-heart.jpg";

/**
 * Gifted Hearts logo combining the two heart halves
 * with the foundation name.
 */
export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2" aria-label="Gifted Hearts — Home">
      {/* Heart logo */}
      <span className="relative flex h-9 w-10 items-center justify-center">
        {/* Pink — left half */}
        <img
          src={pinkHeart}
          alt=""
          aria-hidden="true"
          className="absolute top-1/2 left-0 w-6 -translate-y-1/2"
        />

        {/* Blue — right half */}
        <img
          src={blueHeart}
          alt=""
          aria-hidden="true"
          className="absolute top-1/2 right-0 w-6 -translate-y-1/2"
        />
      </span>

      {/* Name */}
      <span className="font-display group-hover:text-black-500 text-xl font-bold text-black transition-colors duration-300 md:text-2xl">
        Gifted Hearts
      </span>
    </Link>
  );
}
