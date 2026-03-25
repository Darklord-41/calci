import './Processing.css';

const Processing = () => {
  return (
    <div className="processing-container glass">
      <div className="loader">
        <div className="scanner"></div>
      </div>
      <h2>Analyzing Results...</h2>
      <p>Extracting subjects, credits, and grades.</p>
    </div>
  );
};

export default Processing;
