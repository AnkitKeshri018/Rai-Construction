import { useEffect, useRef, useState } from "react";
import { Target, Lightbulb, Award, Zap, Eye, Cog } from "lucide-react";

const Vision = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Target, label: "Precise 3D Modeling", delay: "0ms" },
    { icon: Lightbulb, label: "Accurate Planning", delay: "200ms" },
    { icon: Eye, label: "Immersive Visualizations", delay: "400ms" },
    { icon: Cog, label: "Construction Drawings", delay: "600ms" },
    { icon: Award, label: "BIM Modeling", delay: "800ms" },
    { icon: Zap, label: "Advanced Rendering", delay: "1000ms" },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-steel">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Vision Content */}
          <div className="text-white">
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-6">
                Our Vision
              </h2>
              <h3 className="text-xl md:text-2xl font-montserrat font-semibold text-accent-light mb-8">
                Revolutionizing Construction with Innovation & Technology
              </h3>
              
              <div className="space-y-6 mb-8">
                <p className="text-lg leading-relaxed">
                  At Rai Construction Solutions, our vision is to{" "}
                  <span className="text-accent font-semibold">revolutionize the construction industry</span>{" "}
                  by providing{" "}
                  <span className="text-accent font-semibold">innovative, technology-driven solutions</span>{" "}
                  that bridge the gap between design and execution.
                </p>
                
                <p className="text-lg leading-relaxed">
                  We aim to be a{" "}
                  <span className="text-accent font-semibold">one-stop consultancy partner</span>, 
                  empowering architects, contractors, and developers with cutting-edge tools and expertise.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-lg leading-relaxed mb-4">
                  We envision a future where every project is executed{" "}
                  <span className="text-accent font-semibold">efficiently, clearly, and creatively</span>
                  —transforming ideas into reality with{" "}
                  <span className="text-accent font-semibold">precision and excellence</span>.
                </p>
                
                <p className="text-base leading-relaxed">
                  Our commitment is to{" "}
                  <span className="text-accent font-semibold">innovation, quality, and client satisfaction</span>. 
                  We ensure every project benefits from{" "}
                  <span className="text-accent font-semibold">smarter designs, optimized resources, and seamless execution</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Features */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`construction-card bg-white/10 backdrop-blur-sm border-white/20 text-white text-center group hover:bg-white/20 transition-all duration-1000 ${
                    isVisible ? 'animate-bounce-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: isVisible ? feature.delay : '0ms' }}
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-4 bg-accent/20 rounded-full group-hover:bg-accent/30 transition-smooth group-hover:scale-110">
                      <feature.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h4 className="font-montserrat font-semibold text-sm leading-tight">
                      {feature.label}
                    </h4>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-accent/30 group-hover:border-t-accent/50 transition-smooth"></div>
                </div>
              ))}
            </div>

            {/* Additional visual element */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-6 py-3 rounded-full border border-accent/30">
                <Zap className="h-5 w-5 text-accent animate-pulse" />
                <span className="text-white font-inter font-medium">Technology-Driven Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;