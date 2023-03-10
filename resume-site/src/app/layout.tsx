import "./globals.css";

export const metadata = {
  title: "Bilal Faisal",
  description: "Bilal Faisal's Resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
