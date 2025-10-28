import "./globals.css";

export const metadata = { title: "IdeaVault" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#0A0A0A", color: "#fff", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
