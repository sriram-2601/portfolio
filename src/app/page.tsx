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
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          </a>
          <a href="mailto:sriramnbv26@gmail.com">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
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
              <div className={styles.journeyDate}>Nov 2022 - Present</div>
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
