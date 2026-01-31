import React, { useState } from 'react';
import Section from './Section';
import Lightbox from './Lightbox';

const imageUrls = [
  'https://picsum.photos/seed/rusticelegancegallery1/600/600',
  'https://picsum.photos/seed/rusticelegancegallery2/600/600',
  'https://picsum.photos/seed/rusticelegancegallery3/600/600',
  'https://picsum.photos/seed/rusticelegancegallery4/600/600',
  'https://picsum.photos/seed/rusticelegancegallery5/600/600',
  'https://picsum.photos/seed/rusticelegancegallery6/600/600',
  'https://picsum.photos/seed/rusticelegancegallery7/600/600',
  'https://picsum.photos/seed/rusticelegancegallery8/600/600',
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (url: string) => setSelectedImage(url);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <>
      <Section title="Locul Faptei">
        <div className="text-center mb-12 font-body text-lg max-w-3xl mx-auto anim-target anim-fade-up text-[#7C7F78]">
          <p>O mică mostră din paradisul unde ne vom petrece weekendul. Am pus mâna pe toată cabana, așa că pregătiți-vă de priveliști, piscină și voie bună.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {imageUrls.map((url, index) => (
            <div 
              key={index} 
              className="group overflow-hidden rounded-xl shadow-lg anim-target anim-fade-up anim-stagger cursor-pointer"
              onClick={() => openLightbox(url)}
            >
              <img 
                src={url} 
                alt={`Wedding gallery image ${index + 1}`} 
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Section>
      {selectedImage && <Lightbox imageUrl={selectedImage} onClose={closeLightbox} />}
    </>
  );
};

export default Gallery;