import { useEffect, useState } from "react";
import Image from "next/image";
import graphics from "@styles/modules/graphics.module.scss";
import styles from "@styles/modules/index.module.scss";
import { graphicsImages } from "@data/information.js";

export default function GraphicsSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section className={graphics.page}>
      <h1 className={styles.title}>
        what i already cooked <span>🔥</span>
      </h1>
      <p className={graphics.captionNote}>descriptions are a.i generated</p>
      <div className={styles.line}></div>

      <div className={graphics.gallery}>
        {graphicsImages.map((img, index) => (
          <div
            key={index}
            className={graphics.imageWrapper}
            onClick={() => openModal(img)}
            style={{ cursor: "pointer" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={300}
              height={300}
              layout="responsive"
              objectFit="cover"
            />
            <h3 className={graphics.imageTitle}>{img.title}</h3>
            <p className={graphics.imageDesc}>{img.description}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={graphics.modalOverlay} onClick={closeModal}>
          <div
            className={graphics.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              layout="fill"
              objectFit="contain"
              className={graphics.fullscreenImage}
              priority
            />
            <button className={graphics.closeButton} onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
