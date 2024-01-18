import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SideNav from '../includes/SideNav'
import LeftPane from '../includes/LeftPane'
import RightPane from '../includes/RightPane'
import ChatPane from '../includes/ChatPane'
import WelcomePane from '../includes/WelcomePane'

function Chat() {
    const [userProfile, setUserProfile] = useState({
        id:20,
        name: "Fasalu Rahman"
    })
    const [chatList, setChatList] = useState([])
    const [chats, setChats] = useState([
        {
            id:1,
            chat_with: {
                id:10,
                name: "Fasalu",
                image: ""
            },
            conversation: [
                {
                    sender: 10,
                    message_text: "Hi how are you?",
                    has_attachement: false,
                    attachment:"",
                    sent_time: "10:45 am",
                    is_sent: true,
                    is_delivered: true,

                },
                {
                    sender: 20,
                    message_text: "Fine da",
                    has_attachement: false,
                    attachment:"",
                    sent_time: "10:50 am",
                    is_sent: true,
                    is_delivered: true,

                },
            ]
        },
        {
            id:2,
            chat_with: {
                id:11,
                name: "Rashi",
                image: ""
            },
            conversation: [
                {
                    sender: 11,
                    message_text: "Hi how are you?",
                    has_attachement: false,
                    attachment:"",
                    sent_time: "10:45 am",
                    is_sent: true,
                    is_delivered: true,

                },
                {
                    sender: 20,
                    message_text: "Fine da",
                    has_attachement: false,
                    attachment:"",
                    sent_time: "10:50 am",
                    is_sent: true,
                    is_delivered: true,

                },
            ]
        },
        {
            id:1,
            chat_with: {
                id:10,
                name: "Fami",
                image: ""
            },
            conversation: [
                {
                    sender: 10,
                    message_text: "Hi how are you?",
                    has_attachement: false,
                    attachment:"",
                    sent_time: "10:45 am",
                    is_sent: true,
                    is_delivered: true,

                },
                {
                    sender: 11,
                    message_text: "Fine da",
                    has_attachement: false,
                    attachment:"",
                    sent_time: "10:50 am",
                    is_sent: true,
                    is_delivered: true,

                },
            ]
        },
    ])
    const [conversations, setConversations] = useState([])
    const [showProfile, setShowProfile] = useState(false)
    const [showHome, setShowHome] = useState(true)

    const updateSetShowProfile = (value) => {
        setShowProfile(value)
    }
    const updateSetShowHome = (value) => {
        setShowHome(value)
    }
    const renderConversations = (id) => {
        console.log(id)
        let rendered_chat = chats.filter(item => item.id===id)
        console.log(rendered_chat)
        let conversations = rendered_chat.conversation
        setConversations(conversations)
    }

    useEffect(()=>{
        let chat_list = chats.map((chat)=> chat.chat_with)
        setChatList(chat_list)
    },[])

    return (
        <HomeContainer>
            <SideNav />
            <LeftPane
                updateSetShowHome={updateSetShowHome}
                chatList={chatList}
                userProfile={userProfile}
                renderConversations={renderConversations}
            />
            {showHome ? (
                <WelcomePane />
            ) : (
                <ChatPane
                    updateSetShowProfile={updateSetShowProfile}
                    renderChats={renderConversations}
                    conversation_list={conversations}
                    userProfile={userProfile}
                />
            )}
            {showProfile ? (
                <RightPane updateSetShowProfile={updateSetShowProfile} />
            ) : (
                <></>
        )}
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    display: flex;
    min-width: 1080px;
    max-height: 100vh;
    position: relative;
`

export default Chat