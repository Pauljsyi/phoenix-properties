import React, { useEffect, useContext, useState } from 'react'
import NavBar from '../nav/NavBar'
import { Grid, GridItem } from '@chakra-ui/react'
import { Route, Routes } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import NewOwner from '../owner/NewOwner'
import NewLandHolding from '../landholding/NewLandHolding'
import Views from './Views'
import { UserContext } from '../provider/UserProvider'

const Home = () => {
  const { user } = useContext( UserContext)
  const [ showTable, setShowTable ] = useState(true)
  let navigate = useNavigate()

  const toggleTable = () => {
    setShowTable( prev => !prev)
  }

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth_Token")
    
    if (authToken && user) {
      navigate('/home')
    }
    if (!authToken || !user) {
      navigate('/')
    }
  }, [])

  return (
    <Grid
      width="100%"
      bg="brand.400"
      height="100vh"
      templateRows="1fr 5fr"
    >
      <GridItem>
        <NavBar toggleTable={toggleTable} showTable={showTable}/>
      </GridItem>
      <GridItem>
        <Routes>
          <Route path="owners/new" element={<NewOwner toggleTable={toggleTable}/>} />
          <Route path="landholdings/new" element={<NewLandHolding toggleTable={toggleTable}/>} />
        </Routes>
          { showTable && <Views /> }
      </GridItem>

    </Grid>


  )
}

export default Home