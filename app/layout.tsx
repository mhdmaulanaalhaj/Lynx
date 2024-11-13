// layout.tsx
"use client"; // Menandai ini sebagai komponen klien

import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { useState, useEffect } from "react";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

// Konfigurasi untuk Query Client
const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [wagmiConfig, setWagmiConfig] = useState<any>(null);

  useEffect(() => {
    // Memastikan kode ini hanya dijalankan di sisi klien
    const config = getDefaultConfig({
      appName: "Lynx App",
      projectId: "5ae1e2e75e245d21ac4bdb778dee0449", // Ganti dengan Project ID kamu dari WalletConnect Cloud
      chains: [mainnet, polygon, optimism, arbitrum, base],
      ssr: true, // Jika menggunakan server-side rendering
    });
    setWagmiConfig(config);
  }, []);

  // Menunggu hingga wagmiConfig terisi sebelum rendering
  if (!wagmiConfig) {
    return null; // Atau bisa juga menampilkan loading spinner
  }

  return (
    <html lang="en">
      {" "}
      <body>
        {" "}
        <WagmiProvider config={wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>{children}</RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
};

export default Layout;
