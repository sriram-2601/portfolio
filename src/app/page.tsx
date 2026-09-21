'use client';

import { useState } from 'react';
import styles from './page.module.css';
import ContactForm from './components/ContactForm';

interface Project {
  title: string;
  category: 'Agentic & GenAI' | 'Cloud & ML' | 'Full-Stack';
  isFlagship?: boolean;
  metric: string;
  desc: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Agentflow AI – Multi-Agent Automation Platform',
    category: 'Agentic & GenAI',
    isFlagship: true,
    metric: '5-Agent Orchestration',
    desc: 'Enterprise-grade agentic workflow platform that compiles natural language prompts into executable visual node DAGs. Engineered with a multi-agent loop (Planner, Executor, Validator, Recovery, Monitor), real-time WebSocket timeline execution, and third-party OAuth integrations.',
    tech: ['Next.js', 'Express', 'React Flow', 'Socket.IO', 'Multi-Agent Loop', 'OAuth'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600&h=350',
    liveUrl: 'https://client-eight-gules-56.vercel.app',
    githubUrl: 'https://github.com/sriram-2601/Automation'
  },
  {
    title: 'OmniSupport AI – Multi-Brand Support Agent',
    category: 'Agentic & GenAI',
    isFlagship: true,
    metric: '106,860+ Conversations',
    desc: 'Evidence-grounded customer support platform trained on 106,860+ real Twitter support dialogs across 108 brands and 22+ languages. Features semantic FAISS vector search, deterministic risk gating, and a 31-point Web Application VAPT security defense preventing prompt injection and hallucinations.',
    tech: ['Python', 'Streamlit', 'FAISS', 'PyTorch', 'Vector Search', '31-Point VAPT'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600&h=350',
    liveUrl: 'https://omniai-2601.streamlit.app/',
    githubUrl: 'https://github.com/sriram-2601/OmniAI'
  },
  {
    title: 'MobileNetV3 – Serverless Distributed Inference',
    category: 'Cloud & ML',
    metric: '0% Accuracy Loss',
    desc: 'Distributed split-computing architecture for deep learning inference. Partitions pre-trained MobileNetV3 neural networks into sequential computational slices across AWS Lambda and S3, bypassing serverless memory limits with zero accuracy degradation.',
    tech: ['PyTorch', 'AWS Lambda', 'AWS Step Functions', 'Amazon S3', 'Docker', 'Streamlit'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600&h=350',
    liveUrl: 'https://majorproject-aazdeaqzhxmhvxhx5dsntz.streamlit.app/',
    githubUrl: 'https://github.com/sriram-2601/Mobilenetv3'
  },
  {
    title: 'JobFinderAgent – Autonomous Job Search & ATS Agent',
    category: 'Agentic & GenAI',
    metric: 'Automated ATS Matching',
    desc: 'Autonomous multi-agent system automating the job hunting lifecycle: scrapes live listings via Playwright, evaluates resume semantic compatibility with Google Gemini AI, identifies skill gaps, and dispatches automated alerts.',
    tech: ['FastAPI', 'Python', 'React', 'Tailwind CSS', 'Playwright', 'Gemini AI'],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600&h=350',
    liveUrl: 'https://jobfinder-agent.onrender.com/',
    githubUrl: 'https://github.com/sriram-2601/JobFinderAgent'
  },
  {
    title: 'Sahaya – Mental Health Sanctuary & Clinical Early Detection',
    category: 'Agentic & GenAI',
    metric: 'Sub-Second Groq Llama-3',
    desc: 'Empathetic mental health sanctuary offering 24/7 conversational guidance with early anxiety and depression detection algorithms, clinical sentiment triage, mindful self-care modules, and verified specialist escalation.',
    tech: ['React', 'Groq API', 'Llama 3', 'Firebase', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600&h=350',
    liveUrl: 'https://sriram-2601.github.io/SahayaProject/',
    githubUrl: 'https://github.com/sriram-2601/SahayaProject'
  },
  {
    title: 'EcoPack AI – Circular Packaging & Carbon Volumetric Optimizer',
    category: 'Cloud & ML',
    metric: 'Volumetric Carbon Audit',
    desc: 'AI-driven e-commerce packaging auditor utilizing Google Gemini Vision. Analyzes item geometry to optimize surface area carbon metrics, eliminate shipping voids, and produce QR-guided circular recycling instructions.',
    tech: ['Next.js', 'Google Gemini Vision', 'Tailwind CSS', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=600&h=350',
    liveUrl: 'https://hackathon-plum-three.vercel.app',
    githubUrl: 'https://github.com/sriram-2601/Hackathon'
  },
  {
    title: 'Smart Price Prediction – E-Commerce Valuation Engine',
    category: 'Cloud & ML',
    metric: 'Real-Time ML Inference',
    desc: 'Dynamic valuation engine running Scikit-Learn regression models on catalog data. Features an interactive glassmorphic interface with multi-parameter pricing adjustments and confidence interval estimates.',
    tech: ['Python', 'Scikit-Learn', 'React', 'Glassmorphic UI', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=350',
    liveUrl: 'https://smart-price-prediction.vercel.app/',
    githubUrl: 'https://github.com/sriram-2601/SmartPricePrediction'
  },
  {
    title: 'NxtFlix – High-Performance Movie Streaming & Discovery',
    category: 'Full-Stack',
    metric: 'Sub-100ms Catalog Search',
    desc: 'Modern media discovery platform featuring secure user authentication, infinite responsive carousels, genre-based filtering, watch-later list persistence, and debounced instant search built with React 19.',
    tech: ['React 19', 'Next.js', 'Vite 7', 'TMDB API', 'LocalStorage'],
    image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=600&h=350',
    liveUrl: 'https://nxtflix-two.vercel.app',
    githubUrl: 'https://github.com/sriram-2601/NxtFlix'
  }
];

type CategoryFilter = 'All' | 'Agentic & GenAI' | 'Cloud & ML' | 'Full-Stack';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className={styles.layoutWrapper}>
      
      {/* Sticky Sidebar */}
      <aside className={`card ${styles.sidebar}`}>
        <img 
          src="/profile.jpg" 
          alt="Sriram Venkat" 
          className={styles.profileImage}
        />
        <h1 className={styles.name}>Sriram Venkat</h1>
        <p className={styles.title}>Full-Stack & AI Engineer</p>
        <p className={`text-muted ${styles.location}`}>Hyderabad, India</p>
        
        <div className={styles.socialIcons}>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://github.com/sriram-2601" target="_blank" rel="noopener noreferrer" title="GitHub (sriram-2601)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="mailto:sriramnbv26@gmail.com" title="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>

        <a href="#contact" className={`btn btn-primary ${styles.sidebarBtn}`}>Let&apos;s Talk</a>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>
            Building Scalable AI & <br/>Full-Stack <span className="text-accent">Solutions</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Specialized in autonomous multi-agent systems, distributed cloud ML inference, and enterprise full-stack engineering. Transforming complex engineering challenges into production-ready software.
          </p>
          
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h3>106K+</h3>
              <p className="text-muted">Conversations Analyzed</p>
            </div>
            <div className={styles.statItem}>
              <h3>8+</h3>
              <p className="text-muted">Flagship Systems</p>
            </div>
            <div className={styles.statItem}>
              <h3>99.8%</h3>
              <p className="text-muted">Distributed Precision</p>
            </div>
          </div>

          <div className={styles.heroActions}>
            <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
            <a href="#projects" className="text-white" style={{fontWeight: 600}}>Explore Projects →</a>
            <a href="/res-1.pdf" download="Sriram_Venkat_Resume.pdf" className="btn btn-outline" style={{marginLeft: 'auto'}}>
              Download Resume
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className={styles.sectionTitle}>
            Flagship Projects <br/>and <span className="text-accent">Architectures</span>
          </h2>

          {/* Interactive Category Filter Tabs */}
          <div className={styles.filterTabs} role="tablist" aria-label="Project Categories">
            {(['All', 'Agentic & GenAI', 'Cloud & ML', 'Full-Stack'] as CategoryFilter[]).map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${styles.filterTab} ${activeCategory === cat ? styles.filterTabActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <div 
                key={project.title} 
                className={`card ${styles.projectCard} ${project.isFlagship ? styles.flagshipCard : ''}`}
              >
                <div className={styles.cardHeaderMeta}>
                  <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                    <span className={styles.categoryBadge}>{project.category}</span>
                    {project.isFlagship && (
                      <span className={styles.flagshipBadge}>★ Flagship</span>
                    )}
                  </div>
                  <span className={styles.metricBadge}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    {project.metric}
                  </span>
                </div>

                <div className={styles.projectImageContainer}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={styles.projectImage} 
                    loading="lazy"
                  />
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={`text-muted ${styles.projectDesc}`}>{project.desc}</p>
                
                <div className={styles.techPills}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.techPill}>{t}</span>
                  ))}
                </div>

                <div className={styles.projectLinks}>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section>
          <h2 className={styles.sectionTitle}>
            Top-Tier Tools for <br/>Exceptional <span className="text-accent">Results</span>
          </h2>
          <div className={styles.toolsGrid}>
            
            <div className={`card ${styles.toolCard}`}>
              <div className={styles.toolIcon}>🐍</div>
              <div className={styles.toolInfo}>
                <h4 className="text-white">Python</h4>
                <p className="text-muted">Deep Learning, PyTorch & Agents</p>
              </div>
            </div>
            
            <div className={`card ${styles.toolCard}`}>
              <div className={styles.toolIcon}>⚛️</div>
              <div className={styles.toolInfo}>
                <h4 className="text-white">React & Next.js</h4>
                <p className="text-muted">Modern Full-Stack Applications</p>
              </div>
            </div>

            <div className={`card ${styles.toolCard}`}>
              <div className={styles.toolIcon}>☁️</div>
              <div className={styles.toolInfo}>
                <h4 className="text-white">AWS Cloud</h4>
                <p className="text-muted">Lambda, Step Functions & S3</p>
              </div>
            </div>

            <div className={`card ${styles.toolCard}`}>
              <div className={styles.toolIcon}>🐳</div>
              <div className={styles.toolInfo}>
                <h4 className="text-white">Docker</h4>
                <p className="text-muted">Containerization & Deployment</p>
              </div>
            </div>

            <div className={`card ${styles.toolCard}`}>
              <div className={styles.toolIcon}>🍃</div>
              <div className={styles.toolInfo}>
                <h4 className="text-white">Databases</h4>
                <p className="text-muted">MongoDB, PostgreSQL & SQLite</p>
              </div>
            </div>

            <div className={`card ${styles.toolCard}`}>
              <div className={styles.toolIcon}>⚡</div>
              <div className={styles.toolInfo}>
                <h4 className="text-white">Generative AI</h4>
                <p className="text-muted">FAISS, LangChain & Gemini</p>
              </div>
            </div>

          </div>
        </section>

        {/* Education & Journey Section */}
        <section>
          <h2 className={styles.sectionTitle}>
            Education and <br/><span className="text-accent">Journey</span>
          </h2>
          <div className="grid-2">
            
            <div className={`card ${styles.journeyItem}`}>
              <div className={styles.journeyDate}>2022 - 2026</div>
              <h3 className={styles.journeyTitle}>Bachelor of Technology in Computer Science Engineering (Data Science)</h3>
              <p className="text-muted">Keshav Memorial Institute of Technology, Hyderabad</p>
            </div>

            <div className={`card ${styles.journeyItem}`}>
              <div className={styles.journeyDate}>2020 - 2022</div>
              <h3 className={styles.journeyTitle}>Intermediate MPC</h3>
              <p className="text-muted">SriAadya Junior College</p>
            </div>

            <div className={`card ${styles.journeyItem}`}>
              <div className={styles.journeyDate}>2020</div>
              <h3 className={styles.journeyTitle}>Secondary School of Education</h3>
              <p className="text-muted">Janapriya High School</p>
            </div>

          </div>
        </section>

        {/* Collaborate / Contact Section */}
        <section id="contact">
          <div className={`card ${styles.collaborateBox}`}>
            <h2 className={styles.collaborateTitle}>Let&apos;s <br/><span className="text-accent">collaborate</span></h2>
            <p className={`text-muted ${styles.collaborateText}`}>
              Looking for an AI & Full-Stack Engineer who can build enterprise-grade autonomous agents and scalable cloud architectures? Let&apos;s build something impactful together.
            </p>
            <div style={{width: '100%', maxWidth: '500px'}}>
              <ContactForm />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
