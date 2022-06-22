import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
const SingleChamp = ({champId,championPoints,championLevel,lastPlayTime}) => {
    console.log(champId)
    const [image , setImage] = useState('') ; 
    const [champName,setName] = useState('') ;
    
    useEffect(()=>{
        // setLoading(true)
       
        axios('http://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion.json')
        .then(resp =>{ 
          const data = Object.values(resp.data.data).find(champ =>champ.key == champId )
          setImage(data.id)
          setName(data.name)
        //   setLoading(false)
        }) 
        .catch(err => console.log(err))
      },[champId])
   const date = (date) => {
    let string = ''
    for (let i = 0 ; i < 4 ; i++){
      string += `${new Date(date).toString().split(' ')[i] } `}
   return string }
  return (
    <tr>
       <td>
      <img style={{width:"65px",height:"65px",borderRadius:"50%"}} src={`https://opgg-static.akamaized.net/images/lol/champion/${image}?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1654157118862`}/> 
      </td>
      <td><h5>{champName}</h5></td>
      <td><p>{championPoints}pts</p></td>
      <td>{date(lastPlayTime)}</td>

      {/* <td>
        <h4>
        championLevel
        </h4>
        <p>{championLevel} lvl</p>
      </td>
      <td>
      <h4>
      championPoints
        </h4>
        <p>{championPoints}pts</p>
      </td>
      <td>
      </td> */}
    </tr>
  )
}

export default SingleChamp