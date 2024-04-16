//"use client"

//'use client' convierte el componente en tipo cliente, es decir, se renderizan en el cliente y no en el servidor.
//se recomienda que los componenentes que sean de tipo presentacional sean de tipo servidor y que sean de tipo cliente cuando sean más dinámicos y requieran de estados de react / cuando requieran un useEffect / cuando se requiera acceder a alguna API del navegador (LocalStorage x ej)
//es buena practica utilizar los componentes de cliente lo más al final de la jerarquia se pueda, porque los de servidor mejoran mucho el performance de una app y colocarlos muy arriba (como en este caso, el wrapper que engloba toda la app) hará que todos los componentes hijos incluidos en el sean de tipo cliente, lo que arruina esa performance por ende

import { Inter } from "next/font/google";
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
