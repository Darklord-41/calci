import { Link } from 'react-router-dom';
import { FaKeyboard, FaFileUpload, FaBolt, FaShieldAlt, FaMagic, FaCheckCircle, FaLayerGroup, FaQuestionCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Zap, Upload, ChevronRight, Calculator } from 'lucide-react';
import SpotlightCards from '../components/common/SpotlightCards';
import ShinyText from '../components/common/ShinyText';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container fade-in">
      {/* 1. Hero Section */}
      <section className="hero-section container" style={{ position: 'relative' }}>
          {/* Background Decorative Element */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', zIndex: -1, opacity: 0.2, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(37,99,235,0.3), rgba(124,58,237,0.3))', filter: 'blur(120px)', borderRadius: '50%', transform: 'scale(0.75)' }} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-content-new"
          >
            <div className="hero-badge">
              <Zap size={12} />
              The Intelligent Grade Calculator
            </div>
            <h1 className="hero-title-new">
              Smarter Result <br />
              <ShinyText 
                text="Calculations."
                shineColor="#60a5fa"
                color="#b5b5b5"
                speed={3}
                spread={120}
                className="hero-title-gradient"
              />
            </h1>
            <p className="hero-subtitle-new">
              Eliminate manual errors. CALCI uses advanced OCR to parse your result sheets instantly, securely, and entirely in your browser.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hero-actions-new"
          >
            <Link to="/upload" className="hero-btn-primary group">
              <Upload size={22} strokeWidth={2.5} />
              Smart Upload
              <ChevronRight size={20} className="icon-slide" />
            </Link>
            <Link to="/manual" className="hero-btn-secondary">
              <Calculator size={22} strokeWidth={2.5} />
              Manual Entry
            </Link>
          </motion.div>
      </section>

      {/* 2. Feature Showcase (xAI Style Layout) */}
      <section className="features-section-ls container">
        <div className="features-container-ls">
          {/* Card 1 */}
          <Link to="/upload" className="ls-card theme-red group">
            <div className="ls-icon-wrapper">
              <FaMagic size={24} />
            </div>
            <h3>Smart OCR</h3>
            <p>Don't type. Just snap. Our advanced Optical Character Recognition extracts your subjects and grades in seconds.</p>
          </Link>

          {/* Card 2 */}
          <Link to="/manual" className="ls-card theme-green group">
             <div className="ls-icon-wrapper">
              <FaBolt size={24} />
            </div>
            <h3>Instant Analysis</h3>
            <p>Get your SGPA calculated immediately with automated formula application. No manual math errors.</p>
          </Link>

          {/* Card 3 */}
          <div className="ls-card theme-blue group">
             <div className="ls-icon-wrapper">
              <FaShieldAlt size={24} />
            </div>
            <h3>Privacy First</h3>
            <p>Your data stays on your device. We use client-side processing, so your results are never uploaded to a cloud server.</p>
          </div>
        </div>
      </section>

      {/* 3. How It Works (LocalSend Transfer Loop) */}
      <section className="ls-how-section">
        <h2 className="section-title">How it Works</h2>
        
        <div className="ls-track-container">
          <div className="ls-how-track"></div>
          
          <div className="ls-how-transfer">
            <Zap size={14} strokeWidth={3} />
          </div>

          <div className="ls-how-nodes">
            <div className="ls-how-node">
              <div className="node-content">
                <h3>1. Upload</h3>
                <p>Take a clear screenshot of your semester result table.</p>
              </div>
            </div>
            
            <div className="ls-how-node">
              <div className="node-content">
                <h3>2. Verify</h3>
                <p>Review the extracted data side-by-side with your image.</p>
              </div>
            </div>

            <div className="ls-how-node">
              <div className="node-content">
                <h3>3. Result</h3>
                <p>Your SGPA is calculated instantly. Celebrate your success!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What CALCI Extracts (Long-page, xAI-style cards) */}
      <section className="explain-section container">
        <h2 className="section-title">What CALCI Reads From Your Result</h2>
        <p className="section-subtitle">
          CALCI is designed for semester result tables. Upload a clear screenshot and we’ll extract the key fields you care about.
        </p>

        <SpotlightCards />
      </section>

      {/* 5. FAQ */}
      <section className="faq-section container">
        <h2 className="section-title">FAQ</h2>
        <div className="faq-grid">
          <div className="faq-card glass">
            <div className="faq-q"><FaQuestionCircle /> Why do I need to verify?</div>
            <div className="faq-a">
              OCR is fast, but screenshots vary. Verification ensures every subject row is correct before you calculate.
            </div>
          </div>
          <div className="faq-card glass">
            <div className="faq-q"><FaQuestionCircle /> What if OCR misses a “+”?</div>
            <div className="faq-a">
              You can correct the grade in one click from the dropdown. We also tune OCR for “A+ / B+” style grades.
            </div>
          </div>
          <div className="faq-card glass">
            <div className="faq-q"><FaQuestionCircle /> Do you upload my results?</div>
            <div className="faq-a">
              No. CALCI runs in your browser and processes locally.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
