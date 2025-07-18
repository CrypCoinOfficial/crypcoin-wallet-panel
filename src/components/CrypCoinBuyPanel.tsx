import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { injected } from 'wagmi/connectors'

const TOKEN_PRICE = 0.0001 // USD por $CRYP (ejemplo)
const HARDCAP = 5000000 // Meta de recaudación en USD

export default function CrypCoinBuyPanel() {
  const { open } = useWeb3Modal()
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({ connector: injected() })
  const { disconnect } = useDisconnect()

  const [usdAmount, setUsdAmount] = useState('')
  const [crypAmount, setCrypAmount] = useState(0)
  const [raised, setRaised] = useState(1024300) // ejemplo actual

  useEffect(() => {
    const usd = parseFloat(usdAmount)
    if (!isNaN(usd)) {
      setCrypAmount(usd / TOKEN_PRICE)
    } else {
      setCrypAmount(0)
    }
  }, [usdAmount])

  const handleConnect = async () => {
    open()
  }

  return (
    <div className="max-w-md mx-auto bg-zinc-900 border-2 border-yellow-400 rounded-2xl p-6 text-center shadow-xl text-white font-sans">
      <h2 className="text-yellow-400 text-2xl font-bold mb-4">Buy $CRYP Now</h2>

      {!isConnected ? (
        <button
          onClick={handleConnect}
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded mb-4"
        >
          CONNECT WALLET
        </button>
      ) : (
        <>
          <p className="mb-2">Connected: {address.slice(0, 6)}...{address.slice(-4)}</p>
          <button
            onClick={() => disconnect()}
            className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-3 rounded mb-4"
          >
            Disconnect
          </button>
        </>
      )}

      <div className="mb-4">
        <label className="block mb-1">Amount in USD</label>
        <input
          type="number"
          value={usdAmount}
          onChange={(e) => setUsdAmount(e.target.value)}
          className="w-full p-2 rounded bg-zinc-800 border border-yellow-400 text-white"
        />
      </div>

      <div className="mb-4">
        <p>You will receive:</p>
        <p className="text-2xl font-semibold text-yellow-300">{crypAmount.toLocaleString()} $CRYP</p>
      </div>

      <div className="mb-6">
        <div className="h-4 w-full bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-yellow-400"
            style={{ width: `${(raised / HARDCAP) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-yellow-200 mt-1">
          ${raised.toLocaleString()} raised / ${HARDCAP.toLocaleString()} target
        </p>
      </div>

      <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-6 rounded disabled:opacity-50" disabled>
        BUY WITH USDT (coming soon)
      </button>
    </div>
  )
}
