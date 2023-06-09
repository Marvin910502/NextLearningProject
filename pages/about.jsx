import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainLayout from '../components/layouts/MainLayout'
import DarkLayaout from '@/components/layouts/DarkLayout'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
      <>
        <div className="description">
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/about.jsx</code>
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
      </>
  )
}



AboutPage.getLayout = function getLayout( page ){
  return(
    <MainLayout>
      <DarkLayaout>
        {page}
      </DarkLayaout>
    </MainLayout>
  )
}