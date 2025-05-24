'use client';

import Link from 'next/link';
import { useUser } from '@/context/UserContext';

type AddButtonProps = {
  href: string;
  children: React.ReactNode;
};
type EditButtonProps={
  href: string;
  id: string;
  children: React.ReactNode;
}
type DeleteButtonProps ={
  id:string;
  children: React.ReactNode;
}
const CreateButton = ({ href, children }: AddButtonProps) => {
  const { user } = useUser();

  if (!user || user.role !== 'master') {
    return null; 
  }

  return (
    <Link href={href}>
      <button className="rounded-md flex items-center bg-accent px-4 py-2 gap-2 text-sm text-white">
        {children}
      </button>
    </Link>
  );
};
const EditButton = ({ href, children, id }: EditButtonProps) => {
  const { user } = useUser();

  if (!user || user.role !== 'master') {
    return null; 
  }

  return (
    <Link href={href}>
      <button className="border border-slate-300 dark:border-gray-600 p-2 rounded-md">
        {children}
      </button>
    </Link>
  );
};
const DeleteButton =({id, children}:DeleteButtonProps) =>{
const { user } = useUser();

  if (!user || user.role !== 'master') {
    return null; 
  }
  return(
    <button className='border border-slate-300 dark:border-gray-600 p-2 rounded-md'>
      {children}
    </button>
  )

}
export {CreateButton, EditButton, DeleteButton};
