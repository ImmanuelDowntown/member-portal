#!/usr/bin/env bash
# Fast, deterministic setup for ephemeral Codex containers
# - Prefers pnpm if a pnpm-lock.yaml is present (fast install, content-addressable store)
# - Falls back to npm ci when package-lock.json exists
# - Disables noisy/audit/fund steps to shave seconds
# - Runs a typecheck if available (non-fatal)
set -euo pipefail

echo "[codex-setup] Node:" "$(node -v || true)"; echo "[codex-setup] npm:" "$(npm -v || true)"

if command -v corepack >/dev/null 2>&1; then
  echo "[codex-setup] Enabling corepack"
  corepack enable || true
fi

if [ -f pnpm-lock.yaml ]; then
  echo "[codex-setup] Using pnpm (lockfile detected)"
  pnpm --version || (npm i -g pnpm && pnpm --version)
  pnpm install --frozen-lockfile
elif [ -f package-lock.json ]; then
  echo "[codex-setup] Using npm ci (lockfile detected)"
  npm ci --no-audit --no-fund --progress=false
else
  echo "[codex-setup] Using npm install (no lockfile)"
  npm install --no-audit --no-fund --progress=false
fi

if npm run -s typecheck >/dev/null 2>&1; then
  echo "[codex-setup] Running typecheck"
  npm run -s typecheck || true
fi

echo "[codex-setup] Done"
