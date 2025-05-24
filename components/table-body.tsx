type TableBodyProps ={
    children: React.ReactNode
}
export default function TableBody({children}:TableBodyProps){
    return(
         <tbody className="w-full border-b text-textPrimary dark:text-dark-textPrimary border-red-100 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                {children}
            </tbody>
    )
}