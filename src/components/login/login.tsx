import { useState } from 'react'
import { FormControl, FormLabel, VStack,Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { LoginHandler } from './loginHandler'
import { useToast } from '@chakra-ui/react'
import "./login.css"


const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show, setShow] =useState<boolean>(false);
  const toast = useToast();

  const handlePassVisibility = ():void => {
    setShow(!show);
  }

  const handleLogin = ():void => {
    if (!username || !password) {
      toast({
        title: "Please provided required details",
        status: "warning",
        duration: 4,
        isClosable: true,
        position: "bottom"
      });
      return; 
    }
    LoginHandler(username, password);
  }

  const handleOnKeyDown = (event:React.KeyboardEvent<HTMLInputElement>):void => {
    if (event.key === "Enter") {
      handleLogin();
    }
  }

  return (
    <div data-testid="login-div" className="container">
      <VStack spacing="10px">
        <FormControl id="email" isRequired>
          <FormLabel>User name</FormLabel>
          <Input
            value={username}
            type="email"
            placeholder="Enter your email address"
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                value={password}
                type={show ? "text" : "password"}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleOnKeyDown}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handlePassVisibility} className="visibility">
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
        </FormControl>

        <Button
          colorScheme="blue"
          width="50%"
          mt={15}
          onClick={handleLogin}
        >
          Login
        </Button>
      </VStack>
    </div>
  )
}

export default Login
