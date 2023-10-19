import './styles/global.css';
import { Habit } from "./components/Habit";

function App(){
  return (
    <div>
      <Habit completed={10} />
      <Habit completed={20} />
      <Habit completed={30} />
      <Habit completed={40} />
    </div>
  )
}

export default App;