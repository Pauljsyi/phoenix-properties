import * as yup from 'yup'

// HTML tag regex
const containsHTML = ( string ) => /<\/?[a-z][\s\S]*>/i.test( string );

const errorHTML = "No HTML please."
const errorRequired = ( name ) => `${name} is a required field.`
const errorMin = ( num ) => `Must be at least ${num} characters`
const errorMax = ( num ) => `Must be at max ${num} characters`

export const validateEmailAndPassword = yup.object().shape({
  email: yup
    .string()
    .required(errorRequired('Email'))
    .test(errorHTML, (value) => !containsHTML(value))
    .email('Must be a valid email.')
    .max(64, errorMax(64)),
  password: yup
    .string()
    .required(errorRequired('Password'))
    .min(6, errorMin(6))
})

export const validateFirstAndLastName = yup.object().shape({
  firstName: yup
    .string()
    .required(errorRequired('First name'))
    .test(errorHTML, (value) => !containsHTML(value))
    .max(64, errorMax(64))
    .min(1, errorMin(1)),
  lastName: yup
    .string()
    .required(errorRequired('Last name'))
    .test(errorHTML, (value) => !containsHTML(value))
    .min(1, errorMin(1))
    .max(64, errorMax(64)),
})

export const validateNewOwner = yup.object().shape({
  firstName: yup
    .string()
    .required(errorRequired('First name'))
    .test(errorHTML, (value) => !containsHTML(value))
    .max(64, errorMax(64))
    .min(1, errorMin(1)),
  lastName: yup
    .string()
    .required(errorRequired('Last name'))
    .test(errorHTML, (value) => !containsHTML(value))
    .min(1, errorMin(1))
    .max(64, errorMax(64)),
  street: yup
    .string()
    .required(errorRequired('Street Address'))
    .test(errorHTML, (value) => !containsHTML(value))
    .min(1, errorMin(1))
    .max(32, errorMax(32)),
  city: yup
    .string()
    .required(errorRequired('City'))
    .test(errorHTML, (value) => !containsHTML(value))
    .min(1, errorMin(1))
    .max(32, errorMax(32)),
  zip: yup
    .string()
    .required(errorRequired('Zipcode'))
    .test(errorHTML, (value) => !containsHTML(value))
    .min(1, errorMin(1))
    .max(12, errorMax(12)),
  entity_type: yup 
    .string()
    .required(errorRequired('Entity Type')),
  owner_type: yup 
    .string()
    .required(errorRequired('Owner Type')),
  state: yup 
    .string()
    .required(errorRequired('State'))
})
