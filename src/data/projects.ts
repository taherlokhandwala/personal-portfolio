export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  functionality: string[];
  tags: string[];
  imageUrl: string;
  images: string[];
  deployLink: string;
  githubLink: string;
}

export const projects: Project[] = [
  {
    id: "decipher",
    title: "deCipher - AI Powered Book Library",
    description:
      "deCipher is an AI tool that helps you understand PDFs. Upload documents to get information and talk with them using voice assistants. It makes learning complex information faster and easier for students and professionals.",
    fullDescription:
      'deCipher is a smart app that turns any PDF, from textbooks and research papers to your favorite novels, into an interactive assistant you can actually talk to. Instead of spending hours reading through pages, you can upload a book and use your voice to ask questions, get deep insights, or find specific details instantly. The AI listens and speaks back with answers from the text, making it easy to "chat" with your library. It keeps all your files organized in one place, helping you learn faster or explore stories in a brand new way.',
    functionality: [
      "Smart PDF Parsing: Automatically extracts text and generates high-quality cover images from uploaded PDF files.",
      "AI Voice Interaction: Integrated with Vapi.ai for real-time voice-based conversations about your documents.",
      "Structured Organization: Segmented data storage for efficient search and retrieval of document content.",
      "Secure Authentication: Robust user management and authentication powered by Clerk.",
      "Subscription Plans: Tiered access levels (Free, Standard, Pro) with configurable limits on document uploads and AI usage.",
      "Cloud Storage: Seamless file and image management using Vercel Blob.",
      "Document Search: Fast, regex-based filtering to find specific books or documents in your library.",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "MongoDB",
      "Vercel",
    ],
    imageUrl: "/assets/decipher/globe-books.png",
    images: [
      "/assets/decipher/decipher-home.png",
      "/assets/decipher/decipher-conversation-a.png",
      "/assets/decipher/decipher-conversation-b.png",
      "/assets/decipher/decipher-conversation-c.png",
      "/assets/decipher/decipher-conversation-d.png",
      "/assets/decipher/decipher-add-new-a.png",
      "/assets/decipher/decipher-add-new-b.png",
      "/assets/decipher/decipher-working.png",
      "/assets/decipher/decipher-plans.png",
    ],
    deployLink: "https://de-cipher-ten.vercel.app",
    githubLink: "https://github.com/taherlokhandwala/decipher",
  },
  {
    id: "resume-sense",
    title: "Resume Sense - AI Powered Resume Analyzer",
    description:
      "Resume Sense is an AI tool that reads your resume, gives it an ATS score, and shows you tips to fix it so you can land your dream job faster.",
    fullDescription:
      "Resume Sense helps you improve your resume so it can pass company filters and get seen by real people. You sign in, upload your resume, and paste the job description you want to apply for. The app uses AI to compare your resume with the job and gives you an ATS score that shows how well you match. It also gives clear tips, like adding keywords or improving skills sections. You can update your resume and try again to get a better score. It is a simple tool that acts like a personal career coach and helps you get closer to your dream job.",
    functionality: [
      "AI-Powered Resume Scanning: Upload your PDF resume and the app converts it into an image so the AI can read every detail accurately.",
      "ATS Score: Get a instant match score showing how likely a company's hiring filter is to rank your resume highly.",
      "Job Description Matching: Paste any job description and the AI compares it directly against your resume to find gaps.",
      "Personalized Feedback: Receive clear tips like missing keywords or overlooked skills so you know exactly what to improve.",
      "Application Dashboard: Track every job you apply for in one place, keeping your search organized and easy to manage.",
      "Secure Sign-In: Your resume and personal data stay protected behind a personal account that only you can access.",
    ],
    tags: [
      "React Router",
      "Puter.js",
      "PDF.js",
      "Tailwind CSS",
      "Zustand",
      "TypeScript",
    ],
    imageUrl: "/assets/resume-sense/resume-sense.gif",
    images: [
      "/assets/resume-sense/resume-sense-1.png",
      "/assets/resume-sense/resume-sense-2.png",
      "/assets/resume-sense/resume-sense-3.png",
      "/assets/resume-sense/resume-sense-4.png",
      "/assets/resume-sense/resume-sense-5.png",
      "/assets/resume-sense/resume-sense-6.png",
    ],
    deployLink: "https://resume-sense-pink.vercel.app",
    githubLink: "https://github.com/taherlokhandwala/resume-sense",
  },
];
