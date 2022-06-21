import React ,{useState , useEffect} from 'react'
import axios from 'axios'
const Champions = ({data}) => {
    const {id , Key_Api } = data
    useEffect(()=>{
        // https://${region}/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${api}
        const Link = `https://europe.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${Key_Api}`
        axios(Link)
            .then(resp => console.log(resp))
            .catch(err => console.log(Link))
    },[id])
  return (
    <div>Champions</div>
  )
}

export default Champions