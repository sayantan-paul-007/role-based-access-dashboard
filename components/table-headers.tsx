// const CategoryHeader = ['Category','Description']
// const ProductsHeader = ['Products', 'Description', 'Price', 'Categories']
// const InventoryHeader = ['Products','Available', 'Sold']
// export {CategoryHeader, ProductsHeader, InventoryHeader}
type TableHeaderProps ={
    children: React.ReactNode
}
export default function TableHeader({children}:TableHeaderProps){
    return(
        <thead className=" text-left text-sm font-normal">
                <tr className="border-b border-gray-300 dark:border-gray-600 ">
                    {children}
                </tr>
            </thead>
    )
}