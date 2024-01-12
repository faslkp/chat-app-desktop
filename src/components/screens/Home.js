import React from 'react'
import SideNav from '../includes/SideNav'
import LeftPane from '../includes/LeftPane'
import styled from 'styled-components'

function Home() {
  return (
    <HomeContainer>
        <SideNav />
        <LeftPane />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
    display: flex;

`

export default Home