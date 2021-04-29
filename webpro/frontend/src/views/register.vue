<style>
.bg {
  background-image: url("https://wallpaperaccess.com/full/2514318.jpg");
  position: relative;
  top: 10;
  left: 0;
  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}
.regis {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 20%,
    rgba(0, 160, 249, 1) 100%
  );
  width: 55%;
  border-radius: 25px;
  position: relative;
  left: 23%;
  padding-bottom: 2em;
  padding-left: 7em;
  padding-right: 7em;
}
</style>
<template>
  <div id="app">
    <div class="bg">
      <div class="regis">
        <div class="title has-text-centered pt-3">Register</div>
        <div class="field mt-1">
          <!-- signup form -->
          <div class="field mt-2 ml-2 mr-2">
            <label class="label">Gender</label>
            <select class="select" v-model="gender">
              <option disabled value="">Please select one</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div class="field mt-2 ml-2 mr-2">
            <label class="label">First Name</label>
            <div class="control has-icons-left has-icons-right">
              <input
                v-model="$v.firstname.$model"
                :class="{ 'is-danger': $v.firstname.$error }"
                class="input"
                type="text"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-chess-king"></i>
              </span>
            </div>

            <template v-if="$v.firstname.$error">
              <p class="help is-danger" v-if="!$v.firstname.required">
                This field is required
              </p>
              <p class="help is-danger" v-if="!$v.firstname.maxLength">
                firstname must be less than or equal 150 char
              </p>
            </template>
          </div>

          <div class="fiel mt-2 ml-2 mr-2">
            <label class="label">Last Name</label>
            <div class="control has-icons-left has-icons-right">
              <input
                v-model="$v.lastname.$model"
                :class="{ 'is-danger': $v.lastname.$error }"
                class="input"
                type="text"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-chess-queen"></i>
              </span>
            </div>
            <template v-if="$v.lastname.$error">
              <p class="help is-danger" v-if="!$v.lastname.required">
                This field is required
              </p>
              <p class="help is-danger" v-if="!$v.lastname.maxLength">
                lastname must be less than or equal 150 char
              </p>
            </template>
          </div>

          <div class="field mt-2 ml-2 mr-2">
            <label class="label">Mobile Number</label>
            <div class="control has-icons-left has-icons-right">
              <input
                v-model="$v.mobile.$model"
                :class="{ 'is-danger': $v.mobile.$error }"
                class="input"
                type="text"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-mobile"></i>
              </span>
            </div>
            <template v-if="$v.mobile.$error">
              <p class="help is-danger" v-if="!$v.mobile.required">
                This field is required
              </p>
              <p class="help is-danger" v-if="!$v.mobile.mobile">
                Invalid Mobile Number
              </p>
            </template>
          </div>

          <div class="field mt-2 ml-2 mr-2">
            <label class="label">username</label>
            <div class="control has-icons-left">
              <input
                v-model="$v.username.$model"
                :class="{ 'is-danger': $v.username.$error }"
                class="input"
                type="text"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
            <template v-if="$v.username.$error">
              <p class="help is-danger" v-if="!$v.username.required">
                This field is required
              </p>
              <p class="help is-danger" v-if="!$v.username.minLength">
                username must be more than or equal 5 char
              </p>
              <p class="help is-danger" v-if="!$v.username.maxLength">
                username must be less than or equal 20 char
              </p>
            </template>
          </div>

          <div class="field mt-2 ml-2 mr-2">
            <label class="label">Password</label>
            <div class="control has-icons-left has-icons-right">
              <input
                v-model="$v.password.$model"
                :class="{ 'is-danger': $v.password.$error }"
                class="input"
                type="text"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>
            <template v-if="$v.password.$error">
              <p class="help is-danger" v-if="!$v.password.required">
                This field is required
              </p>
              <p class="help is-danger" v-if="!$v.password.minLength">
                password must be more than or equal 8 char
              </p>
              <p class="help is-danger" v-if="!$v.password.complex">
                password must be complex
              </p>
            </template>
          </div>

          <div class="field mt-2 ml-2 mr-2">
            <label class="label">Confirm Password</label>
            <div class="control has-icons-left has-icons-right">
              <input
                v-model="$v.ConPass.$model"
                :class="{ 'is-danger': $v.ConPass.$error }"
                class="input"
                type="text"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>
            <template v-if="$v.ConPass.$error">
              <p class="help is-danger" v-if="!$v.ConPass.sameAs">
                password are not equal
              </p>
            </template>
          </div>

          <div class="field mt-2 ml-2 mr-2">
            <label class="label">email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                v-model="$v.email.$model"
                :class="{ 'is-danger': $v.email.$error }"
                class="input"
                type="text"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
            <template v-if="$v.email.$error">
              <p class="help is-danger" v-if="!$v.email.required">
                This field is required
              </p>
              <p class="help is-danger" v-if="!$v.email.email">Invalid Email</p>
            </template>
          </div>
          <div class="selectImage">
            <label class="label mt-2 ml-2 mr-2">เลือกรูปภาพ: </label>
            <input
              class="ml-2"
              multiple
              type="file"
              accept="image/png, image/jpeg, image/webp"
              @change="selectImages"
            />
            <div v-if="images" class="columns is-multiline">
              <div
                v-for="(image, index) in images"
                :key="image.id"
                class="column is-one-quarter"
              >
                <div class="card ml-2 mt-2">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img
                        :src="showSelectImage(image)"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <footer class="card-footer">
                    <a
                      @click="deleteSelectImage(index)"
                      class="card-footer-item has-text-danger"
                      >Delete</a
                    >
                  </footer>
                </div>
              </div>
            </div>
            <div class="has-text-centered">
              <button
                class="button mt-5 ml-2 mr-2 is-danger"
                @click="clearBlog()"
              >
                Clear</button
              ><button
                class="button mt-5 ml-2 mr-2 is-success"
                @click="submitBlog()"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import {
  required,
  email,
  minLength,
  sameAs,
  maxLength,
} from "vuelidate/lib/validators";

function mobile(value) {
  return !!value.match(/0[0-9]{9}/);
}

function complexPassword(value) {
  if (!(value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/))) {
    return false;
  }
  return true;
}

export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      mobile: "",
      username: "",
      password: "",
      ConPass: "",
      email: "",
      images: [],
    };
  },
  validations: {
    email: {
      required: required,
      email: email,
    },
    username: {
      required: required,
      minLength: minLength(5),
      maxLength: maxLength(20),
    },
    firstname: { required: required, maxLength: maxLength(150) },
    lastname: { required: required, maxLength: maxLength(150) },
    mobile: {
      required: required,
      mobile: mobile,
    },
    password: {
      required: required,
      minLength: minLength(8),
      complex: complexPassword,
    },
    ConPass: {
      sameAs: sameAs("password"),
    },
  },
  methods: {
    selectImages(event) {
      this.images = event.target.files;
    },
    showSelectImage(image) {
      // for preview only
      return URL.createObjectURL(image);
    },
    deleteSelectImage(index) {
      console.log({ delete: this.images });
      this.images = Array.from(this.images);
      this.images.splice(index, 1);
    },
    clearBlog() {
      this.firstname = "";
      this.lastname = "";
      this.mobile = "";
      this.username = "";
      this.email = "";
      this.password = "";
      this.ConPass = "";
      this.images = [];
    },
    submitBlog() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let formData = new FormData();
        formData.append("firstname", this.firstname);
        formData.append("lastname", this.lastname);
        formData.append("mobile", this.mobile);
        formData.append("username", this.username);
        formData.append("password", this.password);
        formData.append("ConPass", this.ConPass);
        formData.append("email", this.email);
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
          .post("http://localhost:3000/register", formData)
          .then(() => {
            alert("Success register");
            this.firstname = "";
            this.lastname = "";
            this.mobile = "";
            this.username = "";
            this.email = "";
            this.password = "";
            this.ConPass = "";
            this.images = [];
            this.$router.push({ path: "/" });
          })
          .catch((e) => console.log(e));
      }
    },
  },
};
</script>