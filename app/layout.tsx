import type { Metadata } from "next";
import "./globals.css";
import { Inter, Source_Serif_4, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider} from 'next-themes';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const sourceSerif = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif' })
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: "SpectraPanel",
  description: "SpectraPanel is a powerful and intuitive dashboard for managing your business operations, inventory, analytics, and more — all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sourceSerif.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class">
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
