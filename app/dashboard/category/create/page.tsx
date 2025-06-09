import CreateCategoryForm from '@/components/category/create-form'
import React from 'react'

const CreateCategory = () => {
  return (
    <main className='p-8'>
      <section>
        <h1 className='text-2xl font-bold mb-4'>Create Category</h1>
        <CreateCategoryForm />
      </section>
    </main>
  )
}

export default CreateCategory