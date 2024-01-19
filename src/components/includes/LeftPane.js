import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function LeftPane({ updateSetShowHome, chatList, renderConversations, userProfile }) {
    const renderChats = () => {
        return chatList.map((chat) => (
            <Chat
                key={chat.id}
                onClick={() => {
                    renderConversations(chat.id)
                    updateSetShowHome(false)
                }}
            >
                <ChatLeft>
                    <ChatImageContainer
                        style={{ marginRight: "10px" }}
                    >
                        <Img
                            src={require("../assets/images/Profile (11).jpg")}
                        />
                    </ChatImageContainer>
                    <ChatMiddleContainer>
                        <ChatName>{chat.name}</ChatName>
                        <LastMsg>Hello</LastMsg>
                    </ChatMiddleContainer>
                </ChatLeft>
                <ChatRight>
                    <LastMsgTick>
                        <LastMsgTickImg
                            src={require("../assets/images/grey dots.svg").default}
                        />
                    </LastMsgTick>
                    <LastMsgTime>12:10 pm</LastMsgTime>
                </ChatRight>
            </Chat>
        ));
    };

    return (
        <LeftPaneContainer>
            <DivUser>
                <DivTopLeft>
                    <ImgContainer style={{ backgroundColor: "#48A5C3" }} >
                        <Img src={require("../assets/images/Property 1=Image 22.png")} />
                    </ImgContainer>
                    <DivTopContent>
                        <UserName>Fasalu Rahman</UserName>
                        <UserDesc>My Account</UserDesc>
                    </DivTopContent>
                </DivTopLeft>
                <DivTopRight>
                    <ImgContainer style={{ border: "1px solid #4d4d4d" }} >
                        <Img
                            src={require("../assets/images/Option.svg").default}
                            style={{ width: "30px" }}
                        />
                    </ImgContainer>
                </DivTopRight>
            </DivUser>
            <DivSearch>
                <DivSearchWrapper>
                    <DivSearchIcon src={require("../assets/images/Music-dashboard-icons-1.svg").default} />
                    <DivSearchInput
                        type='text'
                        placeholder='Search or start a new chat...'
                    />
                </DivSearchWrapper>
            </DivSearch>
            <DivOnline>
                <DivOnlineTop>
                    <DivOnlineTopHead>Online now</DivOnlineTopHead>
                    <DivOnlineTopMore>
                        More
                        <DivOnlineTopMoreIcon src={require("../assets/images/Music-dashboard-icons.svg").default} />
                    </DivOnlineTopMore>
                </DivOnlineTop>
                <DivOnlineBottom>
                    <OnlineImageContainer>
                        <Img src={require("../assets/images/Profile (7).jpg")} />
                    </OnlineImageContainer>
                    <OnlineImageContainer>
                        <Img src={require("../assets/images/Profile (6).jpg")} />
                    </OnlineImageContainer>
                    <OnlineImageContainer>
                        <Img src={require("../assets/images/Profile (3).jpg")} />
                    </OnlineImageContainer>
                    <OnlineImageContainer>
                        <Img src={require("../assets/images/Profile (4).jpg")} />
                    </OnlineImageContainer>
                    <OnlineImageContainer>
                        <Img src={require("../assets/images/Profile (5).jpg")} />
                    </OnlineImageContainer>
                </DivOnlineBottom>
            </DivOnline>
            <DivChatList>
                <ChatListHeadContainer>
                    <ChatListHead>Messages</ChatListHead>
                    <ChatListCountBox>
                        <ChatListCountText>30</ChatListCountText>
                    </ChatListCountBox>
                </ChatListHeadContainer>
                {renderChats()}
            </DivChatList>
        </LeftPaneContainer>
    )
}

const LeftPaneContainer = styled.div`
    width: 25%;
    max-width: 300px;
    background-color: #161B1C;
    height: 100vh;
    border-left: 1px solid #4d4d4d;
    border-right: 1px solid #4d4d4d;
`
const DivUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #4d4d4d;
    height: 60px;
    max-height: 80px;
    min-height: 60px;
    padding: 15px;
`
const DivTopLeft = styled.div`
    display: flex;
    align-items: center;;
`
const ImgContainer = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Img = styled.img`
    display: block;
    width: 100%;
    border-radius: 50%;
`
const DivTopContent = styled.div`
    margin-left: 15px;
`
const UserName = styled.h1`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`
const UserDesc = styled.p`
    color: #fff;
    font-size: 11px;
`
const DivTopRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const DivSearch = styled.div`
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 15px;
    padding-right: 15px;
`
const DivSearchWrapper = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4a4949;
    border: 1px solid #4d4d4d;
    border-radius: 8px;
`
const DivSearchIcon = styled.img`
    margin-right: 10px;
    width: 15px;
`
const DivSearchInput = styled.input`
    color: #4d4d4d;
    font-size: 11px;
    width: 80%;
    height: 100%;
    background-color: #4a4949;
    border: none;

`
const DivOnline = styled.div`
    padding-left: 15px;
    padding-right: 15px;
`
const DivOnlineTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15px;
    margin-bottom: 15px;
`
const DivOnlineTopHead = styled.h6`
    font-size: 14px;
    color: #fff;
    padding:0;
    margin: 0;
`
const DivOnlineTopMore = styled.p`
    font-size: 12px;
    color: #fff;
    display: flex;
    align-items: center;
`
const DivOnlineTopMoreIcon = styled.img`
    width: 15px;
`
const OnlineImageContainer = styled(ImgContainer)`
    position: relative;
    margin-left: 8px;
    &::after {
        content:"";
        width: 10px;
        height: 10px;
        background-color: #48A5C3;
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: 0;
    }
`
const DivOnlineBottom = styled.div`
    display: flex;
`
const DivChatList = styled.div`
    padding: 20px;
`
const ChatListHeadContainer = styled.div`
    display: flex;
    align-items: center;
`
const ChatListHead = styled.h6`
    font-size: 14px;
    color: #fff;
    padding:0;
    margin: 0;
    margin-bottom: 10px;
    margin-right: 10px;
`
const ChatListCountBox = styled.div`
    width: 25px;
    height: 15px;
    background-color: #48A5C3;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 35%;
    margin-top: -5px;
`
const ChatListCountText = styled.p`
    font-size: 10px;
    color: #fff;
`
const Chat = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    cursor: pointer;
    &:last-child {
        margin-bottom: 0;
    }
`
const ChatLeft = styled.div`
    display: flex;
`
const ChatImageContainer = styled(ImgContainer)`
    position: relative;
    &::after {
        content:"";
        width: 10px;
        height: 10px;
        background-color: #48A5C3;
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: 0;
    }
`
const ChatMiddleContainer = styled.div``
const ChatName = styled.h4`
    font-size: 14px;
    color: #fff;
    margin: 0;
    padding: 0;
`
const LastMsg = styled.p`
    font-size: 12px;
    color: grey;
    margin: 0;
    padding: 0;
`
const ChatRight = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0;
`
const LastMsgTick = styled.div`
    width: 16px;
    margin-right: 3px;
`
const LastMsgTickImg = styled.img`
    display: block;
    width: 100%;
`
const LastMsgTime = styled.p`
    color: grey;
    font-size: 11px;
    margin: 0;
`


export default LeftPane