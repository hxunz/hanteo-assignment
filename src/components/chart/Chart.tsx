import styled from '@emotion/styled';
import Carousel from 'react-material-ui-carousel';
import Banner from './Banner';
import Contents from './Contents';

const Chart = () => {
  const items = [
    {
      name: '[M COUTDOWN] 10월 2주차 엠카 사전 투표',
      description: '2020.02.08 10:00 ~ 2020.04.08 17:00(KST)',
      url: 'https://program.naver.com/p/659252/episode',
      img: 'https://pbs.twimg.com/media/FQZNMBVaUAcV74J?format=jpg&name=medium'
    },
    {
      name: '30주년 한터뮤직어워즈 2022 오피셜 팝업스토어',
      description: '2023.01.16 10:30 ~ 2023.01.31 20:00(KST)',
      url: 'https://awards.hanteo.com/?l=ko&m=false',
      img: 'https://awards.hanteo.com/_next/static/media/about-background.5f381d8a.png'
    },
    {
      name: '[HANTEO NEWS] 몬스타엑스 한터차트 초동 인증패 수상',
      description: '2023.01.16 10:30 ~ 2023.01.31 20:00(KST)',
      url: 'https://www.youtube.com/watch?v=f0qhktftQ5g',
      img: 'https://images.chosun.com/resizer/BeWim8XOz5_LX4D4fGjFOBjL2aI=/650x520/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/5HRXMKRLRRRRZKN4BBZMKMDHWU.jpg'
    }
  ]

  return (
    <>
      <BannerWrapper
        autoPlay={true}
        swipe={true}
      >
        {
          items.map((item, i) => <Banner key={i} item={item} />)
        }
      </BannerWrapper>
      <Contents />
    </>
  )
};

const BannerWrapper = styled(Carousel)`
  margin: 104px 0 24px;
`

export default Chart;
