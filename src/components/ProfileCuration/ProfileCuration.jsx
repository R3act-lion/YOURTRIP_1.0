import styled from "styled-components"
import nextBtn from "../../assets/daeun-icon/next-btn.svg"

const list = [
  {
    "title": "서울에서 보내는 연말, 이번 크리스마스는 서울에서 즐기기",
    "img" : "https://cdn.pixabay.com/photo/2017/07/28/00/57/christmas-2547356_960_720.jpg"
  },
  {
    "title": "서울의 야경이 잘 보이는 곳",
    "img" : "https://cdn.pixabay.com/photo/2016/11/13/12/52/kuala-lumpur-1820944__340.jpg"
  },
  {
    "title": "빌딩 숲에서 보는 하늘",
    "img" : "https://cdn.pixabay.com/photo/2018/02/27/06/30/skyscrapers-3184798_960_720.jpg"
  }
]

const Container = styled.section`
    padding: 30px 0px 19px 22px; 
    line-height: 1.4;
    `

const PlaceDetailPara= styled.p`
    margin-top: 0;
    margin-bottom: 20px;
    width: 304px;
    font-size: 14px;
  `

const TodayIntro = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  `

const TodayTitle = styled.p`
  font-size: 18px;
  margin-right: 50px;
  font-weight: 500;
`

const ContainerNextBtn = styled.img`
  width: 9px;
  height: 16px;  
  margin-right: 30px;
`

const PlaceDetailCont = styled.section`
    width: 100%;
    display: flex;
    overflow-x: scroll;
    gap: 13px;
    // 스크롤 숨기기
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    ::-webkit-scrollbar{
      display: none;
    }
`

const TodayImg = styled.img`
  flex-shrink: 0;
  object-fit: cover;
  width: 212px;  
  height: 280px; 
  margin-top: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
` 


export default function ProfileCuration() {
    let startX, scrollLeft
  let isDown = false;

  function handleMouseDown(e) {
    isDown = true;
    startX = e.pageX - e.target.parentElement.offsetLeft;
    scrollLeft = e.target.parentElement.scrollLeft;
  }

  function handleMouseLeave(e) {
    isDown = false;
  }

  function handleMouseUp(e) {
    isDown = false;
  }

  function handleMouseMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.target.parentElement.offsetLeft;
    e.target.parentElement.scrollLeft = scrollLeft - (x - startX);
  }

  return (
    <Container>
      <ul>
      {
        list.map((item, index) => {
          return (
            <li key={index}>
              <TodayIntro>
                <TodayTitle>{item.title}</TodayTitle> 
                <ContainerNextBtn src={nextBtn}></ContainerNextBtn> 
              </TodayIntro>   
              <PlaceDetailCont onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}>
                {Array.from(Array(8), (x, i) => <TodayImg key={i} src={item.img} />)}
                {/* 후에 데이터에서 순회하는 걸로 변경 */}
              </PlaceDetailCont>
              <PlaceDetailPara>위치에 대한 설명이 나오는 공간입니다. 위치에 대한 설명이 나오는 공간입니다. 위치에 대한 설명이 나오는 공간입니다. 위치에 대한 설명이 나오는 공간입니다. 위치에 대한 설명이 나오는 공간입니다.</PlaceDetailPara>
            </li>
          )
        })
      }
    </ul>
    </Container>
  )
}
