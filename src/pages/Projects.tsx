import { useEffect, useState } from "react";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import projectMoonstoneVilla from "@/assets/project-moonstone-villa.jpg";
import projectTranquilCrest from "@/assets/project-tranquil-crest.jpg";
import projectLilyfieldHouse from "@/assets/project-lilyfield-house.jpg";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setIsVisible(true);
    document.title = "Our Projects - Rai Construction Solutions";
  }, []);

  const categories = ["All", "Luxury Residential", "Commercial", "Heritage Modern", "Urban Contemporary"];

  const projects = [
    {
      title: "Moonstone Villa",
      description: "A stunning modern architectural masterpiece blending contemporary aesthetics with natural textures. This luxury residential project showcases our expertise in creating sophisticated living spaces.",
      image: projectMoonstoneVilla,
      category: "Luxury Residential",
      location: "Beverly Hills, CA",
      year: "2023",
      client: "Private Client",
      services: ["BIM 3D Modeling", "3D Renders & Walkthroughs", "Interior Design"],
      details: "This 8,500 sq ft luxury villa features cutting-edge design elements, sustainable materials, and smart home integration. Our comprehensive BIM modeling enabled seamless coordination between all trades."
    },
    {
      title: "Tranquil Crest", 
      description: "A blend of modern sophistication with classical charm, featuring arched windows and ornamental patterns. This heritage-inspired project demonstrates our versatility in architectural styles.",
      image: projectTranquilCrest,
      category: "Heritage Modern",
      location: "Charleston, SC",
      year: "2022",
      client: "Heritage Developers",
      services: ["Construction Documents", "Quantity Take-Off", "Scan to BIM"],
      details: "A 12,000 sq ft residential complex that honors traditional architecture while incorporating modern amenities. Our detailed construction documents ensured historical accuracy and compliance."
    },
    {
      title: "Lilyfield House",
      description: "A modern townhouse with a clean geometric façade, integrating natural wood and glass elements. This urban project showcases sustainable design and contemporary living.",
      image: projectLilyfieldHouse,
      category: "Urban Contemporary",
      location: "Portland, OR",
      year: "2023",
      client: "Urban Living Corp",
      services: ["BIM 3D Modeling", "Interior Design", "3D Renders"],
      details: "A 4,200 sq ft eco-friendly townhouse featuring energy-efficient systems, green building materials, and innovative space planning solutions for modern urban families."
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-6">
                Our <span className="text-accent">Project Portfolio</span>
              </h1>
              <p className="text-xl text-muted-light leading-relaxed">
                Discover our exceptional construction projects that showcase innovation, 
                craftsmanship, and architectural excellence across various sectors.
              </p>
            </div>
          </div>
        </section>

        {/* Project Categories */}
        <section className="py-12 bg-muted-light/10">
          <div className="container mx-auto px-4">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-inter font-medium transition-smooth ${
                      selectedCategory === category
                        ? "bg-accent text-white shadow-accent"
                        : "bg-white text-muted-foreground hover:text-accent hover:shadow-soft border border-border"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-1000 delay-${index * 200} ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}>
                    {/* Project Image */}
                    <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="relative group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-96 object-cover rounded-xl shadow-construction group-hover:shadow-accent transition-smooth"
                        />
                        <div className="absolute inset-0 bg-gradient-construction opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500"></div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-sm font-inter font-medium text-white">{project.category}</span>
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gradient-construction mb-4">
                          {project.title}
                        </h2>
                        
                        {/* Project Meta */}
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-accent" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-accent" />
                            <span>{project.year}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-accent" />
                            <span>{project.client}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      <p className="text-muted-foreground leading-relaxed">
                        {project.details}
                      </p>

                      {/* Services Used */}
                      <div className="space-y-3">
                        <h3 className="font-montserrat font-semibold text-foreground">
                          Services Provided:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.services.map((service, serviceIndex) => (
                            <span
                              key={serviceIndex}
                              className="bg-muted-light/50 text-muted-foreground px-3 py-1 rounded-full text-sm font-inter"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button asChild className="btn-construction">
                        <Link to="/contact">
                          Start Similar Project <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-steel text-white">
          <div className="container mx-auto px-4">
            <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                Ready to Create Your Dream Project?
              </h2>
              <p className="text-xl text-muted-light mb-8 leading-relaxed">
                Let's collaborate to bring your vision to life with the same level of excellence 
                and innovation showcased in our portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-construction text-lg px-8 py-4">
                  <Link to="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="btn-outline-construction text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;