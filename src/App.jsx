import './App.css'
import CoinsContext from './Contexts/CoinsContext';
import Landing from './Components/Landing';
// import { CoinsContexts } from './Contexts/CoinsContext';
function App() {
  return (
    <div className='flex justify-center pt-[0.5px] pb-8 min-h-screen'>
      <CoinsContext>
        <Landing />
      </CoinsContext>
    </div>
  )
}

export default App
