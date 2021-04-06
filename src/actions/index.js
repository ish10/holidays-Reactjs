import axios from "axios"
import History from '../history'

export const signIn =(email,password)=>{
    return async (dispatch,getState)=>{
        const response = await axios.post('http://127.0.0.1:4000/api/v1/users/login',{email,password});
        console.log(response);
        dispatch({type:'SIGN_IN',payload:response.data});
      History.push('/tourlist');
    };
};

export const GetList=()=>{
    return async(dispatch,getState)=>{
        const { userId } = getState().auth;
        const response = await axios.get('http://127.0.0.1:4000/api/v1/tours',{
            headers:{
                'Authorization': `Bearer ${userId}`
            }
        });
    console.log(response.data.data.tours);
    dispatch({type:'GET_LIST',payload:response.data});
    };
};
