import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Api Lol",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      {/* <head>
        <link
          rel="icon"
          href="https://w7.pngwing.com/pngs/20/558/png-transparent-league-of-legends-logo-riot-games-font-brand-league-of-legends-text-logo-legend.png"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
