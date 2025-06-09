import EditProductForm from '@/components/products/edit-form'
import React from 'react'

const EditProduct = () => {
  return (
   <main className='p-8'>
      <section>
        <h1 className='text-2xl font-bold mb-4'>Edit Product</h1>
        <EditProductForm />
      </section>
    </main>
  )
}

export default EditProduct