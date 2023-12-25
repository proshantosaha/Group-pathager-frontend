import { useState } from "react";
import { Box, CardMedia } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";

// import "./styles.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

// const productImage = [
//   {
//     id: 1,

//     bannerImg: "/banner3.png",
//   },
//   {
//     id: 2,

//     bannerImg: "/banner3.png",
//   },
//   {
//     id: 3,

//     bannerImg: "/banner3.png",
//   },
//   {
//     id: 4,

//     bannerImg: "/banner3.png",
//   },
// ];

const ProductCerousel = ({ image }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // console.log(images);

  return (
    <Box>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {image?.map((item) => (
          // console.log(banner.title);
          <SwiperSlide>
            <div key={item.id}>
              <div>
                <Image
                  src={item?.attributes?.url}
                  alt={item?.attributes.name}
                  key={item?.id}
                  width={849}
                  height={400}
                  priority
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={1}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        height={100}
      >
        {image?.map((item) => (
          // console.log(banner.title);
          <SwiperSlide>
            <div key={item.id}>
              <div>
                <Image
                  src={item?.data?.attributes?.formats.thumbnail.url}
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
  );
};

export default ProductCerousel;

{
  /* <SwiperSlide>
<img src="https://swiperjs.com/demos/images/nature-1.jpg" />
</SwiperSlide>
<SwiperSlide>
<img src="https://swiperjs.com/demos/images/nature-2.jpg" />
</SwiperSlide>
<SwiperSlide>
<img src="https://swiperjs.com/demos/images/nature-3.jpg" />
</SwiperSlide>
<SwiperSlide>
<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
</SwiperSlide>
<SwiperSlide>
<img src="https://swiperjs.com/demos/images/nature-5.jpg" />
</SwiperSlide>
<SwiperSlide>
<img src="https://swiperjs.com/demos/images/nature-6.jpg" />
</SwiperSlide>
<SwiperSlide>
<img src="https://swiperjs.com/demos/images/nature-7.jpg" />
</SwiperSlide>
<SwiperSlide>
<img src="https://swiperjs.com/demos/images/nature-8.jpg" />
</SwiperSlide>
<SwiperSlide>
<img src="https://swiperjs.com/demos/images/nature-9.jpg" />
</SwiperSlide>
<SwiperSlide>
<img src="https://swiperjs.com/demos/images/nature-10.jpg" />
</SwiperSlide> */
}
