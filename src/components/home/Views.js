import React, { useState } from 'react'
import { Flex, InputGroup, InputLeftElement, Input, RadioGroup, Stack, Radio } from '@chakra-ui/react'
import { FiSearch } from "react-icons/fi"
import ViewsOwnerTable from './ViewsOwnerTable'
import ViewsLandTable from './ViewsLandTable'

const Views = () => {
const [ radioValue, setRadioValue ] = useState('1')

const showSelectedTable = () => {
  if (radioValue === '1') {
    return (
      <ViewsOwnerTable />
    )
  }
  return (
    <ViewsLandTable />
  )
}
  
return (
    <Flex
      p="1rem"
      flexDir="column"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        p="1rem 2rem"
        width="min(100%, 1200px)"
        gap="2rem"
        ml="auto"
        mr="auto"
      >
        <InputGroup w="60%">
          <InputLeftElement
            pointerEvents='none'
            children={<FiSearch />}
          />
          <Input 
            type='text' 
            placeholder={radioValue === '1' ? "Search by Owners" : "Search by Land Holdings"}
            variant="outline"
            bg="brand.800"
            color="brand.900"
            _hover={{
              bg:"brand.800"
            }} />
        </InputGroup>
        <RadioGroup onChange={setRadioValue} value={radioValue} >
          <Stack direction="row" gap="1rem">
            <Radio colorScheme="green" value='1' defaultChecked>Owner</Radio>
            <Radio colorScheme="green" value='2'>Land Holding</Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <Flex mt="2rem" p="0 1rem">
        {showSelectedTable()}
      </Flex>
    </Flex>
  )
}

export default Views