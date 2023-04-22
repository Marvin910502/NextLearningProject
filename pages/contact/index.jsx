import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainLayout from '../../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
    <MainLayout>
        <div className="description">
          <p>
            Get started by editing&nbsp;
            <code className="code">pages/contact.jsx</code>
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
