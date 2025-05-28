import type { ReactNode } from 'react';

import MainTitle from './MainTitle';

interface Props {
  children: ReactNode;
 
}

export default function AppLayout({ children }: Props) {


  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-blue-50">

        <header className="py-4 w-full ">
              <MainTitle />
        </header>
   
      <main className="flex-grow flex justify-center items-center px-4">
        <div className="w-full max-w-screen-sm">
          {children}
        </div>
      </main>
    </div>

  );
}
