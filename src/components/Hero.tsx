import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: Building, label: "Projects Completed", value: "500+" },
    { icon: Users, label: "Happy Clients", value: "200+" },
    { icon: Trophy, label: "Years Experience", value: "15+" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Construction site with modern architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        
        {/* Animated overlay patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full animate-bounce-in animation-delay-1000"></div>
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-secondary rounded-full animate-bounce-in animation-delay-1500"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-accent rotate-45 animate-bounce-in animation-delay-2000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white">
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-6">
                Where Ideas Take Shape –{" "}
                <span className="text-gradient-accent">
                  Complete Construction Consultancy
                </span>{" "}
                Under One Roof!
              </h1>
              
              <p className="text-lg md:text-xl text-muted-light mb-8 leading-relaxed">
                At Rai Construction Solutions, we bring your construction vision to life with 
                precision, innovation, and expertise. We are your trusted partner in comprehensive 
                construction consultancy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button asChild size="lg" className="btn-construction text-lg px-8 py-4">
                  <Link to="/services">
                    Our Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="btn-outline-construction text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/projects">View Projects</Link>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start mb-2">
                      <stat.icon className="h-8 w-8 text-accent mr-3" />
                      <span className="text-2xl font-montserrat font-bold">{stat.value}</span>
                    </div>
                    <p className="text-muted-light font-inter">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Visual Element */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Floating cards with services preview */}
              <div className="space-y-4">
                {[
                  "3D Modeling Services",
                  "Construction Drawings", 
                  "Scan to BIM Technology",
                  "3D Renders & Walkthroughs"
                ].map((service, index) => (
                  <div
                    key={index}
                    className={`construction-card bg-white/10 backdrop-blur-sm border-white/20 text-white animate-slide-in-right`}
                    style={{ animationDelay: `${(index + 1) * 200}ms` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="font-inter font-medium">{service}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;