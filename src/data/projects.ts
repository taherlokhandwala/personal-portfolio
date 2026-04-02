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
    id: 'decipher',
    title: 'deCipher - AI Powered Book Library',
    description: 'deCipher is an AI tool that helps you understand PDFs. Upload documents to get information and talk with them using voice assistants. It makes learning complex information faster and easier for students and professionals.',
    fullDescription: 'deCipher is a smart app that turns any PDF, from textbooks and research papers to your favorite novels, into an interactive assistant you can actually talk to. Instead of spending hours reading through pages, you can upload a book and use your voice to ask questions, get deep insights, or find specific details instantly. The AI listens and speaks back with answers from the text, making it easy to "chat" with your library. It keeps all your files organized in one place, helping you learn faster or explore stories in a brand new way.',
    functionality: [
      'Smart PDF Parsing: Automatically extracts text and generates high-quality cover images from uploaded PDF files.',
      'AI Voice Interaction: Integrated with Vapi.ai for real-time voice-based conversations about your documents.',
      'Structured Organization: Segmented data storage for efficient search and retrieval of document content.',
      'Secure Authentication: Robust user management and authentication powered by Clerk.',
      'Subscription Plans: Tiered access levels (Free, Standard, Pro) with configurable limits on document uploads and AI usage.',
      'Cloud Storage: Seamless file and image management using Vercel Blob.',
      'Document Search: Fast, regex-based filtering to find specific books or documents in your library.'
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'MongoDB', 'Vercel'],
    imageUrl: '/assets/decipher/globe-books.png',
    images: [
      '/assets/decipher/decipher-home.png',
      '/assets/decipher/decipher-conversation-a.png',
      '/assets/decipher/decipher-conversation-b.png',
      '/assets/decipher/decipher-conversation-c.png',
      '/assets/decipher/decipher-conversation-d.png',
      '/assets/decipher/decipher-add-new-a.png',
      '/assets/decipher/decipher-add-new-b.png',
      '/assets/decipher/decipher-working.png',
      '/assets/decipher/decipher-plans.png',
    ],
    deployLink: 'https://de-cipher-ten.vercel.app',
    githubLink: 'https://github.com/taherlokhandwala/decipher'
  }
];
