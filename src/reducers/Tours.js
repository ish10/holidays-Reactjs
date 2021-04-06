export default (state=[],action)=>{

switch(action.type){
    case'GET_LIST':
    return[...state,...action.payload.data.tours];
    default:
        return[];
}
}