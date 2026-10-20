"use client";

import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";

export default function Home() {
  const wallet = useTonWallet();

  return (
    <main className="page">
      <section className="panel">
        <div className="coin">N</div>
        <p className="eyebrow">TON COMMUNITY PROJECT</p>
        <h1>NullTap</h1>
        <p className="subtitle">Tap into the NULL ecosystem.</p>
        <div className="wallet"><TonConnectButton /></div>
        <div className="status">
          <span className={wallet ? "dot connected" : "dot"} />
          {wallet ? "Wallet connected" : "Wallet not connected"}
        </div>
        <p className="note">
          This is the initial website scaffold. Token transfers, the 1% split,
          game persistence, and backend APIs are not enabled yet.
        </p>
      </section>
      <footer>NullTap · Early development build</footer>
    </main>
  );
}
