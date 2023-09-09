import React, { useEffect, useMemo, useState } from 'react'
import { Table, Tbody, Tfoot, Center, Spinner, useDisclosure } from '@chakra-ui/react'
import { useTable, useSortBy } from 'react-table'
import ViewsTableHeader from './ViewsTableHeader'
import ViewsTableBody from './ViewsTableBody'
import ViewOneOwner from './ViewOneOwner'
import { getAllOwners } from '../../realm/owner'


const ViewsOwnerTable = () => {
  const [ ownerData, setOwnerData ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ selectedOwner, setSelectedOwner ] = useState({})
  const { isOpen, onOpen, onClose } = useDisclosure()

  const data = useMemo(
    () => [
      {
        entity_type: "Company",
        owner_type: "Competitor",
        land_holdings: 5,
        legal_entities: 3,
        net_acres: 200,
        id: 1
      }
    ], []
  )

  useEffect(() => {
    //let isApiSubscribed = true
    const controller = new AbortController
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const data = await getAllOwners()
        console.log('the data', data)
        console.log('the data length', data.length)
        if(data.length > 0){
          const sortData = data.map( owner => ({
            entity_type: owner.entity_type,
            owner_type: owner.owner_type,
            id: owner._id.toString(),
            firstName: owner.firstName,
            lastName: owner.lastName,
            street: owner.address.street
          }))
          setOwnerData(sortData)
          setIsLoading(false)
        }
      } catch (error) {
        console.error('error in fetching owner data ', error)
      }
      return () => {
        // useEffect cleanup - cancel subscription
        //isApiSubscribed = false
        controller.abort()
      }
    };

    fetchData()
  }, [])

  const columns = useMemo( () => [
      {
        Header: 'First Name',
        accessor: 'firstName'
      }, 
      {
        Header: 'Last Name',
        accessor: 'lastName'
      }, 
      {
        Header: 'Entity',
        accessor: 'entity_type'
      }, 
      {
        Header: 'Owner Type',
        accessor: 'owner_type'
      },
      {
        Header: 'Street',
        accessor: 'street'
      },
      // {
      //   Header: 'Total Land Holdings',
      //   accessor: 'land_holdings' 
      // },
      // {
      //   Header: 'Total Legal Entities',
      //   accessor: 'legal_entities'
      // },
      // {
      //   Header: 'Total Net Mineral Acres',
      //   accessor: 'net_acres'
      // }
     ] , [])

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable( { columns, data: ownerData }, useSortBy )

  return (
    <>
      { isLoading ? (
        <>
          <Center
            position="absolute"
            top="50%"
            left="48%"
          >
            <Spinner size="xl"/>
          </Center>
        </>
      )
          : (
        <>
          <Table 
            variant="striped" 
            colorScheme="blackAlpha"
            { ...getTableProps() }
          >
            <ViewsTableHeader 
              headerGroups={headerGroups}
            />
            <Tbody {...getTableBodyProps()} >
              <ViewsTableBody
                rows={rows}
                prepareRow={prepareRow}
                onOpen={onOpen}
                setSelectedOwner={setSelectedOwner}
              />
            </Tbody>
          </Table>
          <ViewOneOwner
            selectedOwner={selectedOwner}
            isOpen={isOpen}
            onClose={onClose}
          />
        </>
        )
    }
  </>

  )
}

export default ViewsOwnerTable