"use client";

import { TonConnectUIProvider } from "@tonconnect/ui-react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TonConnectUIProvider manifestUrl="https://YOUR-APP-DOMAIN.onrender.com/tonconnect-manifest.json">
      {children}
    </TonConnectUIProvider>
  );
}
