import { Link } from 'react-router-dom';
import { FaKeyboard, FaFileUpload, FaBolt, FaShieldAlt, FaMagic, FaCheckCircle, FaLayerGroup, FaQuestionCircle } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container fade-in">
      {/* 1. Hero Section */}
      <section className="hero-section container">
        <div className="hero-content">
          <h1 className="hero-title">Calculate Your SGPA <br /><span className="text-gradient">Instantly & Accurately</span></h1>
          <p className="subtitle">
            The most intelligent grade calculator. Upload your result screenshot and let our algorithm handle the rest, or verify manually with precision.
          </p>
        </div>

        <div className="options-grid">
          <Link to="/manual" className="option-card glass">
            <div className="icon-wrapper">
              <FaKeyboard />
            </div>
            <h3>Manual Entry</h3>
            <p>Enter your grades subject by subject manually to get the result.</p>
            <span className="btn-text">Start Manual &rarr;</span>
          </Link>
          
          <Link to="/upload" className="option-card glass active-card">
            <div className="icon-wrapper">
              <FaFileUpload />
            </div>
            <h3>Smart Upload</h3>
            <p>Upload a screenshot of your results. We do the rest.</p>
            <span className="btn-text">Upload Screenshot &rarr;</span>
          </Link>
        </div>
      </section>

      {/* 2. Feature Showcase (xAI Style Layout) */}
      <section className="features-section">
        <div className="features-container">
          {/* Card 1 */}
          <div className="xai-card">
            <div className="card-content">
              <h3>Smart OCR</h3>
              <p>Don't type. Just snap. Our advanced Optical Character Recognition extracts your subjects and grades in seconds.</p>
            </div>
            <div className="card-visual">
              {/* Placeholder for visual - using icon for now */}
              <FaMagic className="visual-icon" />
            </div>
            <div className="card-action">
              <Link to="/upload" className="xai-btn">TRY OCR ↗</Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="xai-card">
            <div className="card-content">
              <h3>Instant Analysis</h3>
              <p>Get your SGPA calculated immediately with automated formula application. No manual math errors.</p>
            </div>
             <div className="card-visual">
              <FaBolt className="visual-icon" />
            </div>
            <div className="card-action">
              <Link to="/manual" className="xai-btn">CALCULATE ↗</Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="xai-card">
            <div className="card-content">
              <h3>Privacy First</h3>
              <p>Your data stays on your device. We use client-side processing, so your results are never uploaded to a cloud server.</p>
            </div>
             <div className="card-visual">
              <FaShieldAlt className="visual-icon" />
            </div>
            <div className="card-action">
              <span className="xai-btn static">SECURE ↗</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How It Works (Step Flow) */}
      <section className="how-section container">
        <h2 className="section-title">How it Works</h2>
        <div className="steps-container">
          <div className="step-item">
            <div className="step-number">01</div>
            <h3>Upload Screenshot</h3>
            <p>Take a clear screenshot of your semester result table.</p>
          </div>
          <div className="step-item">
            <div className="step-number">02</div>
            <h3>Verify Data</h3>
            <p>Review the extracted data side-by-side with your image.</p>
          </div>
          <div className="step-item">
             <div className="step-number">03</div>
             <h3>Get Result</h3>
             <p>Your SGPA is calculated instantly. Celebrate your success!</p>
          </div>
        </div>
      </section>

      {/* 4. What CALCI Extracts (Long-page, xAI-style cards) */}
      <section className="explain-section container">
        <h2 className="section-title">What CALCI Reads From Your Result</h2>
        <p className="section-subtitle">
          CALCI is designed for semester result tables. Upload a clear screenshot and we’ll extract the key fields you care about.
        </p>

        <div className="explain-grid">
          <div className="explain-card glass">
            <div className="explain-icon"><FaLayerGroup /></div>
            <h3>Subjects</h3>
            <p>
              We detect each row and capture the subject name/title when available. If the name is noisy, you can keep it blank and still calculate SGPA.
            </p>
          </div>
          <div className="explain-card glass">
            <div className="explain-icon"><FaBolt /></div>
            <h3>Credits</h3>
            <p>
              Credits are parsed as numbers (like 4, 3, 1.5). This is what drives weighted calculation.
            </p>
          </div>
          <div className="explain-card glass">
            <div className="explain-icon"><FaCheckCircle /></div>
            <h3>Grades (including A+)</h3>
            <p>
              Grades like A+, A, B+, B… are recognized and normalized (even if the screenshot spacing is weird).
            </p>
          </div>
        </div>
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
