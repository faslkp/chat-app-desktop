import React from 'react'
import styled from 'styled-components'

function ChatPane() {
  return (
    <ChatPaneWrapper>
        <ChatPaneTop>
            <ChatPaneTopLeft>
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
                <ChatPaneTopRightImgBox>
                    <ChatPaneTopRightImg
                        src={require("../assets/images/Option.svg").default}
                    />
                </ChatPaneTopRightImgBox>
            </ChatPaneTopRight>
        </ChatPaneTop>
        <ChatPaneMiddle>
            <MessageIn>
                <MessageInTop>
                    <MessageInTopLeft>
                        <MessageInContent>
                            Hello, dude, how you?
                        </MessageInContent>
                    </MessageInTopLeft>
                    <MessageInTopRight>
                        <MessageInTopRightIconBox>
                            <MessageInTopRightIconImg
                                src={require("../assets/images/Property 1=white share.svg").default}
                            />
                        </MessageInTopRightIconBox>
                        <MessageInTopRightIconBox>
                            <MessageInTopRightIconImg
                                src={require("../assets/images/Group 3465392.svg").default}
                            />
                        </MessageInTopRightIconBox>
                        <MessageInTopRightIconBox>
                            <MessageInTopRightIconImg
                                src={require("../assets/images/White Option.svg").default}
                            />
                        </MessageInTopRightIconBox>
                    </MessageInTopRight>
                </MessageInTop>
                <MessageInBottom>
                    <MessageInBottomLeft>
                        <MessageInBottomLeftImgBox>
                            <MessageInBottomLeftImg
                                src={require("../assets/images/emojione_thumbs-up.svg").default}
                            />
                        </MessageInBottomLeftImgBox>
                        <MessageInBottomLeftImgBox>
                            <MessageInBottomLeftImg
                                src={require("../assets/images/Group 3465375.svg").default}
                            />
                        </MessageInBottomLeftImgBox>
                    </MessageInBottomLeft>
                    <MessageInBottomRight>
                        <MessageInTime>12:15 pm</MessageInTime>
                    </MessageInBottomRight>
                </MessageInBottom>
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
            </MessageOut>
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
`
const ChatPaneTop = styled.div`
    height: 15vh;
    max-height: 80px;
    min-height: 70px;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    box-sizing: border-box;
`
const ChatPaneTopLeft = styled.div`
    display: flex;
    align-items: center;
`
const ChatPaneTopLeftImgBox = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`
const ChatPaneTopLeftImg = styled.img`
    display: block;
    width: 100%;
    border-radius: 50%;
`
const ChatPaneTopLeftMidBox = styled.div``
const ChatBuddyName = styled.h4``
const ChatBuddyStatus = styled.p``
const ChatPaneTopRight = styled.div``
const ChatPaneTopRightImgBox = styled.div``
const ChatPaneTopRightImg = styled.img``
const ChatPaneMiddle = styled.div``
const MessageIn = styled.div``
const MessageInTop = styled.div``
const MessageInTopLeft = styled.div``
const MessageInContent = styled.p``
const MessageInTopRight = styled.div``
const MessageInTopRightIconBox = styled.div``
const MessageInTopRightIconImg = styled.img``
const MessageInBottom = styled.div``
const MessageInBottomLeft = styled.div``
const MessageInBottomLeftImgBox = styled.div``
const MessageInBottomLeftImg = styled.img``
const MessageInBottomRight = styled.div``
const MessageInTime = styled.p``
const MessageOut = styled.div``
const MessageOutTop = styled.div``
const MessageOutContent = styled.p``
const MessageOutBottom = styled.div``
const MessageOutSentStatusBox = styled.div``
const MessageOutSentStatusImg = styled.img``
const MessageOutSentTime = styled.p``
const ChatPaneBottom = styled.div``
const AttachIconContainer = styled.div``
const AttachIconImg = styled.img``
const ChatInputContainer = styled.div``
const ChatInput = styled.input``
const EmojiButton = styled.div``
const EmojiButtonImg = styled.img``
const VoiceButton = styled.div``
const VoiceButtonImg = styled.img``

export default ChatPane