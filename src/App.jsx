import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronRight, Activity, Database, Crosshair, Plus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// COMPONENTS
// ==========================================

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-6 py-3 flex items-center justify-between w-[90%] max-w-5xl ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border border-primary/10 shadow-lg text-primary'
          : 'bg-transparent text-background'
      }`}
    >
      <div className="font-sans font-bold tracking-tight text-xl">Slipstreamm</div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#features" className="hover:-translate-y-[1px] transition-transform">Capabilities</a>
        <a href="#philosophy" className="hover:-translate-y-[1px] transition-transform">Philosophy</a>
        <a href="#protocol" className="hover:-translate-y-[1px] transition-transform">Protocol</a>
      </div>
      <button className="bg-accent text-background px-5 py-2.5 rounded-full text-sm font-bold btn-magnetic">
        <span className="btn-layer"></span>
        <span className="btn-text flex items-center gap-2">Consultation <ArrowRight size={16} /></span>
      </button>
    </nav>
  );
};

const Hero = () => {
  const container = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-elem', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-[100dvh] w-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
          alt="Clinical Tech Background"
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl">
        <h1 className="hero-elem font-sans font-bold text-background text-2xl md:text-3xl tracking-wide uppercase text-accent mb-2">
          Intelligence is the
        </h1>
        <h2 className="hero-elem font-drama italic text-background text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] mb-10 tracking-tight">
          Advantage.
        </h2>
        <p className="hero-elem text-background/80 font-sans text-lg md:text-xl max-w-xl mb-12 font-light">
          Precision AI lead generation and revenue automation built for the rigorous demands of modern medical enterprises.
        </p>
        
        <div className="hero-elem">
          <button className="bg-background text-primary px-8 py-4 rounded-full text-base font-bold btn-magnetic shadow-2xl">
            <span className="btn-layer bg-accent"></span>
            <span className="btn-text flex items-center gap-3">Book A Free Consultation <ArrowRight size={18} /></span>
          </button>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const container = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={container} className="py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h3 className="font-mono text-accent text-sm font-semibold tracking-wider uppercase mb-4 flex items-center gap-2"><Activity size={16} /> Capabilities</h3>
          <h2 className="font-drama italic text-5xl md:text-7xl text-primary leading-tight max-w-3xl">
            Engineered for <br/>Predictable Growth.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Diagnostic Shuffler */}
          <div className="feature-card bg-white rounded-[2rem] p-8 shadow-sm border border-primary/5 flex flex-col h-[450px]">
            <h4 className="font-sans font-bold text-2xl text-primary mb-2">Revenue-Generating Execution</h4>
            <p className="text-dark/70 font-sans mb-8">Turn strategy and systems into predictable, measurable growth.</p>
            
            <div className="flex-1 relative">
              <DiagnosticShuffler />
            </div>
          </div>

          {/* Card 2: Telemetry Typewriter */}
          <div className="feature-card bg-primary text-background rounded-[2rem] p-8 shadow-xl flex flex-col h-[450px]">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-sans font-bold text-2xl">Automated Growth<br/>Infrastructure</h4>
              <div className="flex items-center gap-2 font-mono text-[10px] text-accent uppercase bg-accent/10 px-2 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                Live Feed
              </div>
            </div>
            <p className="text-background/70 font-sans mb-8">Systems that run your growth—without manual effort.</p>
            
            <div className="flex-1 bg-dark/50 rounded-xl p-6 font-mono text-sm leading-relaxed border border-white/10 relative overflow-hidden">
              <TelemetryTypewriter />
            </div>
          </div>

          {/* Card 3: Cursor Protocol Scheduler */}
          <div className="feature-card bg-white rounded-[2rem] p-8 shadow-sm border border-primary/5 flex flex-col h-[450px]">
            <h4 className="font-sans font-bold text-2xl text-primary mb-2">Market Intelligence Advantage</h4>
            <p className="text-dark/70 font-sans mb-8">See what competitors can't—and act before they do.</p>
            
            <div className="flex-1 relative bg-background rounded-xl p-4 border border-primary/10">
              <CursorScheduler />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Micro-UI Components
const DiagnosticShuffler = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Lead Generation', data: '+42% pipeline' },
    { id: 2, title: 'Conversion Optimization', data: '2.4x velocity' },
    { id: 3, title: 'Actionable Content', data: 'High intent' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newCards = [...prev];
        const last = newCards.pop();
        newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {cards.map((card, i) => (
        <div 
          key={card.id}
          className="absolute w-full bg-background rounded-xl p-5 border border-primary/10 flex justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm"
          style={{
            transform: `translateY(${i * 20 - 20}px) scale(${1 - i * 0.05})`,
            zIndex: 3 - i,
            opacity: 1 - i * 0.2
          }}
        >
          <span className="font-sans font-medium text-primary">{card.title}</span>
          <span className="font-mono text-xs text-accent bg-accent/10 px-2 py-1 rounded">{card.data}</span>
        </div>
      ))}
    </div>
  );
};

const TelemetryTypewriter = () => {
  const [text, setText] = useState('');
  const [cursor, setCursor] = useState(true);
  const fullText = "> Initialize AI Agents...\n> OK\n> Building Pipeline...\n> Connected to CRM\n> Sales Funnel Active\n> Routing 14 New Leads\n> Optimizing...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        setTimeout(() => { i = 0; }, 3000);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setCursor(c => !c), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <div className="whitespace-pre-wrap text-green-400">
      {text}
      <span className={`${cursor ? 'opacity-100' : 'opacity-0'} text-accent`}>_</span>
    </div>
  );
};

const CursorScheduler = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-4 text-xs font-mono text-primary/50">
        <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
      </div>
      <div className="grid grid-cols-7 gap-1 flex-1">
        {Array.from({ length: 28 }).map((_, i) => (
          <div key={i} className={`rounded-sm ${i === 11 ? 'bg-accent animate-pulse' : 'bg-primary/5'} transition-colors duration-500`}></div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
         <div className="flex-1 bg-primary/5 rounded-md p-2 flex items-center justify-between">
            <span className="text-[10px] font-mono text-primary/70">COMPETITIVE INTEL</span>
            <Database size={12} className="text-accent" />
         </div>
         <div className="flex-1 bg-primary/5 rounded-md p-2 flex items-center justify-between">
            <span className="text-[10px] font-mono text-primary/70">OPPORTUNITIES</span>
            <Crosshair size={12} className="text-accent" />
         </div>
      </div>
      
      {/* Animated Cursor */}
      <div className="absolute w-4 h-4 pointer-events-none z-10"
           style={{ animation: 'cursorMove 6s infinite ease-in-out' }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-dark drop-shadow-md">
          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" fill="white" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes cursorMove {
          0% { transform: translate(10px, 10px); opacity: 0; }
          10% { opacity: 1; }
          30% { transform: translate(120px, 40px); }
          35% { transform: translate(120px, 40px) scale(0.8); }
          40% { transform: translate(120px, 40px) scale(1); }
          70% { transform: translate(40px, 140px); }
          75% { transform: translate(40px, 140px) scale(0.8); }
          80% { transform: translate(40px, 140px) scale(1); }
          90% { opacity: 1; }
          100% { transform: translate(10px, 10px); opacity: 0; }
        }
      `}} />
    </div>
  );
};

const Philosophy = () => {
  const container = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.phil-line-1', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 60%',
        },
        y: 30,
        opacity: 0,
        duration: 1
      });
      gsap.from('.phil-line-2', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 50%',
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: 0.2
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={container} className="relative py-40 px-6 md:px-12 lg:px-24 bg-dark text-background overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1614935151651-0bea6508abb0?q=80&w=2070&auto=format&fit=crop"
          alt="Abstract Texture"
          className="w-full h-full object-cover opacity-10 mix-blend-screen"
        />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="phil-line-1 font-sans text-xl md:text-2xl text-background/60 mb-8 max-w-2xl mx-auto font-light">
          Most medical companies focus on: generic marketing that ignores clinical nuance.
        </p>
        <h2 className="phil-line-2 font-drama italic text-5xl md:text-7xl lg:text-8xl leading-tight">
          We focus on: <span className="text-accent">Precision Infrastructure</span>.
        </h2>
      </div>
    </section>
  );
};

const Protocol = () => {
  const container = useRef();
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (index === 0) return;
        
        const prevCard = cardsRef.current[index - 1];
        
        gsap.to(prevCard, {
          scale: 0.9,
          opacity: 0.5,
          filter: 'blur(10px)',
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "top top",
            scrub: true,
          }
        });
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: "01",
      title: "Strategic Blueprinting",
      desc: "We map your entire clinical value proposition into a comprehensive digital architecture designed for high-value conversions.",
      graphic: (
        <svg className="w-full h-full text-accent opacity-20" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M50 20 L50 80 M20 50 L80 50" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Infrastructure Deployment",
      desc: "Implementing automated growth pipelines, AI customer service agents, and market intelligence systems customized for medical sales.",
      graphic: (
        <div className="w-full h-full relative overflow-hidden flex flex-col justify-center gap-4 opacity-30">
          <div className="w-full h-[1px] bg-primary relative"><div className="absolute top-0 left-0 h-full w-1/4 bg-accent animate-[ping_3s_ease-in-out_infinite]"></div></div>
          <div className="w-full h-[1px] bg-primary relative"><div className="absolute top-0 left-1/4 h-full w-1/4 bg-accent animate-[ping_2s_ease-in-out_infinite]"></div></div>
          <div className="w-full h-[1px] bg-primary relative"><div className="absolute top-0 left-1/2 h-full w-1/4 bg-accent animate-[ping_4s_ease-in-out_infinite]"></div></div>
        </div>
      )
    },
    {
      num: "03",
      title: "Execution & Calibration",
      desc: "Continuous optimization of multimedia content, lead generation funnels, and data-driven strategic adjustments.",
      graphic: (
        <svg className="w-full h-full text-primary opacity-20" viewBox="0 0 200 100" preserveAspectRatio="none">
          <path d="M0,50 L20,50 L30,20 L40,80 L50,50 L200,50" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M0,50 L20,50 L30,20 L40,80 L50,50 L200,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="200" strokeDashoffset="200" className="animate-[dash_3s_linear_infinite]" />
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes dash { to { stroke-dashoffset: 0; } }
          `}} />
        </svg>
      )
    }
  ];

  return (
    <section id="protocol" ref={container} className="relative bg-background pb-[50vh]">
      {steps.map((step, i) => (
        <div 
          key={i} 
          ref={el => cardsRef.current[i] = el}
          className="sticky top-0 h-[100dvh] w-full flex items-center justify-center p-6 md:p-12 lg:p-24 origin-top bg-background shadow-[0_-20px_50px_rgba(0,0,0,0.05)]"
        >
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 h-[40vh] lg:h-[60vh] bg-white rounded-[3rem] border border-primary/10 shadow-lg p-12 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-6 left-6 font-mono text-xs text-primary/30 uppercase tracking-widest flex items-center gap-2">
                <Plus size={14}/> Fig {step.num}
              </div>
              {step.graphic}
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="font-mono text-accent text-xl mb-6">[{step.num}]</div>
              <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6">{step.title}</h2>
              <p className="font-sans text-lg md:text-xl text-dark/70 font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-32 px-6 bg-background border-t border-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-drama italic text-5xl md:text-7xl text-primary mb-8">Ready to systematically scale?</h2>
        <button className="bg-primary text-background px-10 py-5 rounded-full text-lg font-bold btn-magnetic shadow-xl">
          <span className="btn-layer bg-accent"></span>
          <span className="btn-text flex items-center gap-3">Book A Free Consultation <ArrowRight size={20} /></span>
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-background rounded-t-[4rem] pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        <div className="md:col-span-5">
          <div className="font-sans font-bold tracking-tight text-3xl mb-6">Slipstreamm</div>
          <p className="font-sans text-background/60 max-w-sm">
            AI-assisted lead generation and automation architecture for medical enterprises.
          </p>
        </div>
        
        <div className="md:col-span-3">
          <h4 className="font-mono text-xs text-accent uppercase tracking-widest mb-6">Navigation</h4>
          <ul className="space-y-4 font-sans text-background/80">
            <li><a href="#features" className="hover:text-white transition-colors">Capabilities</a></li>
            <li><a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a></li>
            <li><a href="#protocol" className="hover:text-white transition-colors">Protocol</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-4">
          <h4 className="font-mono text-xs text-accent uppercase tracking-widest mb-6">Legal</h4>
          <ul className="space-y-4 font-sans text-background/80">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-sm text-background/40">© 2026 Slipstreamm. All rights reserved.</p>
        <div className="flex items-center gap-3 font-mono text-xs text-background/60">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          SYSTEM OPERATIONAL
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <main className="bg-background min-h-screen selection:bg-accent selection:text-background">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <CTASection />
      <Footer />
    </main>
  );
};

export default App;
