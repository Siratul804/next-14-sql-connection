import "./globals.css";

export const metadata = {
  title: "Next 14 with MySQL",
  description: "Created by Siratul Islam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
