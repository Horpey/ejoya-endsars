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
        this.userImage = event.target.files;
        this.getuserImageView();
      },
      getuserImageView() {
        this.displaypic = window.URL.createObjectURL(this.userImage[0]);
      },
      downloadImg() {
        html2canvas(document.querySelector("#capturedDiv")).then((canvas) => {
          //   var theDiv = document.getElementById("capturedDiv");
          var mycanva = document.body.appendChild(canvas);
          mycanva.id = "canvaId";

          var canvasNew = document.getElementById("canvaId");
          image = canvasNew
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
          var link = document.createElement("a");
          link.download = "endSarsDP.png";
          link.href = image;
          link.click();
        });
      },
    },
  });
});
