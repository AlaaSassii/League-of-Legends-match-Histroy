import React,{useState,useEffect} from 'react'
import axios from 'axios'
import SingleMatch from './SingleMatch';
const Matches = ({data}) => {
    const {puuid , Key_Api} = data
    const [Matches,setMatches] = useState('') ; 
    const [num,setNum] = useState(5)
    
    useEffect(()=>{
        const Link = `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?api_key=${Key_Api}` 
        console.log(Link)
        axios(Link)
            .then(resp => setMatches(resp.data.slice(0,num))) 
            .catch(err => console.log("err",err)) 

    },[num , puuid])

  return (
    <div className="matches">
        {Matches.length  > 0 && 
        Matches.map((match,index)=> <SingleMatch key={index} data={{puuid, Key_Api,match}}/> )
        }
       {num === 20 || <button onClick={ ()=>setNum(num + 5 ) }>add</button>}
      {num > 5 &&   <button onClick={()=>setNum(num - 5 ) }>remove</button>}
    </div>
  )
}

export default Matches