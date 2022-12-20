import React from 'react'
import styled from 'styled-components'
import Recommend from './Recommend'

const SectionHeader = styled.h2`
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
    margin-bottom: 15px;
`

export default function Today() {
    return (
        <section>
            <header>
                <SectionHeader>
                    오늘의 여행지
                </SectionHeader>
            </header>
            <Recommend />
            <Recommend />
        </section>
    )
}