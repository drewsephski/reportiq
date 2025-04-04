        /** @type {import('tailwindcss').Config} */
        module.exports = {
			darkMode: ["class"],
			content: [
			  './pages/**/*.{ts,tsx}',
			  './components/**/*.{ts,tsx}',
			  './app/**/*.{ts,tsx}',
			  './src/**/*.{ts,tsx}',
			],
			prefix: "",
			theme: {
			  container: {
				center: true,
				padding: "2rem",
				screens: {
				  "2xl": "1400px",
				},
			  },
			  extend: {
				colors: { // Define your colors here
				  primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				  },
				  secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				  },
				  accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				  },
				  muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				  },
				  border: 'hsl(var(--border))',
				  input: 'hsl(var(--input))',
				  ring: 'hsl(var(--ring))',
				  background: 'hsl(var(--background))',
				  foreground: 'hsl(var(--foreground))',
				  destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				  },
				  card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				  },
				  popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				  },
				  // ... other colors from your :root in globals.css
				  'gradient-start': 'var(--gradient-start)',
				  'gradient-end': 'var(--gradient-end)',
				  'card-bg': 'var(--card-bg)',
				  'card-border': 'var(--card-border)',
				},
				// ... rest of your extend config
			  },
			},
			plugins: [("tailwindcss-animate"), ("tailwind-merge")],
		  }