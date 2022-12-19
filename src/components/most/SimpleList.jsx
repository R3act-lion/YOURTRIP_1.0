import React from 'react'
import styled from 'styled-components'
import duksu from '../../assets/hyeon_image/duksu.png'
import gyeongbok from '../../assets/hyeon_image/gyeongbok.png'
import heart from '../../assets/hyeon_image/heart.png'

const PlaceList = styled.ul`
    width: 100%;
    overflow-x: scroll;
    display: flex;
    gap: 25px;
    touch-action: pan-x;
    margin-left: 8px;

    &::-webkit-scrollbar {
        display: none;
    }
`

const PlaceListItem = styled.li`
    flex-basis: 190px;
    flex-shrink: 0;
    position: relative;
`

const PlaceImage = styled.img`
    width: 100%;
    height: 255px;
    margin-bottom: 10px;
`

const PlaceTitle = styled.h3`
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 5px;
`

const PlaceDesc = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
`

const HeartButton = styled.button`
    width: 40px;
    position: absolute;
    top: 8px;
    right: 6px;
    background-color: rgba( 255, 255, 255, 0 );
`

const HeartImage = styled.img`
    width: 100%;
`

export default function SimpleList() {
    return (
        <PlaceList>
            <PlaceListItem>
                <a href="/">
                    <section>
                        <PlaceImage src={duksu} alt='' />
                        <header>
                            <PlaceTitle>덕수궁</PlaceTitle>
                        </header>
                        <PlaceDesc>서울, 중구 - 궁궐</PlaceDesc>
                        <HeartButton>
                            <HeartImage src={heart} alt='' />
                        </HeartButton>
                    </section>
                </a>
            </PlaceListItem>
            <PlaceListItem>
                <a href="/">
                    <section>
                        <PlaceImage src={gyeongbok} alt='' />
                        <header>
                            <PlaceTitle>경복궁</PlaceTitle>
                        </header>
                        <PlaceDesc>서울, 중구 - 궁궐</PlaceDesc>
                        <HeartButton>
                            <HeartImage src={heart} alt='' />
                        </HeartButton>
                    </section>
                </a>
            </PlaceListItem>
        </PlaceList>
    )
}