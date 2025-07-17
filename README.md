
# CrypCoin Wallet Panel

Panel de compra oficial para el token $CRYP, desarrollado en React + Vite + TailwindCSS, con conexión a billeteras mediante Web3Modal (WalletConnect v2).

## 🔗 Demo en producción

[https://wallet.crypcoin.io](https://wallet.crypcoin.io)

---

## 🚀 Funcionalidades

- Conexión con múltiples billeteras (WalletConnect v2, MetaMask, etc.)
- Red Polygon configurada (Chain ID 137)
- Input en USD y cálculo automático de tokens $CRYP
- Barra de progreso de preventa
- Contador visual de próxima subida de precio
- Íconos para USDT, USDC, MATIC y WETH
- Estilo profesional en negro y dorado
- Componente 100% responsive

---

## 🧱 Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Web3Modal (v2.6.0)](https://docs.walletconnect.com/2.0/web/web3modal/react/about)

---

## 📦 Instalación local

```bash
git clone https://github.com/CrypCoinOfficial/crypcoin-wallet-panel.git
cd crypcoin-wallet-panel
npm install
npm run dev
```

---

## ⚙️ Variables importantes

El archivo `App.tsx` ya contiene el `projectId` de WalletConnect (puede ser reemplazado por el tuyo).  
Red configurada: **Polygon (Mainnet)**

---

## 📤 Deploy en Vercel

Este proyecto está listo para ser desplegado directamente en [https://vercel.com](https://vercel.com) con los siguientes ajustes:

- **Framework:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

---

## 📄 Licencia

Proyecto mantenido por el equipo de CrypCoin.  
Todos los derechos reservados © 2025
