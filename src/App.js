// logic
import React ,{useState,useEffect} from 'react';
import axios from 'axios';
// style
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button , TextField} from '@material-ui/core'; 
import Alert from 'react-bootstrap/Alert'
import Data from './Data';
function App() {
  const [data, setData] = useState({})
  const [value, setValue] = useState("")
  const [danger ,setDanger]  = useState(false)
  const [error,setError] = useState(false)
  const Key_Api = "RGAPI-9652134f-ad96-4fac-8314-f0bcf68f9994"
  const onChange = (e) => {
    setValue(e.target.value) 

  }
  const handleSubmit = (e)=>{
    const Link = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${value}?api_key=${Key_Api}`
    axios(Link)
    .then(resp =>{console.log(resp.data) ; setData(resp.data)})
    .catch(err => setError(true))
  }
  useEffect(()=>{
    if (danger){
      setTimeout(()=>setDanger(false) ,4000)
    }
    if (error){
      setTimeout(()=>{setError(false);setValue('')} ,4000)
      
    }
  },[error , danger])
  return (
    <div className="App">
      j
    { 
    error && <Alert style={{width:"25%",margin:"20px auto"}} variant={'danger'}>
      Data not Found 
    </Alert>
    }
    { danger && <Alert style={{width:"25%",margin:"20px auto"}} variant={'danger'}>
      There is no name to search
    </Alert>}

      <div className='search-player'>
      <TextField value={value} id="standard-basic" label="search player" variant="standard" onChange={(e) =>onChange(e)}  />
      <button onClick={value ? (e) => handleSubmit(e) : () => setDanger(true) } class="button-41" role="button">search</button>
      </div> 
      {
        Object.values(data).length > 0 && <Data {...data}  Key_Api={Key_Api}/>
      }
    </div>
  );
    }
export default App;
