import CreateProductForm from '@/components/products/create-form'
import React from 'react'

const CreateProduct = () => {
  return (
    <main className='p-8'>
      <section>
        <h1 className='text-2xl font-bold mb-4'>Create Product</h1>
        <CreateProductForm />
      </section>
    </main>
  )
}

export default CreateProduct