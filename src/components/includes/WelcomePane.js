import React from 'react'
import styled from 'styled-components'

function WelcomePane() {
  return (
    <WelcomePaneWrapper>
        <Welcome>Welcome</Welcome>
        <Intro>Please select any chat to start your conversation..</Intro>
    </WelcomePaneWrapper>
  )
}

const WelcomePaneWrapper = styled.div`
    background-color: #0A0E0F;
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`
const Welcome = styled.h1`
    font-size: 32px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 10px;
`
const Intro = styled.p`
    font-size: 14px;
    color: grey;
`

export default WelcomePane