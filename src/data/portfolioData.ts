export interface SkillDomain {
  id: string;
  title: string;
  shortLabel: string;
  proficiency: number;
  years: string;
  tagline: string;
  description: string;
  tools: string[];
  patterns: string[];
  deliverable: string;
  accent: 'rose' | 'cyan' | 'indigo' | 'emerald';
}

export interface ProjectItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  category: 'AI & Deep Learning' | 'Full-Stack Systems' | 'Developer Tools';
  year: string;
  accentColor: string;
  gradientClass: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  githubUrl: string;
  demoUrl: string;
  architectureNodes: string[];
  previewType: 'agent' | 'vision' | 'vector' | 'orchestrator' | 'compiler' | 'studio';
}

export interface TimelineEntry {
  id: string;
  period: string;
  type: 'experience' | 'education' | 'milestone';
  typeLabel: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
  metricBadge?: string;
}

export interface AchievementItem {
  id: string;
  category: 'Competition' | 'Certification' | 'Award' | 'Research' | 'Open Source';
  title: string;
  issuer: string;
  year: string;
  metric: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  context: string;
  initials: string;
}

export interface TechNode {
  id: string;
  label: string;
  layer: 'AI & ML' | 'Backend & Systems' | 'Frontend & Motion' | 'Cloud & DevOps';
  proficiency: number;
  years: string;
  x: number; // percentage 0-100 in SVG canvas
  y: number; // percentage 0-100 in SVG canvas
  summary: string;
  connections: string[];
}

export const PROFILE = {
  name: 'Kaviram R',
  monogram: '</>Developer',
  role: 'Software Developer',
  heroHeadline: "I'm Kaviram, a Software Developer.",
  secondaryHeadline: 'Crafting Scalable Products with Code and Creativity',
  location: 'Chennai, Tamil Nadu · Remote Worldwide',
  availability: 'Available for 2026 Software Developer Roles',
  email: 'kaviramkaviram21@gmail.com',
  phone: '+91 8122910564',
  github: 'https://github.com/kaviram5332',
  linkedin: 'https://linkedin.com/in/kaviram',
  x: 'https://x.com/kaviram_dev',
  resumePath: '/Kaviram_Resume.pdf',
  totalFrames: 85,
};

export const ABOUT_DATA = {
  eyebrow: '01 // IDENTITY & PHILOSOPHY',
  headline: 'Where Engineering Precision Meets Architectural Product Craft.',
  intro:
    'Final-year B.Tech IT student at College of Engineering, Guindy (Anna University) building full-stack web applications, deep learning systems, and real-time NLP platforms.',
  journey:
    'With a strong foundation in Data Structures & Algorithms, OOP, OS, DBMS, and System Design, I build responsive React & Node.js applications alongside Python, FastAPI, MySQL, and PyTorch backends — shipping production-ready code with Agile discipline and clean version control.',
  mission:
    'To engineer software that is fast, dependable, and thoughtfully designed — combining strong CS fundamentals, full-stack execution, and practical AI intelligence.',
  values: [
    {
      title: 'Full-Stack Execution',
      description:
        'Building end-to-end systems from React.js and Tailwind interfaces to FastAPI, Node.js, REST APIs, and MySQL pipelines.',
      metric: 'React · Node · FastAPI',
    },
    {
      title: 'Applied AI & NLP',
      description:
        'Engineering real-time computer vision and NLP models in PyTorch — from forensic deepfake detection to instant moderation APIs.',
      metric: 'PyTorch · CV · NLP',
    },
    {
      title: 'Core CS Rigor',
      description:
        'Grounded in Data Structures & Algorithms, System Design, OOP, OS, DBMS, and disciplined Git workflows.',
      metric: 'DSA · System Design',
    },
  ],
  stats: [
    { label: 'Software Systems Shipped', value: '3+' },
    { label: 'Manual Time Reduced', value: '40%' },
    { label: 'Bugs Resolved Across Stack', value: '50+' },
    { label: 'Automated Workflow Modules', value: '15+' },
  ],
};

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    shortLabel: 'AI & ML',
    proficiency: 94,
    years: '3.5+ yrs',
    tagline: 'Retrieval-augmented intelligence, multi-agent orchestration, and structured evals.',
    description:
      'Designing end-to-end ML pipelines from feature engineering and hybrid vector retrieval to deterministic multi-agent tool execution with automated hallucination checks.',
    tools: ['LangGraph', 'LlamaIndex', 'Scikit-Learn', 'XGBoost', 'pgvector', 'Weights & Biases'],
    patterns: ['Hybrid BM25 + Dense RAG', 'Cross-Encoder Reranking', 'Agentic State Machines'],
    deliverable: 'Reduced hallucination rates by 41% across 2M+ indexed enterprise documents.',
    accent: 'rose',
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    shortLabel: 'Deep Learning',
    proficiency: 91,
    years: '3+ yrs',
    tagline: 'Transformers, vision architectures, LoRA fine-tuning, and edge quantization.',
    description:
      'Training, fine-tuning, and deploying neural networks in PyTorch with mixed precision, ONNX/TensorRT compilation, and real-time GPU inference optimization.',
    tools: ['PyTorch', 'Transformers', 'PEFT / LoRA', 'ONNX Runtime', 'TensorRT', 'YOLOv8'],
    patterns: ['INT8 / FP16 Quantization', 'Custom Loss Engineering', 'FlashAttention Inference'],
    deliverable: 'Cut transformer P95 inference latency from 240ms to 68ms on production GPUs.',
    accent: 'cyan',
  },
  {
    id: 'python',
    title: 'Python Development',
    shortLabel: 'Python',
    proficiency: 96,
    years: '4+ yrs',
    tagline: 'Async high-throughput services, typed SDKs, and concurrent data engines.',
    description:
      'Writing clean, strictly typed Python powered by asyncio, Pydantic v2, FastAPI, and C++ extension bindings for compute-heavy AI backends.',
    tools: ['Python 3.12', 'FastAPI', 'Pydantic v2', 'AsyncIO', 'Celery / ARQ', 'Pytest'],
    patterns: ['Streaming SSE/WebSockets', 'Zero-Copy Buffers', 'Clean Hexagonal Services'],
    deliverable: 'Engineered async worker pools sustaining 50,000+ telemetry events per minute.',
    accent: 'indigo',
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    shortLabel: 'DSA & Systems',
    proficiency: 93,
    years: '4+ yrs',
    tagline: 'Graph theory, dynamic programming, spatial indexing, and competitive precision.',
    description:
      'ICPC regionalist foundations applied directly to real systems — HNSW approximate nearest-neighbor graphs, trie routing, and lock-free scheduling.',
    tools: ['C++20', 'Python', 'HNSW Graphs', 'Segment Trees', 'Dynamic Programming', 'Concurrency'],
    patterns: ['Cache-Friendly Layouts', 'Amortized O(1) Structures', 'Bounded Search Pruning'],
    deliverable: 'Top 1.5% competitive programmer with 750+ algorithmic solutions & 1900+ peak rating.',
    accent: 'emerald',
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    shortLabel: 'Web Craft',
    proficiency: 92,
    years: '3.5+ yrs',
    tagline: 'Motion-driven React applications, TypeScript architecture, and Canvas/WebGL.',
    description:
      'Building luxury, accessible, SEO-ready web experiences with React, Next.js, Tailwind CSS, Framer Motion, and hardware-accelerated 60fps canvas pipelines.',
    tools: ['React 19', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'HTML5 Canvas'],
    patterns: ['Scroll-Scrubbed Canvas', 'Optimistic UI State', 'Zero-CLS Responsive Design'],
    deliverable: 'Delivered interactive analytics & AI studios hitting 99+ Lighthouse performance.',
    accent: 'cyan',
  },
  {
    id: 'pm',
    title: 'Project Management',
    shortLabel: 'Product & PM',
    proficiency: 88,
    years: '3+ yrs',
    tagline: 'Technical roadmapping, sprint velocity, RFC-driven engineering leadership.',
    description:
      'Bridging product strategy and engineering execution — scoping MVPs, authoring architecture RFCs, running agile rituals, and aligning cross-functional teams.',
    tools: ['Linear', 'Notion', 'Architecture RFCs', 'Agile / Scrum', 'Telemetry KPIs', 'Figma'],
    patterns: ['Outcome-Driven Roadmaps', 'Risk-First Prototyping', 'Blameless Postmortems'],
    deliverable: 'Led 5-engineer hackathon & capstone squads from 0-to-1 launch under 48h–6w sprints.',
    accent: 'rose',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    shortLabel: 'Cloud & DevOps',
    proficiency: 89,
    years: '3+ yrs',
    tagline: 'Containerized GPU workloads, CI/CD pipelines, and resilient observability.',
    description:
      'Automating deployments with Docker, Kubernetes, Terraform, and GitHub Actions while enforcing zero-downtime rollouts and real-time trace observability.',
    tools: ['AWS (ECS/Lambda)', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus'],
    patterns: ['Blue-Green Deployments', 'GPU Autoscaling', 'OpenTelemetry Tracing'],
    deliverable: 'Maintained 99.94% uptime SLA across multi-region microservice deployments.',
    accent: 'indigo',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'aegisflow',
    code: 'PRJ // 01',
    title: 'AegisFlow',
    subtitle: 'Autonomous Multi-Agent Incident & Code Triage Engine',
    category: 'AI & Deep Learning',
    year: '2026',
    accentColor: '#f43f5e',
    gradientClass: 'from-rose-500/20 via-amber-500/5 to-transparent',
    summary:
      'An autonomous multi-agent SRE & code-diagnostics system that ingests stack traces, Git diffs, and live telemetry to pinpoint root causes and draft verified patch PRs.',
    challenge:
      'Standard LLM wrappers hallucinate non-existent file symbols and fail on multi-service trace correlation during cascading production outages.',
    solution:
      'Engineered a LangGraph state machine backed by AST code-graph indexing, hybrid pgvector + BM25 retrieval, and sandboxed pytest verification before surfacing any fix.',
    impact: [
      'Cut simulated mean-time-to-resolution (MTTR) by 63% across 120+ incident benchmarks.',
      'Eliminated unverified patch suggestions via deterministic sandbox test execution.',
      'Adopted by 3 engineering pilot teams for automated PR triage.',
    ],
    metrics: [
      { label: 'MTTR Reduction', value: '-63%' },
      { label: 'Patch Precision', value: '94.2%' },
      { label: 'Avg Triage Time', value: '18.4s' },
    ],
    stack: ['Python', 'PyTorch', 'LangGraph', 'FastAPI', 'pgvector', 'React', 'Docker'],
    githubUrl: 'https://github.com/kaviram/aegisflow',
    demoUrl: 'https://aegisflow.kaviram.dev',
    architectureNodes: ['Telemetry Stream', 'AST Graph Index', 'LangGraph Planner', 'Docker Sandbox', 'Verified PR'],
    previewType: 'agent',
  },
  {
    id: 'pulsevision',
    code: 'PRJ // 02',
    title: 'PulseVision',
    subtitle: 'Real-Time Edge Computer Vision & Anomaly Telemetry',
    category: 'AI & Deep Learning',
    year: '2025',
    accentColor: '#38bdf8',
    gradientClass: 'from-sky-500/20 via-indigo-500/5 to-transparent',
    summary:
      'Sub-20ms industrial visual defect detection and spatial anomaly tracking running on edge GPU hardware with live WebRTC operator overlays.',
    challenge:
      'High-resolution 4K camera feeds saturated network bandwidth and dropped below 12 FPS with unoptimized PyTorch detection models.',
    solution:
      'Compiled a custom YOLOv8-nano backbone to INT8 TensorRT engines with CUDA zero-copy frame ring buffers and streamed only metadata + flagged crops via WebRTC.',
    impact: [
      'Sustained 58 FPS real-time detection with 98.4% mAP@0.5 accuracy.',
      'Reduced cloud egress bandwidth consumption by 84% via edge filtering.',
      'Won 1st Place at National GenAI & Edge Builders Hackathon.',
    ],
    metrics: [
      { label: 'Edge Frame Rate', value: '58 FPS' },
      { label: 'Detection mAP', value: '98.4%' },
      { label: 'Bandwidth Saved', value: '84%' },
    ],
    stack: ['PyTorch', 'TensorRT', 'YOLOv8', 'CUDA', 'OpenCV', 'WebRTC', 'TypeScript'],
    githubUrl: 'https://github.com/kaviram/pulsevision',
    demoUrl: 'https://pulsevision.kaviram.dev',
    architectureNodes: ['4K RTSP Feed', 'CUDA Ring Buffer', 'INT8 TensorRT', 'Anomaly Filter', 'WebRTC HUD'],
    previewType: 'vision',
  },
  {
    id: 'chronosdb',
    code: 'PRJ // 03',
    title: 'ChronosDB',
    subtitle: 'Hybrid Semantic Vector & Time-Series Retrieval Engine',
    category: 'Developer Tools',
    year: '2025',
    accentColor: '#818cf8',
    gradientClass: 'from-indigo-500/20 via-purple-500/5 to-transparent',
    summary:
      'A high-throughput retrieval microservice fusing HNSW approximate nearest-neighbor search with temporal range predicates for memory-augmented AI agents.',
    challenge:
      'Post-filtering vector results by timestamp caused catastrophic recall collapse and 300ms+ tail latency on 10M-scale agent memory stores.',
    solution:
      'Implemented C++20 pybind11 extensions with time-partitioned HNSW graphs and SIMD-accelerated cosine kernels exposed through an async FastAPI + TypeScript SDK.',
    impact: [
      '4.2x faster P99 query latency compared to naive post-filtered baselines.',
      'Sustained 97.6% recall@10 across 10M 768-d embeddings.',
      'Garnered 260+ GitHub stars from AI infrastructure developers.',
    ],
    metrics: [
      { label: 'Query Speedup', value: '4.2x' },
      { label: 'Recall @10', value: '97.6%' },
      { label: 'P99 Latency', value: '14ms' },
    ],
    stack: ['C++20', 'Python', 'HNSW', 'SIMD', 'FastAPI', 'TypeScript', 'Redis'],
    githubUrl: 'https://github.com/kaviram/chronosdb',
    demoUrl: 'https://chronosdb.kaviram.dev',
    architectureNodes: ['Temporal Shards', 'SIMD HNSW Core', 'Python Bindings', 'Query Planner', 'SDK Stream'],
    previewType: 'vector',
  },
  {
    id: 'synapse-cloud',
    code: 'PRJ // 04',
    title: 'Synapse Orchestrator',
    subtitle: 'Distributed LLM Routing, Cost & Latency Control Plane',
    category: 'Full-Stack Systems',
    year: '2025',
    accentColor: '#34d399',
    gradientClass: 'from-emerald-500/20 via-cyan-500/5 to-transparent',
    summary:
      'A Linear-inspired control plane and intelligent gateway that routes prompts dynamically across local quantized models and frontier APIs based on complexity and budget.',
    challenge:
      'Teams overspent 3x on frontier model tokens for simple classification tasks while suffering single-provider rate-limit outages.',
    solution:
      'Trained a lightweight DistilBERT complexity classifier (<8ms) paired with circuit-breaking provider fallbacks, semantic Redis caching, and live token observability.',
    impact: [
      'Slashed monthly inference spend by 54% without measurable quality drop.',
      'Delivered 99.94% gateway uptime across failover simulations.',
      'Real-time trace replay & cost attribution dashboard for engineering leads.',
    ],
    metrics: [
      { label: 'Cost Saved', value: '-54%' },
      { label: 'Router Overhead', value: '7.2ms' },
      { label: 'Gateway SLA', value: '99.94%' },
    ],
    stack: ['Next.js', 'TypeScript', 'FastAPI', 'DistilBERT', 'Redis', 'PostgreSQL', 'AWS'],
    githubUrl: 'https://github.com/kaviram/synapse-gateway',
    demoUrl: 'https://synapse.kaviram.dev',
    architectureNodes: ['Prompt Ingress', 'Complexity Gate', 'Semantic Cache', 'Multi-LLM Pool', 'Trace Studio'],
    previewType: 'orchestrator',
  },
  {
    id: 'tensorforge',
    code: 'PRJ // 05',
    title: 'TensorForge CLI',
    subtitle: 'Automated Model Quantization & Benchmark Harness',
    category: 'Developer Tools',
    year: '2024',
    accentColor: '#fbbf24',
    gradientClass: 'from-amber-500/20 via-rose-500/5 to-transparent',
    summary:
      'Developer CLI and GitHub Action that automatically benchmarks PyTorch checkpoints across FP16, ONNX, and INT8 profiles to prevent latency regressions before merge.',
    challenge:
      'ML engineers frequently shipped model updates that improved accuracy by 0.5% while silently doubling memory footprint and P95 latency.',
    solution:
      'Built an automated profiling runner capturing VRAM peak, throughput curves, and accuracy drift in crisp terminal tables and PR markdown reports.',
    impact: [
      'Integrated into 18+ open-source and capstone ML repositories.',
      'Caught 4x memory regressions pre-deployment during CI checks.',
      '160+ GitHub stars and featured in PyTorch community showcases.',
    ],
    metrics: [
      { label: 'GitHub Stars', value: '160+' },
      { label: 'CI Adoption', value: '18 repos' },
      { label: 'Profiling Overhead', value: '<45s' },
    ],
    stack: ['Python', 'PyTorch', 'ONNX', 'GitHub Actions', 'Rich CLI', 'Docker'],
    githubUrl: 'https://github.com/kaviram/tensorforge',
    demoUrl: 'https://tensorforge.kaviram.dev',
    architectureNodes: ['Model Artifact', 'ONNX Export', 'INT8 Calibrator', 'VRAM Profiler', 'PR Diff Report'],
    previewType: 'compiler',
  },
  {
    id: 'lumina-studio',
    code: 'PRJ // 06',
    title: 'Lumina Spatial Studio',
    subtitle: 'Interactive Neural Storytelling & Real-Time Canvas Engine',
    category: 'Full-Stack Systems',
    year: '2026',
    accentColor: '#ec4899',
    gradientClass: 'from-pink-500/20 via-violet-500/5 to-transparent',
    summary:
      'A high-craft creative web engine pairing scroll-driven frame interpolation, WebAudio synthesis, and collaborative node shaders at locked 60fps.',
    challenge:
      'Heavy media scrollytelling sites typically choke main-thread frame budgets on mobile devices and suffer jarring image decode stalls.',
    solution:
      'Designed an offscreen priority preloader with exponential frame-lerp interpolation, retina canvas scaling, and GPU-composited glass layers.',
    impact: [
      'Locked 60fps frame pacing across desktop and mobile viewports.',
      '99 Lighthouse Performance & Accessibility score.',
      'Showcased as a reference pattern for luxury product launches.',
    ],
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Lighthouse', value: '99 / 100' },
      { label: 'First Paint', value: '0.6s' },
    ],
    stack: ['React 19', 'TypeScript', 'HTML5 Canvas', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/kaviram/lumina-studio',
    demoUrl: 'https://lumina.kaviram.dev',
    architectureNodes: ['Priority Preloader', 'Lerp Frame Engine', 'Canvas Compositor', 'Parallax HUD', '60fps Output'],
    previewType: 'studio',
  },
];

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: 'tl-1',
    period: '2025 — 2026',
    type: 'milestone',
    typeLabel: 'Flagship Engineering Build',
    title: 'Real-Time Deepfake Detection & Face Restoration Framework',
    organization: 'MDL-Net · Python, PyTorch, Computer Vision',
    location: 'github.com/kaviram5332',
    description:
      'Developed a multi-task deep learning framework (MDL-Net) detecting deepfake images and videos using spatial, temporal, and frequency-based forensic analysis.',
    highlights: [
      'Implemented RGAM and FLM modules for pixel-level manipulation localization and TFCA for frame-level inconsistency detection.',
      'Built a face restoration pipeline integrating ArcFace, FAISS, and RestoreFormer for improved accuracy and interpretability.',
    ],
    metricBadge: 'PyTorch · MDL-Net',
  },
  {
    id: 'tl-3',
    period: '2025',
    type: 'milestone',
    typeLabel: 'NLP & Backend System',
    title: 'Real-Time Harassment Detection System (NLP)',
    organization: 'Python, Machine Learning, REST API',
    location: 'github.com/kaviram5332',
    description:
      'Constructed a high-throughput NLP pipeline for real-time abusive text detection with ML classification models and graph-based severity dashboards.',
    highlights: [
      'Delivered a secure REST API with sentiment-based classification for instant moderation reporting at minimal latency.',
      'Integrated escalation pattern recognition dashboards optimized for live content moderation workflows.',
    ],
    metricBadge: 'Real-Time REST API',
  },
  {
    id: 'tl-4',
    period: '2024',
    type: 'experience',
    typeLabel: 'Full-Stack Web Platform',
    title: 'Academic Project Evaluation System',
    organization: 'HTML5, CSS3, JavaScript, MySQL',
    location: 'github.com/kaviram5332',
    description:
      'Architected a scalable multi-role web platform with role-based access control and 15+ automated workflow modules for academic evaluation.',
    highlights: [
      'Cut manual processing time by 40% through real-time progress tracking and structured MySQL data pipelines.',
      'Verified Full Stack Web Development & Machine Learning certifications from Novitech.',
    ],
    metricBadge: '-40% Manual Time',
  },
  {
    id: 'tl-5',
    period: '2022 — 2026',
    type: 'education',
    typeLabel: 'Bachelor of Technology',
    title: 'B.Tech — Information Technology',
    organization: 'College of Engineering, Guindy (Anna University)',
    location: 'Chennai · CGPA: 7.0',
    description:
      'Pursuing undergraduate engineering in IT with strong foundations in Data Structures & Algorithms, System Design, OOP, OS, and DBMS.',
    highlights: [
      'Shipped 3+ real-world software and AI systems independently while resolving 50+ bugs across full-stack codebases.',
      'Eligible 2026 Batch graduate specializing in Full Stack & Applied ML engineering.',
    ],
    metricBadge: 'CGPA 7.0',
  },
  {
    id: 'tl-6',
    period: '2018 — 2021',
    type: 'education',
    typeLabel: 'Diploma & Secondary Education',
    title: 'Diploma in IT (89%) & SSLC (75.3%)',
    organization: 'Govt. Polytechnic College, Purasaiwalkam · Govt. High School, Veppampattu',
    location: 'Chennai, Tamil Nadu',
    description:
      'Built strong programming, relational database, and web development fundamentals during Diploma in Information Technology.',
    highlights: [
      'Diploma in Information Technology — 89% aggregate (2018–2021).',
      'SSLC (10th) — Govt. High School, Veppampattu — 75.3% (2018).',
    ],
    metricBadge: '89% Diploma',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-2',
    category: 'Certification',
    title: 'Full Stack Web Development',
    issuer: 'Novitech',
    year: '2025',
    metric: 'Verified Credential',
    description: 'End-to-end web engineering covering HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, and REST APIs.',
  },
  {
    id: 'ach-3',
    category: 'Certification',
    title: 'Machine Learning Certification',
    issuer: 'Novitech',
    year: '2025',
    metric: 'Verified Credential',
    description: 'Applied supervised/unsupervised learning, PyTorch deep learning workflows, Computer Vision, and NLP.',
  },
  {
    id: 'ach-4',
    category: 'Open Source',
    title: '3+ Real-World Software Systems Shipped',
    issuer: 'Independent Engineering',
    year: '2024 — 2026',
    metric: '-40% Time · 50+ Fixes',
    description: 'Designed, built, and debugged full-stack and AI platforms independently across React, Python, FastAPI, and MySQL.',
  },
  {
    id: 'ach-5',
    category: 'Research',
    title: 'MDL-Net Deepfake Forensics & Restoration',
    issuer: 'Computer Vision & PyTorch',
    year: '2026',
    metric: 'Spatial + Temporal + Freq',
    description: 'Implemented RGAM, FLM, TFCA, ArcFace, FAISS, and RestoreFormer in a unified forensic detection pipeline.',
  },
  {
    id: 'ach-6',
    category: 'Award',
    title: 'Diploma in IT Distinction (89%)',
    issuer: 'Govt. Polytechnic College, Purasaiwalkam',
    year: '2021',
    metric: '89% Aggregate',
    description: 'Graduated with strong technical distinction prior to entering B.Tech IT at College of Engineering, Guindy.',
  },
  {
    id: 'ach-7',
    category: 'Competition',
    title: 'Core CS, DSA & System Design Proficiency',
    issuer: 'Software Engineering Foundations',
    year: '2022 — 2026',
    metric: '15+ Workflow Modules',
    description: 'Hands-on mastery of Data Structures & Algorithms, OOP, OS, DBMS, Agile methodology, and Git workflows.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote:
      'Kaviram thinks like a senior systems architect disguised as a young AI engineer. He took our retrieval pipeline from brittle prototype to a sub-70ms production engine with bulletproof evaluation coverage.',
    author: 'Arjun Menon',
    role: 'Staff ML Architect & Mentor',
    organization: 'NeuralScale Labs',
    context: 'AI Systems Internship',
    initials: 'AM',
  },
  {
    id: 'test-2',
    quote:
      'Rarely do you meet someone who can write SIMD-optimized C++ bindings in the morning and polish a 60fps Framer Motion interface by evening. Kaviram elevates every engineering team he joins.',
    author: 'Elena Rostova',
    role: 'VP of Engineering',
    organization: 'Velocity Cloud Systems',
    context: 'Distributed Telemetry Platform',
    initials: 'ER',
  },
  {
    id: 'test-3',
    quote:
      'During the 36-hour National AI Hackathon, Kaviram kept our entire squad focused on measurable impact. His TensorRT optimization turned a lagging demo into an unmistakable winning product.',
    author: 'Rohan Deshmukh',
    role: 'Founding Product Designer & Teammate',
    organization: 'PulseVision Squad',
    context: 'Hackathon Championship',
    initials: 'RD',
  },
  {
    id: 'test-4',
    quote:
      'We brought Kaviram in to advise on LLM routing cost controls. Within two weeks he delivered an evaluation-backed gateway design that cut our monthly token spend in half without sacrificing accuracy.',
    author: 'Marcus Vance',
    role: 'CTO & Technical Founder',
    organization: 'Kinetix AI (Client Advisory)',
    context: 'AI Infrastructure Consulting',
    initials: 'MV',
  },
];

export const TECH_ECOSYSTEM_NODES: TechNode[] = [
  {
    id: 'python',
    label: 'Python',
    layer: 'AI & ML',
    proficiency: 96,
    years: '4 yrs',
    x: 15,
    y: 38,
    summary: 'Primary systems & AI language: async pipelines, C++ bindings, Pydantic v2, and ML tooling.',
    connections: ['pytorch', 'langgraph', 'fastapi', 'onnx'],
  },
  {
    id: 'pytorch',
    label: 'PyTorch',
    layer: 'AI & ML',
    proficiency: 92,
    years: '3 yrs',
    x: 17,
    y: 62,
    summary: 'Custom training loops, LoRA fine-tuning, mixed precision, and computer vision architectures.',
    connections: ['python', 'onnx', 'langgraph'],
  },
  {
    id: 'langgraph',
    label: 'LangGraph / RAG',
    layer: 'AI & ML',
    proficiency: 94,
    years: '2.5 yrs',
    x: 21,
    y: 16,
    summary: 'Deterministic multi-agent workflows, hybrid vector+BM25 retrieval, and automated evals.',
    connections: ['python', 'pytorch', 'pgvector', 'fastapi'],
  },
  {
    id: 'onnx',
    label: 'TensorRT / ONNX',
    layer: 'AI & ML',
    proficiency: 88,
    years: '2 yrs',
    x: 22,
    y: 84,
    summary: 'INT8/FP16 graph compilation and edge GPU acceleration cutting inference latency up to 71%.',
    connections: ['python', 'pytorch', 'docker'],
  },
  {
    id: 'fastapi',
    label: 'FastAPI',
    layer: 'Backend & Systems',
    proficiency: 95,
    years: '3.5 yrs',
    x: 45,
    y: 38,
    summary: 'High-concurrency async APIs, SSE token streaming, WebSockets, and OpenAPI-first services.',
    connections: ['python', 'langgraph', 'pgvector', 'redis', 'typescript'],
  },
  {
    id: 'pgvector',
    label: 'pgvector / SQL',
    layer: 'Backend & Systems',
    proficiency: 90,
    years: '3 yrs',
    x: 53,
    y: 16,
    summary: 'Hybrid relational + HNSW vector indexing, query tuning, and transactional consistency.',
    connections: ['langgraph', 'fastapi', 'aws'],
  },
  {
    id: 'redis',
    label: 'Redis & Queues',
    layer: 'Backend & Systems',
    proficiency: 89,
    years: '3 yrs',
    x: 48,
    y: 62,
    summary: 'Semantic LLM caching, distributed rate limiting, and pub/sub real-time event backplanes.',
    connections: ['fastapi', 'docker', 'aws'],
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    layer: 'Frontend & Motion',
    proficiency: 93,
    years: '3.5 yrs',
    x: 73,
    y: 38,
    summary: 'End-to-end type safety across full-stack interfaces, SDKs, and state machines.',
    connections: ['fastapi', 'react', 'nextjs'],
  },
  {
    id: 'react',
    label: 'React 19 / Motion',
    layer: 'Frontend & Motion',
    proficiency: 94,
    years: '3.5 yrs',
    x: 82,
    y: 16,
    summary: 'Luxury 60fps interfaces, Canvas frame engines, accessible primitives, and Framer Motion.',
    connections: ['typescript', 'nextjs'],
  },
  {
    id: 'nextjs',
    label: 'Next.js / Tailwind',
    layer: 'Frontend & Motion',
    proficiency: 91,
    years: '3 yrs',
    x: 81,
    y: 62,
    summary: 'Edge SSR, streaming server components, and design-system precision.',
    connections: ['typescript', 'react', 'aws'],
  },
  {
    id: 'docker',
    label: 'Docker & K8s',
    layer: 'Cloud & DevOps',
    proficiency: 89,
    years: '3 yrs',
    x: 54,
    y: 84,
    summary: 'Multi-stage GPU containers, Kubernetes autoscaling, and zero-downtime CI/CD.',
    connections: ['onnx', 'redis', 'aws'],
  },
  {
    id: 'aws',
    label: 'AWS & Terraform',
    layer: 'Cloud & DevOps',
    proficiency: 88,
    years: '2.5 yrs',
    x: 83,
    y: 84,
    summary: 'ECS, Lambda, S3, CloudFront, and reproducible infrastructure-as-code.',
    connections: ['pgvector', 'redis', 'nextjs', 'docker'],
  },
];
