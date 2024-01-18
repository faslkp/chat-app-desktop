import React from 'react'
import styled from 'styled-components'

function ChatPane({ updateSetShowProfile, conversation_list, user_profile }) {
    
    const renderConversations = () => {
        console.log("list", conversation_list)
        // return conversation_list.map((message) => (
        //     <>
        //         {message.sender===user_profile.id ? (
        //             <MessageOut>
        //             <MessageOutTop>
        //                 <MessageOutContent>
        //                     I'm fine da!
        //                 </MessageOutContent>
        //             </MessageOutTop>
        //             <MessageOutBottom>
        //                 <MessageOutSentStatusBox>
        //                     <MessageOutSentStatusImg
        //                         src={require("../assets/images/Blue dots.svg").default}
        //                     />
        //                 </MessageOutSentStatusBox>
        //                 <MessageOutSentTime>12:25 pm</MessageOutSentTime>
        //             </MessageOutBottom>
        //             </MessageOut>
        //         ) : (
        //             <MessageIn>
        //             <MessageInLeft>
        //                 <MessageInLeftTop>
        //                     <MessageInContent>
        //                         Hello, dude, how you?
        //                     </MessageInContent>
        //                 </MessageInLeftTop>
        //                 <MessageInLeftBottom>
        //                     <MessageInLeftBottomLeft>
        //                         <MessageInLeftBottomLeftImgBox>
        //                             <MessageInLeftBottomLeftImg
        //                                 src={require("../assets/images/emojione_thumbs-up.svg").default}
        //                             />
        //                         </MessageInLeftBottomLeftImgBox>
        //                         <MessageInLeftBottomLeftImgBox>
        //                             <MessageInLeftBottomLeftImg
        //                                 src={require("../assets/images/Group 3465375.svg").default}
        //                             />
        //                         </MessageInLeftBottomLeftImgBox>
        //                     </MessageInLeftBottomLeft>
        //                     <MessageInLeftBottomRight>
        //                         <MessageInTime>12:15 pm</MessageInTime>
        //                     </MessageInLeftBottomRight>
        //                 </MessageInLeftBottom>
        //             </MessageInLeft>
        //             <MessageInRight>
        //                 <MessageInRightIconBox>
        //                     <MessageInRightIconImg
        //                         src={require("../assets/images/Property 1=white share.svg").default}
        //                     />
        //                 </MessageInRightIconBox>
        //                 <MessageInRightIconBox>
        //                     <MessageInRightIconImg
        //                         src={require("../assets/images/Group 3465392.svg").default}
        //                     />
        //                 </MessageInRightIconBox>
        //                 <MessageInRightIconBox>
        //                     <MessageInRightIconImg
        //                         src={require("../assets/images/White Option.svg").default}
        //                     />
        //                 </MessageInRightIconBox>
        //             </MessageInRight>
        //             </MessageIn>
        //         )}
        //     </>
        // ))
    }

    return (
        <ChatPaneWrapper>
            <ChatPaneTop>
                <ChatPaneTopLeft
                    onClick={() => {
                        updateSetShowProfile(true)
                    }}
                >
                    <ChatPaneTopLeftImgBox>
                        <ChatPaneTopLeftImg
                            src={require("../assets/images/Profile (11).jpg")}
                        />
                    </ChatPaneTopLeftImgBox>
                    <ChatPaneTopLeftMidBox>
                        <ChatBuddyName>Michael</ChatBuddyName>
                        <ChatBuddyStatus>Typing...</ChatBuddyStatus>
                    </ChatPaneTopLeftMidBox>
                </ChatPaneTopLeft>
                <ChatPaneTopRight>
                    <ChatPaneTopRightImgBox>
                        <ChatPaneTopRightImg
                            src={require("../assets/images/Property 1=phone.svg").default}
                        />
                    </ChatPaneTopRightImgBox>
                    <ChatPaneTopRightImgBox>
                        <ChatPaneTopRightImg
                            src={require("../assets/images/Property 1=video-camera.svg").default}
                        />
                    </ChatPaneTopRightImgBox>
                    <ChatPaneTopRightImgBox
                        onClick={() => {
                            updateSetShowProfile(true)
                        }}
                    >
                        <ChatPaneTopRightImg
                            src={require("../assets/images/Option.svg").default}
                        />
                    </ChatPaneTopRightImgBox>
                </ChatPaneTopRight>
            </ChatPaneTop>
            <ChatPaneMiddle>
                {renderConversations()}
                {/* <MessageIn>
                    <MessageInLeft>
                        <MessageInLeftTop>
                            <MessageInContent>
                                Hello, dude, how you?
                            </MessageInContent>
                        </MessageInLeftTop>
                        <MessageInLeftBottom>
                            <MessageInLeftBottomLeft>
                                <MessageInLeftBottomLeftImgBox>
                                    <MessageInLeftBottomLeftImg
                                        src={require("../assets/images/emojione_thumbs-up.svg").default}
                                    />
                                </MessageInLeftBottomLeftImgBox>
                                <MessageInLeftBottomLeftImgBox>
                                    <MessageInLeftBottomLeftImg
                                        src={require("../assets/images/Group 3465375.svg").default}
                                    />
                                </MessageInLeftBottomLeftImgBox>
                            </MessageInLeftBottomLeft>
                            <MessageInLeftBottomRight>
                                <MessageInTime>12:15 pm</MessageInTime>
                            </MessageInLeftBottomRight>
                        </MessageInLeftBottom>
                    </MessageInLeft>
                    <MessageInRight>
                        <MessageInRightIconBox>
                            <MessageInRightIconImg
                                src={require("../assets/images/Property 1=white share.svg").default}
                            />
                        </MessageInRightIconBox>
                        <MessageInRightIconBox>
                            <MessageInRightIconImg
                                src={require("../assets/images/Group 3465392.svg").default}
                            />
                        </MessageInRightIconBox>
                        <MessageInRightIconBox>
                            <MessageInRightIconImg
                                src={require("../assets/images/White Option.svg").default}
                            />
                        </MessageInRightIconBox>
                    </MessageInRight>
                </MessageIn>
                <MessageOut>
                    <MessageOutTop>
                        <MessageOutContent>
                            I'm fine da!
                        </MessageOutContent>
                    </MessageOutTop>
                    <MessageOutBottom>
                        <MessageOutSentStatusBox>
                            <MessageOutSentStatusImg
                                src={require("../assets/images/Blue dots.svg").default}
                            />
                        </MessageOutSentStatusBox>
                        <MessageOutSentTime>12:25 pm</MessageOutSentTime>
                    </MessageOutBottom>
                </MessageOut> */}
            </ChatPaneMiddle>
            <ChatPaneBottom>
                <AttachIconContainer>
                    <AttachIconImg
                        src={require("../assets/images/attachment 2.svg").default}
                    />
                </AttachIconContainer>
                <ChatInputContainer>
                    <ChatInput
                        type='text'
                        placeholder='Message'
                    />
                    <EmojiButton>
                        <EmojiButtonImg
                            src={require("../assets/images/Group 3465380.svg").default}
                        />
                    </EmojiButton>
                </ChatInputContainer>
                <VoiceButton>
                    <VoiceButtonImg
                        src={require("../assets/images/Group 3465393.svg").default}
                    />
                </VoiceButton>
            </ChatPaneBottom>
        </ChatPaneWrapper>
    )
}

const ChatPaneWrapper = styled.div`
    background-color: #0A0E0F;
    flex:1;
    display: flex;
    flex-direction: column;
`
const ChatPaneTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #4d4d4d;
    height: 60px;
    max-height: 80px;
    min-height: 60px;
    padding: 15px;
`
const ChatPaneTopLeft = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`
const ChatPaneTopLeftImgBox = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
`
const ChatPaneTopLeftImg = styled.img`
    display: block;
    width: 100%;
    border-radius: 50%;
`
const ChatPaneTopLeftMidBox = styled.div``
const ChatBuddyName = styled.h4`
    margin: 0;
    padding: 0;
    font-size: 13px;
    color: #fff;
`
const ChatBuddyStatus = styled.p`
    font-size: 10px;
    color: grey;
    margin: 0;
    margin-top: 5px;
`
const ChatPaneTopRight = styled.div`
    display: flex;
    align-items: center;
`
const ChatPaneTopRightImgBox = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border: 1px solid grey;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:last-child {
        margin-right: 0;
    }
`
const ChatPaneTopRightImg = styled.img`
    width: 70%;
`
const ChatPaneMiddle = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    flex: 1;
`
const MessageIn = styled.div`
    display: flex;
    margin-bottom: 15px;
    &:last-child {
        margin-bottom: 0;
    }
`
const MessageInLeft = styled.div`
    margin-right: 12px;
    padding: 0;
`
const MessageInLeftTop = styled.div``
const MessageInContent = styled.p`
    font-size: 12px;
    color: #fff;
    padding: 20px;
    border: 1px solid grey;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #161B1C;
    min-width: 150px;
    max-width: 60%;
`
const MessageInLeftBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const MessageInLeftBottomLeft = styled.div`
    display: flex;
    align-items: center;
    margin-top: -8px;
`
const MessageInLeftBottomLeftImgBox = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: grey;
    margin-right: -2px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const MessageInLeftBottomLeftImg = styled.img`
    display: block;
    width: 80%;
    border-radius: 50%;
`
const MessageInLeftBottomRight = styled.div``
const MessageInTime = styled.p`
    font-size: 11px;
    color: grey;
`
const MessageInRight = styled.div`
    display: flex;
`
const MessageInRightIconBox = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background: grey;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const MessageInRightIconImg = styled.img`
    display: block;
    width: 80%;
    border-radius: 20px;
`
const MessageOut = styled.div`
    align-self: end;
    margin-bottom: 15px;
    :last-child {
        margin-bottom: 0;
    }
`
const MessageOutTop = styled.div``
const MessageOutContent = styled.p`
    font-size: 12px;
    color: #fff;
    padding: 20px;
    border: 1px solid grey;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #161B1C;
    min-width: 150px;
    max-width: 400px;
`
const MessageOutBottom = styled.div`
    display: flex;
`
const MessageOutSentStatusBox = styled.div`
    width: 20px;
    margin-right: 8px;
`
const MessageOutSentStatusImg = styled.img`
    display: block;
    width: 100%;
`
const MessageOutSentTime = styled.p`
    font-size: 11px;
    color: grey;
`
const ChatPaneBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
    height: 40px;
    border-top: 1px solid #4d4d4d;
`
const AttachIconContainer = styled.div`
    width: 25px;
`
const AttachIconImg = styled.img`
    display: block;
    width: 100%;
`
const ChatInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid grey;
    background-color: #161B1C;
    border-radius: 12px;
    width: 85%;
    padding: 10px;
`
const ChatInput = styled.input`
    width: 90%;
    border: none;
    background-color: #161B1C;
    color: #fff;
    &:focus {
        outline: none;
    }
`
const EmojiButton = styled.div`
    width: 20px;
`
const EmojiButtonImg = styled.img`
    display: block;
    width: 100%;
`
const VoiceButton = styled.div`
    width: 25px;
`
const VoiceButtonImg = styled.img`
    display: block;
    width: 100%;
`

export default ChatPane