import React from 'react';
import styles from './Find.module.css';
import Card from './Card';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Find your your destination</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Explore hidden part of Africa</span>
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            // when window width is >= 340px
            340: {
              width: 200,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            // when window width is >= 1040px
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <Card
                       image='https://images.unsplash.com/photo-1618828665347-d870c38c95c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MzkxODEzMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
                       make='Lagos'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1637247885433-9c1c51af3815?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTMxMzY3Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
              make='Lagos Lagoon'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
                 image='https://images.unsplash.com/photo-1639774275478-ca749e5efe1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTMxMzg4OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
                 make='Lagos'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
               image='https://images.unsplash.com/photo-1637247885433-9c1c51af3815?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTMxMzY3Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
               make='Lagos Lagoon'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
                    image='https://images.unsplash.com/photo-1639774275478-ca749e5efe1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTMxMzg4OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
                    make='Lagos'
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
               image='https://images.unsplash.com/photo-1637247885433-9c1c51af3815?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTMxMzY3Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
               make='Lagos Lagoon'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1639774275478-ca749e5efe1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTMxMzg4OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
              make='Lagos'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1637247885433-9c1c51af3815?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NTMxMzY3Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
              make='Lagos Lagoon'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1587590010936-300da0d70b9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MzkyMTMyMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
              make='Lagos'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1618828665347-d870c38c95c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MzkxODEzMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
              make='Lagos'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
