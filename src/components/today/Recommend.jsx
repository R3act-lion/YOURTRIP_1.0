import React from 'react'
import styled from 'styled-components'
import image1 from '../../assets/hyeon_image/image1.png'
import image2 from '../../assets/hyeon_image/image2.png'
import arrow from '../../assets/hyeon_image/Vector.png'

const Container = styled.section`
    margin-left: 8px;
    margin-bottom: 32px;
`

const ImageListHeader = styled.header`
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    `

const ImageListTitle = styled.h3`
    display: inline-block;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    `

const TitleBlank = styled.span`
    display: block;
    margin: 5px;
`

const ImageListArrow = styled.img`
    width: 10px;
    height: 18px;
    margin: 12px 15px 0 0;    
`

const ImageList = styled.ul`
    width: 100%;
    overflow-x: scroll;
    display: flex;
    gap: 8px;
    touch-action: pan-x;

    &::-webkit-scrollbar {
        display: none;
    }
`
const ImageListItem = styled.li`
    flex-basis: 212px;
    flex-shrink: 0;
    height: 280px;
`

const ItemImage = styled.img`
    width: 100%;
    height: 100%;
`

export default function Recommend() {
    return (
        <Container>
            <a href="/">
                <ImageListHeader>
                    <ImageListTitle>
                        다가오는 12월,<TitleBlank></TitleBlank>서울에서 만나는 크리스마스
                    </ImageListTitle>
                    <ImageListArrow src={arrow} alt="" />
                </ImageListHeader>
            </a>

            <ImageList>
                <ImageListItem>
                    <ItemImage src={image1} />
                </ImageListItem>
                <ImageListItem>
                    <ItemImage src={image2} />
                </ImageListItem>
                <ImageListItem>
                    <ItemImage src={image1} />
                </ImageListItem>
                <ImageListItem>
                    <ItemImage src={image2} />
                </ImageListItem>
            </ImageList>
        </Container>

    )
}