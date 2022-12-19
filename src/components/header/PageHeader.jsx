import React from 'react'
import styled from 'styled-components'
import PageNavigation from '../navigation/PageNavigation'
import Yourtrip from '../../assets/images/YOURTRIP.png'
import SearchIcon from '../../assets/images/icon_search.png'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
    width: 390px;
    height: 48px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    border-bottom: 1px solid #DBDBDB;
    background-color: white;
    position: fixed;
    z-index: 20;
`

const LogoTitle = styled.h1`
    width: 96px;
    margin: 0 auto;
`

const LogoImage = styled.img`
    width: 100%;
`

const SearchAnchor = styled.a`
    width: 18px;
    position: absolute;
    margin-right: 16px;
`

const SearchImage = styled.img`
    width: 100%;
`

export default function PageHeader() {
    return (
        <HeaderContainer>
            <LogoTitle>
                <Link to='/'>
                    <LogoImage src={Yourtrip} alt='YOURTRIP' />
                </Link>
            </LogoTitle>
            <SearchAnchor href="/">
                <SearchImage src={SearchIcon} alt='검색 버튼' />
            </SearchAnchor>
            <PageNavigation />
        </HeaderContainer>
    )
}
