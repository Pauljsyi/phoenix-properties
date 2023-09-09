import React from 'react'
import { Select } from '@chakra-ui/react'

const RangeOptions = () => {
  return (
    <>
      <Select placeholder="Range" size="lg" variant="outline" bg="brand.800" color="brand.200">
        {
          ["001-E", "002-E", "003-E", "004-E", "005-E", "006-E", "007-E", "008-E", "009-E", "010-E", "011-E", "012-E", "013-E", "014-E", "015-E","016-E", "017-E", "018-E", "001-W", "002-W", "003-W", "004-W" ].map((val, i) => <option value={val} key={i} >{val}</option>)
        }
      </Select>
    </>
  )
}

export default RangeOptions