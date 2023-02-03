import styled from '@emotion/styled';
import { Box, CircularProgress, Grid, Paper, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { loadContents } from 'src/redux/contentsSlice';
import Swiper from '../../hooks/useSwiper';

const Contents = () => {
  const dispatch = useAppDispatch();

  const { contents } = useAppSelector(store => store.contents);

  const [isLoading, setLoading] = useState(false);

  const target = useRef(null);

  const callback = async () => {
    setLoading(true);
    await dispatch(loadContents());
    setLoading(false)
  };

  useEffect(() => {
    let observer;
    if (target.current) {
      observer = new IntersectionObserver(callback, options);
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  const options = {
    threshold: 1.0
  };

  return (
    <Swiper>
      <ChartName>Real-time Hanteo Chart</ChartName>
      {contents.map(({
        url,
      }, index) => (
        <Box sx={{ overflow: 'hidden', px: 3 }}>
          <Paper
            sx={{
              my: 1,
              p: 2,
            }}
          >
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <img src={url} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: '20px' }} />
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap key={index}>{index + 1}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      ))}
      <div ref={target}>
        {isLoading && <CircularProgress />}
      </div>
    </Swiper>
  )
};

const ChartName = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
`

export default Contents;
