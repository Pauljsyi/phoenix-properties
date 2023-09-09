import React, { useState } from 'react'
import { Tr, Td, useDisclosure } from '@chakra-ui/react'
import ViewOneOwner from './ViewOneOwner'

const ViewsTableBody = ({ rows, prepareRow, onOpen, setSelectedOwner }) => {

  const selectRow =(row) => {
    console.log("clicked", row.original)
    setSelectedOwner(row.original)
    onOpen()
  }

  return (
    <>
    {rows.map((row) => {
      prepareRow(row)
      return (
        <Tr 
          {...row.getRowProps()} 
          onClick={() => selectRow(row)} 
          cursor="pointer"
          _hover={{
            background: "brand.700"
          }}
        >
          {row.cells.map((cell) => (
            
            <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
              {cell.render('Cell')}
            </Td>
            
          ))}
        </Tr>
      )
    })}
    </>
  )
}

export default ViewsTableBody