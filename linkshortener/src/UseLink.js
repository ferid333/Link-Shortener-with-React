// import React from 'react'
// import axios from "axios"
// import { useEffect } from 'react'
// import { useReducer } from 'react'
// import UrlOutput from "./componets/UrlOutput"
// // const reducer=(state,action)=>{
// //   switch (action.type) {
// //     case "MAKE_REQUEST":
// //      return{
// //       loading:true,
// //       link:"",
// //       islink:false
// //      }
// //     case "GET_DATA":
// //     return{
// //       ...state,
// //       loading:false,
// //       link:action.payload,
// //       islink:true,
// //     }
// //     case "ERROR":
// //       return{
// //         error:true,
// //         link:"",
// //         islink:false
// //       }     
  
// //     default:
// //       return state
// //   }

// // }

// BringAPi(){

// }
// const baseurl="https://api.shrtco.de/v2/shorten?url="
// function UseLink(url) {
//   // const [state, dispatch] = useReducer(reducer, { link:"", loading: true })
//   useEffect(()=>{
//         dispatch({type:"MAKE_REQUEST"})
        
// },[])

//   return state.islink ? url.seturl(state.link.full_short_link) :""
// }
// export default UseLink;