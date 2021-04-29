<style>
table {
  text-align: center;
}

td {
  font-size: 20px;
  padding-left: 175px;
}

th {
  padding-left: 175px;
  font-size: 25px;
}
.day {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 20%,
    rgba(0, 160, 249, 1) 100%
  );
  width: 1200px;
  padding: 10px;
  margin: 0;
  border-radius: 25px;
  position: relative;
  left: 160px;
}

.body {
  background-image: url("https://wallpaperaccess.com/full/2514318.jpg");
  position: fixed;
  top: 10;
  left: 0;
  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}

.dd {
  padding-top: 60px;
  margin-left: -291px;
  font-size: 30px;
}

.status {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 20%,
    rgba(0, 160, 249, 1) 100%
  );
  width: 1150px;
  padding: 10px;
  margin: 0;
  border-radius: 25px;
  position: relative;
  left: 180px;
}
</style>
<template>
  <div class="body">
    <div id="app">
      <br />
      <div class="media mt-4" style="margin-left: 36%">
        <figure class="media-left">
          <p class="image is-64x64">
            <img
              src="data:image/png;base64,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"
              class="is-rounded"
              alt="error"
            />
          </p>
        </figure>
        <div class="media-right mt-3">
          <p class="title">USER PROFILE</p>
        </div>
      </div>
      <br />
      <div class="day">
        <div class="media mt-4">
          <figure class="media-left">
            <figure class="image is-128x128 ml-6">
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b1a3205c-6705-42ea-997d-222b5e87c6bc/ddy9xbc-6084e288-4e7b-4c09-975d-7f5230bc58d2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYjFhMzIwNWMtNjcwNS00MmVhLTk5N2QtMjIyYjVlODdjNmJjXC9kZHk5eGJjLTYwODRlMjg4LTRlN2ItNGMwOS05NzVkLTdmNTIzMGJjNThkMi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.4Yso0Wv2z0nKPty66TnC3faL_yPhDipAmONrtIRzMgw"
              />
            </figure>
          </figure>
          <div class="media-right mt-3 is-size-3">
            <p>Username: Johny_Bravo</p>
            <p>Email: BukJohn@gmail.com</p>
          </div>
        </div>
        <p class="title has-text-centered">Booking Queue</p>
        <div class="media mt-4">
          <table style="width: 85%" class="">
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
            <br />
            <tr>
              <td>Mon</td>
              <td>9.00</td>
              <td>
                <button
                  class="button is-danger"
                  style="margin-left: 9% width: 100px"
                >
                  Unconfirm
                </button>
              </td>
            </tr>
            <br />
            <tr>
              <td>Tue</td>
              <td>11.00</td>
              <td>
                <button class="button" style="margin-left: 9% width: 100px ">
                  Confirm
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      modalImage: false,
      images: [],
    };
  },
  methods: {
    axios,
    selectImages(event) {
      this.images = event.target.files;
    },
    showSelectImage(image) {
      return URL.createObjectURL(image);
    },
    deleteSelectImage(index) {
      console.log(this.images);
      this.images = Array.from(this.images);
      this.images.splice(index, 1);
    },
    submitBlog() {
      let formData = new FormData();
      this.images.forEach((image) => {
        formData.append("myImage", image);
      });

      // Note ***************
      // ตอนเรายิง Postmant จะใช้ fromData
      // ตอนยิงหลาย ๆ รูปพร้อมกันใน Postman จะเป็นแบบนี้

      // title   | "This is a title of blog"
      // comment | "comment in blog"
      // ...
      // myImage | [select file 1]
      // myImage | [select file 2]
      // myImage | [select file 3]

      // จะสังเกตุว่าใช้ myImage เป็น key เดียวกัน เลยต้องเอามา loop forEach
      // พอไปฝั่ง backend มันจะจัด file ให้เป็น Array เพื่อเอาไปใช้งานต่อได้

      axios
        .post("http://localhost:3000/profile/picture", formData)
        .then((res) => this.$router.push({ name: "home" }))
        .catch((e) => console.log(e.response.data));
    },
  },
};
</script>