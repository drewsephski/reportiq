"use client";

export default function DownloadCTA() {
  return (
    <section id="download" className="py-20 relative bg-[#111]">
      <div className="container max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to <span className="gradient-text">supercharge</span> your workflow?
        </h2>
        
        <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
          Download Draycast for free and join thousands of users who have transformed their productivity.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a href="#macOS" className="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
            Download for macOS
          </a>
          <a href="#pro" className="btn btn-secondary">
            Explore Pro Plan
          </a>
        </div>
        
        <div className="glass-card p-6 rounded-xl inline-block">
          <div className="flex items-center text-sm">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
            <span>Compatible with macOS 10.15+</span>
          </div>
        </div>
      </div>
    </section>
  );
} 