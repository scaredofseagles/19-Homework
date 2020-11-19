import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getRandomUsers()
  }, [])

  async function getRandomUsers(){
    const result = await axios.get('https://randomuser.me/api/?results=50')
    setUsers(result.data.results)
  }

  return (
    <div className="App">
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => 
           <tr>
            <td>
              <img src={user.picture.thumbnail} alt="profile"/>
            </td>
            <td>{user.name.first} {user.name.first}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
          </tr>
          )}
          
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default App;
