import logoImg from "./assets/images/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.webp";
import webDevBanner from "./assets/images/web-landing-banner.webp";
import webLandingAbout from "./assets/images/web-landing-about1.png";
import appLandingAbout from "./assets/images/app-landing-about.png";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/about-us-banner.jpg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";

import { lazy } from "react";
const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
};

// company details
export const companyDetails = {
  phone: "+0000000000",
  whatsapp: "+0000000000",
  email: "abc@xyz.com",
  address: "ABC Street, City, Country",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 2,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 3,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 4,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 5,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// all services
export const allServices = [
  {
    id: "web-development",
    title: "Web Development",
    smallDescription:
      "Visually stunning, responsive, and performance-optimized websites tailored to your business goals.",
    detailedContent: `
Your website is often the first thing people notice about your business, and we know how important it is to make that first impression count. 
We specialize in building websites that are not only visually appealing but also optimized for performance, scalability, and user experience. 
Whether you're looking to revamp your existing site or build something entirely new, we’ve got the expertise to bring your vision to life.

Our Web Development Services:
- Custom Websites: Built with your business goals in mind, we create tailored websites that suit your specific needs — from online portfolios to complex corporate platforms.
- E-commerce Platforms: We develop seamless shopping experiences using platforms like Shopify, WooCommerce, and Magento, with engaging product pages and secure payment integrations.
- Content Management Systems (CMS): We implement user-friendly CMS platforms like WordPress, Joomla, and Drupal so you can easily manage your site’s content.
- Responsive/Mobile-Friendly Design: Your site will look perfect and work seamlessly on desktops, tablets, and mobile phones.
- SEO-Friendly Development: We embed SEO best practices into the development process, helping your site rank higher and attract more organic traffic.
- Ongoing Maintenance & Support: We provide regular updates, troubleshooting, and technical support to keep your website running smoothly and securely.
    `,
  },
  {
    id: "app-development",
    title: "App Development",
    smallDescription:
      "High-performance native and cross-platform apps that deliver seamless and engaging user experiences.",
    detailedContent: `
In today’s mobile-first world, having a reliable and engaging app is crucial to staying connected with your customers. 
Our app development team is skilled in creating both native and cross-platform applications that deliver seamless experiences. 
Whether it’s a customer-facing app or an internal business tool, we’re here to build solutions that meet your specific needs and expectations.

Our App Development Services:
- Native App Development: We build fully customized apps for iOS and Android, designed to leverage the unique features of each platform.
- Cross-Platform Apps: Using frameworks like React Native and Flutter, we create apps that run smoothly on multiple platforms without compromising performance or quality.
- Tailored Mobile Apps: Our apps are crafted to fit your business and users perfectly.
- App Maintenance & Support: We offer ongoing maintenance to ensure your app stays updated with the latest features and remains bug-free.
- API Integrations: Need to connect your app with third-party services? We can integrate APIs to add additional functionality and streamline operations.
- User-Centered Design: We focus on creating intuitive, easy-to-navigate apps that deliver a great user experience.
- Quality Assurance: We test your app thoroughly, identifying bugs and ensuring it works seamlessly across devices and operating systems.
    `,
  },
  {
    id: "ux-ui-design",
    title: "UX/UI Design",
    smallDescription:
      "Beautiful, intuitive, and user-centered designs that ensure a seamless experience and strong brand presence.",
    detailedContent: `
A great product is nothing without a great user experience. Our UX/UI design team is dedicated to crafting intuitive, engaging interfaces that not only look good 
but also provide users with a seamless, enjoyable journey. We focus on both the aesthetics and functionality of your product to ensure it meets your business goals 
while delighting your customers.

Our UX/UI Design Services:
- User Research & Strategy: We dig deep to understand your audience’s needs, behaviors, and pain points, ensuring our designs align with real user expectations.
- Wireframing & Prototyping: Before diving into design, we map out the user journey and create interactive prototypes to test and refine the experience.
- UI Design: We craft clean, visually appealing interfaces that are easy to navigate and reflect your brand’s identity.
- Interaction Design: We ensure that every user interaction is natural, fluid, and purposeful.
- Usability Testing: We test designs with real users to gather feedback and make improvements before launch, ensuring the best possible experience.
- Branding & Visual Design: Our team helps develop a cohesive visual identity that strengthens your brand and enhances user engagement.
    `,
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Artisan Express",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "House of Deliverance",
  },
];
