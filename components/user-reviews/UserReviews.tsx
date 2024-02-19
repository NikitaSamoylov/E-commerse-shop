import { Row, Col, Flex } from 'antd';
import Moment from 'react-moment';
import 'moment/locale/ru';
import { Rating } from '../goods-rating';
import styles from './UserReviews.module.scss';

// type TUserReviews = {
//   userReviews: any;
// }

// const UserReviews: React.FC<TUserReviews> = (
//   { userReviews }
// ) => {

//   const reviewElements = userReviews.slice(0, 3).map((review: any) => {

//     return (
//       <Col key={ review.id }
//         span={ 6 }
//         className={ styles.review__item }
//         flex="auto"
//       >
//         <div className={ styles.review__header }
//         >
//           <Flex align='center'
//             gap={ 10 }
//             className={ styles.review__header_header }
//           >
//             <h4>
//               { review.user.name }
//             </h4>
//             <span className={ styles.review__date }>
//               <Moment date={ review.user.createdAt }
//                 fromNow
//                 locale='ru'
//               />
//             </span>
//           </Flex>
//           <Rating rateCount={ review.rating }
//             disabled={ true }
//           />
//         </div>
//         <ul style={
//           {
//             paddingTop: '15px',
//             paddingRight: '15px',
//             paddingLeft: '15px'
//           }
//         }>
//           <li className={ styles.review__item_item }>
//             <h4 className={ styles.review__item_title }>
//               Преимущества
//             </h4>
//             <p>{ review.advantages }</p>
//           </li>
//           <li className={ styles.review__item_item }>
//             <h4 className={ styles.review__item_title }>
//               Недостатки
//             </h4>
//             <p>{ review.disadvantages }</p>
//           </li>
//           <li className={ styles.review__item_item }>
//             <h4 className={ styles.review__item_title }>
//               Комментарий
//             </h4>
//             <p>{ review.comment }</p>
//           </li>
//         </ul>
//       </Col>
//     )
//   })

//   return (
//     <Row gutter={ [16, 16] }
//       justify={ "space-between" }
//     >
//       { reviewElements }
//     </Row>
//   )
// }

// export { UserReviews };

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type TUserReviews = {
  userReviews: any;
}

const UserReviews: React.FC<TUserReviews> = (
  { userReviews }
) => {

  const [_, setInit] = useState<boolean>();

  const prevRef = useRef<null>(null);
  const nextRef = useRef<null>(null);


  const reviewElements = userReviews.map((review: any) => {

    return (
      <SwiperSlide className={ styles.slide__item }>
        <div className={ styles.review__header }
        >
          <Flex align='center'
            gap={ 10 }
            className={ styles.review__header_header }
          >
            <h4 style={ { color: 'rgb(30, 30, 30)' } }>
              { review.user.name }
            </h4>
            <span className={ styles.review__date }>
              <Moment date={ review.user.createdAt }
                fromNow
                locale='ru'
              />
            </span>
          </Flex>
          <Rating rateCount={ review.rating }
            disabled={ true }
          />
        </div>
        <ul style={
          {
            paddingTop: '15px',
            paddingRight: '15px',
            paddingLeft: '15px'
          }
        }>
          <li className={ styles.review__item_item }>
            <h4 className={ styles.review__item_title }>
              Преимущества
            </h4>
            <p className={ styles.review__item_descr }>
              { review.advantages }
            </p>
          </li>
          <li className={ styles.review__item_item }>
            <h4 className={ styles.review__item_title }>
              Недостатки
            </h4>
            <p className={ styles.review__item_descr }>
              { review.disadvantages }
            </p>
          </li>
          <li className={ styles.review__item_item }>
            <h4 className={ styles.review__item_title }>
              Комментарий
            </h4>
            <p className={ styles.review__item_descr }>
              { review.comment }
            </p>
          </li>
        </ul>
      </SwiperSlide>
    )
  })

  return (
    <Swiper
      className={ styles.swiper }
      modules={ [Navigation, Pagination, A11y] }
      spaceBetween={ 20 }
      slidesPerView={ 3 }
      // navigation
      navigation={ {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      } }
      pagination={ { clickable: true } }
      scrollbar={ { draggable: true } }
      onInit={ () => setInit(true) }
    >
      { reviewElements }
      <button ref={ prevRef }>previous</button>
      <button ref={ nextRef }>next</button>
    </Swiper>
  )
}

export { UserReviews };

