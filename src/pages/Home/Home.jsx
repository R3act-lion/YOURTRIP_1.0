import React from 'react'
import styled from 'styled-components'
import PageHeader from '../../components/header/PageHeader'
import Today from '../../components/today/Today'
import Most from '../../components/most/Most'
import Story from '../../components/story/Story'

const Container = styled.main`
    min-height: 100vh;
    padding: 76px 16px 88px;
    background-color: white;
    z-index: 10;
`

export default function Home() {
    return (
        <>
            <PageHeader />
            <Container>
                <Today />
                <Most />
                <Story />
            </Container>
        </>
    )
}
