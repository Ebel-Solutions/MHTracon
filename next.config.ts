import type { NextConfig } from "next";
import os from "os";

// Collect all local network IPv4 addresses dynamically
function getLanIPs(): string[] {
  const interfaces = os.networkInterfaces();
  const ips: string[] = [];
  for (const iface of Object.values(interfaces)) {
    for (const alias of iface ?? []) {
      if (alias.family === "IPv4" && !alias.internal) {
        ips.push(alias.address);
      }
    }
  }
  return ips;
}

const lanIPs = getLanIPs();

const nextConfig: NextConfig = {
  // Allow LAN devices (phones, tablets) to access the Next.js 16 dev server.
  // Next.js 16 blocks cross-origin requests by default — this whitelists the local network.
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    ...lanIPs,
    "192.168.0.*",
    "192.168.1.*",
    "10.0.0.*",
  ],
};

export default nextConfig;
