import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Industrial IoT Colors
				'phase-r': 'hsl(var(--phase-r))',
				'phase-y': 'hsl(var(--phase-y))',
				'phase-b': 'hsl(var(--phase-b))',
				'motor-on': 'hsl(var(--motor-on))',
				'motor-off': 'hsl(var(--motor-off))',
				'timer-bg': 'hsl(var(--timer-bg))',
				'settings-panel': 'hsl(var(--settings-panel))',
				'settings-alt-panel': 'hsl(var(--settings-alt-panel))',
				'input-field': 'hsl(var(--input-field))',
				'cosmic-primary': 'hsl(var(--cosmic-primary))',
				'cosmic-secondary': 'hsl(var(--cosmic-secondary))',
				'status-active': 'hsl(var(--status-active))',
				'status-inactive': 'hsl(var(--status-inactive))',
				'status-warning': 'hsl(var(--status-warning))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'industrial': 'var(--shadow-industrial)',
				'panel': 'var(--shadow-panel)',
				'button': 'var(--shadow-button)',
				'card': 'var(--shadow-card)',
				'gauge': 'var(--shadow-gauge)',
				'glow': 'var(--shadow-glow)'
			},
			backgroundImage: {
				'gradient-panel': 'var(--gradient-panel)',
				'gradient-alt-panel': 'var(--gradient-alt-panel)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-phase-r': 'var(--gradient-phase-r)',
				'gradient-phase-y': 'var(--gradient-phase-y)',
				'gradient-phase-b': 'var(--gradient-phase-b)',
				'gradient-motor': 'var(--gradient-motor)',
				'gradient-cosmic': 'var(--gradient-cosmic)'
			},
			transitionProperty: {
				'smooth': 'var(--transition-smooth)',
				'fast': 'var(--transition-fast)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
