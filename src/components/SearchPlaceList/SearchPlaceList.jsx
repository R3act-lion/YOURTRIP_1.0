import React from 'react'
import styled from 'styled-components'
import PlaceCont from '../SearchPlaceCont/SearchPlaceCont'

const ContWrapper = styled.div`
  margin-top: 30px;
`

const DescSaved = styled.p`
  font-size: 16px;
  color: #484848;
  margin-bottom: 20px;

`

export default function SearchPlaceList() {
  return (
    <ContWrapper>
      <DescSaved>내가 저장한 공간</DescSaved>
      <PlaceCont />
    </ContWrapper>
  )
}
