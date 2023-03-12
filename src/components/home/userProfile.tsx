import { Box, Text } from '@chakra-ui/react'
import { UserObj } from './responseObj.types'
import "./home.css"

const UserProfile = (props: UserObj) => {
  return (
    <Box className="list-item">  
       <img src={props.pic} alt="profile pic" className="profile-pic"/>

       <Box ml="5px" className='text-overflow'>
          <Text><b>Name: </b>{props.name}</Text>
          <Text><b>Email: </b> {props.email}</Text>
       </Box>

    </Box>
  )
}

export default UserProfile
