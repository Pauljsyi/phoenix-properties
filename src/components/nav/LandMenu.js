import React from 'react'
import { useDisclosure, MenuItem, Menu, MenuButton, MenuList, Button } from '@chakra-ui/react'
import { FiMap } from "react-icons/fi"
import { useNavigate } from 'react-router-dom';

const LandMenu = ({ toggleTable, showTable }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let navigate = useNavigate()

  const changePage = () => {
    showTable && toggleTable()
    navigate('landholdings/new')
  }

  return (
    <Menu isOpen={isOpen} isLazy width="50%">
      <MenuButton 
        as={Button} 
        variant="ghost"
        fontSize="lg"
        leftIcon={<FiMap />}
        color='brand.100'
        aria-label="Land Holdings"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        _focus={{
          boxShadow: "none",
        }}
        _active={{
          bg:"none"
        }}
      >
        Land Holdings
      </MenuButton>
      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        minWidth="11rem"
        ml="1rem"
      >
        <MenuItem color='brand.100' onClick={changePage}>New Land Holding</MenuItem>
        <MenuItem color='brand.100'>Edit Land Holding</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default LandMenu