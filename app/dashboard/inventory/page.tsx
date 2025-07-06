import React from 'react';
import InventoryTable from '@/components/inventory/inventory-table';
const InventoryPage = () => {  
  return (
    <main className='p-8'>
      <section className='flex flex-col'>
        <div className='flex items-center justify-between mb-4'>
        <h1 className='text-2xl font-bold mb-4'>Inventory</h1>
        </div>
       <InventoryTable />
      </section> 
    </main>
  )
}

export default InventoryPage