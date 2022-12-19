import React from 'react'
import styled from 'styled-components'
import SimpleList from './SimpleList'

const Container = styled.section`
    margin-bottom: 32px;
`

const SectionHeader = styled.h2`
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
    margin-bottom: 15px;
`

export default function Most() {
    return (
        <Container>
            <header>
                <SectionHeader>
                    많이 찾는 장소
                </SectionHeader>
            </header>
            <SimpleList />
        </Container>
    )
}