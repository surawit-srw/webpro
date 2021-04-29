<style>
li {
  font-size: 25px;
}

h2 {
  font-size: 30px;
  text-align: center;
}

p {
  font-size: 25px;
  text-align: center;
}

.bottomleft {
  background: rgb(0, 134, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 134, 255, 1) 0%,
    rgba(255, 255, 255, 1) 100%,
    rgba(0, 149, 252, 1) 100%
  );
  width: 550px;
  padding: 10px;
  margin: 0;
  border-radius: 25px;
  position: relative;
  left: 770px;
  top: -665px;
}

.bottomright {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 134, 255, 1) 100%,
    rgba(0, 149, 252, 1) 100%
  );
  width: 550px;
  padding: 10px;
  margin: 0;
  border-radius: 25px;
  position: relative;
  left: 190px;
  top: 70px;
}

.body {
  background-image: url("https://wallpaperaccess.com/full/2514318.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  top: 10;
  left: 0;
  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}
*/ .dd {
  padding-top: 60px;
  margin-left: -291px;
  font-size: 30px;
}

.top {
  background: rgb(0, 134, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 134, 255, 1) 0%,
    rgba(0, 181, 249, 0) 52%,
    rgba(0, 149, 252, 1) 100%
  );
  width: 1150px;
  padding: 10px;
  margin: 0;
  border-radius: 25px;
  position: relative;
  left: 180px;
  top: 70px;
}

#container {
  display: flex;
  flex-direction: column;
  float: left;
  justify-content: center;
  min-height: 100vh;
  padding: 1em;
  width: 100%;
}

h1 {
  animation: text-shadow 1.5s ease-in-out infinite;
  font-size: 5em;
  font-weight: 900;
  line-height: 1;
  text-align: center;
}

h1:hover {
  animation-play-state: paused;
}

a {
  color: #024794;
}

a:hover {
  text-decoration: none;
}

@keyframes text-shadow {
  0% {
    transform: translateY(0);
    text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
  }

  20% {
    transform: translateY(-1em);
    text-shadow: 0 0.125em 0 #0c2ffb, 0 0.25em 0 #2cfcfd, 0 -0.125em 0 #fb203b,
      0 -0.25em 0 #fefc4b;
  }

  40% {
    transform: translateY(0.5em);
    text-shadow: 0 -0.0625em 0 #0c2ffb, 0 -0.125em 0 #2cfcfd,
      0 0.0625em 0 #fb203b, 0 0.125em 0 #fefc4b;
  }

  60% {
    transform: translateY(-0.25em);
    text-shadow: 0 0.03125em 0 #0c2ffb, 0 0.0625em 0 #2cfcfd,
      0 -0.03125em 0 #fb203b, 0 -0.0625em 0 #fefc4b;
  }

  80% {
    transform: translateY(0);
    text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
</style>


<template>
  <div id="app">
    <div class="body">
      <div class="top">
        <div id="wrapper" v-for="promotion in promotions" :key="promotion.id">
          <h1>
            {{ promotion.promotion_rate }}% OFF "{{ promotion.promotion_name }}"
          </h1>
        </div>
      </div>
      <br />
      <section>
        <div class="bottomright">
          <img
            src="https://www.greenygrass.co.th/file_upload/t_1559791545149996187.jpg"
          />
          <h2>Stadium A</h2>
          <p>
            Our A stadium can try to get a capacity <br />
            of up to fourteen players.
          </p>
          <h2>Facilities</h2>
          <li>Toilet</li>
          <li>Convenience store</li>
          <li>Gear store</li>
          <li>Shower room</li>
        </div>
        <div class="bottomleft">
          <img
            src="https://www.greenygrass.co.th/file_upload/t_1559791545149996187.jpg"
          />
          <h2>Stadium B</h2>
          <p>
            Our B stadium can try to get a capacity <br />
            of up to twentytwo players.
          </p>
          <h2>Facilities</h2>
          <li>Toilet</li>
          <li>Convenience store</li>
          <li>Spa room</li>
          <li>Shower room</li>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      promotions: [],
      image1: true,
      image2: false,
      LoginModal: false,
      // UserName & ErrorUserName
      UserName: "",
      errorUserName: false,
      msgUserName: "",

      // Pass & ErrorPass
      Pass: "",
      errorPass: false,
      msgPass: "",

      //check Admin
      Admin: false,

      // Success Login
      success: false,
    };
  },
  mounted() {
    this.getBlogs();
  },
  methods: {
    getBlogs() {
      axios
        .get("http://localhost:3000")
        .then((response) => {
          console.log(response.data);
          this.promotions = response.data.promotions;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    Confirm() {
      // check UserName
      axios;
      if (this.UserName == "") {
        this.errorUserName = true;
        this.msgUserName = "กรุณากรอก Username";
      }

      // check Pass
      else if (this.Pass == "") {
        this.errorPass = true;
        this.msgPass = "กรุณากรอกรหัสผ่าน";
      } else if (this.Pass == "123") {
        this.Admin = true;
        this.LoginModal = false;
        this.$router.push("AdminHome");
      } else {
        this.success = true;
        this.LoginModal = false;
      }
    },
    changesPic() {
      this.image1 = !this.image1;
      this.image2 = !this.image2;
    },
  },
};
//     export default {
//       data() {
//         return{

//         };
//       },
//     //   methods: {

//     //   },
//       methods: {
//     addLike(id) {
//       console.log(id);
//       axios
//         .put("http://localhost:3000/blogs/addlike/" + id)
//         .then((response) => {
//           this.num = response.data.Like;
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     },
//   },
//     });
</script>