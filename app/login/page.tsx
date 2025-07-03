import LoginForm from '@/components/login/login-form'
import React from 'react'

const LoginPage = () => {
  return (
    <main className='h-dvh'>
      <section className='flex flex-col items-center h-full  justify-center'>
          <LoginForm />
      </section>
      
    </main>
  )
}

export default LoginPage