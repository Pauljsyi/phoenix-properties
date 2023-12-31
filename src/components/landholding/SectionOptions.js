import React from 'react'
import { Select } from '@chakra-ui/react'

const SectionOptions = () => {
  return (
    <>
      <Select placeholder="Section" size="lg" variant="outline" bg="brand.800" color="brand.200">
        {
         [ '001', '002', '003', '004', '005', '006', '007', '008', '009', '010', '011', '012', '013', '014', '015', '016', '017', '018', '019', '020', '021', '022', '023', '024', '025', '027', '028', '029', '030', '031', '032', '033', '034', '035', '036' ].map(( val, i ) => <option value={val} key={i}>{val}</option> )
        }
      </Select>
    </>
  )
}

export default SectionOptions