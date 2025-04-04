"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


// --- Reusable Components ---

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyle = 'px-5 py-2.5 rounded-lg font-medium text-sm focus:outline-none focus:ring-4 transition-colors duration-200 ease-in-out inline-flex items-center justify-center';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base'
  }[size];

  let variantStyle = '';
  switch (variant) {
    case 'secondary':
      variantStyle = 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-300';
      break;
    case 'outline':
      variantStyle = 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-300';
      break;
    case 'primary':
    default:
      variantStyle = 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300';
      break;
  }

  return (
    <button className={`${baseStyle} ${sizeStyles} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
}

const Input: React.FC<InputProps> = ({ label, id, className = '', containerClassName = '', ...props }) => {
  const inputId = id || `input-${Math.random().toString(36).substring(7)}`;
  return (
    <div className={`w-full ${containerClassName}`}>
      {label && <label htmlFor={inputId} className="block mb-1.5 text-sm font-medium text-gray-700">{label}</label>}
      <input
        id={inputId}
        className={`block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-gray-400 ${className}`}
        {...props}
      />
    </div>
  );
};

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon, className = '' }) => {
  return (
    <motion.div
      className={`bg-white p-6 rounded-xl shadow-sm border border-gray-200 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {icon && <div className="mb-4 text-blue-600">{icon}</div>}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

// --- Placeholder Icons ---

const PlaceholderIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg className={`text-blue-500 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
);

// First, export the icon so it can be used in other components if needed
export const CheckIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
);


// --- Platform Specific Components ---

const IosMockup: React.FC = () => (
  <motion.div
    key="ios"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl"
  >
    <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
      {/* Screen Content */}
      <div className="p-4 h-full flex flex-col bg-gradient-to-b from-blue-50 to-white">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-semibold text-gray-700">9:41 AM</span>
          <div className="flex space-x-1">
             <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
             <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
             <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <div className="flex-grow flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckIcon className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">iOS Experience</h2>
            <p className="text-sm text-gray-500 px-4">Smooth animations and native look & feel for Apple users.</p>
            <Button variant="primary" className="mt-6 text-xs px-4 py-1.5">Get Started</Button>
        </div>
        {/* iOS Home Indicator */}
        <div className="w-32 h-1 bg-gray-300 rounded-full mx-auto mt-auto mb-2"></div>
      </div>
    </div>
  </motion.div>
);

const MaterialMockup: React.FC = () => (
  <motion.div
    key="material"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    className="relative mx-auto border-gray-700 bg-gray-700 border-[10px] rounded-xl h-[600px] w-[300px] shadow-xl"
  >
     <div className="h-[32px] w-[3px] bg-gray-700 absolute -start-[13px] top-[72px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-700 absolute -start-[13px] top-[124px] rounded-s-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-700 absolute -end-[13px] top-[142px] rounded-e-lg"></div>
    <div className="rounded-lg overflow-hidden w-[280px] h-[580px] bg-white dark:bg-gray-800">
       {/* Screen Content */}
      <div className="p-4 h-full flex flex-col bg-gradient-to-b from-indigo-50 to-white">
        {/* Android Status Bar */}
        <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-medium text-gray-600">10:10</span>
            <div className="flex items-center space-x-1">
                 <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M17.657 4.657a.75.75 0 00-1.06 0l-1.5 1.5a.75.75 0 101.06 1.06l1.5-1.5a.75.75 0 000-1.06zm-2.828 0a.75.75 0 00-1.06 0L12 6.172l-1.768-1.515a.75.75 0 10-1.06 1.06l1.5 1.5a.75.75 0 101.06 1.06l1.5-1.5a.75.75 0 000-1.06zM9.93 4.657a.75.75 0 00-1.06 0l-1.5 1.5a.75.75 0 101.06 1.06l1.5-1.5a.75.75 0 000-1.06zM3 15.75l14-11.25V15.75a1.5 1.5 0 01-1.5 1.5H4.5A1.5 1.5 0 013 15.75z"/></svg>
                 <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M1 4a1 1 0 011-1h16a1 1 0 011 1v1H1V4zm0 3h18v10a1 1 0 01-1 1H2a1 1 0 01-1-1V7zm1 11a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/></svg>
            </div>
        </div>
        <div className="flex-grow flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <PlaceholderIcon className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Material You Feel</h2>
            <p className="text-sm text-gray-500 px-4">Clean design following Google&apos;s Material guidelines for Android.</p>
             <Button variant="primary" className="mt-6 text-xs px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-300">Try Now</Button>
        </div>
        {/* Android Navigation Bar */}
        <div className="flex justify-around items-center mt-auto h-10">
             <div className="w-5 h-5 border-2 border-gray-500 rounded-full"></div>
             <div className="w-5 h-5 border-2 border-gray-500"></div>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </div>
      </div>
    </div>
  </motion.div>
);


// --- Landing Page Component ---

const LandingPage: React.FC = () => {
  const [platform, setPlatform] = useState<'ios' | 'material'>('ios');
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleInteractiveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
    // In a real app, you'd likely do more here (e.g., API call)
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">SaaSify</div>
          <div className="space-x-4">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#demo" className="text-gray-600 hover:text-blue-600 transition-colors">Demo</a>
            <Button variant="primary" size="sm">Get Started</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        className="container mx-auto px-6 py-24 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
          Build Amazing Apps <span className="text-blue-600">Faster</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Our platform provides the tools and infrastructure you need to launch your SaaS application quickly and efficiently. Focus on your product, let us handle the rest.
        </p>
        <div className="space-x-4">
          <Button variant="primary" size="lg">Start Free Trial</Button>
          <Button variant="secondary" size="lg">Request Demo</Button>
        </div>
         <motion.div
            className="mt-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
         >
             {/* Placeholder for hero image/graphic */}
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 border-2 border-dashed border-blue-200 rounded-xl w-full h-64 md:h-96 flex items-center justify-center">
                <span className="text-blue-400 font-medium">App Screenshot / Animation Placeholder</span>
            </div>
         </motion.div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Why Choose SaaSify?</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                We offer a comprehensive suite of features designed for modern SaaS applications.
              </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              icon={<PlaceholderIcon />}
              title="Rapid Development"
              description="Utilize our pre-built components and infrastructure to ship features faster than ever."
            />
            <Card
              icon={<PlaceholderIcon />}
              title="Scalable Infrastructure"
              description="Built on reliable cloud technology that scales automatically with your user base."
            />
            <Card
              icon={<PlaceholderIcon />}
              title="Platform Optimized"
              description="Deliver native-like experiences on both iOS and Android with platform-specific UI."
            />
             <Card
              icon={<PlaceholderIcon />}
              title="Secure by Design"
              description="Security is built-in from the ground up, ensuring your data and users are protected."
            />
             <Card
              icon={<PlaceholderIcon />}
              title="Seamless Integrations"
              description="Connect easily with popular third-party services and APIs to extend functionality."
            />
             <Card
              icon={<PlaceholderIcon />}
              title="Developer Friendly"
              description="Clean APIs, comprehensive documentation, and excellent support for your team."
            />
          </div>
        </div>
      </section>

      {/* Platform Specific Variants Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Looks Great Everywhere</h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Preview how your app can adapt its look and feel for different mobile platforms.
            </p>
         </motion.div>
          <div className="flex justify-center space-x-4 mb-12">
            <Button
              variant={platform === 'ios' ? 'primary' : 'outline'}
              onClick={() => setPlatform('ios')}
            >
              iOS
            </Button>
            <Button
              variant={platform === 'material' ? 'primary' : 'outline'}
              className={platform === 'material' ? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-300' : ''}
              onClick={() => setPlatform('material')}
            >
              Material (Android)
            </Button>
          </div>

          <div className="flex justify-center">
             <AnimatePresence mode="wait">
                 {platform === 'ios' ? <IosMockup key="ios-mockup" /> : <MaterialMockup key="material-mockup" />}
             </AnimatePresence>
          </div>
        </div>
      </section>

       {/* Interactive Demo Section */}
      <section id="demo" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Try It Out!</h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              See a simple example of our components in action. Enter some text below.
            </p>
          </motion.div>

          <motion.div
            className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleInteractiveSubmit} className="space-y-4">
              <Input
                label="Enter your message:"
                placeholder="Type something..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
              />
              <Button type="submit" variant="primary" className="w-full">
                Submit
              </Button>
            </form>
            {submittedValue && (
              <motion.div
                className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md text-center"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-sm text-blue-800">
                  You submitted: <span className="font-semibold">{submittedValue}</span>
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
       <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your SaaS?</h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of developers building successful applications on our platform. Start your free trial today, no credit card required.
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100 focus:ring-white">
              Sign Up Now
            </Button>
           </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-10 bg-gray-800 text-gray-400">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                <div>
                    <h5 className="font-semibold text-gray-200 mb-3">Product</h5>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Features</a></li>
                        <li><a href="#" className="hover:text-white">Pricing</a></li>
                        <li><a href="#" className="hover:text-white">Integrations</a></li>
                        <li><a href="#" className="hover:text-white">Updates</a></li>
                    </ul>
                </div>
                 <div>
                    <h5 className="font-semibold text-gray-200 mb-3">Company</h5>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Careers</a></li>
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>
                 <div>
                    <h5 className="font-semibold text-gray-200 mb-3">Resources</h5>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Documentation</a></li>
                        <li><a href="#" className="hover:text-white">API Reference</a></li>
                        <li><a href="#" className="hover:text-white">Support</a></li>
                        <li><a href="#" className="hover:text-white">Status</a></li>
                    </ul>
                </div>
                 <div>
                    <h5 className="font-semibold text-gray-200 mb-3">Legal</h5>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
                    </ul>
                </div>
           </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} SaaSify. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
