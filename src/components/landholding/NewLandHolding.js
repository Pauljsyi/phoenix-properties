import React, { useState } from 'react'
import { Box, Flex, Input, Heading, Button, Divider, useToast } from '@chakra-ui/react'
import SectionOptions from './SectionOptions'
import TownshipOptions from './TownshipOptions'
import RangeOptions from './RangeOptions'
import TitleOptions from './TitleOptions'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import SuccessEntryDialog from '../owner/SuccessEntryDialog'

const NewLandHolding = ({ toggleTable }) => {
  const [isOpen, setIsOpen] = useState(false)
  let navigate = useNavigate()
  const toast = useToast()

  const showError = () => 
  toast({
    title: "An error occurred",
    description: "Invalid or Duplicate Land Holding",
    status: 'error',
    position: 'top',
    isClosable: true
  })

  const addMore = ( val ) => {
    if(!val){
      navigate('/home')
      toggleTable()
    }
    setIsOpen(false)
  }

  return (
    <Box
    p="2rem"
    >
      <Flex
        flexDir="column"
        p="2rem"
        width="min(80%, 800px)"
        ml="auto"
        mr="auto"
      >
        <Heading size="lg" color="brand.100">New Land Holding</Heading>
        <Flex
          mt="1rem"
          gap="1rem"
        >
          <Input
              placeholder="ID: auto-generated"
              size="md"
              variant="outline"
              bg="brand.800"
              isDisabled={true}
              _disabled={{
                opacity: 0.7,
                cursor: "not-allowed"
              }}
            />
          <Input
            placeholder="Section Name: auto-generated"
            size="md"
            variant="outline"
            bg="brand.800"
            isDisabled={true}
            _disabled={{
              opacity: 0.7,
              cursor: "not-allowed"
            }}
          />
        </Flex>
        <Input
          placeholder="Name: auto-generated"
          size="md"
          variant="outline"
          bg="brand.800"
          isDisabled={true}
          _disabled={{
            opacity: 0.7,
            cursor: "not-allowed"
          }}
          mt="1rem"
        />
        <Divider orientation='horizontal' bg="brand.200" mt="1rem"/>

        <Flex mt="1rem" gap="1rem">
          <Input
            placeholder="Search Owner"
            size="lg"
            variant="outline"
            bg="brand.800"
            color="brand.900"
            _hover={{
              bg:"brand.800"
            }}
          />
          <Input
            placeholder="Legal Entity"
            size="lg"
            variant="outline"
            bg="brand.800"
            color="brand.900"
            _hover={{
              bg:"brand.800"
            }}
          />
        </Flex>
        <Flex gap="1rem" mt="1rem">
            <SectionOptions />
            <TownshipOptions />
            <RangeOptions />
            <TitleOptions />
        </Flex>
        <Flex mt="1rem" gap="1rem">
          <Input
            placeholder="Net Mineral Acres"
            size="lg"
            variant="outline"
            bg="brand.800"
            color="brand.900"
            //width="65%"
            _hover={{
              bg:"brand.800"
            }}
          />
           <Input
            placeholder="Mineral Owner Royalty(%)"
            size="lg"
            variant="outline"
            bg="brand.800"
            color="brand.900"
            //width="75%"
            _hover={{
              bg:"brand.800"
            }}
          />
          </Flex>
          <Box
          >
            <Button
              float="right"
              width="35%"
              mt="2rem"
              height="2.7rem"
              bg="brand.300"
              color="brand.110"
              _hover={{
                bg:"brand.200",
                color: "brand.600",
              }}
              _focus={{
                borderShadow: "none",
              }}
              >
              Save
            </Button>
          </Box>


      </Flex>
    </Box>
  )
}

export default NewLandHolding