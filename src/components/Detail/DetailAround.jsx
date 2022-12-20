import React from 'react'
import styled from 'styled-components'
import DetailAroundCont from './DetailAroundCont'

const Container= styled.section`
  padding: 30px 25px 0;
`

export default function DetailAround() {
  return (
    <Container>
        <DetailAroundCont></DetailAroundCont>
    </Container>
  )
}