<style>
</style>

<template>
  <div id="app">
    <div class="media mt-4">
      <figure class="media-left">
        <p class="image is-128x128 mt-4 ml-6">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </p>
      </figure>
      <div class="media-right mt-3 is-size-3">
        <p>Name:</p>
        <p>Email:</p>
      </div>
    </div>
    <p class="title has-text-centered mt-4">Booking</p>
    <button
      class="button"
      :class="{ 'is-danger': Mon }"
      style="margin-left: 9%"
      @click="Mon = true"
    >
      Mon
    </button>
    <button class="button" style="margin-left: 9%">Tue</button>
    <button class="button" style="margin-left: 9%">Wed</button>
    <button class="button" style="margin-left: 9%">Thu</button>
    <button class="button" style="margin-left: 9%">Fri</button>
    <button class="button" style="margin-left: 9%">Sat</button>
    <button class="button" style="margin-left: 9%">Sun</button>
    <hr />
    <p class="title has-text-centered mt-6">Day</p>
    <button class="button mr-2" style="margin-left: 4%">09.00</button>
    <button class="button mr-2" style="margin-left: 4%">10.00</button>
    <button class="button mr-2" style="margin-left: 4%">11.00</button>
    <button class="button mr-2" style="margin-left: 4%">12.00</button>
    <button class="button mr-2" style="margin-left: 4%">13.00</button>
    <button class="button mr-2" style="margin-left: 4%">14.00</button>
    <button class="button mr-2" style="margin-left: 4%">15.00</button>
    <button class="button mr-2" style="margin-left: 4%">16.00</button>
    <button class="button mr-2" style="margin-left: 4%">17.00</button>
    <button class="button mr-2" style="margin-left: 4%">18.00</button>
    <hr />
    <p class="title has-text-centered mt-4">Night</p>
    <button class="button" style="margin-left: 8%">18.00</button>
    <button class="button" style="margin-left: 8%">19.00</button>
    <button class="button" style="margin-left: 8%">20.00</button>
    <button class="button" style="margin-left: 8%">21.00</button>
    <button class="button" style="margin-left: 8%">22.00</button>
    <button class="button" style="margin-left: 8%">23.00</button>
    <button class="button" style="margin-left: 8%">24.00</button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      Mon: false,
    };
  },
  methods: {
    axios,
  },
};
</script>