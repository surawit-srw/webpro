<template>
  <div id="app">
    <nav
      class="navbar has-background-warning"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item">
          <img
            src="https://www.engdict.com/data/dict/media/images_public/footb-00025070637255850841214084_normal.png"
            width="32"
            height="28"
          />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start" v-if="!success">
          <a class="navbar-item" href="http://localhost:8080/"> Home </a>

          <a class="navbar-item" href="http://localhost:8080/store">
            IT-Stadium Store
          </a>
          <a class="navbar-item" href="http://localhost:8080/userprofile">
            Profile
          </a>
          <a class="navbar-item" href="http://localhost:8080/booking">
            Stadium Booking
          </a>
          <a class="navbar-item"> Stadium Information </a>
        </div>
        <div class="navbar-start" v-else>
          <a class="navbar-item" href="http://localhost:8080/AdminHome">
            Home
          </a>

          <a class="navbar-item" href="http://localhost:8080/store">
            IT-Stadium Store
          </a>
          <a class="navbar-item" href="http://localhost:8080/userprofile">
            Profile
          </a>
          <a class="navbar-item" href="http://localhost:8080/booking">
            Stadium Booking
          </a>
          <a class="navbar-item"> Stadium Information </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons" v-if="!success">
              <a class="button is-primary" href="http://localhost:8080/regis">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light" @click="LoginModal = true"> Log in </a>
            </div>
            <div v-else>
              <strong>Admin</strong>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="modal" :class="{ 'is-active': LoginModal }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Log in</p>
          <button
            class="delete"
            aria-label="close"
            @click="LoginModal = false"
          ></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
          <label class="label mt-2">Username: </label>
          <input
            class="input"
            v-model="$v.UserName.$model"
            :class="{ 'is-danger': $v.UserName.$error }"
            type="text"
          />
          <template v-if="$v.UserName.$error">
            <p class="help is-danger" v-if="!$v.UserName.required">
              This field is required
            </p>
          </template>

          <label class="label mt-2">Password: </label>
          <input
            class="input"
            v-model="$v.Pass.$model"
            :class="{ 'is-danger': $v.Pass.$error }"
            type="Pass"
          />
          <template v-if="$v.Pass.$error">
            <p class="help is-danger" v-if="!$v.Pass.required">
              This field is required
            </p>
          </template>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="Confirm()">Confirm</button>
          <button class="button" @click="LoginModal = false">Cancel</button>
        </footer>
      </div>
    </div>
    <router-view :key="$route.fullPath" />
  </div>
</template>
<script>
import axios from "axios";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
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
  validations: {
    UserName: {
      required: required,
    },
    Pass: {
      required: required,
    },
  },
  methods: {
    Confirm() {
      if (this.Pass == "123") {
        this.Admin = true;
        this.LoginModal = false;
        this.success = true;
        this.$router.push("Adminstore");
      } else {
        this.success = true;
        this.LoginModal = false;
      }
    },
  },
};
</script>