import React,{useState , useEffect} from 'react'
import axios from 'axios' 
import { Alert } from 'react-bootstrap'
import Player from './Player'

const SingleMatch = ({data}) => {
    const {puuid, Key_Api,match} = data
    const [matchData , setMatchData] = useState({})  
    useEffect(()=>{
        const Link = `https://europe.api.riotgames.com/lol/match/v5/matches/${match}?api_key=${Key_Api}`
        axios(Link)
            .then(resp =>{ setMatchData(resp.data);console.log('resp',resp.data)})
            .catch(err => console.log(err))
        
    },[puuid,match])
  return (
    <>
     {JSON.stringify(matchData) != '{}'?
    
    <>
    {matchData.info.participants.find(player=>player.puuid === puuid).win  ? 
    <Alert  className='match' variant={'success'}>
    <div>
    <h3 >{matchData.info.gameMode}</h3>
    <h3 >
        {matchData.info.participants.find(player=>player.puuid === puuid).win ? 'Victory' : 'Defeat' }
    </h3>
    </div>
    <Player {...matchData.info} puuid={puuid}/>
    </Alert>   
    : 
    <Alert  className='match' variant={'danger'}>
    <div>
    <h3 >{matchData.info.gameMode}</h3>
    <h3 >
        {matchData.info.participants.find(player=>player.puuid === puuid).win ? 'Victory' : 'Defeat' }
    </h3>
    </div>
    <Player {...matchData.info} puuid={puuid}/>
    </Alert> 
}
    </>
    
    
    :
    <div>Loading...</div>
    }</>
  )
}

export default SingleMatch
// <div  className={ matchData.info.participants.find(player=>player.puuid === puuid).win ? 'win-match' : 'lose-match' }>
    // <div className="info-tag">
    // <h3 >{matchData.info.gameMode}</h3>
    // <h3 className="win">{matchData.info.participants.find(player=>player.puuid === puuid).win ? 'Victory' : 'Defeat' }</h3>
    // </div>
    {/* <PlayerInfo {...matchData.info} puuid={puuid}/> */}
    {/* <Participatns regionLink={regionLink}  participants={match.info.participants} />     */}

    // </div>