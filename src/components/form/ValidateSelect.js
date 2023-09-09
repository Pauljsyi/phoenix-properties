import React from 'react'
import { useField, Field } from 'formik'
import { FormControl, FormErrorMessage, Select } from "@chakra-ui/react"
import StateOptions from '../owner/StateOptions'

const ValidateSelect = ({ 
    placeholder, 
    callback = false, 
    value, 
    handleChange, 
    ...props 
  }) => {
  const [ field, meta ] = useField(props)

  const errorText= meta.error && meta.touched ? meta.error : '';

  const getOptions = () => {
    if( props.name === "entity_type" ) {
      return (
        <>
          <option value="Company">Company</option>
          <option value="Individual">Individual</option>
          <option value="Investor">Investor</option>
          <option value="Trust">Trust</option>
        </>
      )
    }
    if( props.name === "owner_type" ) {
      return (
        <>
          <option value="Competitor">Competitor</option>
          <option value="Seller">Seller</option>
          <option value="Investor">Investor</option>
          <option value="Professional">Professional</option>
        </>
      )
    }

    if( props.name === "state" ){
      return (
        <StateOptions />
      )
    }
  }
  
  return (
    <Field name={field.name} validate={callback}>
      {
        ({ form }) => {
          return (
            <FormControl
              width={'100%'}
              isInvalid={form.errors[field.name] && form.touched[field.name]}
              >
                <Select 
                  placeholder={placeholder} 
                  size="lg" 
                  variant="outline" 
                  bg="brand.800" 
                  color="brand.200" 
                  value={value} 
                  onChange={handleChange}
                  name={props.name}
                  {...field}
                  isInvalid={!!errorText}
                  >
                  {getOptions()}
                </Select>
              <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
            </FormControl>
          )
        }
      }
    </Field>
  )
}

export default ValidateSelect