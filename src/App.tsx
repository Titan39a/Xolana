import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { clusterApiUrl } from '@solana/web3.js'
import '@solana/wallet-adapter-react-ui/styles.css'
import { Toaster } from 'sonner';

import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Sidebar from './components/ui/Sidebar';
import { Home } from './pages/Home';
import Swap from './pages/Swap';
// import Stake from './pages/Stake';
import SolanaStaking from './pages/SolanaStaking';

function App() {
  const network = 'devnet'
  const endpoint = clusterApiUrl(network)
  console.log(endpoint)

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <RecoilRoot>
            <Router>
              <div className="flex w-full">
                <div className="w-full">
                  <Sidebar />
                  <Header />
                  <main className='min-h-[80vh]'>
                    <Routes>
                      <Route path='*' element={<Navigate to={'/'} replace />} />
                      <Route path='/' element={<Home />} />
                      <Route path='/o/swap' element={<Swap />} />
                      {/* <Route path='/o/stake' element={<Stake />} /> */}
                      <Route path='/o/stake' element={<SolanaStaking />} />
                    </Routes>
                  </main>
                  <Footer />
                  <Toaster />
                </div>
              </div>
            </Router>
          </RecoilRoot>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider >
  )
}

export default App
