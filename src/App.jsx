import './App.css';
import Authors from './components/Authors';
import HowItWorks from './components/HowItWorks';
import Main from './components/Main';
import NavBar from './components/NavBar';


function App() {
  return (
    <div>
      <NavBar />
      <div className='px-10 py-8 flex flex-col gap-3'>
        <HowItWorks />
        <hr className='h-2'/>
        <Main/>
        <hr className='h-2'/>
        <Authors/>
      </div>
      

    </div>
  );
}

export default App;
