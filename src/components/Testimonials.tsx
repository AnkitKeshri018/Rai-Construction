import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "Modern Homes Ltd",
      rating: 5,
      content: "Rai Construction Solutions transformed our vision into reality with exceptional precision. Their BIM modeling and 3D visualizations helped us identify potential issues before construction, saving both time and costs.",
      delay: "0ms"
    },
    {
      name: "Michael Chen", 
      role: "Architect",
      company: "Chen Architecture Studio",
      rating: 5,
      content: "The quality of construction documents and technical drawings provided by Rai Construction Solutions is outstanding. Their attention to detail and compliance standards made our approval process seamless.",
      delay: "200ms"
    },
    {
      name: "Emma Rodriguez",
      role: "Developer",
      company: "Urban Development Group",
      rating: 5,
      content: "Their Scan to BIM services were invaluable for our renovation project. The accuracy of the as-built models and the speed of delivery exceeded our expectations. Highly recommended for any construction consultancy needs.",
      delay: "400ms"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-muted-light/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-gradient-construction mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience working with Rai Construction Solutions.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className={`construction-card text-center max-w-3xl mx-auto bg-white transition-all duration-1000 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}>
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <Quote className="h-12 w-12 text-accent mx-auto opacity-50" />
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 italic">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="space-y-2">
                      <h4 className="text-xl font-montserrat font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonial.role} at <span className="text-accent font-medium">{testimonial.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? "bg-accent shadow-accent"
                    : "bg-muted hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setActiveTestimonial(activeTestimonial === 0 ? testimonials.length - 1 : activeTestimonial - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-white shadow-construction hover:shadow-accent transition-smooth hover-scale"
          >
            ←
          </button>
          <button
            onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-white shadow-construction hover:shadow-accent transition-smooth hover-scale"
          >
            →
          </button>
        </div>

        {/* Stats Section */}
        <div className={`mt-16 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Client Satisfaction", value: "98%" },
              { label: "Projects Delivered", value: "500+" },
              { label: "Expert Team Members", value: "25+" },
              { label: "Years of Excellence", value: "15+" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-montserrat font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-inter">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;