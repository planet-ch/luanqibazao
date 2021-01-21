//full photo swiper setting
export const fullScreen = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 300,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    // type: "fraction" //当前页/总页数
    clickable: true //show as a point list
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    paginationCurrentClass: "myCurrentPage"
  }
};
export const smallSwiper = {
  loop: true,
  speed: 300,
  slidesPerView: 3,
  spaceBetween: 0,
	centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true //show as a point list
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    paginationCurrentClass: "myCurrentPage"
  }
};
//pro list swiper setting
export const listSwiper = opt => {
  let coutGroup = opt.col ? opt.col * opt.row : opt.row;
  const swiperOpt = {
    slidesPerView: opt.row || 3, //3
    slidesPerColumn: opt.col || 1, //2,
    slidesPerGroup: opt.group || coutGroup, //定义slides的数量多少为一组
    spaceBetween: opt.space == null ? 5 : opt.space,
    loop: opt.loop || false,
    speed: 300,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      // type: "fraction" //当前页/总页数
      // clickable: true //show as a point list
    },
    navigation: {
      nextEl: opt.nextEl || ".swiper-button-next",
      prevEl: opt.prevEl || ".swiper-button-prev"
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 5
      },
      580: {
        slidesPerView: 2,
        slidesPerGroup: 2
      }
    }
  };
  if (!opt.col) delete listSwiper.slidesPerColumn;
  return swiperOpt;
};
