import React from 'react'
import styled from 'styled-components'
import PlaceCont from '../../../components/PlaceCont/PlaceCont'

const Container =  styled.section`
    width: 390px;
    margin : 0 auto;
    padding: 26px 0px 21px 25px;
    background-color: #F5F5F5;
`

export default function PlaceList() {
  return (
    <Container>
        <PlaceCont></PlaceCont>
    </Container>
  )
}