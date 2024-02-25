import { useState } from 'react'
import { LoginPage } from "./Pages/LoginPage.jsx";
import { UserProvider } from "./Providers/UserProvider";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  
  return (
    <div className="App">
      <header className="App-header"></header>
      <UserProvider>
        <Router>
          <Routes>



          </Routes>
        </Router>

      </UserProvider>


    </div>
  );
}

export default App;
