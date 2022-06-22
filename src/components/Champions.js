import React ,{useState , useEffect} from 'react'
import axios from 'axios'
import SingleChamp from './SingleChamp'
import Table from 'react-bootstrap/Table'
const Champions = ({data}) => {
  const [champions, setChampions] = useState([]) 
    const {id , accountId , Key_Api } = data
    console.log('accountId',id)
    useEffect(()=>{
        const Link = `https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${Key_Api}`
        axios(Link)
            .then(resp => {console.log(resp.data.slice(0,5).length);setChampions(resp.data.slice(0,5))})
            .catch(err => console.log(Link))
    },[accountId , id])
  return (
    <Table  striped bordered hover >
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Pts</th>
          <th>mastery</th>
        </tr>
      </thead>
      <tbody>
        {champions.length > 0  ? 
        champions.map((champ,index)=>
<SingleChamp key={index} champId={champ.championId} championPoints={champ.championPoints} championLevel={champ.championLevel} 
  lastPlayTime={champ.lastPlayTime}
/>) 
        :
        <tr>
        <td>none</td>
        <td>none</td>
        <td>none</td>
        <td>none</td>
      </tr>
      }
      </tbody>
    </Table>
  )
}

export default Champions