import axios from 'axios'

function getRandomUser(){
    return axios.get('https://randomuser.me/api/?results=50')
}

export default getRandomUser