
import './App.css'
import { format } from 'date-fns';

function App() {
  const currentTime = new Date();
  const formattedTime = format(currentTime, 'hh:mm a')
  const formattedDate = format(currentTime, 'EEEE, MMMM d, yyyy')

  return (
    <header className="main">
      <p>Currently</p>

      <h1>{formattedTime}</h1>
      <h2>{formattedDate}</h2>
    </header>

  )
}

export default App
