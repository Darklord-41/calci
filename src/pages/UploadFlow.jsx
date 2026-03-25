import { useState, useEffect } from 'react';
import UploadBox from '../components/upload/UploadBox';
import Processing from '../components/upload/Processing';
import VerificationView from '../components/upload/VerificationView';
import { performOCR } from '../utils/ocrService';

const UploadFlow = () => {
  const [step, setStep] = useState('upload'); // upload, processing, verify, result
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [ocrData, setOcrData] = useState([]);
  const [latestSgpa, setLatestSgpa] = useState(null);

  const handleFileSelect = (file) => {
    setImageFile(file);
    setImageUrl(URL.createObjectURL(file));
    setStep('processing');
  };

  useEffect(() => {
    if (step === 'processing' && imageFile) {
      // Run OCR
      performOCR(imageFile)
        .then(data => {
            setOcrData(data);
             // Ensure at least a small delay for UX so it doesn't flash
            setTimeout(() => setStep('verify'), 2000);
        })
        .catch(err => {
            console.error("OCR failed", err);
            // On error, just show empty table?
            setStep('verify');
        });
    }
  }, [step, imageFile]);

  return (
    <div className="container upload-container fade-in" style={{ paddingBottom: '4rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        {step === 'upload' && (
          <h1 style={{ textAlign: 'center' }}>Upload Result</h1>
        )}
        {step === 'processing' && (
          <h1 style={{ textAlign: 'center' }}>Processing...</h1>
        )}
        {step === 'verify' && (
          <div className="verify-header-row">
            <h1>Verify &amp; Edit</h1>
            {latestSgpa !== null && (
              <div className="verify-sgpa-pill">
                <span className="verify-sgpa-label">Previous CALCI – SGPA</span>
                <span className="verify-sgpa-value">{latestSgpa}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {step === 'upload' && <UploadBox onFileSelect={handleFileSelect} />}
      
      {step === 'processing' && <Processing />}
      
      {step === 'verify' && (
        <VerificationView 
          imageUrl={imageUrl} 
          extractedData={ocrData}
          onSgpaChange={setLatestSgpa}
          onBack={() => setStep('upload')}
        />
      )}
    </div>
  );
};

export default UploadFlow;
