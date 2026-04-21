<p align="center">
  <img src="public/assets/brand/bescard.svg" alt="BesCARD" width="148" />
</p>

# BesCARD Burn

BesCARD Burn is a small web app for querying wallet-owned spores, identifying BesCARD items, and melting eligible assets through JoyID.

The app supports two public network targets:

- `mainnet`: the default GitHub Pages entry
- `testnet`: the Pages `testnet/` subpath build

## What It Does

- Connects a JoyID wallet
- Queries owned spores from the connected address
- Separates BesCARD items from other DOB/spore assets
- Shows meltable assets and release information
- Submits melt transactions and tracks confirmation status

## Local Development

```bash
pnpm install
pnpm dev
```

Useful scripts:

- `pnpm dev`: local development with the default development config
- `pnpm dev:mainnet`: local development against mainnet settings
- `pnpm build:mainnet`: production build for the mainnet Pages entry
- `pnpm build:testnet`: production build for the testnet Pages entry

## Deployment

GitHub Pages deployment is triggered only from the `main` branch.

The deployment workflow builds two outputs from the same codebase:

- mainnet at `/Bescard_burn/`
- testnet at `/Bescard_burn/testnet/`

> [!NOTE]
> Network-specific build settings are managed with dedicated Vite env modes:
> `.env.mainnet` and `.env.testnet`.
