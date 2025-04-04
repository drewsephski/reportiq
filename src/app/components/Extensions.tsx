"use client";

export default function Extensions() {
  const extensions = [
    {
      name: "Window Management",
      icon: "🪟",
      author: "Draycast",
      color: "#FF6363",
      description: "Organize your desktop without taking your hands off the keyboard."
    },
    {
      name: "Shortcuts",
      icon: "⚡",
      author: "Draycast",
      color: "#5E7CE2",
      description: "Create custom keyboard shortcuts for any action in Draycast."
    },
    {
      name: "GitHub",
      icon: "🐙",
      author: "Thomas Paul Mann",
      color: "#2EA44F",
      description: "Quickly access repositories, pull requests, and issues."
    },
    {
      name: "Spotify",
      icon: "🎵",
      author: "Thomas Paul Mann",
      color: "#1DB954",
      description: "Control Spotify and search for songs, albums, and playlists."
    },
    {
      name: "Slack",
      icon: "💬",
      author: "Draycast",
      color: "#4A154B",
      description: "Send messages, view channels, and manage your Slack workspace."
    },
    {
      name: "Clipboard History",
      icon: "📋",
      author: "Draycast",
      color: "#F7B500",
      description: "Access your clipboard history and quickly paste items."
    }
  ];

  return (
    <section id="extensions" className="py-20 relative bg-[#111]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Extend with <span className="gradient-text">powerful tools</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Connect Draycast with your favorite tools through our growing ecosystem of extensions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {extensions.map((extension, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden hover:scale-[1.01] transition-transform">
              <div className="flex items-center p-4 border-b border-[var(--card-border)]">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                  style={{ backgroundColor: extension.color }}
                >
                  <span className="text-lg">{extension.icon}</span>
                </div>
                <div>
                  <h3 className="font-medium text-white">{extension.name}</h3>
                  <p className="text-xs text-muted">by {extension.author}</p>
                </div>
                <div className="ml-auto">
                  <button className="text-xs bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.35)] px-3 py-1 rounded-full transition-colors">
                    Install
                  </button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted">{extension.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a href="#store" className="btn btn-secondary">
            Browse Extension Store
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 