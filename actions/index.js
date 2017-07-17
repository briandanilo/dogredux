export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function login(userCreds){
  if (userCreds.username == "bd" && userCreds.pass == "123"){
    return {
      type: LOGIN_SUCCESS
    }
  } else {
    return {
      type: LOGIN_ERROR
    }
  }
}
