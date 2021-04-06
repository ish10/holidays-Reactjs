const val={
    isSignedIn: null,
    userId: null
};
export default(state=val,action)=>{
    switch(action.type){
        case'SIGN_IN':
        return {...val,isSignedIn: true
            ,userId:action.payload.token}
        default : return state;
    }


}