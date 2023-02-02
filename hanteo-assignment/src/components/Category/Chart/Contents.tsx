import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { loadContents } from '../../../redux/contentsSlice';
import Swiper from './Swiper';

const Contents = () => {
  const dispatch = useAppDispatch();

  const { contents } = useAppSelector(store => store.contents);

  useEffect(() => {
    dispatch(loadContents());
  }, [dispatch]);

  return (
    <Swiper>
      {contents.map(({
        title
      }) => (
        <li>{title}</li>
      ))}
    </Swiper>
  )
};

export default Contents;
