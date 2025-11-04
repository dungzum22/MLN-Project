import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Kinh Tế Thị Trường Định Hướng XHCN",
  description: "Tìm hiểu về kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <script disable-devtool-auto="true" src='https://cdn.jsdelivr.net/npm/disable-devtool'></script>
      <body suppressHydrationWarning className={`${inter.className} antialiased bg-gradient-to-br from-orange-50 via-white to-amber-50 min-h-screen`}>
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
