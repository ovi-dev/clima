import type { Metadata } from "next";
import {roboto, geistSans, lora, openSans} from '../font/fuentes';
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
interface ImportMetaEnv {
  [key: string]: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}

export const metadata: Metadata = {
  title: "El Clima",
  description: "Buscador de clima",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="es">
      <body
        className={`${roboto.className} ${geistSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
