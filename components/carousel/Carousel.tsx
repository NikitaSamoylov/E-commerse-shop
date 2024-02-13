"use client";
import NextImage from 'next/image';
import { Carousel } from 'antd';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import styles from './Carousel.module.scss';
import './main-carousel.scss';

import ImgSlide1 from './carousel-1.png';
import ImgSlide2 from './carousel-2.png';
import ImgSlide3 from './carousel-3.png';
// import next from 'next';

// const ImgStyle = {
//     borderRadius: '15px',
//     width: '1154px',
// }

const MainCarousel:React.FC = () => {

    return (
        <div className={styles.carouselBlock}>
            <Carousel className={styles.carousel} arrows prevArrow={<IoIosArrowBack className={styles.icon} />} nextArrow={<IoIosArrowForward size="50" />} >
                <div className={styles.carousel__item}>
                    <NextImage 
                        src={ImgSlide1}
                        alt="image"
                        // style={ImgStyle}
                        priority
                        layout='responsive'
                    />
                </div>
                <div className={styles.carousel__item}>
                    <NextImage 
                        src={ImgSlide2}
                        alt="image"
                        // style={ImgStyle}
                        layout='responsive'
                    />
                </div>
                <div className={styles.carousel__item}>
                    <NextImage 
                        src={ImgSlide3}
                        alt="image"
                        // style={ImgStyle}
                        layout='responsive'
                    />
                </div>
            </Carousel>
        </div>
    )
};

export { MainCarousel };