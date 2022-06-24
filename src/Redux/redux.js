export const store = {
    kills : [] , 
    deaths : [] , 
    assists : [] , 
    numOfMatches : 4 , 
}
export const disatch = (state,action) => {
    console.log("state",state)
    switch(action.type){
        case 'KILLS' : return {...state , kills:[...state.kills , action.payload]}
        case 'DEATHS' : return {...state , deaths:[...state.deaths , action.payload]}  
        case "ASSISTS" : return {...state , assists:[...state.assists , action.payload]} 
        default : return state
    }

} 