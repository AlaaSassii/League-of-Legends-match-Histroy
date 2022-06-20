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
  const Key_Api = "RGAPI-236e1e54-e338-42ab-b65e-9810e8b722ea"
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
      <Button onClick={value ? (e) => handleSubmit(e) : () => setDanger(true) } variant="text" >search</Button>
      </div>
      {
        Object.values(data).length > 0 && <Data {...data}  Key_Api={Key_Api}/>
      }
    </div>
  );
}

export default App;
