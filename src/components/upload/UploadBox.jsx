import { useRef, useState } from 'react';
import { FaCloudUploadAlt, FaFileImage } from 'react-icons/fa';
import './UploadBox.css';

const UploadBox = ({ onFileSelect }) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div 
      className={`upload-box-container glass ${dragActive ? 'drag-active' : ''}`}
      onDragEnter={handleDrag} 
      onDragLeave={handleDrag} 
      onDragOver={handleDrag} 
      onDrop={handleDrop}
    >
      <input 
        ref={inputRef}
        type="file" 
        className="upload-input" 
        onChange={handleChange}
        accept="image/*"
      />
      
      <div className="upload-content">
        <div className="upload-icon">
          <FaCloudUploadAlt />
        </div>
        <h3>Upload your Result Screenshot</h3>
        <p>Drag & Drop or <span className="browse-btn" onClick={onButtonClick}>Browse</span></p>
        <p className="file-hint">Supported formats: JPG, PNG</p>
      </div>

      {dragActive && <div className="drag-overlay">
        <FaFileImage /> Drop to Upload
      </div>}
    </div>
  );
};

export default UploadBox;
