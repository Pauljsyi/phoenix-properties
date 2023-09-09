import React, { useRef } from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay, Button
} from '@chakra-ui/react'

const SuccessEntryDialog = ({ isOpen, addMore }) => {
  const cancelRef = useRef()

  return (
    <>
      <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={()=>addMore(true)}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold' color="green">
                Success
              </AlertDialogHeader>

              <AlertDialogBody>
                Add more?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={()=>addMore(false)}>
                  No
                </Button>
                <Button colorScheme='green' onClick={()=>addMore(true)} ml={3}>
                  Yes
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
    </>
  )
}

export default SuccessEntryDialog