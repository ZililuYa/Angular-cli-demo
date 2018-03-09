import {Api} from './api'
import axios from 'axios';

//
// export const ajax: Object = {
//   all: (opt) => {
//     axios(opt)
//   }
// }
export const ajax = Object.freeze({
  run: (opt: Object, callback: Function) => {
    axios(opt).then((res) => {
      callback(res)
    })
  }
})


export const api = Api

// export class Lib {
//   ajax: String
//
//   constructor() {
//     this.ajax = axios
//   }
//
//
//   ajax(opt) {
//     axios.all(opt)
//   }
//
//   api() {
//     return Api
//   }
// }
