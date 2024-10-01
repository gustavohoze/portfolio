'use client';
import React, { useRef, useEffect } from 'react';
import './Carousel.css';
import Fig1 from '@/app/assets/fig1.jpg'
import Fig2 from '@/app/assets/fig2.jpg'
import Fig3 from '@/app/assets/fig3.jpg'
import Fig4 from '@/app/assets/fig4.jpg'
import Fig5 from '@/app/assets/fig5.jpg'
import Fig6 from '@/app/assets/fig6.jpg'
import Fig7 from '@/app/assets/fig1.jpg'

interface DragScrollOptions {
  el: string;
  wrap: string;
  item: string;
  bar: string;
}

const lerp = (f0: number, f1: number, t: number) => (1 - t) * f0 + t * f1;
const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(val, max));

class DragScroll {
  private $el: HTMLElement | null;
  private $wrap: HTMLElement | null;
  private $items: NodeListOf<HTMLElement>;
  private $bar: HTMLElement | null;
  private progress: number = 0;
  private x: number = 0;
  private playrate: number = 0;
  private wrapWidth: number = 0;
  private maxScroll: number = 0;
  private dragging: boolean = false;
  private startX: number = 0;

  constructor(obj: DragScrollOptions) {
    this.$el = document.querySelector(obj.el);
    this.$wrap = this.$el?.querySelector(obj.wrap) || null;
    this.$items = this.$el?.querySelectorAll(obj.item) || ({} as NodeListOf<HTMLElement>);
    this.$bar = this.$el?.querySelector(obj.bar) || null;
    this.init();
  }

  init() {
    this.bindings();
    this.events();
    this.calculate();
    this.raf();
  }

  bindings() {
    ['events', 'calculate', 'raf', 'move', 'raf', 'handleTouchStart', 'handleTouchMove', 'handleTouchEnd'].forEach((i) => {
      (this as any)[i] = (this as any)[i].bind(this);
    });
  }

  calculate() {
    if (this.$items.length > 0 && this.$wrap) {
      this.progress = 0;
      this.wrapWidth = this.$items[0].clientWidth * this.$items.length;
      this.$wrap.style.width = `${this.wrapWidth}px`;
      this.maxScroll = this.wrapWidth - (this.$el?.clientWidth || 0);
    }
  }

  handleTouchStart(e: TouchEvent | MouseEvent) {
    e.preventDefault();
    this.dragging = true;
    this.startX = (e as MouseEvent).clientX || (e as TouchEvent).touches[0].clientX;
    this.$el?.classList.add('dragging');
  }

  private velocity: number = 1; // Add this property

  private sensitivity: number = 0.5; // Add this line to define sensitivity

handleTouchMove(e: TouchEvent | MouseEvent) {
    if (!this.dragging) return;
    const x = (e as MouseEvent).clientX || (e as TouchEvent).touches[0].clientX;
    const deltaX = (this.startX - x) * this.sensitivity; // Use the sensitivity variable
    this.progress += deltaX;
    this.startX = x;
    this.move();
}


  


handleTouchEnd() {
    this.dragging = false;
    this.$el?.classList.remove('dragging');
    this.progress += this.velocity * 10; // Change this factor to a lower value (e.g., 10)
    this.move();
    this.velocity = 0;
}



move() {
    const maxProgressChange = 50; // Limit how much progress can change in one move
    this.progress = clamp(this.progress, 0, this.maxScroll);
    this.progress = clamp(this.progress, this.progress - maxProgressChange, this.progress + maxProgressChange);
}


  events() {
    window.addEventListener('resize', this.calculate);
    this.$el?.addEventListener('touchstart', this.handleTouchStart);
    window.addEventListener('touchmove', this.handleTouchMove);
    window.addEventListener('touchend', this.handleTouchEnd);
    window.addEventListener('mousedown', this.handleTouchStart);
    window.addEventListener('mousemove', this.handleTouchMove);
    window.addEventListener('mouseup', this.handleTouchEnd);
    document.body.addEventListener('mouseleave', this.handleTouchEnd);
  }

  raf() {
    this.x = lerp(this.x, this.progress, 0.2); // Increase this to a higher value for smoother transition
    this.playrate = this.maxScroll > 0 ? this.x / this.maxScroll : 0; // Prevent division by zero
    if (this.$wrap) {
        this.$wrap.style.transform = `translateX(${-this.x}px)`;
    }
    if (this.$bar) {
        this.$bar.style.transform = `scaleX(${0.18 + this.playrate * 0.82})`;
    }
}




}

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = new DragScroll({
      el: '.carousel',
      wrap: '.carousel--wrap',
      item: '.carousel--item',
      bar: '.carousel--progress-bar',
    });

    const raf = () => {
      requestAnimationFrame(raf);
      scroll.raf();
    };
    raf();
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="carousel--wrap">
        {[
          { src: Fig1.src, title: 'Project 1' },
          { src: Fig2.src, title: 'Project 2' },
          { src: Fig3.src, title: 'Project 3' },
          { src: Fig4.src, title: 'Project 4' },
          { src: Fig5.src, title: 'Project 5' },
          { src: Fig6.src, title: 'Project 6' },
          { src: Fig7.src, title: 'Project 7' },
        ].map((item, index) => (
          <div className="carousel--item" key={index}>
            <figure>
              <img src={item.src} alt={item.title}/>
            </figure>
            <h2 className='uppercase'>{item.title}</h2>
          </div>
        ))}
      </div>
      <div className="carousel--progress">
        <div className="carousel--progress-bar"></div>
      </div>
    </div>
  );
};

export default Carousel;
