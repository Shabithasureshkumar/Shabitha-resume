module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#FFB6C1", // lightpink - signature differentiation
        "primary-light": "#FFC0CB", // pink - gentle emphasis
        secondary: "#FFC0CB", // pink - gentle emphasis
        accent: "#FF7F7F", // coral - action clarity
        background: "#FFF8DC", // cornsilk - warm canvas
        surface: "#FFFFFF", // white - clean separation
        "text-primary": "#36454F", // charcoal - professional authority
        "text-secondary": "#6B7280", // gray-500 - supporting information
        success: "#10B981", // emerald-500 - achievement celebration
        warning: "#F59E0B", // amber-500 - gentle attention
        error: "#EF4444", // red-500 - clear correction
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      boxShadow: {
        soft: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        elevated: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'float': 'float 2s ease-in-out infinite',
        'butterfly-hover': 'butterfly-hover 0.6s ease-in-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '25%': { 
            transform: 'translateY(-10px) rotate(2deg)' 
          },
          '50%': { 
            transform: 'translateY(-5px) rotate(-1deg)' 
          },
          '75%': { 
            transform: 'translateY(-15px) rotate(1deg)' 
          },
        },
        'butterfly-hover': {
          '0%, 100%': { 
            transform: 'scale(1) rotate(0deg)' 
          },
          '50%': { 
            transform: 'scale(1.05) rotate(5deg)' 
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}