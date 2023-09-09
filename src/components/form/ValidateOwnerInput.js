import React from 'react'
import { useField, Field } from 'formik'
import { Input, FormControl, FormErrorMessage } from "@chakra-ui/react"

const ValidateOwnerInput = ({ placeholder, type, callback = false, ...props }) => {
  const [ field, meta ] = useField(props)

  const errorText= meta.error && meta.touched ? meta.error : '';
  
  return (
    <Field name={field.name} validate={callback}>
      {
        ({ form }) => {
          return (
            <FormControl
              width={'100%'}
              isInvalid={form.errors[field.name] && form.touched[field.name]}
              >
                <Input
                  placeholder={placeholder}
                  size="lg"
                  variant="outline"
                  bg="brand.800"
                  color="brand.900"
                  w={props.width ? props.width : "100%"}
                  _hover={{
                    bg:"brand.800"
                  }}
                  {...field}
                  isInvalid={!!errorText}
                />
              <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
            </FormControl>
          )
        }
      }
    </Field>
  )
}

export default ValidateOwnerInput