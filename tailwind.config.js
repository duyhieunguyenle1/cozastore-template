/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        button: '#717fe0'
      },
      backgroundImage: {
        hero: "url('./img/slide-02.jpg')",
        contact: "url('./img/banner-contact.jpg')",
        blog: "url('./img/blog-hero.jpg')"
      },
      keyframes: {
        zoom: {
          '0%': { transform: 'translateY(100%) scale(0)' },
          '100%': { transform: 'translateY(0%) scale(1)' }
        },
        zoomSlide: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' }
        },
        slideIn: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' }
        }
      },
      animation: {
        zoomIn: 'zoom .7s ease-in-out',
        zoomSlide: 'zoomSlide .5s ease-in-out',
        slideIn: 'slideIn .3s ease-in-out'
      }
    },
    fontFamily: {
      primary: ['Roboto', 'sans-serif'],
    },
    screens: {
      mn: '540px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}