
import React, { useState, useEffect } from 'react';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react';
import { ethers } from 'ethers';

// Configuración de Web3Modal
const projectId = 'c264c3eb3939f207e269689e94b7faf5';
const metadata = {
  name: 'CrypCoin Wallet',
  description: 'Buy $CRYP directly with your wallet',
  url: 'https://wallet.crypcoin.io',
  icons: ['https://crypcoin.io/favicon.ico']
};

const chains = [{ chainId: 137, name: 'Polygon', rpcUrls: ['https://polygon-rpc.com'] }];
const config = defaultConfig({ chains, projectId, metadata });
createWeb3Modal({ ethersConfig: config, chains, projectId });

export default function App() {
  const { address, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const [usd, setUsd] = useState('');
  const tokenPrice = 0.0001;
  const tokens = parseFloat(usd || '0') / tokenPrice;

  useEffect(() => {
    if (isConnected && walletProvider) {
      const provider = new ethers.BrowserProvider(walletProvider);
      provider.getSigner().then(signer => {
        console.log('Connected with signer:', signer);
      });
    }
  }, [walletProvider, isConnected]);

  return (
    <div style={{
      fontFamily: 'sans-serif',
      backgroundColor: '#000',
      color: '#FFD700',
      minHeight: '100vh',
      padding: '40px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '28px', marginBottom: '20px' }}>Buy $CRYP Now</h1>

      <w3m-button />

      {isConnected && (
        <div style={{ marginTop: '30px' }}>
          <input
            type="number"
            placeholder="Enter amount in USD"
            value={usd}
            onChange={e => setUsd(e.target.value)}
            style={{
              padding: '10px',
              width: '60%',
              fontSize: '16px',
              borderRadius: '6px',
              border: '1px solid #FFD700'
            }}
          />
          <p style={{ marginTop: '10px' }}>
            You'll receive approximately <strong>{tokens.toFixed(0)}</strong> $CRYP
          </p>

          <div style={{
            backgroundColor: '#333',
            borderRadius: '10px',
            height: '24px',
            width: '80%',
            margin: '20px auto',
            overflow: 'hidden',
            border: '1px solid #FFD700'
          }}>
            <div style={{
              backgroundColor: '#FFD700',
              height: '100%',
              width: '42%'
            }} />
          </div>

          <div style={{ fontSize: '14px', marginBottom: '20px' }}>
            Next price increase in: <strong>3d 14h 26m 52s</strong>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '20px' }}>
            {['usdt', 'usdc', 'matic', 'weth'].map(token => (
              <img
                key={token}
                src={`https://cdn.prod.website-files.com/6872ae0296fcdd96ac0026cd/68788c28b249be52acbb7b51_icon-${token}.webp`}
                alt={token}
                style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid gold' }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
