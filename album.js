new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "image/disha1.jpg",
          img2: "image/disha2.jpg",
          img3: "image/disha3.jpg",
          title: ":)",
          isOpen: false,
        },
        {
          img1: "image/disha4.jpg",
          img2: "image/disha5.jpg",
          img3: "image/disha6.jpg",
          title: ":)",
          isOpen: false,
        },
        {
          img1: "image/disha7.jpg",
          img2: "image/disha8.jpg",
          img3: "image/disha9.jpg",
          title: ":)",
          isOpen: false,
        },
        {
          img1: "image/disha10.jpg",
          img2: "image/disha11.jpg",
          img3: "image/disha1.jpg", // loop back to start if you want
          title: ":)",
          isOpen: false,
        },
        {
          img1: "image/disha2.jpg", // continue reusing if only 11 images exist
          img2: "image/disha3.jpg",
          img3: "image/disha4.jpg",
          title: ":)",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },
    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },
    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
