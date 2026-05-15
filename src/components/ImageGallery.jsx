import { ImageOff, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ImageGallery({ images }) {
  const [activeImage, setActiveImage] = useState(null);
  const [failedImages, setFailedImages] = useState(() => new Set());

  const closeFromBackdrop = (event) => {
    if (event.target === event.currentTarget) setActiveImage(null);
  };

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActiveImage(null);
    };

    document.body.classList.toggle('modal-open', Boolean(activeImage));
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [activeImage]);

  const markFailed = (src) => {
    setFailedImages((current) => new Set(current).add(src));
  };

  return (
    <>
      <section className="section gallery-grid">
        {images.map((image, index) => (
          <button
            className="gallery-card"
            key={image.src}
            type="button"
            onClick={() => setActiveImage(image)}
            data-reveal
            style={{ '--delay': `${(index % 8) * 30}ms` }}
          >
            {failedImages.has(image.src) ? (
              <span className="gallery-fallback">
                <ImageOff size={28} />
              </span>
            ) : (
              <img
                src={image.src}
                alt={`${image.project} ${image.type}`}
                loading="eager"
                decoding="async"
                onError={() => markFailed(image.src)}
              />
            )}
          </button>
        ))}
      </section>

      {activeImage ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeImage.project} expanded image`}
          onMouseDown={closeFromBackdrop}
        >
          <button className="lightbox-close" type="button" onClick={() => setActiveImage(null)} aria-label="Close expanded image">
            <X size={22} />
          </button>
          <figure className="lightbox-frame">
            <img src={activeImage.src} alt={`${activeImage.project} ${activeImage.type}`} />
          </figure>
        </div>
      ) : null}
    </>
  );
}
