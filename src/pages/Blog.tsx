import { useEffect, useState } from "react";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setIsVisible(true);
    document.title = "Blog - Rai Construction Solutions";
  }, []);

  const categories = ["All", "BIM Technology", "Construction Tips", "Project Updates", "Industry News"];

  const blogPosts = [
    {
      title: "The Future of BIM in Construction: 2024 Trends and Innovations",
      excerpt: "Discover the latest trends in Building Information Modeling and how they're revolutionizing the construction industry. From AI integration to cloud-based collaboration.",
      author: "Rajesh Kumar",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "BIM Technology",
      featured: true
    },
    {
      title: "5 Essential Steps for Successful Construction Project Planning",
      excerpt: "Learn the key strategies that ensure your construction project stays on time and within budget. Expert tips from our experienced project managers.",
      author: "Priya Sharma", 
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Construction Tips",
      featured: false
    },
    {
      title: "Moonstone Villa: A Case Study in Modern Architecture",
      excerpt: "Take a behind-the-scenes look at our award-winning Moonstone Villa project and how BIM technology enabled seamless execution of complex design elements.",
      author: "Amit Patel",
      date: "2024-01-08", 
      readTime: "10 min read",
      category: "Project Updates",
      featured: true
    },
    {
      title: "Scan to BIM: Transforming Legacy Buildings for the Digital Age",
      excerpt: "Explore how laser scanning and BIM modeling are breathing new life into heritage buildings and enabling precise renovation projects.",
      author: "Sarah Johnson",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "BIM Technology",
      featured: false
    },
    {
      title: "Sustainable Construction Practices: Building for the Future",
      excerpt: "Discover eco-friendly construction methods and materials that are shaping the future of sustainable building design and construction.",
      author: "Michael Chen",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "Industry News",
      featured: false
    },
    {
      title: "Cost Optimization Through Accurate Quantity Take-offs",
      excerpt: "Learn how precise quantity estimation can save significant costs in construction projects and improve overall project profitability.",
      author: "Emma Rodriguez",
      date: "2023-12-28",
      readTime: "5 min read",
      category: "Construction Tips",
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-6">
                Construction <span className="text-accent">Insights</span>
              </h1>
              <p className="text-xl text-muted-light leading-relaxed">
                Stay updated with the latest trends, technologies, and best practices in 
                construction consultancy and BIM modeling.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="max-w-4xl mx-auto">
                  <div className="mb-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured Article
                    </span>
                  </div>
                  
                  <article className="construction-card bg-gradient-steel text-white p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 text-sm text-muted-light">
                        <span className="bg-accent/20 text-accent px-2 py-1 rounded text-xs">
                          {featuredPost.category}
                        </span>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-montserrat font-bold leading-tight">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-lg text-muted-light leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      
                      <Button className="btn-construction">
                        Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-12 bg-muted-light/10">
          <div className="container mx-auto px-4">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
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

        {/* Blog Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <article
                  key={index}
                  className={`construction-card group transition-all duration-1000 delay-${(index + 1) * 100} ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                >
                  {/* Post Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-muted-light text-muted-foreground px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-montserrat font-semibold text-foreground group-hover:text-accent transition-smooth leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {post.excerpt}
                    </p>

                    {/* Post Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <Link 
                        to="#"
                        className="text-accent hover:text-accent-light transition-smooth text-sm font-medium group"
                      >
                        Read More
                        <ArrowRight className="inline-block ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <Button className="btn-outline-construction">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-steel text-white">
          <div className="container mx-auto px-4">
            <div className={`text-center max-w-2xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-muted-light mb-8 leading-relaxed">
                Subscribe to our newsletter and never miss the latest construction industry 
                insights and project updates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border-0 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button className="btn-construction px-6 py-3">
                  Subscribe
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

export default Blog;