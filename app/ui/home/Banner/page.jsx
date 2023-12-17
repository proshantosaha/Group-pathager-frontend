"use client";

// import Layout from "@/layout";
import React from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import Box from "@mui/material/Box";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Autoplay, Pagination, Scrollbar, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { useCart } from "@/context/cartContext";
import { Typography } from "@mui/material";
import { getDiscountedPricePercentage } from "@/app/components/utils/helper";
// import { getDiscountedPricePercentage } from "@/utils/helper";

const bannerData = [
  {
    id: 1,
    title: "Meet Your Next",
    title2: "Favourite Books",
    descount: "Sale up to 20% off",
    shopButon: " Shop Now",
    rating: "⭐⭐⭐⭐⭐",
    review: "100 review",
    bannerImg: "/banner3.png",
    priceTag: 97,
  },
  {
    id: 2,
    title: "Meet Your Next",
    title2: "Favourite Books",
    descount: "Sale up to 20% off",
    shopButon: " Shop Now",
    rating: "⭐⭐⭐⭐⭐",
    review: "100 review",
    bannerImg: "/banner3.png",
    priceTag: 97,
  },
  {
    id: 3,
    title: "Meet Your Next",
    title2: "Favourite Books",
    descount: "Sale up to 20% off",
    shopButon: " Shop Now",
    rating: "⭐⭐⭐⭐⭐",
    review: "100 review",
    bannerImg: "/banner3.png",
    priceTag: 97,
  },
  {
    id: 4,
    title: "Meet Your Next",
    title2: "Favourite Books",
    descount: "Sale up to 20% off",
    shopButon: " Shop Now",
    rating: "⭐⭐⭐⭐⭐",
    review: "100 review",
    bannerImg: "/banner3.png",
    priceTag: 97,
  },
];

const Banner = () => {
  const { products, loading, addToCart, cart } = useCart();
  console.log(products);

  // const [title, blodTitle, shopTitle] = BannerProp;

  return (
    // bgcolor: "#6DCEF5"
    <div className={styles.sx}>
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
        {products?.map((banner) => (
          // console.log(banner)
          <SwiperSlide>
            <div key={banner?.id} className={styles.grid}>
              <div className={styles.description}>
                <h4 className={styles.texth4}>{banner.descount}</h4>
                <Typography variant="h6" color="green" fontWeight="700">
                  <p>${banner?.attributes?.price}</p>

                  {banner?.attributes?.original_price && (
                    <>
                      <p>{banner?.attributes?.original_price}</p>
                      <p>
                        {getDiscountedPricePercentage(
                          banner?.attributes?.original_price,
                          banner?.attributes?.price
                        )}
                        % off
                      </p>
                    </>
                  )}
                </Typography>

                <h2 className={styles.texth2}>
                  {banner.title}{" "}
                  <span className={styles.span}>
                    {" "}
                    {banner?.attributes?.name}
                  </span>
                </h2>

                <div>
                  <a href="#" className={styles.texthA}>
                    {banner.shopButon}{" "}
                    <KeyboardDoubleArrowRightIcon className={styles.picon} />
                  </a>
                </div>
              </div>

              <div className={styles.center}>
                <div className={styles.logo}>
                  <div className={styles.new}>new</div>
                  <Image
                    src={
                      banner?.attributes?.thumbnail?.data?.attributes?.url
                      // banner?.attributes?.thumbnail?.data?.attributes?.formats
                      //   .thumbnail.url
                    }
                    alt="Next.js Logo"
                    width={849}
                    height={400}
                    priority
                  />
                </div>
              </div>
            </div>
            //{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
