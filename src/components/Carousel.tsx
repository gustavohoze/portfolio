"use client";
import React, { useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { projectData } from "./projectData";
import "./Carousel.css";

interface DragScrollOptions {
  el: string;
  wrap: string;
  item: string;
  bar: string;
}

const lerp = (f0: number, f1: number, t: number) => (1 - t) * f0 + t * f1;
const clamp = (val: number, min: number, max: number) =>
  Math.max(min, Math.min(val, max));

class DragScroll {
  private $el: HTMLElement | null;
  private $wrap: HTMLElement | null;
  private $items: NodeListOf<HTMLElement>;
  private $bar: HTMLElement | null;
  private progress: number = 0;
  private x: number = 0;
  private velocity: number = 1;
  private wrapWidth: number = 0;
  private maxScroll: number = 0;
  private dragging: boolean = false;
  private startX: number = 0;
  private sensitivity: number = 0.5;
  private playrate: number = 0.1;

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
    this.events = this.events.bind(this);
    this.calculate = this.calculate.bind(this);
    this.raf = this.raf.bind(this);
    this.move = this.move.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
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
    this.startX =
      (e as MouseEvent).clientX || (e as TouchEvent).touches[0].clientX;
    this.$el?.classList.add("dragging");
  }

  handleTouchMove(e: TouchEvent | MouseEvent) {
    if (!this.dragging) return;
    const x = (e as MouseEvent).clientX || (e as TouchEvent).touches[0].clientX;
    const deltaX = (this.startX - x) * this.sensitivity;
    this.progress += deltaX;
    this.startX = x;
    this.move();
  }

  handleTouchEnd() {
    this.dragging = false;
    this.$el?.classList.remove("dragging");
    this.progress += this.velocity * 10;
    this.move();
    this.velocity = 0;
  }

  move() {
    const maxProgressChange = 50;
    this.progress = clamp(this.progress, 0, this.maxScroll);
    this.progress = clamp(
      this.progress,
      this.progress - maxProgressChange,
      this.progress + maxProgressChange
    );
  }

  events() {
    window.addEventListener("resize", this.calculate);
    this.$el?.addEventListener("touchstart", this.handleTouchStart);
    window.addEventListener("touchmove", this.handleTouchMove);
    window.addEventListener("touchend", this.handleTouchEnd);
    window.addEventListener("mousedown", this.handleTouchStart);
    window.addEventListener("mousemove", this.handleTouchMove);
    window.addEventListener("mouseup", this.handleTouchEnd);
    document.body.addEventListener("mouseleave", this.handleTouchEnd);
  }

  raf() {
    this.x = lerp(this.x, this.progress, 0.2);
    this.playrate = this.maxScroll > 0 ? this.x / this.maxScroll : 0;
    if (this.$wrap) {
      this.$wrap.style.transform = `translateX(${-this.x}px)`;
    }
    if (this.$bar) {
      this.$bar.style.transform = `scaleX(${0.18 + this.playrate * 0.82})`;
    }
  }
}

const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = new DragScroll({
      el: ".carousel",
      wrap: ".carousel--wrap",
      item: ".carousel--item",
      bar: ".carousel--progress-bar",
    });

    const raf = () => {
      requestAnimationFrame(raf);
      scroll.raf();
    };
    raf();

    return () => {
      window.removeEventListener("resize", scroll.calculate);
      window.removeEventListener("touchmove", scroll.handleTouchMove);
      window.removeEventListener("touchend", scroll.handleTouchEnd);
      window.removeEventListener("mousedown", scroll.handleTouchStart);
      window.removeEventListener("mousemove", scroll.handleTouchMove);
      window.removeEventListener("mouseup", scroll.handleTouchEnd);
      document.body.removeEventListener("mouseleave", scroll.handleTouchEnd);
    };
  }, []);

  const carouselItems = useMemo(() => 
    projectData.map((item, index) => (
      <div className="carousel--item" key={index}>
        <figure>
          <Image src={item.src} alt={item.title} width={275} height={600} />
        </figure>
        <h2 className="uppercase">{item.title}</h2>
        <div className="absolute z-20 centerAbsolute flex flex-col gap-4">
          {item.stacks?.map((stack, stackIndex) => (
            <Image
              key={stackIndex}
              src={stack.src}
              alt={stack.alt || "Tech Stack"}
              width={50}
              height={50}
            />
          ))}
        </div>
      </div>
    )),
  []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="carousel--wrap">
        {carouselItems}
      </div>
      <div className="carousel--progress">
        <div className="carousel--progress-bar"></div>
      </div>
    </div>
  );
};

export default Carousel;