import React from 'react';
function classNames(...classes: (false | null | undefined | string)[]): string {
  return classes.filter(Boolean).join(' ')
};

type TitleProps = { children: string; error?: boolean; className?: string };

// TODO DA SISTEMARE!!!!!!!!!!!!
export default function MyTitle({ children, error, className }: TitleProps) {
  return (
    <h1
      className={classNames(
        'text-2xl font-bold text-center font-display tracking-wider',
        {
          'text-red-600': error,
        },
        className
      )}
    >
      {children}
    </h1>
  );
}
