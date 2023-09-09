import React, { useContext } from 'react';
import { useDisclosure, MenuItem, Menu, MenuButton, MenuList, Button } from '@chakra-ui/react';
import { BiCog} from "react-icons/bi";
import { UserContext } from '../provider/UserProvider';
import { logOutUser } from '../../realm/user';
import { useNavigate } from 'react-router-dom'

const Settings = () => {
  const { user } = useContext( UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  let navigate = useNavigate() 

  const logOut = async () => {
    await logOutUser()
    sessionStorage.removeItem("Auth_Token")
    navigate('/')
  }

  return (
    <Menu isOpen={isOpen} isLazy width="50%">
      <MenuButton 
        as={Button} 
        variant="ghost"
        fontSize="lg"
        leftIcon={<BiCog />}
        color='brand.100'
        aria-label="Owners"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        _focus={{
          boxShadow: "none",
        }}
        _active={{
          bg:"none"
        }}
      >
        {user && user.name}
      </MenuButton>
      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        minWidth="8rem"
        ml="1rem"
      >
        <MenuItem color='brand.100' onClick={logOut}>
         Log out
        </MenuItem>
        
      </MenuList>
    </Menu>
  )
}

export default Settings