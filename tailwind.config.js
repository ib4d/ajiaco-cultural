/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bandera: {
          azul: '#1e3a8a',
          azulClaro: '#bfdbfe',
          rojo: '#dc2626',
          rojoClaro: '#fecaca',
          blanco: '#ffffff',
        },
      },
      boxShadow: { soft: '0 10px 25px rgba(0,0,0,.08)' },
      borderRadius: { xl2: '1rem' },
    },
  },
  plugins: [],
};
