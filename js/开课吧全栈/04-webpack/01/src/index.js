// console.log(123);
import axios from 'axios'

axios.get('/api/info').then(res => {
  console.log(res)
})