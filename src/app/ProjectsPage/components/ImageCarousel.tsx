'use client'
import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Head from 'next/head'; // Import Head for script tags
import styles from './ImageCarousel.module.scss';

interface SlideItem {
  imageUrl: string;
  title: string;
  description: string;
}

const ImageCarousel = () => {
  const initialSlides: SlideItem[] = [
    {
      imageUrl: 'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg',
      title: '"Lossless Youths"',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.'
    },
    {
      imageUrl: 'https://i.redd.it/tc0aqpv92pn21.jpg',
      title: '"Estrange Bond"',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.'
    },
    {
      imageUrl: 'https://wharferj.files.wordpress.com/2015/11/bio_north.jpg',
      title: '"The Gate Keeper"',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.'
    },
    {
      imageUrl: 'https://images7.alphacoders.com/878/878663.jpg',
      title: '"Last Trace Of Us"',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.'
    },
    {
      imageUrl: 'https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg',
      title: '"Urban Decay"',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.'
    },
    {
      imageUrl: 'https://da.se/app/uploads/2015/09/simon-december1994.jpg',
      title: '"The Migration"',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.'
    }
  ];

  const [slides, setSlides] = useState<SlideItem[]>(initialSlides);

  const handleNext = useCallback(() => {
    setSlides(currentSlides => {
      const [first, ...rest] = currentSlides;
      return [...rest, first];
    });
  }, []);

  const handlePrev = useCallback(() => {
    setSlides(currentSlides => {
      const last = currentSlides[currentSlides.length - 1];
      const rest = currentSlides.slice(0, -1);
      return [last, ...rest];
    });
  }, []);

  // Optional: Add keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <>
      <Head>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </Head>
      <main className={styles.main}>
        <ul className={styles.slider}>
          {slides.map((slide, index) => (
            <li
              key={`${slide.title}-${index}`}
              className={styles.item}
              style={{
                backgroundImage: `url(${slide.imageUrl})`
              }}
            >
              <div className={`${styles.content} ${index <= 1 ? styles.activeContent : ''}`}>
                <h2 className={styles.title}>{slide.title}</h2>
                <p className={styles.description}>{slide.description}</p>
                <button className={styles.button}>Read More</button>
              </div>
            </li>
          ))}
        </ul>
        <nav className={styles.nav}>
          <button
            onClick={handlePrev}
            className={styles.navButton}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className={styles.navButton}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </nav>
      </main>
    </>
  );
};

export default ImageCarousel;
