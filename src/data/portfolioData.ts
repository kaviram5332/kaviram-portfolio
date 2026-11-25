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
  name: 'Kaviram',
  monogram: '</>Developer',
  role: 'Software Developer',
  heroHeadline: "I'm Kaviram, a Software Developer.",
  secondaryHeadline: 'Crafting Scalable Products with Code and Creativity',
  location: 'Bengaluru, India · Remote Worldwide',
  availability: 'Available for Software Developer Roles',
  email: 'hello@kaviram.dev',
  github: 'https://github.com/kaviram',
  linkedin: 'https://linkedin.com/in/kaviram',
  x: 'https://x.com/kaviram_dev',
  resumePath: '/Kaviram_Resume.pdf',
  totalFrames: 85,
};

export const ABOUT_DATA = {
  eyebrow: '01 // IDENTITY & PHILOSOPHY',
  headline: 'Where Engineering Precision Meets Architectural Product Craft.',
  intro:
    "I'm Kaviram — a software developer obsessed with turning complex engineering challenges into fast, resilient, human-centered products.",
  journey:
    'My journey started in competitive programming and low-level systems optimization, where every millisecond and memory byte mattered. That foundation evolved into building scalable backend services, distributed cloud platforms, and responsive web applications that feel effortless on the surface while running rock-solid architecture underneath.',
  mission:
    'To engineer software that is fast, dependable, and thoughtfully designed — combining algorithmic rigor, production-grade reliability, and unforgettable craft.',
  values: [
    {
      title: 'First-Principles Engineering',
      description:
        'Strip problems down to complexity bounds, latency budgets, and data invariants before writing a single abstraction.',
      metric: 'O(log n) mindset',
    },
    {
      title: 'Production-Grade Systems',
      description:
        'Code only matters when it survives real traffic: clean APIs, fault tolerance, observability, and sub-100ms responses.',
      metric: '99.4% SLA',
    },
    {
      title: '60fps Craft & Clarity',
      description:
        'Interfaces should feel tactile and inevitable — marrying Apple-level restraint with Stripe-grade developer ergonomics.',
      metric: '60fps UI',
    },
  ],
  stats: [
    { label: 'Production Systems Shipped', value: '14+' },
    { label: 'DSA Problems Solved', value: '750+' },
    { label: 'Peak Latency Reduction', value: '71%' },
    { label: 'Open-Source Stars', value: '420+' },
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
    type: 'experience',
    typeLabel: 'Software Engineering Internship',
    title: 'Software Systems Engineering Intern',
    organization: 'NeuralScale Labs',
    location: 'Bengaluru · Hybrid',
    description:
      'Architected high-throughput search retrieval services and low-latency backend microservices serving enterprise knowledge workflows.',
    highlights: [
      'Improved search ranking accuracy by 41% across large-scale document pipelines.',
      'Cut P95 API inference latency from 240ms to 68ms using runtime optimization and dynamic batching.',
      'Built automated evaluation and regression test suites running on every commit.',
    ],
    metricBadge: '-71% Latency',
  },
  {
    id: 'tl-3',
    period: '2024',
    type: 'experience',
    typeLabel: 'Software Engineering Internship',
    title: 'Full-Stack Software Engineer Intern',
    organization: 'Velocity Cloud Systems',
    location: 'Remote',
    description:
      'Designed real-time distributed observability dashboards and fault-tolerant asynchronous job queues for high-volume SaaS telemetry.',
    highlights: [
      'Built React + TypeScript WebSocket streaming views processing 50k+ live events/min at 60fps.',
      'Implemented idempotent FastAPI + Redis worker orchestration sustaining 99.94% SLA.',
    ],
    metricBadge: '50k events/min',
  },
  {
    id: 'tl-4',
    period: '2024',
    type: 'milestone',
    typeLabel: 'Certification & Research',
    title: 'AWS Machine Learning Specialty & Edge Quantization Paper',
    organization: 'Amazon Web Services & IEEE Student Symposium',
    location: 'Published',
    description:
      'Earned AWS ML Specialty certification and co-authored applied research on low-bitwidth vision transformer quantization for constrained edge nodes.',
    highlights: [
      'Demonstrated 3.4x memory compression with <1.1% accuracy variance on edge benchmarks.',
      'Validated multi-region MLOps deployment blueprints with Terraform & ECS.',
    ],
    metricBadge: 'AWS Certified',
  },
  {
    id: 'tl-5',
    period: '2022 — 2026',
    type: 'education',
    typeLabel: 'Education',
    title: 'B.Tech in Computer Science & Artificial Intelligence',
    organization: 'Institute of Engineering & Technology',
    location: 'CGPA: 9.1 / 10.0',
    description:
      'Deep academic focus on Machine Learning, Distributed Systems, Operating Systems, Compiler Design, and Advanced Algorithms.',
    highlights: [
      'ICPC Regionalist & Lead Mentor for the University Algorithms & AI Research Guild.',
      'Dean’s Merit List across 6 consecutive semesters.',
    ],
    metricBadge: '9.1 CGPA',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-2',
    category: 'Competition',
    title: 'ICPC Regionalist & Top 1.5% Algorithmic Coder',
    issuer: 'ICPC / Codeforces / LeetCode',
    year: '2024',
    metric: '1900+ Peak Rating',
    description: 'Solved 750+ complex graph, DP, and segment-tree problems; mentored junior cohorts in algorithmic thinking.',
  },
  {
    id: 'ach-3',
    category: 'Certification',
    title: 'AWS Certified Machine Learning — Specialty',
    issuer: 'Amazon Web Services',
    year: '2024',
    metric: 'Verified Credential',
    description: 'Production ML architecture, feature engineering, distributed training, and secure SageMaker/ECS deployment.',
  },
  {
    id: 'ach-4',
    category: 'Research',
    title: 'Low-Bitwidth Quantization for Edge Vision Transformers',
    issuer: 'IEEE Undergraduate Research Track',
    year: '2025',
    metric: '3.4x Compression',
    description: 'Empirical study on mixed-precision calibration preserving 98.9% baseline accuracy on embedded GPUs.',
  },
  {
    id: 'ach-5',
    category: 'Open Source',
    title: 'ChronosDB & TensorForge Maintainer',
    issuer: 'GitHub Open Source',
    year: '2024 — 2026',
    metric: '420+ GitHub Stars',
    description: 'Authored open-source C++/Python vector retrieval bindings and CI model benchmarking tooling.',
  },
  {
    id: 'ach-6',
    category: 'Award',
    title: 'Dean’s Engineering Excellence & Innovation Award',
    issuer: 'Academic Council',
    year: '2025',
    metric: 'Top 1% Cohort',
    description: 'Recognized for leadership across applied AI research, open-source impact, and capstone systems delivery.',
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
