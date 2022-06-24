import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { Line } from 'react-chartjs-2';
const KDA = ({kills ,deaths , assists }) => {

    const [Kills , setKills] = useState(kills.slice(0,10)) ; 
    const [Deaths , setDeaths] = useState(deaths.slice(0,10)) ;
    const [Assists , setAssists] = useState(assists.slice(0,10)) ;
    
    return (
    <div>
        <Line  data={{}}
                width={100} height={100}        /> 
    </div>
  )
}
const mapStateToProps = (state) => { return{ kills:state.kills , deaths:state.deaths , assists:state.assists }}
export default connect(mapStateToProps)(KDA)