import React, { useMemo } from 'react'
import { Table, Tbody, Tfoot } from '@chakra-ui/react'
import { useTable, useSortBy } from 'react-table'
import ViewsTableHeader from './ViewsTableHeader'
import ViewsTableBody from './ViewsTableBody'

const ViewsLandTable = () => {
  const data = useMemo(
    () => [
      {
        name: "Company",
        owner: "Competitor",
        legal_entity: 5,
        mineral_owner_royalty: 3,
        section: 200,
        township: 10,
        range: 10,
        title_source: 5,
        id: 1
      }
    ], []
  )

  const columns = useMemo( () => [
    {
      Header: 'Entity',
      accessor: 'entity_type'
    }, 
    {
      Header: 'Owner Type',
      accessor: 'owner_type'
    },
    {
      Header: 'Total Land Holdings',
      accessor: 'land_holdings' 
    },
    {
      Header: 'Total Legal Entities',
      accessor: 'legal_entities'
    },
    {
      Header: 'Total Net Mineral Acres',
      accessor: 'net_acres'
    }
   ] , [])

   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy)

  return (
    <Table varient="striped" {...getTableProps()}>
      <ViewsTableHeader 
        headerGroups={headerGroups}
      />
      <Tbody {...getTableBodyProps()}>
        <ViewsTableBody
          rows={rows}
          prepareRow={prepareRow}
        />
     </Tbody>
    </Table>
  )
}

export default ViewsLandTable