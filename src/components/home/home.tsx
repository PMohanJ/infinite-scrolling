import React, { useEffect, useState } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import "./home.css"
import { User, UserObj} from "./responseObj.types"
import UserProfile from "./userProfile"
import SkeletonLoader from "./skeletonLoader"
import { AuthState } from '../../context/AuthProvider'

const Home = () => {
  const { user } = AuthState();
  const [users, setUsers] = useState<UserObj[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const SIZE = 10;

  useEffect(() => {
    if (!user) {
      navigate("/")
    }  
  }, [])

  const handleLogout = ():void => {
    localStorage.removeItem("userLoginCred");
    navigate("/")
  }

  const getUserData = () => {
    setLoading(true);
    setTimeout(async() => {
      const res = await fetch(`https://randomuser.me/api/?results=${SIZE}`);
      res.json()
      .then(data => setUsers(prev => [...prev, ...getData(data)]))
      .catch(error => console.log(error));
      console.log("Size", SIZE)
      setLoading(false);
    }, 1000);
  }

  const getData = (data: any): UserObj[] => {
    const users = data.results.map((obj: User) => {
      return {
        id: obj.login.uuid,
        name: obj.name.first +" " +obj.name.last,
        email: obj.email,
        pic: obj.picture.medium,
      }
    })
    return users;
  }

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
        getUserData();
      }
  }

  useEffect(() => {
    getUserData();
  }, [])

  useEffect(()=> {
    window.addEventListener("scroll", handleScroll)

    //return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  return (
    <div data-testid="home-div" className="container-home">
      <Box className="logout">
        <Button colorScheme="blue" onClick={handleLogout}>
          Logout
        </Button>
      </Box>

      <Box className="list-center">
        {users?.length > 0 ? users.map((obj: UserObj) => (
          <UserProfile key={obj.id} name={obj.name} email={obj.email} pic={obj.pic} />
        )): <SkeletonLoader/>}        
      </Box>  
     {loading?? <SkeletonLoader/>}
    </div>
  )
}

export default Home
