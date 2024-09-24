import axios from 'axios'
const instance = axios.create({
    baseurl : 'https://dummyjson.com/quotes'
})

export default instance