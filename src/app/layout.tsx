import "./globals.css";

export const metadata = {
  title: "AI Story Generator",
  description: "Create AI-powered children's stories",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
