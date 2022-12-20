import React from 'react'
import styled from 'styled-components'
import arrow from '../../assets/hyeon_image/Vector.png'
import frame from '../../assets/hyeon_image/Frame.png'

const Container = styled.section`
    
`

const SectionHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`

const SectionTitle = styled.h2`
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
`

const TitleImage = styled.img`
    width: 10px;
    height: 18px;
`

const CommuintyList = styled.ul`
    width: 100%;
    overflow-x: scroll;
    margin-left: 8px;
    display: flex;
    justify-content: space-between;
    gap: 8px;
    touch-action: pan-x;

    &::-webkit-scrollbar {
        display: none;
    }
`

const CommuintyListItem = styled.li`
    flex-basis: 166px;
    flex-shrink: 0;
    height: 147px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ItemContent = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
`

const ItemImage = styled.img`
    width: 16px;
`

export default function Story() {
    return (
        <Container>
            <a href="/">
                <SectionHeader>
                    <SectionTitle>우리의 이야기</SectionTitle>
                    <TitleImage src={arrow} alt='' />
                </SectionHeader>
            </a>
            <CommuintyList>
                <CommuintyListItem>
                    <ItemContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis distinctio rerum ducimus, eius ipsum quibusdam maxime praesentium. Dolorem eum quas perspiciatis commodi iste? Impedit praesentium corrupti numquam eaque nulla.
                    </ItemContent>
                    <ItemImage src={frame} alt='' />
                </CommuintyListItem>
                <CommuintyListItem>
                    <ItemContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis distinctio rerum ducimus, eius ipsum quibusdam maxime praesentium. Dolorem eum quas perspiciatis commodi iste? Impedit praesentium corrupti numquam eaque nulla.
                    </ItemContent>
                    <ItemImage src={frame} alt='' />
                </CommuintyListItem>
                <CommuintyListItem>
                    <ItemContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis distinctio rerum ducimus, eius ipsum quibusdam maxime praesentium. Dolorem eum quas perspiciatis commodi iste? Impedit praesentium corrupti numquam eaque nulla.
                    </ItemContent>
                    <ItemImage src={frame} alt='' />
                </CommuintyListItem>
            </CommuintyList>
        </Container>
    )
}
