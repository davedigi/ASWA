import React, { ReactNode } from 'react';
function classNames(...classes: (false | null | undefined | string)[]): string {
  return classes.filter(Boolean).join(' ')
}

type PaperProps = { children: ReactNode; className?: string };
// TODO DA SISTEMARE!!!!!!!!!!!!
export default function MyPaper({ children, className }: PaperProps) {
  return <div className={classNames('bg-white text-gray-800 shadow-md rounded p-8', className)}>{children}</div>;
}

