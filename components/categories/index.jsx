import React from "react";
import FullCard from "./FullCard";
import styles from "./categoris.module.css";
import Box from "@mui/material/Box";
import Title from "./title";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Cagoris = () => {
  return (
    <Box
      maxWidth="1654px"
      mx="auto"
      bgcolor="#94B9FE"
      padding="50px 50px"
      borderRadius="20px"
    >
      <Title />
      <Box display="flex" justifyContent="center">
        {/* <Link></Link> */}
        {/* <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          // breakpoints={{
          //   '@0.00': {
          //     slidesPerView: 1,
          //     spaceBetween: 10,
          //   },
          //   '@0.75': {
          //     slidesPerView: 2,
          //     spaceBetween: 20,
          //   },
          //   '@1.00': {
          //     slidesPerView: 3,
          //     spaceBetween: 40,
          //   },
          //   '@1.50': {
          //     slidesPerView: 4,
          //     spaceBetween: 50,
          //   },
          // }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <FullCard />
          <FullCard />
          <FullCard />
        </Swiper> */}

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <FullCard />
          </SwiperSlide>

          <SwiperSlide>
            <FullCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <FullCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <FullCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <FullCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <FullCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <FullCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <FullCard />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <FullCard />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default Cagoris;
