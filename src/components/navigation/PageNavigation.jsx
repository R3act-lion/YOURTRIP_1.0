import React from 'react'
import styled from 'styled-components'
import icon_home from '../../assets/images/icon_home.png'
import icon_location from '../../assets/images/icon_location.png'
import icon_community from '../../assets/images/icon_community.png'
import icon_profile from '../../assets/images/icon_profile.png'
import { Link } from 'react-router-dom'

const NavigationContainer = styled.nav`
    width: 390px;
    height: 60px;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #DBDBDB;
    background-color: white;
    padding: 0 6px;
`

const NavigationList = styled.ul`
    display: flex;
    justify-content: space-between;
`

const NavigationListItem = styled.li`
    width: 84px;
`

const NavigationLink = styled(Link)`
    cursor: pointer;
`

const NavigationButtonImage = styled.img`
    width: 100%;
`

export default function PageNavigation() {
    return (
        <NavigationContainer>
            <NavigationList>
                <NavigationListItem>
                    <NavigationLink to='/'>
                        <NavigationButtonImage src={icon_home} alt="홈" />
                    </NavigationLink>
                </NavigationListItem>
                <NavigationListItem>
                    <NavigationLink to='/'>
                        <NavigationButtonImage src={icon_location} alt="지역별" />
                    </NavigationLink>
                </NavigationListItem>
                <NavigationListItem>
                    <NavigationLink to='/'>
                        <NavigationButtonImage src={icon_community} alt="커뮤니티" />
                    </NavigationLink>
                </NavigationListItem>
                <NavigationListItem>
                    <NavigationLink to='/'>
                        <NavigationButtonImage src={icon_profile} alt="프로필" />
                    </NavigationLink>
                </NavigationListItem>
            </NavigationList>
        </NavigationContainer>
    )
}