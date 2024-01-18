import React from 'react'
import styled from 'styled-components'

function RightPane({ updateSetShowProfile }) {

    return (
        <LeftPaneContainer>
            <DivTop>
                <DivTopLeft>Contact details</DivTopLeft>
                <DivTopRight
                    onClick={() => {
                        updateSetShowProfile(false)
                    }}
                >
                    <DivTopRightImg
                        src={require("../assets/images/Vector.svg").default}
                    />
                </DivTopRight>
            </DivTop>
            <DivBuddy>
                <DpImgContainer style={{backgroundColor: "#48A5C3"}} >
                    <DpImg src={require("../assets/images/Profile (11).jpg")} />
                </DpImgContainer>
                <BuddyName>Fasalu Rahman</BuddyName>
                <BuddyStatus>Online</BuddyStatus>
            </DivBuddy>
            <DivMedia>
                <DivMediaTop>
                    <DivMediaTopLeft>
                        <DivMediaTopLeftHead>Media</DivMediaTopLeftHead>
                        <DivMediaTopLeftDesc>14 pictures</DivMediaTopLeftDesc>
                    </DivMediaTopLeft>
                    <DivMediaTopRight>View all</DivMediaTopRight>
                </DivMediaTop>
                <DivMediaBottom>
                    <DivMediaImgBox>
                        <DivMediaImg
                            src={require("../assets/images/image_processing20220225-29217-hv4dvv.jpg")}
                        />
                    </DivMediaImgBox>
                    <DivMediaImgBox>
                        <DivMediaImg
                            src={require("../assets/images/image_processing20220305-7813-19y4c1j.jpg")}
                        />
                    </DivMediaImgBox>
                    <DivMediaImgBox>
                        <DivMediaImg
                            src={require("../assets/images/image_processing20220225-29217-hv4dvv.jpg")}
                        />
                    </DivMediaImgBox>
                    <DivMediaMore>
                        <DivMediaMoreText>+11</DivMediaMoreText>
                    </DivMediaMore>
                </DivMediaBottom>
            </DivMedia>
            <DivFiles>
                <DivFilesTop>
                    <DivFilesTopLeft>
                        <DivFilesTopLeftHead>Files</DivFilesTopLeftHead>
                        <DivFilesTopLeftDesc>12 files</DivFilesTopLeftDesc>
                    </DivFilesTopLeft>
                    <DivFilesTopRight>View all</DivFilesTopRight>
                </DivFilesTop>
                <DivFilesBottom>
                    <DivFileWrapper>
                        <DivFile>
                            <DivFileTop>
                                <DivFileIconBox>
                                    <DivFileIconImg
                                        src={require("../assets/images/Component 96.svg").default}
                                    />
                                </DivFileIconBox>
                                <DivFileName>Brief Project Real Es...</DivFileName>
                            </DivFileTop>
                            <DivFileBottom>
                                <DivFileType>DOCS</DivFileType>
                                <DivFileSize>12 KB</DivFileSize>
                            </DivFileBottom>
                        </DivFile>
                        <DivFileSentTime>12:10 pm</DivFileSentTime>
                    </DivFileWrapper>
                    <DivFileWrapper>
                        <DivFile>
                            <DivFileTop>
                                <DivFileIconBox>
                                    <DivFileIconImg
                                        src={require("../assets/images/Component 96.svg").default}
                                    />
                                </DivFileIconBox>
                                <DivFileName>Brief Project Real Es...</DivFileName>
                            </DivFileTop>
                            <DivFileBottom>
                                <DivFileType>DOCS</DivFileType>
                                <DivFileSize>12 KB</DivFileSize>
                            </DivFileBottom>
                        </DivFile>
                        <DivFileSentTime>12:10 pm</DivFileSentTime>
                    </DivFileWrapper>
                </DivFilesBottom>
            </DivFiles>
        </LeftPaneContainer>
    )
}

const LeftPaneContainer = styled.div`
    width: 20%;
    max-width: 300px;
    background-color: #161B1C;
    height: 100vh;
    border-left: 1px solid #4d4d4d;
    border-right: 1px solid #4d4d4d;
`
const DivTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #4d4d4d;
    height: 60px;
    max-height: 80px;
    min-height: 60px;
    padding: 15px;
`
const DivTopLeft = styled.p`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
`
const DivTopRight = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid grey;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    cursor: pointer;
`
const DivTopRightImg = styled.img`
    display: block;
    width: 60%;
`
const DivBuddy = styled.div`
    padding: 15px;
    padding-bottom: 0;
    text-align: center;
`
const DpImgContainer = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 10px;
`
const DpImg = styled.img`
    display: block;
    width: 100%;
    border-radius: 50%;
`
const BuddyName = styled.h1`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
`
const BuddyStatus = styled.p`
    color: #48A5C3;
    font-size: 11px;
`
const DivMedia = styled.div`
    padding: 15px;
    padding-bottom: 0;
`
const DivMediaTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`
const DivMediaTopLeft = styled.div`
    display: flex;
    align-items: center;
`
const DivMediaTopLeftHead = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    margin-right: 8px;
`
const DivMediaTopLeftDesc = styled.p`
    font-size: 10px;
    color: grey;
`
const DivMediaTopRight = styled.div`
    font-size: 12px;
    color: #48A5C3;
    text-decoration: underline;
`
const DivMediaBottom = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 12px;
`
const DivMediaImgBox = styled.div`
    width: 35%;
    border-radius: 16px;
`
const DivMediaImg = styled.img`
    display: block;
    width: 100%;
    border-radius: 16px;
`
const DivMediaMore = styled.div`
    width: 35%;
    border-radius: 16px;
    background-color: #4a4949;
    display: flex;
    align-items: center;
    justify-content: center;
`
const DivMediaMoreText = styled.p`
    font-size: 11px;
    color: #fff;
`
const DivFiles = styled.div`
    padding: 15px;
    padding-bottom: 0;
`
const DivFilesTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`
const DivFilesTopLeft = styled.div`
    display: flex;
    align-items: center;
`
const DivFilesTopLeftHead = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    margin-right: 10px;
`
const DivFilesTopLeftDesc = styled.p`
    font-size: 10px;
    color: grey;
`
const DivFilesTopRight = styled.div`
    font-size: 12px;
    color: #48a5c3;
    text-decoration: underline;
`
const DivFilesBottom = styled.div``
const DivFileWrapper = styled.div`
    width: 70%;
    margin: 0 auto 15px;
`
const DivFile = styled.div`
    background-color: #242424;
    padding: 5px;
    height: 60px;
    box-sizing: border-box;
    border-radius: 8px;
`
const DivFileTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #161B1C;
    padding: 4px;
    box-sizing: border-box;
    border-radius: 8px;
    height: 70%;
`
const DivFileIconBox = styled.div`
    width: 20px;
    margin-right: 10px;
`
const DivFileIconImg = styled.img`
    display: block;
    width: 100%;
`
const DivFileName = styled.p`
    font-size: 12px;
    color: #fff;
    width: 90%;
`
const DivFileBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3px;
`
const DivFileType = styled.p`
    font-size: 11px;
    color: grey;
`
const DivFileSize = styled.p`
    font-size: 11px;
    color: grey;
`
const DivFileSentTime = styled.p`
    font-size: 11px;
    color: grey;
    text-align: end;
`

export default RightPane