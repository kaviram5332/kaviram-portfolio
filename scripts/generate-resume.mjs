// Pure Node.js PDF 1.4 generator for Kaviram's Resume (no external dependencies required)
import fs from 'node:fs';
import path from 'node:path';

const lines = [
  { text: 'KAVIRAM', size: 22, bold: true, y: 750, x: 50 },
  { text: 'AI Engineer  |  Software Developer  |  Systems & Problem Solver', size: 10.5, bold: false, y: 732, x: 50 },
  { text: 'hello@kaviram.dev   |   github.com/kaviram   |   linkedin.com/in/kaviram   |   Bengaluru, IN', size: 9, bold: false, y: 716, x: 50 },
  { text: '_________________________________________________________________________________________________', size: 9, bold: false, y: 706, x: 50 },

  { text: 'SUMMARY', size: 11, bold: true, y: 684, x: 50 },
  { text: 'Software engineer and AI developer specializing in production LLM agents, deep learning', size: 9.5, bold: false, y: 668, x: 50 },
  { text: 'inference optimization, distributed backends, and high-craft web applications. Proven track', size: 9.5, bold: false, y: 655, x: 50 },
  { text: 'record shipping low-latency AI systems, scalable SaaS products, and winning national hackathons.', size: 9.5, bold: false, y: 642, x: 50 },

  { text: 'CORE TECHNICAL SKILLS', size: 11, bold: true, y: 616, x: 50 },
  { text: 'AI & Deep Learning:   PyTorch, Transformers, RAG, LangGraph, ONNX/TensorRT, Fine-Tuning (LoRA)', size: 9.5, bold: false, y: 600, x: 50 },
  { text: 'Languages & DSA:      Python, TypeScript, C++, SQL, Go, Graph & Dynamic Programming Optimization', size: 9.5, bold: false, y: 586, x: 50 },
  { text: 'Web & Product:        React, Next.js, FastAPI, Node.js, Tailwind CSS, WebGL/Canvas, PostgreSQL', size: 9.5, bold: false, y: 572, x: 50 },
  { text: 'Cloud & DevOps:       AWS (ECS/Lambda/S3), Docker, Kubernetes, GitHub Actions, Terraform, Redis', size: 9.5, bold: false, y: 558, x: 50 },

  { text: 'EXPERIENCE & MILESTONES', size: 11, bold: true, y: 530, x: 50 },
  { text: 'AI Systems Engineering Intern  -  NeuralScale Labs (2025 - 2026)', size: 10, bold: true, y: 514, x: 50 },
  { text: '- Architected hybrid RAG + reranking pipeline reducing hallucination rate by 41% across 2M+ docs.', size: 9.2, bold: false, y: 500, x: 58 },
  { text: '- Quantized transformer inference endpoints via ONNX Runtime, cutting P95 latency from 240ms to 68ms.', size: 9.2, bold: false, y: 486, x: 58 },

  { text: 'Full-Stack Software Intern  -  Velocity Cloud Systems (2024)', size: 10, bold: true, y: 464, x: 50 },
  { text: '- Built real-time observability dashboard in React, TypeScript & WebSockets handling 50k events/min.', size: 9.2, bold: false, y: 450, x: 58 },
  { text: '- Designed idempotent job orchestration queues with FastAPI and Redis, achieving 99.94% SLA.', size: 9.2, bold: false, y: 436, x: 58 },

  { text: 'FEATURED PROJECTS', size: 11, bold: true, y: 408, x: 50 },
  { text: '1. AegisFlow - Autonomous Multi-Agent Code & Incident Triage Engine', size: 10, bold: true, y: 392, x: 50 },
  { text: '   Stack: Python, PyTorch, LangGraph, FastAPI, React, Docker, pgvector', size: 9, bold: false, y: 378, x: 54 },
  { text: '   Outcome: Cut simulated root-cause triage time by 63% with deterministic tool-use verification.', size: 9.2, bold: false, y: 364, x: 54 },

  { text: '2. PulseVision - Real-Time Edge Anomaly & Defect Detection Pipeline', size: 10, bold: true, y: 342, x: 50 },
  { text: '   Stack: PyTorch, YOLOv8, TensorRT, OpenCV, WebRTC, Kubernetes', size: 9, bold: false, y: 328, x: 54 },
  { text: '   Outcome: Achieved 98.4% mAP at 58 FPS on edge GPUs, eliminating manual inspection bottlenecks.', size: 9.2, bold: false, y: 314, x: 54 },

  { text: '3. ChronosDB - Semantic Vector & Time-Series Retrieval Engine', size: 10, bold: true, y: 292, x: 50 },
  { text: '   Stack: Python, C++ Bindings, HNSW, FastAPI, TypeScript, Next.js', size: 9, bold: false, y: 278, x: 54 },
  { text: '   Outcome: 4.2x faster hybrid metadata+vector queries under 10M-embedding stress benchmarks.', size: 9.2, bold: false, y: 264, x: 54 },

  { text: 'EDUCATION, CERTIFICATIONS & ACHIEVEMENTS', size: 11, bold: true, y: 236, x: 50 },
  { text: 'B.Tech in Computer Science & Artificial Intelligence  (2022 - 2026)  |  CGPA: 9.1 / 10.0', size: 9.5, bold: true, y: 220, x: 50 },
  { text: '- Winner, National GenAI Builders Hackathon 2025 (1st of 420+ teams)', size: 9.2, bold: false, y: 204, x: 54 },
  { text: '- ICPC Regionalist & Top 1.5% Competitive Programmer (1900+ Peak Rating, 750+ DSA Problems)', size: 9.2, bold: false, y: 190, x: 54 },
  { text: '- AWS Certified Machine Learning - Specialty  |  DeepLearning.AI Specialization', size: 9.2, bold: false, y: 176, x: 54 },
  { text: '- Open Source Contributor: 400+ GitHub stars across AI tooling and inference utilities', size: 9.2, bold: false, y: 162, x: 54 },
];

function escapePdfText(str) {
  return str.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

let stream = 'BT\n';
for (const l of lines) {
  const font = l.bold ? '/F2' : '/F1';
  stream += `${font} ${l.size} Tf\n1 0 0 1 ${l.x} ${l.y} Tm\n(${escapePdfText(l.text)}) Tj\n`;
}
stream += 'ET\n';

const objects = [
  '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
  '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
  '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n',
  `4 0 obj\n<< /Length ${Buffer.byteLength(stream, 'utf8')} >>\nstream\n${stream}endstream\nendobj\n`,
  '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
  '6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n',
];

let pdf = '%PDF-1.4\n';
const offsets = [0];
for (const obj of objects) {
  offsets.push(Buffer.byteLength(pdf, 'utf8'));
  pdf += obj;
}
const xrefStart = Buffer.byteLength(pdf, 'utf8');
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (let i = 1; i <= objects.length; i++) {
  pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

const outPath = path.resolve('public', 'Kaviram_Resume.pdf');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, pdf, 'utf8');
console.log('Generated', outPath, Buffer.byteLength(pdf, 'utf8'), 'bytes');
