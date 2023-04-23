import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainLayout from '../../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function PricingPage() {
  return (
    <MainLayout>
        <h1>Pricing Page</h1>

        <div className="description">
          <p>
            Get started by editing&nbsp;
            <code className="code">pages/pricing.jsx</code>
          </p>
        </div>

        <div className="center">
          <Image
            className="logo"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
    </MainLayout>
  )
}
