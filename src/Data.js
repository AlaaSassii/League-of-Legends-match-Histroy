import React from 'react'
import Champions from './components/Champions'
import Matches from './components/Matches'
import PlayerName from './components/PlayerName'
import Rank from './components/Rank'
import KDA from './Graphic/KDA'

const Data = ({accountId,id,name,profileIconId,puuid,revisionDate,summonerLevel,Key_Api}) => {
  return (
    <div>
        Data
        <PlayerName data={{name , profileIconId , summonerLevel}}/>
        <Rank  data={{id , Key_Api }}/>
        <Matches data={{puuid , Key_Api}}/>
         <Champions data={{id ,accountId , Key_Api}}/>
  <KDA data={{puuid , Key_Api}} /> 
    </div>
  )
}

export default Data