type userInfo = {
    username: string,
    password: string,
}

// to simulate a request call
const loginPromise = (user: userInfo): Promise<userInfo> => {
    return new Promise<userInfo>(resolve => {
        setTimeout(() => {
            resolve(user);
        }, 1000)
    })
}

export const LoginHandler = async(username: string, password: string): Promise<void>=> {

    try{
      let userLoginCred: userInfo = {
        username: username,
        password: password
      }
       
      const data: userInfo = await loginPromise(userLoginCred);
      console.log(data);
      localStorage.setItem("userLoginCred", JSON.stringify(data));
      console.log("From localstorage, ", localStorage.getItem("userLoginCred"));

    } catch (error) {
        console.log("Error occured");
    }
}

