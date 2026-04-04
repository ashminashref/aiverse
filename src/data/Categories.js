import { 
  Palette, Terminal, Zap, Video, Search, ArrowUpRight, MessageSquare, 
  PenSquare, Mic, Captions, Languages, PenTool, Workflow, Bot, 
  FileText, BarChart3, Library, Users, Headphones, Megaphone, 
  Globe, Briefcase, GraduationCap, HeartPulse, Wallet, ShoppingCart, 
  Eye, AudioLines, Sparkles, Image, Presentation, ChevronDown 
} from 'lucide-react';

export  const aiCategories = [
  {
    id: 1,
    title: "Generative Art",
    count: "45+",
    description: "Create stunning visuals with state-of-the-art diffusion models.",
    accentColor: "from-purple-500 to-pink-500",
    icon: Palette,
    path: "/categories/art"
  },
  {
    id: 2,
    title: "Code Assistants",
    count: "12+",
    description: "Automate your workflow with AI-powered pair programming tools.",
    accentColor: "from-blue-500 to-cyan-500",
    icon: Terminal,
    path: "/categories/code"
  },
  {
    id: 3,
    title: "Productivity",
    count: "28+",
    description: "Supercharge your daily tasks with intelligent automation and LLMs.",
    accentColor: "from-amber-400 to-orange-600",
    icon: Zap,
    path: "/categories/productivity"
  },
  {
    id: 4,
    title: "Neural Search",
    count: "8+",
    description: "Deep semantic search capabilities for complex datasets.",
    accentColor: "from-emerald-400 to-teal-600",
    icon: Search,
    path: "/categories/search"
  },
  {
    id: 5,
    title: "Chatbots",
    count: "30+",
    description: "Build and deploy conversational AI for support, sales, and engagement.",
    accentColor: "from-sky-500 to-indigo-500",
    icon: MessageSquare,
    path: "/categories/chatbots"
  },
  {
    id: 6,
    title: "Writing",
    count: "35+",
    description: "Generate blogs, ads, emails, and long-form content with AI writing tools.",
    accentColor: "from-rose-500 to-red-500",
    icon: PenSquare,
    path: "/categories/writing"
  },
  {
    id: 7,
    title: "Image Editing",
    count: "18+",
    description: "Upscale, retouch, remove backgrounds, and enhance visuals with AI.",
    accentColor: "from-fuchsia-500 to-violet-500",
    icon: Image,
    path: "/categories/image-editing"
  },
  {
    id: 8,
    title: "Video Generation",
    count: "20+",
    description: "Create AI videos, avatars, explainers, and motion content from prompts.",
    accentColor: "from-red-500 to-orange-500",
    icon: Video,
    path: "/categories/video"
  },
  {
    id: 9,
    title: "Audio & Voice",
    count: "16+",
    description: "Generate voiceovers, clone voices, clean audio, and synthesize speech.",
    accentColor: "from-lime-500 to-green-600",
    icon: Mic,
    path: "/categories/audio"
  },
  {
    id: 10,
    title: "Transcription",
    count: "10+",
    description: "Convert meetings, podcasts, and voice notes into searchable text.",
    accentColor: "from-cyan-500 to-sky-600",
    icon: Captions,
    path: "/categories/transcription"
  },
  {
    id: 11,
    title: "Translation",
    count: "10+",
    description: "Translate text, audio, and documents across multiple languages.",
    accentColor: "from-indigo-500 to-blue-600",
    icon: Languages,
    path: "/categories/translation"
  },
  {
    id: 12,
    title: "Design Tools",
    count: "22+",
    description: "Speed up UI, branding, mockups, and creative workflows with AI.",
    accentColor: "from-pink-500 to-rose-500",
    icon: PenTool,
    path: "/categories/design"
  },
  {
    id: 13,
    title: "Presentation Makers",
    count: "9+",
    description: "Generate decks, slides, and pitch presentations from prompts or notes.",
    accentColor: "from-orange-400 to-amber-500",
    icon: Presentation,
    path: "/categories/presentations"
  },
  {
    id: 14,
    title: "Automation",
    count: "25+",
    description: "Connect apps and automate repetitive workflows with AI agents and logic.",
    accentColor: "from-teal-500 to-emerald-600",
    icon: Workflow,
    path: "/categories/automation"
  },
  {
    id: 15,
    title: "Agent Builders",
    count: "14+",
    description: "Create task-driven AI agents with tools, memory, and multistep actions.",
    accentColor: "from-violet-500 to-indigo-600",
    icon: Bot,
    path: "/categories/agents"
  },
  {
    id: 16,
    title: "Document AI",
    count: "15+",
    description: "Extract, summarize, classify, and analyze PDFs, forms, and contracts.",
    accentColor: "from-stone-500 to-slate-600",
    icon: FileText,
    path: "/categories/documents"
  },
  {
    id: 17,
    title: "Data Analysis",
    count: "13+",
    description: "Query datasets, generate insights, and visualize trends using AI.",
    accentColor: "from-blue-500 to-indigo-500",
    icon: BarChart3,
    path: "/categories/data"
  },
  {
    id: 18,
    title: "Research Assistants",
    count: "11+",
    description: "Summarize sources, answer questions, and help with deep information gathering.",
    accentColor: "from-slate-500 to-gray-700",
    icon: Library,
    path: "/categories/research"
  },
  {
    id: 19,
    title: "Meeting Assistants",
    count: "12+",
    description: "Record meetings, generate notes, action items, and searchable summaries.",
    accentColor: "from-green-500 to-emerald-500",
    icon: Users,
    path: "/categories/meetings"
  },
  {
    id: 20,
    title: "Customer Support",
    count: "17+",
    description: "Deploy AI support agents for ticketing, FAQs, and live chat workflows.",
    accentColor: "from-cyan-400 to-blue-500",
    icon: Headphones,
    path: "/categories/support"
  },
  {
    id: 21,
    title: "Sales & Marketing",
    count: "26+",
    description: "Optimize outreach, lead generation, ad copy, and campaign performance.",
    accentColor: "from-rose-400 to-orange-500",
    icon: Megaphone,
    path: "/categories/marketing"
  },
  {
    id: 22,
    title: "SEO",
    count: "14+",
    description: "Generate optimized content, keyword insights, and search performance suggestions.",
    accentColor: "from-yellow-400 to-orange-500",
    icon: Globe,
    path: "/categories/seo"
  },
  {
    id: 23,
    title: "Resume Builders",
    count: "8+",
    description: "Create resumes, cover letters, and job application materials with AI.",
    accentColor: "from-neutral-500 to-zinc-700",
    icon: Briefcase,
    path: "/categories/resume"
  },
  {
    id: 24,
    title: "Education",
    count: "18+",
    description: "Tutoring, quiz generation, learning support, and personalized study tools.",
    accentColor: "from-blue-400 to-cyan-500",
    icon: GraduationCap,
    path: "/categories/education"
  },
  {
    id: 25,
    title: "Healthcare",
    count: "10+",
    description: "Support medical documentation, diagnostics assistance, and health workflows.",
    accentColor: "from-red-400 to-pink-500",
    icon: HeartPulse,
    path: "/categories/healthcare"
  },
  {
    id: 26,
    title: "Finance",
    count: "11+",
    description: "Analyze financial data, detect fraud, automate reports, and forecast trends.",
    accentColor: "from-emerald-500 to-green-700",
    icon: Wallet,
    path: "/categories/finance"
  },
  {
    id: 27,
    title: "E-commerce",
    count: "16+",
    description: "Improve product descriptions, recommendations, support, and store automation.",
    accentColor: "from-orange-500 to-red-500",
    icon: ShoppingCart,
    path: "/categories/ecommerce"
  },
  {
    id: 28,
    title: "Computer Vision",
    count: "14+",
    description: "Detect objects, analyze photos, monitor video, and process visual inputs.",
    accentColor: "from-purple-500 to-indigo-500",
    icon: Eye,
    path: "/categories/computer-vision"
  },
  {
    id: 29,
    title: "Speech Recognition",
    count: "9+",
    description: "Understand spoken language for commands, captions, and voice interfaces.",
    accentColor: "from-sky-400 to-cyan-600",
    icon: AudioLines,
    path: "/categories/speech"
  },
  {
    id: 30,
    title: "Recommendation Engines",
    count: "7+",
    description: "Personalize products, content, and user journeys with predictive AI.",
    accentColor: "from-lime-400 to-emerald-500",
    icon: Sparkles,
    path: "/categories/recommendation"
  }
];
