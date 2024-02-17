import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function SideNav() {
  return (
    <Nav>
        <DivTop>
            <LogoContainer>
                <LogoImg src={require("../assets/images/chat (1).svg").default} />
            </LogoContainer>
        </DivTop>
        <DivMiddle>
            <NavMenu>
                <NavItem>
                    <NavItemLink href="#">
                        <NavImg src={require("../assets/images/chats.svg").default} />
                    </NavItemLink>
                </NavItem>
                <NavItem>
                    <NavItemLink href="#">
                        <NavImg src={require("../assets/images/Property 1=phone.svg").default} />
                    </NavItemLink>
                </NavItem>
                <NavItem>
                    <NavItemLink href="#">
                        <NavImg src={require("../assets/images/Property 1=video-camera.svg").default} />
                    </NavItemLink>
                </NavItem>
                <NavItem>
                    <NavItemLink href="#">
                        <NavImg src={require("../assets/images/Property 1=users.svg").default} />
                    </NavItemLink>
                </NavItem>
                <NavItem>
                    <NavItemLink href="#">
                        <NavImg src={require("../assets/images/Property 1=setting (1).svg").default} />
                    </NavItemLink>
                </NavItem>
            </NavMenu>
        </DivMiddle>
        <DivBottom>
            <NavMenu>
                <BottomNavItem>
                    <NavItemLink href="#">
                        <NavImg
                            src={require("../assets/images/icons.svg").default}
                            style={{width:"50%"}}
                        />
                    </NavItemLink>
                </BottomNavItem>
                <BottomNavItem>
                    <NavItemLink href="#" style={{backgroundColor:"#97bf08", borderRadius:"50%"}}>
                        <NavImg src={require("../assets/images/Property 1=Image 8.png")} />
                    </NavItemLink>
                </BottomNavItem>
            </NavMenu>
        </DivBottom>
    </Nav>
  )
}

const Nav = styled.div`
    display: flex;
    flex-direction: column;
    width: 10%;
    max-width: 100px;
    height: 100vh;
    background-color: #161B1C;
    align-items: center;
    justify-content: space-between;
`
const DivTop = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
`
const LogoContainer = styled.div`
    background-color: #fff;
    border: 2px solid #2B6BC5;
    border-radius: 50%;
    width: 50%;
    padding: 10px;
    box-sizing: border-box;
`
const LogoImg = styled.img`
    display: block;
    width: 100%;
`
const DivMiddle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const NavMenu = styled.ul`
    list-style: none;
    padding:0;
    margin:0;
`
const NavItem = styled.li`
    width:40px;
    height: 40px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const NavItemLink = styled(NavLink)`
    display: block;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const NavImg = styled.img`
    display: block;
    width: 100%;
`
const DivBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 30px;
`
const BottomNavItem = styled(NavItem)`
    background-color: #8a8a8a;
    box-sizing: border-box;
    border-radius: 50%;
`

export default SideNav