import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux/es/exports'
import { Line } from 'react-chartjs-2'
import {Chart as chartJS} from 'chart.js/auto'
const KDA = ({kills,deaths,assists}) => {
  console.log('as',kills,deaths,assists)
  const [Kills ,setKills] = useState(kills.slice(0,10)); 
  const [Deaths , setDeath] = useState(deaths.slice(0,10));
  const [Assists , setAssisits] = useState(assists.slice(0,10)) ;
  console.log(Kills)
  const Data = {
    labels : ['Game 1','Game 2','Game 3','Game 4','Game 5','Game 6','Game 7','Game 8','Game 9','Game 10'] ,
    datasets : [{
      label: "kills",
      data : kills.slice(0,10) , 
      backgroundColor: '#00bfff' , 
      borderColor: '#00bfff'
    },
    {
      label: "deaths",
      borderColor: '#e91e63',
      data : deaths.slice(0,10) , backgroundColor: '#e91e63', 

    },
    {
      label: "assists",
      borderColor: '#00fa9a',
      data : assists.slice(0,10) ,backgroundColor: '#00fa9a' , 

    }] , 
  }
  // console.log('111',Kills,Deaths , Assists)
    return (
    <Line  data={Data}/>
  )
}
const mapStateToProps = (state) => { return{ kills:state.kills , deaths:state.deaths , assists:state.assists }}
export default connect(mapStateToProps)(KDA)