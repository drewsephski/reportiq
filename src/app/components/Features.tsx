"use client";

export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Draycast is built natively for Apple Silicon with performance as a priority. Search and execute commands instantly."
    },
    {
      icon: "🧩",
      title: "Extensible",
      description: "Choose from hundreds of extensions built by a growing community of developers to connect with your favorite tools."
    },
    {
      icon: "⌨️",
      title: "Keyboard First",
      description: "Keep your hands on the keyboard and be more productive. Every action in Draycast can be performed with a keyboard shortcut."
    },
    {
      icon: "🎨",
      title: "Beautiful UI",
      description: "A pixel-perfect, native UI that feels right at home on macOS. Customize themes to match your style."
    },
    {
      icon: "🔐",
      title: "Private by Default",
      description: "Your data never leaves your device unless you explicitly share it. We respect your privacy."
    },
    {
      icon: "🛠️",
      title: "Developer Friendly",
      description: "Build your own extensions with our developer tools and TypeScript API. Contribute to the ecosystem."
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need in <span className="gradient-text">one place</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Draycast combines everything you need into a single, blazingly fast interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-[rgba(14,14,155,0.46)] flex items-center justify-center mb-4 text-2xl text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 