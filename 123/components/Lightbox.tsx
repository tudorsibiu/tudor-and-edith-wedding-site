import React, { useEffect } from 'react';

interface LightboxProps {
  imageUrl: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-lg"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white text-4xl hover:text-[#C7B58B] transition-colors"
        onClick={onClose}
        aria-label="Close image view"
      >
        &times;
      </button>
      <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <img 
          src={imageUrl} 
          alt="Enlarged gallery view" 
          className="w-full h-full object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Lightbox;