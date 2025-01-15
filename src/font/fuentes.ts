import { Roboto, Geist, Open_Sans, Lora} from 'next/font/google'

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const roboto = Roboto({
    subsets: ['greek-ext', 'latin'],
    weight: ['400', '500'], 
    // Define los pesos que usarás
    
  });
  
  export const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '600'], // Define los pesos que usarás
  });
  
  export const lora = Lora({
    subsets: ['latin'],
    style: ['normal', 'italic'], // Define estilos adicionales
  });
  