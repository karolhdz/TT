import { useState } from 'react';
import './App.css';
import Authors from './components/Authors';
import HowItWorks from './components/HowItWorks';
import Loading from './components/Loading';
import Main from './components/Main';
import NavBar from './components/NavBar';


function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className='h-full'>
      {
        loading ? <Loading /> : <></>
      }
      <NavBar />
      <div className='px-10 py-8 flex flex-col gap-3'>
        <HowItWorks />
        <hr className='h-2'/>
        <Main setLoading={setLoading}/>
        <hr className='h-2'/>
        <Authors/>
      </div>
      

    </div>
  );
}

export default App;
