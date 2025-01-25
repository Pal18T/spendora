import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { LayoutDashboard, PenBox } from 'lucide-react'

const Header = () => {
  return (
    <header className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>
      <nav className='container mx-auto px-5 py-3 flex items-center justify-between'>
        <Link href="/">
         <Image src={"/logo.png"} alt="spendora" width={500} height={100}
         className="h-20 w-32 mx-auto object-contain"/>
        </Link>
        <div className='space-x-8 items-center md-flex'>
          <SignedOut>
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>

          </SignedOut>
        </div>

        <div className='flex items-center space-x-4'>
          <SignedIn>
            <Link href="/dashboard" className='text-gray-600 hover:text-blue-600 items-center gap-2'>
            <Button variant="outline">
              <LayoutDashboard size={18}/>
            <span>Dashboard</span>
            </Button>

            </Link>
            <a href="/transaction/create">
            <Button className="flex items-center gap-2">
              <PenBox size={18}/>
              <span>Add Transactions</span>
            </Button>
            </a>
          </SignedIn>
        
      
        <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button>Login</Button>
            </SignInButton>
        </SignedOut>
        <SignedIn>
            <UserButton appearance={{
              elements: {
                avatarBox: "w-10 h-10",
              },
            }}/>

        </SignedIn>
        </div>
        </nav>
    </header>
  )
}

export default Header