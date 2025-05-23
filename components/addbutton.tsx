'use client';

import Link from 'next/link';
import { useUser } from '@/context/UserContext';

type RoleButtonProps = {
  href: string;
  children: React.ReactNode;
};

const AddButton = ({ href, children }: RoleButtonProps) => {
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

export default AddButton;
