// Pure Node.js PDF 1.4 generator matching Kaviram R's authentic 1-page resume
import fs from 'node:fs';
import path from 'node:path';

const lines = [
  // Header
  { text: 'KAVIRAM R', size: 20, bold: true, y: 752, x: 245, color: '0.07 0.09 0.15' },
  { text: 'Software Developer  |  Full Stack Engineer  |  AI/ML Enthusiast  |  2026 B.Tech Graduate', size: 9.5, bold: false, y: 736, x: 112, color: '0.15 0.39 0.92' },
  { text: '+91 8122910564  |  kaviramkaviram21@gmail.com  |  github.com/kaviram5332  |  linkedin.com/in/kaviram  |  Chennai, TN', size: 8.2, bold: false, y: 722, x: 56, color: '0.25 0.28 0.35' },

  // Professional Summary
  { text: 'PROFESSIONAL SUMMARY', size: 10, bold: true, y: 696, x: 48, color: '0.15 0.39 0.92', ruleY: 691 },
  { text: 'Final-year B.Tech IT student at College of Engineering, Guindy with hands-on experience engineering full-stack web', size: 8.8, bold: false, y: 677, x: 48 },
  { text: 'applications, deep learning systems, and real-time NLP platforms. Proficient in Python, React, Node.js, REST APIs,', size: 8.8, bold: false, y: 665, x: 48 },
  { text: 'MySQL, and PyTorch. Strong foundation in Data Structures & Algorithms (DSA), system design, and Agile delivery.', size: 8.8, bold: false, y: 653, x: 48 },

  // Technical Skills
  { text: 'TECHNICAL SKILLS', size: 10, bold: true, y: 628, x: 48, color: '0.15 0.39 0.92', ruleY: 623 },
  { text: 'Frontend:    HTML5, CSS3, JavaScript (ES6+), React.js, Responsive Design, Full Stack Development', size: 8.8, bold: false, y: 609, x: 48 },
  { text: 'Backend:     Node.js, Python, Java, FastAPI, REST APIs, API Integration, Backend Development', size: 8.8, bold: false, y: 596, x: 48 },
  { text: 'AI / ML:     PyTorch, Deep Learning, Computer Vision, NLP, Machine Learning, Sentiment Analysis', size: 8.8, bold: false, y: 583, x: 48 },
  { text: 'Database:    MySQL, SQL, Relational Databases, Basic NoSQL', size: 8.8, bold: false, y: 570, x: 48 },
  { text: 'Dev Tools:   Git, GitHub, VS Code, Postman, Agile Methodology, Debugging, Problem Solving', size: 8.8, bold: false, y: 557, x: 48 },
  { text: 'Core CS:     Data Structures and Algorithms (DSA), System Design, OOP, OS, DBMS', size: 8.8, bold: false, y: 544, x: 48 },

  // Projects
  { text: 'PROJECTS', size: 10, bold: true, y: 518, x: 48, color: '0.15 0.39 0.92', ruleY: 513 },

  { text: 'Real-Time Deepfake Detection & Face Restoration Framework', size: 9.5, bold: true, y: 499, x: 48 },
  { text: 'Python, PyTorch, Computer Vision, Deep Learning  |  github.com/kaviram5332', size: 8.4, bold: false, y: 487, x: 48, color: '0.15 0.39 0.92' },
  { text: '- Developed a multi-task deep learning framework (MDL-Net) detecting deepfake images and videos using spatial,', size: 8.6, bold: false, y: 474, x: 54 },
  { text: '  temporal, and frequency-based forensic analysis - achieving improved classification accuracy and interpretability.', size: 8.6, bold: false, y: 462, x: 54 },
  { text: '- Implemented RGAM and FLM modules for pixel-level manipulation localization; designed TFCA for frame-level', size: 8.6, bold: false, y: 450, x: 54 },
  { text: '  inconsistency detection, and built a face restoration pipeline using ArcFace, FAISS, and RestoreFormer.', size: 8.6, bold: false, y: 438, x: 54 },

  { text: 'Real-Time Harassment Detection System (NLP)', size: 9.5, bold: true, y: 416, x: 48 },
  { text: 'Python, NLP Libraries, Machine Learning, REST API  |  github.com/kaviram5332', size: 8.4, bold: false, y: 404, x: 48, color: '0.15 0.39 0.92' },
  { text: '- Constructed a high-throughput NLP pipeline for real-time abusive text detection using ML classification models;', size: 8.6, bold: false, y: 391, x: 54 },
  { text: '  integrated graph-based severity dashboards for escalation pattern recognition with high precision.', size: 8.6, bold: false, y: 379, x: 54 },
  { text: '- Delivered a secure REST API with sentiment-based classification for instant reporting at minimal latency.', size: 8.6, bold: false, y: 367, x: 54 },

  { text: 'Academic Project Evaluation System', size: 9.5, bold: true, y: 345, x: 48 },
  { text: 'HTML5, CSS3, JavaScript, MySQL  |  github.com/kaviram5332', size: 8.4, bold: false, y: 333, x: 48, color: '0.15 0.39 0.92' },
  { text: '- Architected a scalable multi-role web platform with role-based access control and 15+ automated workflow', size: 8.6, bold: false, y: 320, x: 54 },
  { text: '  modules - cutting manual processing time by 40% through real-time tracking and efficient data pipelines.', size: 8.6, bold: false, y: 308, x: 54 },

  // Education
  { text: 'EDUCATION', size: 10, bold: true, y: 280, x: 48, color: '0.15 0.39 0.92', ruleY: 275 },
  { text: 'B.Tech - IT  |  College of Engineering, Guindy (Anna University)  |  2022 - 2026  |  CGPA: 7.0', size: 8.8, bold: true, y: 260, x: 48 },
  { text: 'Diploma - IT  |  Govt. Polytechnic College, Purasaiwalkam  |  2018 - 2021  |  89%', size: 8.8, bold: false, y: 246, x: 48 },
  { text: 'SSLC (10th)  |  Govt. High School, Veppampattu  |  2018  |  75.3%', size: 8.8, bold: false, y: 232, x: 48 },

  // Certifications & Achievements
  { text: 'CERTIFICATIONS & ACHIEVEMENTS', size: 10, bold: true, y: 204, x: 48, color: '0.15 0.39 0.92', ruleY: 199 },
  { text: '- Full Stack Web Development - Novitech   |   Machine Learning - Novitech', size: 8.8, bold: false, y: 184, x: 52 },
  { text: '- Shipped 3+ real-world software systems independently - achieving 40% processing time reduction and 50+ bugs fixed.', size: 8.8, bold: false, y: 170, x: 52 },
  { text: '- Core strengths: Full Stack Development, Deep Learning, API Integration, System Design, DSA, Agile, Version Control.', size: 8.8, bold: false, y: 156, x: 52 },

  { text: 'Eligible: 2026 Batch  |  B.Tech IT - College of Engineering, Guindy  |  Chennai', size: 8.2, bold: false, y: 112, x: 162, color: '0.4 0.45 0.52' },
];

function escapePdfText(str) {
  return str.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

let stream = '';
for (const l of lines) {
  if (l.ruleY) {
    stream += `0.15 0.39 0.92 RG\n0.7 w\n48 ${l.ruleY} m\n564 ${l.ruleY} l\nS\n`;
  }
  const rgb = l.color ?? '0.12 0.14 0.18';
  const font = l.bold ? '/F2' : '/F1';
  stream += `BT\n${rgb} rg\n${font} ${l.size} Tf\n1 0 0 1 ${l.x} ${l.y} Tm\n(${escapePdfText(l.text)}) Tj\nET\n`;
}

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
