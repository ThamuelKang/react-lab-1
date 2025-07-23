
import './App.css'
import { format } from 'date-fns';

function App() {
  //grabs a new Date
  const currentTime = new Date();

  //date-fns format: set hour, mins, and AM/PM
  const formattedTime = format(currentTime, 'hh:mm a')

  //date-fns format: day, year, month, date
  const formattedDate = format(currentTime, 'EEEE, MMMM d, yyyy')

  return (
    <header className="main">
      <p>Currently</p>

      {/* react components */}
      <h1>{formattedTime}</h1>
      <h2>{formattedDate}</h2>
    </header>

  )
}

export default App
