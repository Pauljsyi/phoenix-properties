import React from 'react'
import { useDisclosure, MenuItem, Menu, MenuButton, MenuList, Button } from '@chakra-ui/react'
import { FiUser } from "react-icons/fi"
import { useNavigate } from 'react-router-dom';

const OwnerMenu = ({ toggleTable, showTable }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let navigate = useNavigate()

  const changePage = () => {
    showTable && toggleTable()
    navigate('owners/new')
  }

  return (
    <Menu isOpen={isOpen} isLazy width="50%">
      <MenuButton 
        as={Button} 
        variant="ghost"
        fontSize="lg"
        leftIcon={<FiUser />}
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
        Owners
      </MenuButton>
      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        minWidth="8rem"
        ml="1rem"
      >
        <MenuItem color='brand.100' onClick={changePage}>New Owner</MenuItem>
        <MenuItem color='brand.100'>Edit Owner</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default OwnerMenu