import React from 'react'

const Player = ({puuid,participants}) => {
    const {assists , deaths , kills,item0,item1,item2,item3,item4,item5,item6} = participants.find(player=>player.puuid === puuid)
    const arr = [item0,item1,item2,item3,item4,item5,item6] 
    // console.log(assists,kills,deaths)
    // console.log(participants[0].summonerName)
    console.log(participants)
  return (
    <div style={{display:"flex" , flexDirection:"column"  , width:"60%" ,height:"100%", alignItems:'center'}}>
    <div style={{display:"flex" ,alignItems:'center',justifyContent:'space-between', width:"40%",}}>
    <div>
    
    <img style={{width:"100px",height:"100px",borderRadius:"50%"}}  src={`https://opgg-static.akamaized.net/images/lol/champion/${participants.find(player=>player.puuid === puuid).championName}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1654157118862`} /> 
    </div>
    <div>
        <h3 style={{color:'#000'}} >{kills}/<span><h4  style={{color:'red',display:"inline"}}>{deaths}</h4></span>/{assists}</h3>
        <h6>{deaths === 0 ? `${toString(kills + assists / 1)}:1 KDA` : `${(kills + assists / deaths).toFixed(2).toString()}:1 KDA`}</h6>
    </div>
    </div>
    <div>
        {
            arr.map((item,key) => <span key={key}>
                
                
                    
                <img style={{width:"55px",height:"55px",borderRadius:"50%"}} src={`https://ddragon.leagueoflegends.com/cdn/12.10.1/img/item/${item}.png`} onError={(e)=>{e.target.onerror = null; e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAA1BMVEWusbarQMTwAAAASElEQVR4nO3BMQEAAADCoPVPbQo/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICXAcTgAAG6EJuyAAAAAElFTkSuQmCC" }} />
             
                
                </span>)
            }
        
    </div>
    <div style={{display:"flex"}}>
            {/* participants */}
            <div>
                {participants.slice(0,5).map((player,ind)=><div key={ind}>{player.summonerName}</div>)}
            </div>
            <div>
                {participants.slice(5,10).map((player,ind)=><div key={ind}>{player.summonerName}</div>)}
            </div>
    </div>

</div>
  )
}

export default Player