"use client";
import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Raycast is one of those tools that once you start using it, you can't imagine how you ever lived without it.",
      author: "Jane Doe",
      role: "Product Designer at Figma",
    },
    {
      quote: "Raycast has completely changed my workflow. The speed, extensibility, and design make it a must-have for any Mac user.",
      author: "John Smith",
      role: "Software Engineer at GitHub",
    },
    {
      quote: "I've tried many launchers over the years, but Raycast is by far the best. It's fast, reliable, and constantly improving.",
      author: "Alex Johnson",
      role: "Developer Advocate at Google",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by <span className="gradient-text">productive people</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Join thousands of individuals and teams who use Raycast every day to boost their productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6 rounded-xl flex flex-col">
              <div className="mb-4 text-2xl text-[var(--primary)]">&quot;</div>
              <p className="text-lg mb-6 flex-1">{testimonial.quote}</p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
