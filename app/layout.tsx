import { inter } from "@/components/fonts";
import "@/app/globals.css";
import { ThemeProvider } from "next-themes";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider attribute="class">
          {children} 
        </ThemeProvider>
        
      </body>
    </html>
  );
}
