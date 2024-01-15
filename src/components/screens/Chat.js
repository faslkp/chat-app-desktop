import React from 'react'
import styled from 'styled-components'
import SideNav from '../includes/SideNav'
import LeftPane from '../includes/LeftPane'
import RightPane from '../includes/RightPane'
import ChatPane from '../includes/ChatPane'

function Chat() {
  return (
    <HomeContainer>
        <SideNav />
        <LeftPane />
        <ChatPane />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
    display: flex;
    min-width: 1080px;
    max-height: 100vh;
`

export default Chat