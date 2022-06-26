import React from 'react'
import Champions from './components/Champions'
import Matches from './components/Matches'
import PlayerName from './components/PlayerName'
import Rank from './components/Rank'
import KDA from './Graphic/KDA'
import KDA2 from './Graphic/KDA2'

const Data = ({accountId,id,name,profileIconId,puuid,revisionDate,summonerLevel,Key_Api}) => {
  return (
    <div className="grid">
        
        <PlayerName data={{name , profileIconId , summonerLevel}}/>
        <Rank  data={{id , Key_Api }}/>
        <KDA  />
        <KDA2/>
        <Matches data={{puuid , Key_Api}}/>
        <Champions data={{id ,accountId , Key_Api}}/>
    </div>
  )
}

export default Data