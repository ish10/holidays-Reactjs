/* eslint-disable */
export default (state=[],action)=>{


switch(action.type){
    case'GET_LIST':
    return[...state,...action.payload.data.tours];
    case'GET_TOUR':
    return state.map((el)=>{
     if (el.id ===action.payload.data.tour.id){
         console.log("in gettour");
         return action.payload.data.tour;
     }
     else{
         console.log("in default");
     return el;}    
    });

    
    default:
        return[];
}
}