import EditInventoryForm from '@/components/inventory/edit-form'
import React from 'react'

const EditInventory = () => {
  return (
   <main className='p-8'>
      <section>
        <h1 className='text-2xl font-bold mb-4'>Edit Inventory</h1>
        <EditInventoryForm />
      </section>
    </main>
  )
}

export default EditInventory