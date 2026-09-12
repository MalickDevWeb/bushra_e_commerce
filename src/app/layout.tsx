import type { Metadata } from "next";

import { APP_DESCRIPTION, APP_NAME } from "@/shared/constants/config";
import { PwaRegistration } from "@/shared/providers/PwaRegistration";
import { CartProvider } from "@/shared/providers/CartProvider";
import { FavoritesProvider } from "@/shared/providers/FavoritesProvider";
import { Toaster } from "sonner";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icons/icon-192.svg",
    apple: "/icons/icon-192.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full" suppressHydrationWarning>
      <body className="min-h-full bg-background text-foreground antialiased" suppressHydrationWarning>
        <PwaRegistration />
        <FavoritesProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </FavoritesProvider>
        <Toaster position="bottom-center" toastOptions={{
          style: {
            background: '#0c0a07',
            color: '#e8e1d3',
            border: '1px solid rgba(212, 175, 55, 0.3)',
          },
        }} />
      </body>
    </html>
  );
}
