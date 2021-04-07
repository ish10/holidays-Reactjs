const val={
    isSignedIn: null,
    userId: null
};
export default(state=val,action)=>{
    switch(action.type){
        case'SIGN_IN':
        return {...val,isSignedIn: true
            ,userId:action.payload.token}
        case 'SIGN_OUT':
            return{
                ...val, isSignedIn: false, userId: null
            }    
        default : return state;
    }


}