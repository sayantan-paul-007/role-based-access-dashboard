import EditCategoryForm from '@/components/category/edit-form'
import React from 'react'

const EditCategory = () => {
  return (
    <main className='p-8'>
      <section>
        <h1 className='text-2xl font-bold mb-4'>Edit Category</h1>
        <EditCategoryForm />
      </section>
    </main>
  )
}

export default EditCategory