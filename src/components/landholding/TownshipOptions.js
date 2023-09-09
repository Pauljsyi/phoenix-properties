import React from 'react'
import { Select } from '@chakra-ui/react'

const TownshipOptions = () => {
  return (
    <>
      <Select placeholder="Township" size="lg" variant="outline" bg="brand.800" color="brand.200">
        {
          ["001-N", "002-N", "003-N", "004-N", "005-N", "006-N", "007-N", "008-N", "009-N", "010-N", "011-N", "012-N", "013-N", "014-N", "015-N","016-N", "017-N", "018-N", "019-N", "020-N", "021-N", "001-S", "002-S", "003-S", "004-S", "005-S", "006-S", "007-S", "008-S"].map((val, i) => <option value={val} key={i} >{val}</option>)
        }
      </Select>
    </>
  )
}

export default TownshipOptions