
import { useEffect, useRef, useState } from 'react';

type MetricProps = {
  value: number;
  label: string;
  suffix?: string;
};

const Metric = ({ value, label, suffix = '' }: MetricProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!countRef.current) return;

    observerRef.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated.current) {
        animateCount();
        hasAnimated.current = true;
      }
    }, { threshold: 0.1 });

    observerRef.current.observe(countRef.current);

    return () => {
      if (observerRef.current && countRef.current) {
        observerRef.current.unobserve(countRef.current);
      }
    };
  }, []);

  const animateCount = () => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    
    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const currentCount = Math.floor(progress * value);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };
    
    requestAnimationFrame(updateCount);
  };

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-highlight">
        <span ref={countRef}>{count}</span>{suffix}
        <span className="text-highlight text-4xl md:text-5xl lg:text-6xl font-bold">+</span>
      </div>
      <p className="text-muted-foreground mt-2">{label}</p>
    </div>
  );
};

const Metrics = () => {
  return (
    <section className="py-16 bg-medium-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-gradient opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Metric value={4} label="Years of experience" />
          <Metric value={10} label="Projects completed" />
          <Metric value={3} label="Technologies mastered" />
          <Metric value={8} label="Satisfied Clients" />
        </div>
      </div>
    </section>
  );
};

export default Metrics;
