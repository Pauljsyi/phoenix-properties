import React from 'react'
import { Select } from '@chakra-ui/react'

const TitleOptions = () => {
  return (
    <>
      <Select placeholder="Title Source" size="lg" variant="outline" bg="brand.800" color="brand.200">
        {
          ["A", "B", "C", "D"].map((val, i) => <option value={val} key={i} >Class {val}</option>)
        }
      </Select>
    </>
  )
}

export default TitleOptions