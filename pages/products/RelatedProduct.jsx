import React from "react";
import { Autoplay, Pagination, Scrollbar, Navigation } from "swiper/modules";
import { Box, Typography } from "@mui/material/Box";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Image from "next/image";

const productImage = [
  {
    id: 1,

    bannerImg: "/banner3.png",
  },
  {
    id: 2,

    bannerImg: "/banner3.png",
  },
  {
    id: 3,

    bannerImg: "/banner3.png",
  },
  {
    id: 4,

    bannerImg: "/banner3.png",
  },
  {
    id: 5,

    bannerImg: "/banner3.png",
  },
  {
    id: 6,

    bannerImg: "/banner3.png",
  },
  {
    id: 7,

    bannerImg: "/banner3.png",
  },
  {
    id: 8,

    bannerImg: "/banner3.png",
  },
  {
    id: 9,

    bannerImg: "/banner3.png",
  },
];

const RelatedProduct = () => {
  return (
    <>
      {" "}
      <Box sx={{ marginTop: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Related Product
          </Typography>
        </Box>
      </Box>
      <Box>
        <Swiper
          modules={[Pagination, Scrollbar, Autoplay, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          // pagination={{ clickable: true }}
          speed={500}
          loop={true}
          // navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          touchRatio={1.5}
          effect={"flip"}
          // className={classes.mySwiper}
        >
          {productImage?.map((banner) => (
            // console.log(banner.title);
            <SwiperSlide>
              <div key={banner.id}>
                <div>
                  <Image
                    src={banner.bannerImg}
                    alt="Next.js Logo"
                    width={849}
                    height={400}
                    priority
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default RelatedProduct;
