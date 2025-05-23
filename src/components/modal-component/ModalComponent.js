import React, { useState } from 'react';
import './ModalComponent.css';

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('');

  const handleSave = () => {
    console.log('Saved text:', text);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="open-modal-btn">Open Modal</button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2 className="modal-title">Enter Your Text</h2>
            <textarea
              className="modal-textarea"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type something..."
            />
            <div className="modal-buttons">
              <button className="btn cancel" onClick={() => setIsOpen(false)}>Cancel</button>
              <button className="btn save" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalComponent;
