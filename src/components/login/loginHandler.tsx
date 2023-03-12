

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

const loginHandler = async(username: string, password: string): Promise<void>=> {
    try{
      let userLoginCred: userInfo = {
        username: username,
        password: password
      }
       
      const data: userInfo = await loginPromise(userLoginCred);
      localStorage.setItem("userLoginCred", JSON.stringify(data));
    } catch (error) {
        throw new Error("Can't login")
    }
}

export const LoginUser = (username: string, password: string): boolean => {
    try{
        loginHandler(username, password)
        return true
    } catch (error) {
        console.log("Error while login")
        return false
    }
}