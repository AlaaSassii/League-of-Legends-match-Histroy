import React,{useState,useEffect} from 'react'
import axios from 'axios';
const KDA = ({data}) => {
    const {puuid , Key_Api} = data 
    // useEffect varibales 
    const [matches ,setMatches] = useState([])
    const [Kills , setKills] = useState([]) ; 
    const [deaths , setDeaths] = useState([]) ; 
    const [assists , setAssists] = useState([]) ;
    useEffect(()=>{
    const Link = `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?api_key=${Key_Api}`
    axios(Link)
        .then(resp => {
            // console.log(resp.data)
            setMatches([...matches,resp.data])
            for(let i=0 ; i<5;i++){
                const Link2 = `https://europe.api.riotgames.com/lol/match/v5/matches/${matches[i]}?api_key=${Key_Api}`
                axios(Link2)
                    .then(resp =>{
                        console.log(resp.data)
                    })
                    .catch(err2 => console.log('err2',err2))
                    
            }
        })
        .catch(err1 => console.log('err1',err1))

    },[])
    return (
    <div>

    </div>
  )
}

export default KDA