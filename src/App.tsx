import { BasicInfo } from 'components/forms';
import { useAppSelector } from 'hooks';
import * as React from 'react';

const App: React.FC = () => {
  const basicInfo = useAppSelector(state => state.basic)

  return (
    <div>
      <header className='flex flex-col items-center mx-auto py-8 prose text-center'>
        <h2>Simple Resume Builder</h2>
        <p>A simple, bare-bones Resume builder. <br />Built with React, Typescript, and Tailwind.</p>
      </header>
      <div className='grid grid-cols-2 divide-x-2 divide-blue-200 px-16'>
        <BasicInfo />
        <div>{basicInfo.name}</div>
      </div>
    </div>
  );
}

export default App;
