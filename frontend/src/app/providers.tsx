"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { WagmiProvider } from "wagmi";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

const queryClient = new QueryClient();

const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID;
if (!projectId) throw new Error("NEXT_PUBLIC_REOWN_PROJECT_ID is missing!");

// ⚡ Nouvelle config unifiée
const config = getDefaultConfig({
  appName: "Mon App",
  projectId: projectId,
  // Chaînes supportées
  chains: [mainnet, sepolia],
  // Transports pour provider HTTP par défaut
  transports: {
    "1": http(),      // mainnet
    "11155111": http(), // sepolia
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
