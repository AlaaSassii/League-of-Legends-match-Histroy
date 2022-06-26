import React from 'react'
import { connect } from 'react-redux'
import {Bar} from 'react-chartjs-2'
import {Chart as chartJS} from 'chart.js/auto'
const KDA2 = ({kills,deaths,assists}) => {
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

  return (
    <Bar data={Data}/>
  )
}
const mapStateToProps = (state) => { return{ kills:state.kills , deaths:state.deaths , assists:state.assists }}
export default connect(mapStateToProps)(KDA2)