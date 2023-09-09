import React from 'react'
import { useField, Field } from 'formik'
import { Input, FormControl, FormErrorMessage } from "@chakra-ui/react"

const ValidateInput = ({ placeholder, type, callback = false, ...props }) => {
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
                  color={props.color}
                  placeholder={placeholder}
                  variant={props.variant}
                  _focus={{
                    borderColor: "brand.300",
                    boxShadow: "0px 1px 0px 0px #BDD2B6"
                  }}
                  mt="2rem"
                  height="2rem"
                  fontSize={props.fontSize}
                  // type={type}
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

export default ValidateInput