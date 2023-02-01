import { TouchEventHandler, PropsWithChildren, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { routes } from '../../../routes';

const minSwipeDistance = 50;

const Swiper = ({ children }: PropsWithChildren) => {
  const location = useLocation();

  const navigate = useNavigate();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart: TouchEventHandler<HTMLElement> = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove: TouchEventHandler<HTMLElement> = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const currentPageIndex = routes.findIndex((it) => it.path === location.pathname);

  const onTouchEnd: TouchEventHandler<HTMLElement> = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      //TODO: 인덱스 0이거나 마지막일떄 페이지 이동하는거 수정하기
      if (currentPageIndex === 0 || currentPageIndex === routes.length - 1) return;
      return isLeftSwipe ? navigate(`${routes[currentPageIndex - 1].path}`) : navigate(`${routes[currentPageIndex + 1].path}`)
    }
  };

  return (
    <div
      style={{ backgroundColor: '#ebebeb' }}
      onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
    >
      {children}
    </div>
  )
};

export default Swiper;
