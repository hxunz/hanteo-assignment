import { TouchEventHandler, PropsWithChildren, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { router } from 'src/routes';

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

  const currentPageIndex = router.findIndex((it) => it.path === location.pathname);

  const onTouchEnd: TouchEventHandler<HTMLElement> = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const leftSwipe = distance > minSwipeDistance;
    const rightSwipe = distance < -minSwipeDistance;
    if (leftSwipe || rightSwipe) {
      if (currentPageIndex === 0 && rightSwipe) {
        return navigate(`${router[currentPageIndex + 1].path}`)
      }
      if (currentPageIndex === router.length - 1 && leftSwipe) {
        return navigate(`${router[currentPageIndex - 1].path}`)
      }
      return leftSwipe ? navigate(`${router[currentPageIndex - 1].path}`) : navigate(`${router[currentPageIndex + 1].path}`)
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
