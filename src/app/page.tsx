import styles from './page.module.css';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <main>
      {/* Hero Section (Present) */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>
            Hi, I'm <span className="text-gradient">Sriram Venkat</span>
          </h1>
          <p className={styles.heroSubtitle}>
            A results-driven B.Tech CS graduate specializing in Full-Stack Development and AI. 
            Passionate about building scalable applications and deploying intelligent models.
          </p>
          <div className={styles.heroActions}>
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            {/* The Resume Download Button */}
            <a href="/resume.pdf" download="Sriram_Venkat_Resume.pdf" className="btn btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* The Past (Education & Background) */}
      <section id="past" className={`section ${styles.past}`}>
        <div className="container">
          <h2 className="section-title">My Journey</h2>
          <div className={styles.timeline}>
            
            <div className={styles.timelineItem}>
              <div className={`glass-panel ${styles.timelineContent}`}>
                <div className={styles.timelineDate}>Nov 2022 - Present</div>
                <h3 className={styles.timelineTitle}>B.Tech in Computer Science Engineering (Data Science)</h3>
                <p>Keshav Memorial Institute of Technology, Hyderabad</p>
                <p className="text-muted" style={{marginTop: '0.5rem', fontSize: '0.9rem'}}>Project Expo Finalist (Dec 2025)</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={`glass-panel ${styles.timelineContent}`}>
                <div className={styles.timelineDate}>2020 - 2022</div>
                <h3 className={styles.timelineTitle}>Intermediate MPC</h3>
                <p>SriAadya Junior College (CGPA: 9.30/10.0)</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={`glass-panel ${styles.timelineContent}`}>
                <div className={styles.timelineDate}>2020</div>
                <h3 className={styles.timelineTitle}>Secondary School of Education</h3>
                <p>Janapriya High School (CGPA: 10.0/10.0)</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects (What I did) */}
      <section id="projects" className={`section ${styles.present}`}>
        <div className="container">
          <h2 className="section-title">Selected Projects</h2>
          <div className="grid-3">
            
            <div className={`glass-panel ${styles.projectCard}`}>
              <h3>Serverless ML Inference</h3>
              <p style={{marginTop: '1rem', color: 'var(--color-text-muted)', flex: 1}}>
                Built a serverless machine learning inference system using AWS Lambda, storing models in S3 and containerizing deployment with Docker. Applied model slicing to enable scalable and cost-efficient predictions.
              </p>
              <div className={styles.projectTags}>
                <span className={styles.tag}>AWS Lambda</span>
                <span className={styles.tag}>Docker</span>
                <span className={styles.tag}>Python</span>
              </div>
            </div>

            <div className={`glass-panel ${styles.projectCard}`}>
              <h3>Sahaya – AI Chatbot</h3>
              <p style={{marginTop: '1rem', color: 'var(--color-text-muted)', flex: 1}}>
                Developed a mental health chatbot utilizing Firebase and the Groq API. Improved UI/UX with an advanced, responsive design using custom CSS and JavaScript.
              </p>
              <div className={styles.projectTags}>
                <span className={styles.tag}>Firebase</span>
                <span className={styles.tag}>Groq API</span>
                <span className={styles.tag}>JS/CSS</span>
              </div>
            </div>

            <div className={`glass-panel ${styles.projectCard}`}>
              <h3>Smart Price Prediction</h3>
              <p style={{marginTop: '1rem', color: 'var(--color-text-muted)', flex: 1}}>
                Created a React-based e-commerce web app to predict optimal pricing based on catalog data. Designed a seamless, glassmorphic UI to streamline product feature input.
              </p>
              <div className={styles.projectTags}>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>Vite</span>
                <span className={styles.tag}>Vercel</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Future */}
      <section id="future" className={`section ${styles.future}`}>
        <div className="container">
          <h2 className="section-title">Looking Forward</h2>
          <div className="glass-panel" style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            <p style={{fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text-muted)'}}>
              I am actively applying for roles where I can leverage my skills in <strong>Python, React, and AWS</strong>. 
              My goal is to continue building <strong>scalable LLM solutions</strong>, reducing latency, and creating 
              innovative, user-centric applications within a forward-thinking tech team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`section ${styles.contact}`}>
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          
          <ContactForm />

          {/* Additional Contact Info */}
          <div className={styles.contactInfo}>
            <h3>Sriram Venkat</h3>
            <div className={styles.contactLinks}>
              <a href="mailto:sriramnbv26@gmail.com" className={styles.contactLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                sriramnbv26@gmail.com
              </a>
              <a href="tel:+916305477216" className={styles.contactLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +91 6305477216
              </a>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
