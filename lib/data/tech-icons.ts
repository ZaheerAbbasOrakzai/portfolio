/**
 * Technology Icon Metadata Registry
 * Comprehensive metadata for 50+ technology logos and icons
 */

export type TechCategory = 
  | 'language'
  | 'framework'
  | 'library'
  | 'database'
  | 'cloud'
  | 'devops'
  | 'tool'
  | 'platform';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface TechIconMetadata {
  id: string;
  name: string;
  category: TechCategory;
  svgPath: string;
  color: string;
  trending: boolean;
  experience?: {
    years: number;
    level: SkillLevel;
  };
  relatedProjects?: string[];
  fileSize?: number;
  keywords: string[];
}

/**
 * Complete registry of 50+ technology icons with metadata
 */
export const techIconsData: TechIconMetadata[] = [
  // Languages
  {
    id: 'python',
    name: 'Python',
    category: 'language',
    svgPath: '/assets/icons/tech/python.svg',
    color: '#3776AB',
    trending: true,
    experience: {
      years: 5,
      level: 'expert'
    },
    relatedProjects: ['ai-hadith', 'ai-urban-nexus', 'financial-tracker'],
    keywords: ['python', 'programming', 'language', 'backend', 'ml', 'ai']
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'language',
    svgPath: '/assets/icons/tech/typescript.svg',
    color: '#3178C6',
    trending: true,
    experience: {
      years: 4,
      level: 'expert'
    },
    relatedProjects: ['health-hub', 'portfolio'],
    keywords: ['typescript', 'javascript', 'language', 'frontend', 'type-safe']
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'language',
    svgPath: '/assets/icons/tech/javascript.svg',
    color: '#F7DF1E',
    trending: true,
    experience: {
      years: 6,
      level: 'expert'
    },
    relatedProjects: ['health-hub', 'portfolio'],
    keywords: ['javascript', 'js', 'language', 'frontend', 'web']
  },
  {
    id: 'dart',
    name: 'Dart',
    category: 'language',
    svgPath: '/assets/icons/tech/dart.svg',
    color: '#0175C2',
    trending: true,
    experience: {
      years: 3,
      level: 'advanced'
    },
    relatedProjects: ['ai-urban-nexus', 'events-app', 'salon-app'],
    keywords: ['dart', 'language', 'flutter', 'mobile']
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'language',
    svgPath: '/assets/icons/tech/sql.svg',
    color: '#CC2927',
    trending: false,
    experience: {
      years: 5,
      level: 'advanced'
    },
    relatedProjects: ['financial-tracker', 'health-hub'],
    keywords: ['sql', 'database', 'query', 'relational']
  },

  // Frameworks
  {
    id: 'react',
    name: 'React',
    category: 'framework',
    svgPath: '/assets/icons/tech/react.svg',
    color: '#61DAFB',
    trending: true,
    experience: {
      years: 4,
      level: 'expert'
    },
    relatedProjects: ['health-hub', 'portfolio'],
    keywords: ['react', 'frontend', 'framework', 'ui', 'javascript']
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'framework',
    svgPath: '/assets/icons/tech/nextjs.svg',
    color: '#000000',
    trending: true,
    experience: {
      years: 3,
      level: 'expert'
    },
    relatedProjects: ['portfolio'],
    keywords: ['nextjs', 'react', 'framework', 'ssr', 'fullstack']
  },
  {
    id: 'flutter',
    name: 'Flutter',
    category: 'framework',
    svgPath: '/assets/icons/tech/flutter.svg',
    color: '#02569B',
    trending: true,
    experience: {
      years: 3,
      level: 'advanced'
    },
    relatedProjects: ['ai-urban-nexus', 'events-app', 'salon-app'],
    keywords: ['flutter', 'mobile', 'framework', 'dart', 'cross-platform']
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'framework',
    svgPath: '/assets/icons/tech/fastapi.svg',
    color: '#009688',
    trending: true,
    experience: {
      years: 3,
      level: 'advanced'
    },
    relatedProjects: ['financial-tracker', 'ai-hadith'],
    keywords: ['fastapi', 'python', 'api', 'backend', 'rest']
  },
  {
    id: 'flask',
    name: 'Flask',
    category: 'framework',
    svgPath: '/assets/icons/tech/flask.svg',
    color: '#000000',
    trending: false,
    experience: {
      years: 4,
      level: 'advanced'
    },
    relatedProjects: ['ai-hadith'],
    keywords: ['flask', 'python', 'web', 'backend', 'microframework']
  },
  {
    id: 'django',
    name: 'Django',
    category: 'framework',
    svgPath: '/assets/icons/tech/django.svg',
    color: '#092E20',
    trending: false,
    experience: {
      years: 3,
      level: 'intermediate'
    },
    keywords: ['django', 'python', 'web', 'backend', 'orm']
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'framework',
    svgPath: '/assets/icons/tech/express.svg',
    color: '#000000',
    trending: false,
    experience: {
      years: 3,
      level: 'advanced'
    },
    keywords: ['express', 'nodejs', 'backend', 'api', 'javascript']
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'framework',
    svgPath: '/assets/icons/tech/tailwind.svg',
    color: '#06B6D4',
    trending: true,
    experience: {
      years: 3,
      level: 'expert'
    },
    relatedProjects: ['portfolio', 'health-hub'],
    keywords: ['tailwind', 'css', 'styling', 'utility', 'frontend']
  },

  // ML/AI Libraries
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'library',
    svgPath: '/assets/icons/tech/pytorch.svg',
    color: '#EE4C2C',
    trending: true,
    experience: {
      years: 4,
      level: 'expert'
    },
    relatedProjects: ['ai-hadith', 'zmar-agents'],
    keywords: ['pytorch', 'ml', 'ai', 'deep-learning', 'neural-networks']
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    category: 'library',
    svgPath: '/assets/icons/tech/tensorflow.svg',
    color: '#FF6F00',
    trending: true,
    experience: {
      years: 4,
      level: 'advanced'
    },
    relatedProjects: ['ai-urban-nexus'],
    keywords: ['tensorflow', 'ml', 'ai', 'deep-learning', 'google']
  },
  {
    id: 'langchain',
    name: 'LangChain',
    category: 'library',
    svgPath: '/assets/icons/tech/langchain.svg',
    color: '#1C3C3C',
    trending: true,
    experience: {
      years: 2,
      level: 'advanced'
    },
    relatedProjects: ['zmar-agents', 'health-hub'],
    keywords: ['langchain', 'llm', 'ai', 'agents', 'chains']
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    category: 'platform',
    svgPath: '/assets/icons/tech/huggingface.svg',
    color: '#FFD21E',
    trending: true,
    experience: {
      years: 3,
      level: 'advanced'
    },
    relatedProjects: ['ai-hadith', 'zmar-agents'],
    keywords: ['huggingface', 'transformers', 'nlp', 'ml', 'models']
  },
  {
    id: 'scikit-learn',
    name: 'Scikit-learn',
    category: 'library',
    svgPath: '/assets/icons/tech/scikit-learn.svg',
    color: '#F7931E',
    trending: false,
    experience: {
      years: 4,
      level: 'advanced'
    },
    keywords: ['scikit-learn', 'ml', 'python', 'machine-learning', 'sklearn']
  },
  {
    id: 'pandas',
    name: 'Pandas',
    category: 'library',
    svgPath: '/assets/icons/tech/pandas.svg',
    color: '#150458',
    trending: false,
    experience: {
      years: 5,
      level: 'expert'
    },
    keywords: ['pandas', 'python', 'data', 'analysis', 'dataframe']
  },
  {
    id: 'numpy',
    name: 'NumPy',
    category: 'library',
    svgPath: '/assets/icons/tech/numpy.svg',
    color: '#013243',
    trending: false,
    experience: {
      years: 5,
      level: 'expert'
    },
    keywords: ['numpy', 'python', 'numerical', 'arrays', 'computation']
  },
  {
    id: 'opencv',
    name: 'OpenCV',
    category: 'library',
    svgPath: '/assets/icons/tech/opencv.svg',
    color: '#5C3EE8',
    trending: false,
    experience: {
      years: 3,
      level: 'advanced'
    },
    relatedProjects: ['ai-urban-nexus'],
    keywords: ['opencv', 'computer-vision', 'image', 'video', 'cv']
  },

  // Databases
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    svgPath: '/assets/icons/tech/postgresql.svg',
    color: '#336791',
    trending: true,
    experience: {
      years: 4,
      level: 'advanced'
    },
    relatedProjects: ['financial-tracker'],
    keywords: ['postgresql', 'postgres', 'database', 'sql', 'relational']
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    svgPath: '/assets/icons/tech/mongodb.svg',
    color: '#47A248',
    trending: true,
    experience: {
      years: 3,
      level: 'advanced'
    },
    relatedProjects: ['health-hub'],
    keywords: ['mongodb', 'database', 'nosql', 'document', 'json']
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    svgPath: '/assets/icons/tech/redis.svg',
    color: '#DC382D',
    trending: true,
    experience: {
      years: 3,
      level: 'intermediate'
    },
    keywords: ['redis', 'cache', 'in-memory', 'database', 'key-value']
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    svgPath: '/assets/icons/tech/mysql.svg',
    color: '#4479A1',
    trending: false,
    experience: {
      years: 4,
      level: 'advanced'
    },
    keywords: ['mysql', 'database', 'sql', 'relational', 'oracle']
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'platform',
    svgPath: '/assets/icons/tech/firebase.svg',
    color: '#FFCA28',
    trending: true,
    experience: {
      years: 3,
      level: 'advanced'
    },
    relatedProjects: ['events-app', 'salon-app'],
    keywords: ['firebase', 'google', 'backend', 'database', 'baas']
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'platform',
    svgPath: '/assets/icons/tech/supabase.svg',
    color: '#3ECF8E',
    trending: true,
    experience: {
      years: 2,
      level: 'intermediate'
    },
    keywords: ['supabase', 'backend', 'database', 'postgres', 'baas']
  },

  // Cloud & Infrastructure
  {
    id: 'aws',
    name: 'AWS',
    category: 'cloud',
    svgPath: '/assets/icons/tech/aws.svg',
    color: '#FF9900',
    trending: true,
    experience: {
      years: 4,
      level: 'advanced'
    },
    relatedProjects: ['zmar-agents'],
    keywords: ['aws', 'amazon', 'cloud', 'infrastructure', 'ec2']
  },
  {
    id: 'gcp',
    name: 'Google Cloud',
    category: 'cloud',
    svgPath: '/assets/icons/tech/gcp.svg',
    color: '#4285F4',
    trending: true,
    experience: {
      years: 2,
      level: 'intermediate'
    },
    keywords: ['gcp', 'google', 'cloud', 'infrastructure', 'compute']
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    category: 'cloud',
    svgPath: '/assets/icons/tech/azure.svg',
    color: '#0078D4',
    trending: true,
    experience: {
      years: 2,
      level: 'intermediate'
    },
    keywords: ['azure', 'microsoft', 'cloud', 'infrastructure']
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'platform',
    svgPath: '/assets/icons/tech/vercel.svg',
    color: '#000000',
    trending: true,
    experience: {
      years: 3,
      level: 'advanced'
    },
    relatedProjects: ['portfolio'],
    keywords: ['vercel', 'deployment', 'hosting', 'nextjs', 'serverless']
  },
  {
    id: 'netlify',
    name: 'Netlify',
    category: 'platform',
    svgPath: '/assets/icons/tech/netlify.svg',
    color: '#00C7B7',
    trending: false,
    experience: {
      years: 2,
      level: 'intermediate'
    },
    keywords: ['netlify', 'deployment', 'hosting', 'jamstack', 'cdn']
  },

  // DevOps & Tools
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    svgPath: '/assets/icons/tech/docker.svg',
    color: '#2496ED',
    trending: true,
    experience: {
      years: 4,
      level: 'advanced'
    },
    relatedProjects: ['ai-hadith', 'financial-tracker'],
    keywords: ['docker', 'container', 'devops', 'orchestration']
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'devops',
    svgPath: '/assets/icons/tech/kubernetes.svg',
    color: '#326CE5',
    trending: true,
    experience: {
      years: 2,
      level: 'intermediate'
    },
    keywords: ['kubernetes', 'k8s', 'container', 'orchestration', 'devops']
  },
  {
    id: 'git',
    name: 'Git',
    category: 'tool',
    svgPath: '/assets/icons/tech/git.svg',
    color: '#F05032',
    trending: false,
    experience: {
      years: 6,
      level: 'expert'
    },
    keywords: ['git', 'version-control', 'scm', 'github', 'gitlab']
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'platform',
    svgPath: '/assets/icons/tech/github.svg',
    color: '#181717',
    trending: true,
    experience: {
      years: 6,
      level: 'expert'
    },
    keywords: ['github', 'git', 'repository', 'collaboration', 'code']
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    category: 'platform',
    svgPath: '/assets/icons/tech/gitlab.svg',
    color: '#FC6D26',
    trending: false,
    experience: {
      years: 2,
      level: 'intermediate'
    },
    keywords: ['gitlab', 'git', 'ci-cd', 'devops', 'repository']
  },
  {
    id: 'jenkins',
    name: 'Jenkins',
    category: 'devops',
    svgPath: '/assets/icons/tech/jenkins.svg',
    color: '#D24939',
    trending: false,
    experience: {
      years: 2,
      level: 'intermediate'
    },
    keywords: ['jenkins', 'ci-cd', 'automation', 'pipeline', 'devops']
  },
  {
    id: 'nginx',
    name: 'Nginx',
    category: 'tool',
    svgPath: '/assets/icons/tech/nginx.svg',
    color: '#009639',
    trending: false,
    experience: {
      years: 3,
      level: 'intermediate'
    },
    keywords: ['nginx', 'web-server', 'reverse-proxy', 'load-balancer']
  },

  // Frontend & Tooling
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'platform',
    svgPath: '/assets/icons/tech/nodejs.svg',
    color: '#339933',
    trending: true,
    experience: {
      years: 5,
      level: 'expert'
    },
    relatedProjects: ['health-hub', 'portfolio'],
    keywords: ['nodejs', 'javascript', 'runtime', 'backend', 'server']
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'tool',
    svgPath: '/assets/icons/tech/graphql.svg',
    color: '#E10098',
    trending: true,
    experience: {
      years: 2,
      level: 'intermediate'
    },
    keywords: ['graphql', 'api', 'query', 'facebook', 'data']
  },
  {
    id: 'rest',
    name: 'REST API',
    category: 'tool',
    svgPath: '/assets/icons/tech/rest.svg',
    color: '#009688',
    trending: false,
    experience: {
      years: 5,
      level: 'expert'
    },
    keywords: ['rest', 'api', 'http', 'web-services', 'restful']
  },
  {
    id: 'webpack',
    name: 'Webpack',
    category: 'tool',
    svgPath: '/assets/icons/tech/webpack.svg',
    color: '#8DD6F9',
    trending: false,
    experience: {
      years: 3,
      level: 'intermediate'
    },
    keywords: ['webpack', 'bundler', 'build', 'module', 'javascript']
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'tool',
    svgPath: '/assets/icons/tech/vite.svg',
    color: '#646CFF',
    trending: true,
    experience: {
      years: 2,
      level: 'intermediate'
    },
    keywords: ['vite', 'bundler', 'build', 'fast', 'esm']
  },
  {
    id: 'jest',
    name: 'Jest',
    category: 'tool',
    svgPath: '/assets/icons/tech/jest.svg',
    color: '#C21325',
    trending: false,
    experience: {
      years: 3,
      level: 'advanced'
    },
    keywords: ['jest', 'testing', 'javascript', 'unit-test', 'facebook']
  },
  {
    id: 'cypress',
    name: 'Cypress',
    category: 'tool',
    svgPath: '/assets/icons/tech/cypress.svg',
    color: '#17202C',
    trending: true,
    experience: {
      years: 2,
      level: 'intermediate'
    },
    keywords: ['cypress', 'testing', 'e2e', 'integration', 'automation']
  },

  // Additional Technologies
  {
    id: 'streamlit',
    name: 'Streamlit',
    category: 'framework',
    svgPath: '/assets/icons/tech/streamlit.svg',
    color: '#FF4B4B',
    trending: true,
    experience: {
      years: 2,
      level: 'advanced'
    },
    relatedProjects: ['chat-bot-faq'],
    keywords: ['streamlit', 'python', 'data', 'dashboard', 'ml']
  },
  {
    id: 'groq',
    name: 'Groq',
    category: 'platform',
    svgPath: '/assets/icons/tech/groq.svg',
    color: '#F55036',
    trending: true,
    experience: {
      years: 1,
      level: 'intermediate'
    },
    relatedProjects: ['health-hub'],
    keywords: ['groq', 'llm', 'ai', 'inference', 'api']
  },
  {
    id: 'openai',
    name: 'OpenAI',
    category: 'platform',
    svgPath: '/assets/icons/tech/openai.svg',
    color: '#412991',
    trending: true,
    experience: {
      years: 2,
      level: 'advanced'
    },
    relatedProjects: ['zmar-agents', 'health-hub'],
    keywords: ['openai', 'gpt', 'llm', 'ai', 'chatgpt']
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    category: 'platform',
    svgPath: '/assets/icons/tech/anthropic.svg',
    color: '#D4A373',
    trending: true,
    experience: {
      years: 1,
      level: 'intermediate'
    },
    keywords: ['anthropic', 'claude', 'llm', 'ai']
  },
  {
    id: 'framer',
    name: 'Framer Motion',
    category: 'library',
    svgPath: '/assets/icons/tech/framer.svg',
    color: '#0055FF',
    trending: true,
    experience: {
      years: 2,
      level: 'advanced'
    },
    relatedProjects: ['portfolio'],
    keywords: ['framer', 'motion', 'animation', 'react', 'ui']
  },
  {
    id: 'threejs',
    name: 'Three.js',
    category: 'library',
    svgPath: '/assets/icons/tech/threejs.svg',
    color: '#000000',
    trending: true,
    experience: {
      years: 2,
      level: 'intermediate'
    },
    relatedProjects: ['portfolio'],
    keywords: ['threejs', '3d', 'webgl', 'graphics', 'visualization']
  }
];

/**
 * Get total count of icons
 */
export const getTotalIconCount = (): number => techIconsData.length;

/**
 * Get icons by category
 */
export const getIconsByCategory = (category: TechCategory): TechIconMetadata[] => {
  return techIconsData.filter(icon => icon.category === category);
};

/**
 * Get trending icons
 */
export const getTrendingIcons = (): TechIconMetadata[] => {
  return techIconsData.filter(icon => icon.trending);
};

/**
 * Search icons by keyword
 */
export const searchIcons = (query: string): TechIconMetadata[] => {
  const lowerQuery = query.toLowerCase();
  return techIconsData.filter(icon => 
    icon.name.toLowerCase().includes(lowerQuery) ||
    icon.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))
  );
};

/**
 * Get icon by ID
 */
export const getIconById = (id: string): TechIconMetadata | undefined => {
  return techIconsData.find(icon => icon.id === id);
};
