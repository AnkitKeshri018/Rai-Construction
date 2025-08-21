import { useEffect, useState } from "react";
import { Users, Target, Award, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.title = "About Us - Rai Construction Solutions";
  }, []);

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every project is executed with meticulous attention to detail and accuracy."
    },
    {
      icon: Lightbulb,
      title: "Innovation", 
      description: "We embrace cutting-edge technology and creative solutions in all our services."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of quality in every aspect of our work."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We build lasting relationships with clients through trust and collaboration."
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      experience: "20+ years in construction consultancy",
      specialization: "Project Management & BIM Implementation"
    },
    {
      name: "Priya Sharma",
      role: "Head of Design",
      experience: "15+ years in architectural design",
      specialization: "3D Modeling & Visualization"
    },
    {
      name: "Amit Patel",
      role: "Technical Director", 
      experience: "18+ years in construction technology",
      specialization: "Scan to BIM & Technical Documentation"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-6">
                About <span className="text-accent">Rai Construction Solutions</span>
              </h1>
              <p className="text-xl text-muted-light leading-relaxed">
                Transforming the construction industry through innovative technology, 
                precision engineering, and unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gradient-construction mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2008, Rai Construction Solutions began with a simple yet ambitious vision: 
                    to revolutionize the construction industry through innovative technology and exceptional service.
                  </p>
                  <p>
                    What started as a small consultancy firm has grown into a leading provider of comprehensive 
                    construction solutions, serving clients across residential, commercial, and industrial sectors.
                  </p>
                  <p>
                    Our journey has been marked by continuous learning, adaptation, and growth. We've embraced 
                    emerging technologies like BIM, 3D modeling, and laser scanning to deliver superior results 
                    for our clients.
                  </p>
                  <p>
                    Today, we are proud to be trusted partners to architects, contractors, and developers, 
                    helping them bring their visions to life with precision and efficiency.
                  </p>
                </div>
              </div>
              
              <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
                <div className="construction-card bg-gradient-steel text-white p-8">
                  <h3 className="text-2xl font-montserrat font-semibold mb-6 text-accent">
                    Our Mission
                  </h3>
                  <p className="text-lg leading-relaxed mb-6">
                    To be the premier construction consultancy that bridges the gap between design and execution, 
                    delivering innovative solutions that exceed client expectations while setting new industry standards.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-montserrat font-bold text-accent">500+</div>
                      <div className="text-sm">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-montserrat font-bold text-accent">15+</div>
                      <div className="text-sm">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-muted-light/10">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gradient-construction mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                These values guide everything we do and shape our commitment to delivering exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`construction-card text-center group transition-all duration-1000 delay-${(index + 1) * 100} ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-smooth">
                      <value.icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4 group-hover:text-accent transition-smooth">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gradient-construction mb-6">
                Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Meet the experienced professionals who lead our organization and drive our success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className={`construction-card text-center group transition-all duration-1000 delay-${(index + 1) * 200} ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                >
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-gradient-construction rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-smooth">
                      <span className="text-2xl font-montserrat font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold text-foreground mb-2 group-hover:text-accent transition-smooth">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-2">{member.experience}</p>
                  <p className="text-sm text-muted-foreground">{member.specialization}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;