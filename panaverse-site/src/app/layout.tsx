"use client";
import ChakraWrapper from "./components/ChakraWrapper";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
      </head>
      
      <body>
        <ChakraWrapper>
          <Navbar />
          {children}
        </ChakraWrapper>
      </body>
    </html>
  );
}
