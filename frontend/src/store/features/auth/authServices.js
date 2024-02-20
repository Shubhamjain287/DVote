import axios from "axios";
import Swal from "sweetalert2";
import { ResetUser, STATUSES, setMessage, setUser, setUserStatus } from "../../features/auth/authSlice";

export function loginUser(input){
    return async function loginUserThunk (dispatch,getState){
        dispatch(setUserStatus(STATUSES.LOADING));
        try {
            const {email,password} = input;
            const res = await axios.post(`/user/login`,{email,password});
            console.log(res);
            if(res){
                const { _id, name, email , message , token, profile , verified, admin} = res.data;
                
                if(!verified){
                    CheckUser(STATUSES.ERROR,"User Account is Not Verified");
                    return;
                }

                const user = { id: _id, user : name , token , email, profile, admin: admin};
                localStorage.setItem('user',JSON.stringify(user));
                dispatch(setUserStatus(STATUSES.SUCCESS));
                dispatch(setMessage(message));
                dispatch(setUser(user));
                CheckUser(STATUSES.SUCCESS,message);
            }
        } catch (error) {
            dispatch(setUserStatus(STATUSES.ERROR));
            dispatch(setMessage(error.response.data.error));
            CheckUser(STATUSES.ERROR,error.response.data.error);
        }
    }
}

export function logOutUser(){
    return function logOutThunk(dispatch,getState){
        CheckUser(STATUSES.SUCCESS,`Logout Successfull !!`);
        Swal.fire({
            title: 'Do you want to logout ?',
            icon : `warning`,
            showDenyButton: true,
            confirmButtonText: 'Yes',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Logout Successfull !!', '', 'success')
              localStorage.removeItem('user');
              dispatch(ResetUser(null));
            }
          })
    }
}

export function CheckUser(status,message){
    Swal.fire({
        icon: status ? status : 'question',
        title: message ? message : `Server Error`,
        timer: 2500
    });
}