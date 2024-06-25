import './App.css';
import Countdown from './components/Countdown';
import JoinForm from './components/JoinForm';
import WaitingList from './components/WaitingList';

function App() {
  return (
    <>
      <img className="w-24 h-24 ml-5 mt-5 absolute" src="./src/KwPcKaWg_400x400.png"></img>
      <div className="flex items-center justify-center min-h-screen w-screen">
        <div className="flex flex-col justify-center gap-14 w-2/3">
          <Countdown />
          <JoinForm />
          <WaitingList />
        </div>
      </div>
    </>
  );
}

export default App;
