import type { Project } from "@/lib/types";

import orphanageImg from "@/assets/images/orphanage.jpg";
import image04 from "@/assets/images/image-04.jpg";
import mentalHealthImg from "@/assets/images/mental-health.jpg";
import image05 from "@/assets/images/image-05.jpg";
import image06 from "@/assets/images/image-06.jpg";
import image08 from "@/assets/images/image-08.jpg";

/**
 * All foundation projects with their details.
 * The `slug` is used as the URL parameter in `/projects/:slug`.
 * The `content` array contains paragraphs of descriptive text.
 */
export const PROJECTS: Project[] = [
  {
    slug: "orphanage-visits",
    title: "Orphanage Visits",
    description:
      "Regular visits to orphanages providing emotional support, essentials, and companionship to children in need.",
    image: orphanageImg,
    content: [
      "At the Gifted Hearts Kenya Foundation, our Orphanage Visits initiative is a heartfelt effort to bring love, joy, and essential resources to children living in orphanages. We believe every child deserves to feel valued and cared for, regardless of their circumstances.",
      "During our visits, we provide necessities such as food, clothing, and educational materials while also engaging children in fun activities, games, and mentoring sessions. These interactions help nurture emotional well-being and create a sense of belonging for the children.",
      "Our dedicated volunteers spend quality time with the children, offering companionship and guidance that inspire hope and resilience. Through these visits, we aim to bridge the gap between vulnerability and opportunity, empowering the next generation to dream big.",
    ],
  },
  {
    slug: "home-construction",
    title: "Home Construction for Widows",
    description:
      "Building safe, dignified homes for widows and vulnerable families in underserved communities.",
    image: image04,
    content: [
      "Our Home Construction initiative is driven by the belief that everyone deserves a safe and dignified place to call home. Through this program, we focus on building and renovating homes for widows and vulnerable families in underserved communities.",
      "One of the most impactful stories from this initiative is the construction of a home for Mama Belinda, a widow who had been living in dire conditions. With the support of generous donors and hardworking volunteers, we were able to build her a sturdy, comfortable home that has transformed her life and given her renewed hope.",
      "This program not only provides physical shelter but also restores dignity and a sense of security to those who have lost so much. By constructing homes, we are laying the foundation for stronger, more resilient communities.",
    ],
  },
  {
    slug: "education-sponsorship",
    title: "Education Sponsorship",
    description:
      "Providing scholarships and educational support to underprivileged students to unlock their potential.",
    image: image06,
    content: [
      "Education is a powerful tool for transformation, and at Gifted Hearts Kenya Foundation, we are committed to ensuring that every child has access to quality education. Our Education Sponsorship program provides scholarships, school supplies, and mentoring to underprivileged students.",
      "Through partnerships with schools and generous donors, we have been able to support numerous students in pursuing their academic dreams. From covering tuition fees to providing uniforms and textbooks, our goal is to remove the barriers that prevent children from reaching their full potential.",
      "We believe that investing in education is investing in the future. Each student we support represents a ripple effect of positive change that extends to their families and communities.",
    ],
  },
  {
    slug: "mental-health-campaigns",
    title: "Mental Health Campaigns",
    description:
      "Raising awareness about mental health and providing free counseling services to those in need.",
    image: mentalHealthImg,
    content: [
      "Mental health is a cornerstone of overall well-being, yet it remains a topic surrounded by stigma in many communities. Our Mental Health Campaigns aim to break down these barriers by raising awareness, providing education, and offering free counseling services.",
      "Through workshops, community outreach events, and partnerships with mental health professionals, we create safe spaces for individuals to share their struggles and access the support they need. Our campaigns target youth, caregivers, and community leaders to foster a culture of understanding and empathy.",
      "By addressing mental health head-on, we are empowering individuals to lead healthier, more fulfilling lives and building communities that prioritize emotional well-being alongside physical health.",
    ],
  },
  {
    slug: "covid-relief",
    title: "COVID-19 Relief Efforts",
    description:
      "Emergency relief through food, masks, and sanitizers to communities affected by the pandemic.",
    image: image05,
    content: [
      "When the COVID-19 pandemic struck, the Gifted Hearts Kenya Foundation swiftly mobilized to support the most affected communities. Our COVID-19 Relief Efforts focused on providing emergency food supplies, hygiene kits, masks, and sanitizers to families in need.",
      "We also conducted awareness campaigns to educate communities about preventive measures, helping to reduce the spread of the virus. Our volunteers worked tirelessly to deliver supplies to remote areas, ensuring that no one was left behind during this global crisis.",
      "The pandemic highlighted the importance of community solidarity, and our relief efforts served as a testament to the power of compassion and collective action in the face of adversity.",
    ],
  },
  {
    slug: "spreading-the-gospel",
    title: "Spreading the Gospel",
    description:
      "Faith-based outreach through community events, scripture sharing, and spiritual guidance.",
    image: image08,
    content: [
      "At the heart of the Gifted Hearts Kenya Foundation is a deep commitment to sharing the Gospel and spreading the message of God's love. Our faith-based outreach programs are designed to uplift spirits, inspire hope, and bring communities closer to God.",
      "Through community events, bible study sessions, and one-on-one spiritual guidance, we create opportunities for individuals to experience the transformative power of faith. Our outreach extends to schools, homes, and public spaces, ensuring that the message of hope reaches as many people as possible.",
      "We believe that spiritual nourishment is just as important as physical care. By combining our social impact initiatives with faith-based outreach, we address the holistic needs of the communities we serve.",
    ],
  },
];
