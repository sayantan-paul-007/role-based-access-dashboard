'use client';

import Link from 'next/link';
import { useUser } from '@/context/UserContext';

type AddButtonProps = {
  href: string;
  children: React.ReactNode;
};
type EditButtonProps={
  href: string;
  children: React.ReactNode;
}
type DeleteButtonProps = {
  id: string;
  children: React.ReactNode;
  onDelete: (id: string) => void;
};
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
const EditButton = ({ href, children}: EditButtonProps) => {
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


const DeleteButton = ({ id, children, onDelete }: DeleteButtonProps) => {
  const { user } = useUser();

  if (!user || user.role !== 'master') return null;

  const handleClick = () => {
    if (confirm('Are you sure you want to delete this item?')) {
      onDelete(id);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="border border-slate-300 dark:border-gray-600 p-2 rounded-md"
    >
      {children}
    </button>
  );
};

export {CreateButton, EditButton, DeleteButton};
