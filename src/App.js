import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import axios from 'axios'
import MainContainer from './components/MainContainer'
import './components/style.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getRandomUsers()
  }, [])

  async function getRandomUsers(){
    const result = await axios.get('https://randomuser.me/api/?results=25&seed=seed')
    setUsers(result.data.results)
  }

  return (
    <div className="App">
      <Navbar />
      <MainContainer list={users}/>
      <Footer />
    </div>
  );
}

export default App;
