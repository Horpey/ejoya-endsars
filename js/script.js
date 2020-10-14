// when life is settled, load up the fun stuff
document.addEventListener("DOMContentLoaded", function () {
  new Vue({
    el: "#app",
    // define data - initial display text
    data: {
      uploadInput: true,
      userImage: "",
      displaypic: "",
    },
    methods: {
      getUserImage(event) {
        this.uploadInput = false;
        console.log(event.target.files);
        this.userImage = event.target.files;
        this.getuserImageView();
      },
      getuserImageView() {
        console.log(this.userImage);
        this.displaypic = window.URL.createObjectURL(this.userImage[0]);
      },
    },
  });
});
