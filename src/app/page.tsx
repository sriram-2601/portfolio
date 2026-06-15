import styles from './page.module.css';
import ContactForm from './components/ContactForm';

export default function Home() {
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
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" title="GitHub">
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
            Passionate about creating intuitive user experiences. Specialize in building scalable machine learning inference systems and modern web applications.
          </p>
          
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h3>+1</h3>
              <p className="text-muted">Year Experience</p>
            </div>
            <div className={styles.statItem}>
              <h3>+3</h3>
              <p className="text-muted">Core Projects</p>
            </div>
            <div className={styles.statItem}>
              <h3>100%</h3>
              <p className="text-muted">Commitment</p>
            </div>
          </div>

          <div className={styles.heroActions}>
            <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
            <a href="#projects" className="text-white" style={{fontWeight: 600}}>My Work →</a>
            <a href="/resume.pdf" download="Sriram_Venkat_Resume.pdf" className="btn btn-outline" style={{marginLeft: 'auto'}}>
              Download Resume
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className={styles.sectionTitle}>
            Recent Projects <br/>and <span className="text-accent">Achievements</span>
          </h2>
          <div className={styles.projectsGrid}>
            
            <div className={`card ${styles.projectCard}`}>
              <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=400&h=250" alt="Serverless ML" className={styles.projectImage} />
              <h3 className={styles.projectTitle}>Serverless ML Inference</h3>
              <p className={`text-muted ${styles.projectDesc}`}>Built a serverless machine learning inference system using AWS Lambda, storing models in S3 and containerizing deployment with Docker.</p>
              <div className={styles.projectLinks}>
                <a href="https://majorproject-aazdeaqzhxmhvxhx5dsntz.streamlit.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
                <a href="https://github.com/sriram-2601/Mobilenetv3" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
              </div>
            </div>

            <div className={`card ${styles.projectCard}`}>
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400&h=250" alt="Sahaya AI" className={styles.projectImage} />
              <h3 className={styles.projectTitle}>Sahaya – AI Chatbot</h3>
              <p className={`text-muted ${styles.projectDesc}`}>Developed a mental health chatbot utilizing Firebase and Groq API. Enhanced UI/UX through responsive design.</p>
              <div className={styles.projectLinks}>
                <a href="https://arunyerram.github.io/SahayA/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
                <a href="https://github.com/sriram-2601/SahayA" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
              </div>
            </div>

            <div className={`card ${styles.projectCard}`}>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=250" alt="Price Prediction" className={styles.projectImage} />
              <h3 className={styles.projectTitle}>Smart Price Prediction</h3>
              <p className={`text-muted ${styles.projectDesc}`}>Created a React-based e-commerce app to dynamically predict optimal pricing based on catalog data. Glassmorphic UI.</p>
              <div className={styles.projectLinks}>
                <a href="https://smart-price-prediction.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo</a>
                <a href="https://github.com/sriram-2601/SmartPricePrediction" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
              </div>
            </div>

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
                <p className="text-muted">Deep Learning & ML</p>
              </div>
            </div>
            
            <div className={`card ${styles.toolCard}`}>
              <div className={styles.toolIcon}>⚛️</div>
              <div className={styles.toolInfo}>
                <h4 className="text-white">React & Next.js</h4>
                <p className="text-muted">Frontend Framework</p>
              </div>
            </div>

            <div className={`card ${styles.toolCard}`}>
              <div className={styles.toolIcon}>☁️</div>
              <div className={styles.toolInfo}>
                <h4 className="text-white">AWS Lambda</h4>
                <p className="text-muted">Serverless Computing</p>
              </div>
            </div>

            <div className={`card ${styles.toolCard}`}>
              <div className={styles.toolIcon}>🐳</div>
              <div className={styles.toolInfo}>
                <h4 className="text-white">Docker</h4>
                <p className="text-muted">Containerization</p>
              </div>
            </div>

            <div className={`card ${styles.toolCard}`}>
              <div className={styles.toolIcon}>🍃</div>
              <div className={styles.toolInfo}>
                <h4 className="text-white">MongoDB</h4>
                <p className="text-muted">NoSQL Database</p>
              </div>
            </div>

            <div className={`card ${styles.toolCard}`}>
              <div className={styles.toolIcon}>⚡</div>
              <div className={styles.toolInfo}>
                <h4 className="text-white">TensorFlow</h4>
                <p className="text-muted">Machine Learning</p>
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
              Unlock the potential of your product with expert development and AI solutions. Let&apos;s build something amazing together.
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
