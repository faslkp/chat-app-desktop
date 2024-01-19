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
                user_id:10,
                name: "Fasalu",
                image: ""
            },
            conversation: [
                {
                    id:5,
                    user_id: 10,
                    message_text: "Hi how are you?",
                    has_attachement: false,
                    attachment:"",
                    sent_time: "10:45 am",
                    is_sent: true,
                    is_delivered: true,

                },
                {
                    id:6,
                    user_id: 20,
                    message_text: "Fine da. How u?",
                    has_attachement: false,
                    attachment:"",
                    sent_time: "10:50 am",
                    is_sent: true,
                    is_delivered: true,

                },
                {
                    id:7,
                    user_id: 10,
                    message_text: "when will you reach at school?",
                    has_attachement: false,
                    attachment:"",
                    sent_time: "10:50 am",
                    is_sent: true,
                    is_delivered: true,

                },
                {
                    id:8,
                    user_id: 20,
                    message_text: "I will try to be there at eve.",
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
                user_id:11,
                name: "Rashi",
                image: ""
            },
            conversation: [
                {
                    id:3,
                    user_id: 11,
                    message_text: "Hello",
                    has_attachement: false,
                    attachment:"",
                    sent_time: "10:45 am",
                    is_sent: true,
                    is_delivered: true,

                },
                {
                    id:4,
                    user_id: 20,
                    message_text: "Hi,",
                    has_attachement: false,
                    attachment:"",
                    sent_time: "10:50 am",
                    is_sent: true,
                    is_delivered: true,

                },
                {
                    id:9,
                    user_id: 11,
                    message_text: "Where are you?",
                    has_attachement: false,
                    attachment:"",
                    sent_time: "10:45 am",
                    is_sent: true,
                    is_delivered: true,

                },
            ]
        },
        {
            id:3,
            chat_with: {
                user_id:10,
                name: "Fami",
                image: ""
            },
            conversation: [
                {
                    id:1,
                    user_id: 10,
                    message_text: "Are you there?",
                    has_attachement: false,
                    attachment:"",
                    sent_time: "10:45 am",
                    is_sent: true,
                    is_delivered: true,

                },
                {
                    id:2,
                    user_id: 20,
                    message_text: "yup",
                    has_attachement: false,
                    attachment:"",
                    sent_time: "10:50 am",
                    is_sent: true,
                    is_delivered: true,

                },
                {
                    id:10,
                    user_id: 20,
                    message_text: "When will you reach?",
                    has_attachement: false,
                    attachment:"",
                    sent_time: "10:50 am",
                    is_sent: true,
                    is_delivered: true,

                },
                {
                    id:11,
                    user_id: 10,
                    message_text: "I'm not coming, sorry",
                    has_attachement: false,
                    attachment:"",
                    sent_time: "10:45 am",
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
        let selected_chat = chats.find(item => item.id===id)
        let conversations = selected_chat.conversation
        setConversations(conversations)
    }

    useEffect(()=>{
        let chat_list = chats.map((chat)=> ({...chat.chat_with,id:chat.id}))
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