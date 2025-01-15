import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;


// tailwind.config.js
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
      // Define estilos reutilizables para imágenes
//       backgroundImage: {
//         'custom-pattern': "url('/path-to-your-image.jpg')", // Imagen personalizada como fondo
//       },
//       colors: {
//         customColor: '#1DB954', // Color personalizado para texto o fondo
//       },
//       borderRadius: {
//         'custom': '20px', // Bordes redondeados personalizados
//       },
//       boxShadow: {
//         'custom': '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra personalizada
//       },
//     },
//   },
//   plugins: [],
// };