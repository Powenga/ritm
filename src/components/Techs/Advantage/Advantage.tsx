import React from 'react';
import { useMedia } from 'react-use';
import Carousel, { CarouselItem } from '../../Carousel/Carousel';
import '../../../styles/section.scss';
import './Advantage.scss';

import { PAD_WIDTH_WITHOUT } from '../../../utils/constants';
import ADVANTAGES from './constants';

const Advantage: React.FC = () => {
  const queryMediaMobile = `(max-width: ${PAD_WIDTH_WITHOUT}px)`;
  const isMobile = useMedia(queryMediaMobile);
  const advantageItems = ADVANTAGES.map((item, index) => {
    const advantageKey = `advantage${index}`;
    return (
      <li key={advantageKey} className="section__item advantage__item">
        <img className="advantage__item-icon" src={item.imgSrc} alt={item.imgAlt} />
        <p className="advantage__item-title">{item.title}</p>
        <p className="advantage__item-description">{item.description}</p>
      </li>
    );
  });

  const advantageList = <ul className="section__list advantage__list">{advantageItems}</ul>;

  const carouselItems = ADVANTAGES.map((item, index) => {
    const carouselKey = `carousel${index}`;
    return (
      <CarouselItem key={carouselKey}>
        <div className="section__item advantage__item">
          <img className="advantage__item-icon" src={item.imgSrc} alt={item.imgAlt} />
          <p className="advantage__item-title">{item.title}</p>
          <p className="advantage__item-description">{item.description}</p>
        </div>
      </CarouselItem>
    );
  });

  const carouselList = <Carousel>{carouselItems}</Carousel>;

  return (
    <div className="advantage">
      <h3 className="section__subtitle advantage__title">Основные преимущества наших решений</h3>
      {isMobile ? carouselList : advantageList}
    </div>
  );
};

export default Advantage;
