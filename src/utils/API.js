import axios from 'axios'

export default {
    getUser: function(query){
        return axios.get('https://randomuser.me/api/?results=50')
    }
}

// export default getRandomUser