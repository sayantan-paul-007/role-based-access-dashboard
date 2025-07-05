import LoginForm from '@/components/login/login-form'
import Navbar from '@/components/Navbar'
import React from 'react'

const LoginPage = () => {
  return (
    <main className='h-dvh'>
      <Navbar />
      <section className='flex flex-col items-center h-full  justify-center'>
          <LoginForm />
      </section>
      
    </main>
  )
}

export default LoginPage