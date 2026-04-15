import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Toaster } from 'sonner'

type WrapperProps = {
  children: React.ReactNode
}

const Wrapper = ({children}:WrapperProps) => {
  return (
    <>
    <Header/>
    {children}
    <Toaster position='top-right' richColors/>
    <Footer/>
    </>
  )
}

export default Wrapper