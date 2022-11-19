import { BasicInfo } from 'components/forms';
import * as React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <header className='flex flex-col items-center mx-auto py-8 prose text-center'>
        <h2>Simple Resume Builder</h2>
        <p>A simple, bare-bones Resume builder. <br />Built with React, Typescript, and Tailwind.</p>
      </header>
      <div className='grid grid-cols-2 divide-x-2 divide-blue-200 px-16'>
        <BasicInfo />
        <div>test</div>
      </div>
    </div>
  );
}

export default App;
