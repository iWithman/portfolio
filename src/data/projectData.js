
// bizhub
import bizhubMain from "../assets/images/projects/bizhub/main.png";
import bizhubSlide1 from "../assets/images/projects/bizhub/desktop1.png";
import bizhubSlide2 from "../assets/images/projects/bizhub/desktop2.png";
import bizhubSlide3 from "../assets/images/projects/bizhub/desktop3.png";
import bizhubSlide4 from "../assets/images/projects/bizhub/desktop4.png";
import bizhubSlide5 from "../assets/images/projects/bizhub/mobile1.png";
import bizhubSlide6 from "../assets/images/projects/bizhub/mobile2.png";
import bizhubSlide7 from "../assets/images/projects/bizhub/mobile3.png";
import bizhubSlide8 from "../assets/images/projects/bizhub/mobile4.png";
import bizhubSlide9 from "../assets/images/projects/bizhub/mobile5.png";

// wsp
import wspMain from "../assets/images/projects/wsp/main.png";
import wspSlide1 from "../assets/images/projects/wsp/desktop1.png";
import wspSlide2 from "../assets/images/projects/wsp/desktop2.png";
import wspSlide3 from "../assets/images/projects/wsp/desktop3.png";
import wspSlide4 from "../assets/images/projects/wsp/desktop4.png";
import wspSlide5 from "../assets/images/projects/wsp/mobile1.png";
import wspSlide6 from "../assets/images/projects/wsp/mobile2.png";
import wspSlide7 from "../assets/images/projects/wsp/mobile3.png";
import wspSlide8 from "../assets/images/projects/wsp/mobile4.png";

// qlinkwireless
import qlinkwirelessMain from "../assets/images/projects/qlinkwireless/main.png";
import qlinkwirelessSlide1 from "../assets/images/projects/qlinkwireless/mobile1.png";
import qlinkwirelessSlide2 from "../assets/images/projects/qlinkwireless/mobile2.png";
import qlinkwirelessSlide3 from "../assets/images/projects/qlinkwireless/mobile3.png";

// itechbridge
import itechbridgeMain from "../assets/images/projects/itechbridge/main.png";
import itechbridgeSlide1 from "../assets/images/projects/itechbridge/desktop1.png";
import itechbridgeSlide2 from "../assets/images/projects/itechbridge/desktop2.png";
import itechbridgeSlide3 from "../assets/images/projects/itechbridge/desktop3.png";
import itechbridgeSlide4 from "../assets/images/projects/itechbridge/desktop4.png";
import itechbridgeSlide5 from "../assets/images/projects/itechbridge/desktop5.png";
import itechbridgeSlide6 from "../assets/images/projects/itechbridge/mobile1.png";
import itechbridgeSlide7 from "../assets/images/projects/itechbridge/mobile2.png";
import itechbridgeSlide8 from "../assets/images/projects/itechbridge/mobile3.png";
import itechbridgeSlide9 from "../assets/images/projects/itechbridge/mobile4.png";
import itechbridgeSlide10 from "../assets/images/projects/itechbridge/mobile5.png";

//cba
import cbaMain from "../assets/images/projects/cba/main.png";
import cbaSlide1 from "../assets/images/projects/cba/desktop1.png";
import cbaSlide2 from "../assets/images/projects/cba/desktop2.png";
import cbaSlide3 from "../assets/images/projects/cba/desktop3.png";
import cbaSlide4 from "../assets/images/projects/cba/mobile1.png";
import cbaSlide5 from "../assets/images/projects/cba/mobile2.png";
import cbaSlide6 from "../assets/images/projects/cba/mobile3.png";
import cbaSlide7 from "../assets/images/projects/cba/mobile4.png";

export const projects = [
  {
    id: 1,
    title: "BizHub",
    description:
      "BizHub is a business management platform built with React and AWS that helps users handle authentication, uploads, schedules, and insights using a fully serverless architecture.",
    imageUrl: bizhubMain,
    techstack: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "React Easy Crop",
      "React Hook Form",
      "React Router",
      "React Toastify",
      "React Query",
      "Yup",
      "Google Map",
      "AWS Cognito SDK",
      "Node.js",
      "AWS SDK",
      "Amplify",
      "API Gateway",
      "Lambda",
      "S3",
      "DynamoDB",
      "IAM",
      "CloudWatch"
    ],
    images: [
      bizhubSlide1,
      bizhubSlide2,
      bizhubSlide3,
      bizhubSlide4,
      bizhubSlide5,
      bizhubSlide6,
      bizhubSlide7,
      bizhubSlide8,
      bizhubSlide9
    ],
    livePreview: "https://www.iwiproductionz.com"
  },
  {
    id: 2,
    title: "iTechBridge",
    description:
      "iTechBridge is a modern company website built with WordPress and Elementor, featuring an AI-powered chatbot, SEO optimization, and a clean, responsive design.",
    imageUrl: itechbridgeMain,
    techstack: [
      "WordPress",
      "Elementor",
      "AI Chatbot",
      "Yoast SEO",
      "Image Optimizer",
      "HTML",
      "CSS"
    ],
    images: [
      itechbridgeSlide1,
      itechbridgeSlide2,
      itechbridgeSlide3,
      itechbridgeSlide4,
      itechbridgeSlide5,
      itechbridgeSlide6,
      itechbridgeSlide7,
      itechbridgeSlide8,
      itechbridgeSlide9,
      itechbridgeSlide10
    ],
    livePreview: "https://dev-itechbridge.pantheonsite.io"
  },
  {
    id: 3,
    title: "Q Link Wireless",
    description: "Telecom platform providing Lifeline & Affordable Connectivity Program services, helping millions stay connected with unlimited data, talk, and text.",
    imageUrl: qlinkwirelessMain,
    techstack: [
      "React",
      "Redux",
      "React Router",
      "Next.js",
      "Sass",
      "Bootstrap",
      "ASP.NET",
      "JavaScript",
      "jQuery",
      "HTML5",
      "CSS3",
      "Google Analytics",
      "Google Tag Manager",
      "Chatbot Integration",
      "TFS"
    ],
    images: [
      qlinkwirelessSlide1,
      qlinkwirelessSlide2,
      qlinkwirelessSlide3
    ]
  },
  {
    id: 4,
    title: "WSP (WS Photography)",
    description:
      "WSP is a photography portfolio site with elegant image galleries, package pricing, and a contact form — built using React and Material UI components.",
    imageUrl: wspMain,
    techstack: [
      "React",
      "React Router",
      "Font Awesome",
      "Material UI",
      "React Bootstrap",
      "Joi",
      "Axios",
      "EmailJS",
      "React Grid Gallery",
      "React Toastify"
    ],
    images: [
      wspSlide1,
      wspSlide2,
      wspSlide3,
      wspSlide4,
      wspSlide5,
      wspSlide6,
      wspSlide7,
      wspSlide8
    ],
    livePreview: "https://www.wsp.iwithman.com"
  },
  {
    id: 5,
    title: "Charge by App",
    description:
      "Charge by app is a power bank rental web app built with Next.js, offering real-time map locations, animations, and seamless business and customer experiences.",
    imageUrl: cbaMain,
    techstack: [
      "Next.js",
      "HTML",
      "Tailwind CSS",
      "Axios",
      "Framer Motion",
      "React Hot Toast",
      "React Scroll",
      "React Slick",
      "Slick Carousel"
    ],
    images: [
      cbaSlide1,
      cbaSlide2,
      cbaSlide3,
      cbaSlide4,
      cbaSlide5,
      cbaSlide6,
      cbaSlide7
    ],
    livePreview: "https://chargebyapp.app"
  }
];
