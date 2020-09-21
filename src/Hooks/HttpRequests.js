import { useState, useEffect } from 'react'
import axios from 'axios'

export function useAxiosGet(url){
    const [request,setRequest] = useState({
        data: null,
        error: false
    })

    useEffect(()=>{
        axios.get(url)
            .then(res=>{
                console.log("dentro axios",res.data)
                setRequest({
                    data: res.data,
                    error: false
                })
            })
            .catch(()=>{
                console.log("ERRORE dentro axios")
                alert("ERRORE dentro axios")
                setRequest({
                    data: null,
                    error: true
                })
            })
    },[url])
    return request
}