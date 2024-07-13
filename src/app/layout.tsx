import './global.css';
import { Montserrat } from "next/font/google";

export const metadata = {
  title: 'Wisercash',
  description: 'Wisercash is a financial services company that provides financial solutions to consumers.',
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
