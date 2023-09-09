import React from 'react';
import { Flex, Button, Text } from '@chakra-ui/react';
import { FiBarChart } from 'react-icons/fi';
import OwnerMenu from './OwnerMenu';
import LandMenu from './LandMenu';
import Settings from './Settings';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ toggleTable, showTable }) => {
  let navigate = useNavigate()

  const backHome = () => {
    !showTable && toggleTable() 
    navigate('/home')
  }

  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
      ml='2rem'
      mr='2rem'
      pt='2rem'
      pb='1rem'
      borderBottom='2px solid #A2B29F'
    >
      <Flex
        flexDir="column"
        onClick={backHome}
        cursor="pointer"
      >
        <Text
          color='brand.100'
          fontSize='2xl'
          fontWeight='600'
          letterSpacing='.1rem'
        >
          Gummy 
        </Text>
        <Text
          color='brand.100'
          fontSize='2xl'
          fontWeight='600'
          letterSpacing='.1rem'
        >
          Bears
        </Text>
      </Flex>
      <Flex gap='.5rem'>
        <OwnerMenu toggleTable={toggleTable} showTable={showTable} />
        <LandMenu toggleTable={toggleTable} showTable={showTable}/>
        <Button
          variant='ghost'
          fontSize='lg'
          leftIcon={<FiBarChart />}
          rounded='none'
          color='brand.100'
        >
          Reports
        </Button>
        <Settings />
      </Flex>
    </Flex>
  );
};

export default NavBar;
