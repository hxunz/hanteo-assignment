import styled from '@emotion/styled';
import { Box, CircularProgress, Grid, Paper, Typography } from '@mui/material';
import { useAppSelector } from 'src/hooks';
import useObserver from 'src/hooks/useObserver';
import Swiper from '../../hooks/useSwiper';

const Contents = () => {
  const { contents } = useAppSelector(store => store.contents);

  const { target, isLoading } = useObserver();

  return (
    <Swiper>
      <ChartName>Real-time Hanteo Chart</ChartName>
      {contents.map(({
        url,
      }, index) => (
        <ContentWrapper>
          <ContentContainer>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Thumbnail src={url} />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap key={index}>{index + 1}</Typography>
              </Grid>
            </Grid>
          </ContentContainer>
        </ContentWrapper>
      ))}
      <LoadingProgress ref={target}>
        {isLoading && <CircularProgress />}
      </LoadingProgress>
    </Swiper>
  )
};

const ContentWrapper = styled(Box)`
  overflow: hidden;
  padding: 0 24px;
`;

const ContentContainer = styled(Paper)`
  margin: 8px 0;
  padding: 16px;
  border-radius: 20px;
`

const ChartName = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 20px;
`

const LoadingProgress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Contents;
