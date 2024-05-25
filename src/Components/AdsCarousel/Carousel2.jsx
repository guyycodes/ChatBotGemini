import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Mock ad components
const AdSlide1 = ({ content }) => <Box bg="blue.100" height="100px">{content}</Box>;
const AdSlide2 = ({ content }) => <Box bg="green.100" height="100px">{content}</Box>;
const AdSlide3 = ({ content }) => <Box bg="blue.100" height="100px">{content}</Box>;

// More ads can be added similar to AdSlide1 and AdSlide2

export const AdBannerCarousel2 = ({content}) => {
  return (
    <Box>
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      style={{ maxWidth: '1000px', margin: '0 auto', borderRadius: '10px' }} // Adjust carousel size as necessary
    >
      <SwiperSlide><AdSlide1 content={content}/></SwiperSlide>
      <SwiperSlide><AdSlide2 content={content}/></SwiperSlide>
      <SwiperSlide><AdSlide3 content={content}/></SwiperSlide>
      {/* Additional SwiperSlides for more ads */}
    </Swiper>
    </Box>
  );
};