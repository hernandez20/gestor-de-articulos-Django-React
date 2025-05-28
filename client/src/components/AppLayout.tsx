import type { ReactNode } from 'react';
import { SiDjango, SiTypescript } from "react-icons/si";
import { FaReact, FaDocker } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

import MainTitle from './MainTitle';

interface Props {
  children: ReactNode;

}

export default function AppLayout({ children }: Props) {


  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-blue-50">

      <header className="py-4 w-full ">
        <MainTitle />


        <div className='w-full flex justify-center'>


          <div className='flex gap-5  text-gray-500'>
            <FaDocker /> <SiDjango /> <DiMysql />
            <FaReact /> <SiTypescript />

          </div>


        </div>
      </header>

      <main className="flex-grow flex justify-center items-center px-4">
        <div className="w-full max-w-screen-sm">
          {children}
        </div>
      </main>
    </div>

  );
}
