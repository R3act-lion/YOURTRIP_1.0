import React from 'react'
import styled from 'styled-components'
import PageHeader from '../../components/header/PageHeader'

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
            </Container>
        </>
    )
}
