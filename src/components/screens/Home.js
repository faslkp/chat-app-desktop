import React from 'react'
import styled from 'styled-components'
import SideNav from '../includes/SideNav'
import LeftPane from '../includes/LeftPane'
import RightPane from '../includes/RightPane'
import WelcomePane from '../includes/WelcomePane'

function Home() {
  return (
    <HomeContainer>
        <SideNav />
        <LeftPane />
        <WelcomePane />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
    display: flex;
    min-width: 1080px;
    max-height: 100vh;
`

export default Home