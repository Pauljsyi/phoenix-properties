import React, { useState } from 'react'
import { Box, Flex, Input, Heading, Button, useToast } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { validateNewOwner } from '../form/validateFormInput'
import ValidateOwnerInput from '../form/ValidateOwnerInput'
import ValidateSelect from '../form/ValidateSelect'
import { createOwner } from '../../realm/owner'
import { useNavigate } from 'react-router-dom'
import SuccessEntryDialog from './SuccessEntryDialog'

const NewOwner = ({ toggleTable }) => {
  const [isOpen, setIsOpen] = useState(false)
  let navigate = useNavigate()
  const toast = useToast()

  const showError = () => 
  toast({
    title: "An error occurred",
    description: "Invalid or Duplicate Owner",
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
        <Formik
          initialValues={{ 
            firstName: '', 
            lastName: '',
            street: '',
            city: '',
            zip: '',
            state: '',
            entity_type: '',
            owner_type: ''
          }}
          validationSchema={validateNewOwner}
          onSubmit={ async (data, { resetForm }) => {
            const metaData = {
              firstName: data.firstName,
              lastName: data.lastName,
              entity_type: data.entity_type,
              owner_type: data.owner_type,
              address: {
                street: data.street,
                city: data.city,
                zip: data.zip,
                state: data.state
              }
            }
            try {
              const isSaved = await createOwner( metaData )
              resetForm();
              if(!isSaved){
                showError()
                return
              }
              setIsOpen(true)

            } catch (error) {
              console.log('error in new owner form', error)
              showError()
            }
          }}
        >
        {({ values, isSubmitting, handleChange }) => (
          <Form>
            <Heading size="lg" color="brand.100">New Owner</Heading>
            <Flex
              gap="1rem"
              mt="2rem"
            >
              <Flex
                flexDir="column"
                width="80%"
                gap="1rem"
              >
                <ValidateOwnerInput
                  placeholder="First Name"
                  value={values.firstName}
                  name="firstName"
                />
                <ValidateOwnerInput
                  placeholder="Last Name"
                  value={values.lastName}
                  name="lastName"
                />
                <ValidateOwnerInput
                  placeholder="Street Address"
                  value={values.street}
                  name="street"
                />
                <Flex gap="1rem">
                <ValidateOwnerInput
                  placeholder="City"
                  value={values.city}
                  name="city"
                />
                <ValidateOwnerInput
                  placeholder="Zipcode"
                  value={values.zip}
                  name="zip"
                  w={"50%"}
                />
                </Flex>
              </Flex>
              <Flex
                flexDir="column"
                gap="1rem"
              > 
                <Input
                  placeholder="ID: auto-generated"
                  size="lg"
                  variant="outline"
                  isDisabled={true}
                  bg="brand.800"
                  _disabled={{
                    opacity: 0.6
                  }}
                />
                <ValidateSelect
                  placeholder="Entity Type"
                  name="entity_type"
                  value={values.entity_type} 
                  handleChange={handleChange}
                />
                <ValidateSelect
                  placeholder="Owner Type"
                  value={values.owner_type} 
                  onChange={handleChange}
                  name="owner_type"
                />
                <ValidateSelect
                  placeholder="State"
                  value={values.state}
                  name={"state"}
                  onChange={handleChange}
                />
              </Flex>
            </Flex>
            <Flex
              justifyContent="space-between"
              mt=".5rem"
            >
              <Button
                mt="2rem"
                width="35%"
                bg="brand.650"
                color="brand.100"
                _hover={{
                  bg:"brand.730",
                  color: "brand.700",
                }}
                _focus={{
                  borderShadow: "none",
                }}
                isDisabled={isSubmitting}
                isLoading={isSubmitting}
                onClick={() => {
                  navigate('/home')
                  toggleTable()
                }}
              >
                Cancel
              </Button>
              <Button
                mt="2rem"
                width="35%"
                bg="brand.300"
                color="brand.110"
                _hover={{
                  bg:"brand.200",
                  color: "brand.600",
                }}
                _focus={{
                  borderShadow: "none",
                }}
                type='submit'
                isDisabled={isSubmitting}
                isLoading={isSubmitting}
              >
                Save
              </Button>
            </Flex>
          </Form>
        )}
        </Formik>
      </Flex>
        <SuccessEntryDialog isOpen={isOpen} addMore={addMore}/>
    </Box>
  )
}

export default NewOwner