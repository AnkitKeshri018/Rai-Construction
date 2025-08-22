import React from "react";
import { useNavigate } from "react-router-dom";
import three from "@/assets/threedmodel.jpg"
import scan from "@/assets/sacn.jpg"
import luxury from "@/assets/luxury.webp"



const blogs = [
  {
    id: 1,
    title: "THE IMPACT OF 3D MODELING IN CONSTRUCTION",
    desc: "3D modeling is reshaping the construction industry by improving visualization, collaboration, and cost estimation...",
    img:three,
  },
  {
    id: 2,
    title: "THE IMPACT OF SCAN TO BIM",
    desc: "Scan to BIM enhances accuracy and efficiency in construction and renovation...",
    img: scan,
  },
  {
    id: 3,
    title: "LUXURY ON A BUDGET: INTERIOR DESIGN TIPS",
    desc: "Achieve luxury on a budget by investing in statement pieces, upgrading lighting...",
    img: luxury,
  },
];

export default function BlogSection() {
  const navigate = useNavigate();

  return (
    <section className="py-14 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold animate-in fade-in slide-in-from-top-5 duration-1000">
          LATEST <span className="text-red-500">ARTICLES</span> FROM OUR BLOG
          POST
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className="rounded-2xl shadow-lg overflow-hidden bg-white 
                       hover:shadow-xl transition-all duration-300 
                       animate-in fade-in slide-in-from-bottom-5 duration-700"
            style={{ animationDelay: `${index * 200}ms` }} // stagger
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{blog.desc}</p>
              <button
                onClick={() => navigate("/blog")}
                className="text-red-500 font-semibold hover:underline transition-colors duration-200"
              >
                READ MORE →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
