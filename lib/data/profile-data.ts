export interface ProfileData {
  name: string;
  role: string;
  positioning: string;
  tagline: string;
  shortBio: string;
  bio: string[];
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  timezone: string;
  linkedin: string;
  github: string;
  huggingFace: string;
  kaggle: string;
  website: string;
  resumeUrl: string;
  education: {
    degree: string;
    institution: string;
    graduationDate: string;
  };
  metrics: {
    publicRepos: number;
    flagshipSystems: number;
    mlFrameworks: string[];
    coreStacks: string[];
  };
}

export const profileData: ProfileData = {
  name: 'Zaheer Abbas',
  role: 'AI / Machine Learning Engineer',
  positioning: 'AI/ML Engineer | Generative AI & LLMs | Agentic AI | Data Science | Full-Stack & Mobile',
  tagline: 'Engineering production-grade AI systems, hybrid RAG pipelines, intelligent agent orchestration, computer vision solutions, predictive ML platforms, and secure offline-first applications.',
  shortBio: 'AI/ML Engineer and Computer Science graduate from COMSATS University Islamabad. Creator of 48 public repositories spanning offline-first BLE mesh communication, mechanistic interpretability, hybrid RAG, and production full-stack systems.',
  bio: [
    'I am an AI / Machine Learning Engineer dedicated to building factually credible, production-grade intelligent systems. My technical work bridges the gap between machine learning research and resilient software engineering.',
    'My portfolio spans 48 public GitHub repositories: from developing offline-first, cryptographically secure Bluetooth mesh networking for Android (Meshline), to fine-tuning transformers on 34,000+ Islamic texts (AI Hadith Authentication), engineering smart city platforms with 99.55% F1 traffic models (AI Urban Nexus), and building dual-path hybrid RAG evaluation frameworks.',
    'I hold a Bachelor of Science in Computer Science from COMSATS University Islamabad (graduated January 2026). My approach prioritizes reproducible evaluation, zero-hallucination pipelines, clean software architecture, and measurable real-world utility.'
  ],
  email: 'zaheerabbaspattan@gmail.com',
  phone: '+92 336 7971778',
  whatsapp: 'https://wa.me/+923367971778',
  location: 'Bagan, Lower Kurram, Khyber Pakhtunkhwa, Pakistan',
  timezone: 'PKT (UTC+5)',
  linkedin: 'https://www.linkedin.com/in/zaheerabbasorakzai',
  github: 'https://github.com/ZaheerAbbasOrakzai',
  huggingFace: 'https://huggingface.co/abbasorakzai777',
  kaggle: 'https://www.kaggle.com/zaheerabbasorakzai',
  website: 'https://zaheerabbasorakzai.gt.tc',
  resumeUrl: '/Zaheer_Abbas_Resume.pdf',
  education: {
    degree: 'Bachelor of Science, Computer Science',
    institution: 'COMSATS University Islamabad',
    graduationDate: 'January 2026'
  },
  metrics: {
    publicRepos: 48,
    flagshipSystems: 5,
    mlFrameworks: ['PyTorch', 'Transformers', 'XGBoost', 'YOLOv8', 'LangChain', 'LangGraph'],
    coreStacks: ['Python', 'TypeScript', 'Flutter', 'Kotlin', 'Next.js', 'FastAPI']
  }
};