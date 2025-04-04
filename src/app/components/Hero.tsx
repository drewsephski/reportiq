"use client";

export default function Hero() {
  return (
    <section className="pt-[calc(var(--header-height)+4rem)] pb-20 relative overflow-hidden">
      <div className="hero-gradient" aria-hidden="true" />
      
      <div className="container text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl mx-auto">
          Supercharge Your Productivity with <span className="gradient-text">Draycast</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto">
          Control your tools with a few keystrokes. A blazingly fast, fully extensible launcher. It&apos;s time to replace Spotlight.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <a href="#download" className="btn btn-primary">
            Download for Mac
          </a>
          <a href="#learn" className="btn btn-secondary">
            Learn More
          </a>
        </div>
        
        <div className="relative mx-auto max-w-5xl">
          <div className="glass-card p-2 md:p-4">
            <div className="bg-[#000000] rounded-lg overflow-hidden">
              <div className="h-9 bg-[#111111] flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                </div>
                <div className="text-xs text-center text-muted flex-1">Draycast</div>
              </div>
              
              <div className="p-6">
                <div className="bg-[#111111] rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded bg-[var(--primary)] flex items-center justify-center">
                      <span className="text-white text-xs">⌘</span>
                    </div>
                    <input 
                      type="text" 
                      value="Search everything..." 
                      readOnly
                      className="bg-transparent border-none outline-none w-full text-sm"
                    />
                  </div> 
                  
                  <div className="space-y-2">
                    {["Calendar", "Calculator", "Window Management", "System"].map((item, index) => (
                      <div 
                        key={index} 
                        className={`flex items-center gap-3 p-2 rounded-lg ${index === 0 ? 'bg-[#222]' : ''}`}
                      >
                        <div className="w-8 h-8 rounded bg-[#333] flex items-center justify-center text-xs">
                          {index === 0 ? "📅" : index === 1 ? "🔢" : index === 2 ? "🪟" : "⚙️"}
                        </div>
                        <div className="text-sm">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full blur-2xl opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
        </div>
      </div>
    </section>
  );
} 