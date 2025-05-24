type TableProps = {
  children: React.ReactNode;
}
export default function Table({children}:TableProps){
    return(
        <table className="hidden md:table bg-foreground dark:bg-dark-foreground  rounded-xl w-full ">
            {children}
        </table>
    )
}