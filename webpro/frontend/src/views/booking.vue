<style>
table {
  text-align: center;
}

td {
  font-size: 20px;
  padding-left: 175px;
}

th {
  font-size: 25px;
  padding-left: 175px;
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
      <div>
        <p class="title has-text-centered mt-4">Booking</p>
        <div class="day">
          <button
            class="button"
            :class="{ 'is-warning': Mon }"
            style="margin-left: 4.8%"
            @click="day('mon')"
          >
            Mon
          </button>
          <button
            class="button"
            :class="{ 'is-danger': Tue, 'is-light': Tue }"
            style="margin-left: 9%"
            @click="day('tue')"
          >
            Tue
          </button>
          <button
            class="button"
            :class="{ 'is-success': Wed }"
            style="margin-left: 9%"
            @click="day('wed')"
          >
            Wed
          </button>
          <button
            class="button"
            :class="{ 'is-danger': Thu }"
            style="margin-left: 9%"
            @click="day('thu')"
          >
            Thu
          </button>
          <button
            class="button"
            :class="{ 'is-info': Fri }"
            style="margin-left: 9%"
            @click="day('fri')"
          >
            Fri
          </button>
          <button
            class="button"
            :class="{ 'is-link': Sat }"
            style="margin-left: 9%"
            @click="day('sat')"
          >
            Sat
          </button>
          <button
            class="button"
            :class="{ 'is-danger': Sun }"
            style="margin-left: 9%"
            @click="day('sun')"
          >
            Sun
          </button>
        </div>
        <br />
        <!-- Monday -->
        <div class="status" v-if="Mon">
          <p class="title has-text-centered mt-4">Monday</p>
          <table style="width: 85%" class="">
            <tr>
              <th>Time</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>9.00</td>
              <td>600 THB</td>
              <td>
                <button
                  class="button"
                  disabled
                  style="margin-left: 9% width: 100px"
                >
                  Empty
                </button>
              </td>
            </tr>
            <br />
            <tr>
              <td>10.00</td>
              <td>600 THB</td>
              <td>
                <button
                  class="button is-danger"
                  disabled
                  style="margin-left: 9% width: 100px"
                >
                  Full
                </button>
              </td>
            </tr>
          </table>
        </div>
        <!-- tuesday -->
        <div class="status" v-else-if="Tue">
          <p class="title has-text-centered mt-4">Tuesday</p>
          <table style="width: 85%" class="">
            <tr>
              <th>Time</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>9.00</td>
              <td>600 THB</td>
              <td>
                <button
                  class="button"
                  disabled
                  style="margin-left: 9% width: 100px"
                >
                  Empty
                </button>
              </td>
            </tr>
            <br />
            <tr>
              <td>10.00</td>
              <td>600 THB</td>
              <td>
                <button
                  class="button is-danger"
                  disabled
                  style="margin-left: 9% width: 100px"
                >
                  Full
                </button>
              </td>
            </tr>
          </table>
        </div>
        <!-- wednesday -->
        <div class="status" v-else-if="Wed">
          <p class="title has-text-centered mt-4">Wednesday</p>
          <table style="width: 85%" class="">
            <tr>
              <th>Time</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>9.00</td>
              <td>600 THB</td>
              <td>
                <button class="button" style="margin-left: 9% width: 100px">
                  Empty
                </button>
              </td>
            </tr>
            <br />
            <tr>
              <td>10.00</td>
              <td>600 THB</td>
              <td>
                <button
                  class="button is-danger"
                  style="margin-left: 9% width: 100px"
                >
                  Full
                </button>
              </td>
            </tr>
          </table>
        </div>
        <!-- Thursday -->
        <div class="status" v-else-if="Thu">
          <p class="title has-text-centered mt-4">Thursday</p>
          <table style="width: 85%" class="">
            <tr>
              <th>Time</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>9.00</td>
              <td>600 THB</td>
              <td>
                <button class="button" style="margin-left: 9% width: 100px">
                  Empty
                </button>
              </td>
            </tr>
            <br />
            <tr>
              <td>10.00</td>
              <td>600 THB</td>
              <td>
                <button
                  class="button is-danger"
                  style="margin-left: 9% width: 100px"
                >
                  Full
                </button>
              </td>
            </tr>
          </table>
        </div>
        <!-- Friday -->
        <div class="status" v-else-if="Fri">
          <p class="title has-text-centered mt-4">Friday</p>
          <table style="width: 85%" class="">
            <tr>
              <th>Time</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>9.00</td>
              <td>600 THB</td>
              <td>
                <button class="button" style="margin-left: 9% width: 100px">
                  Empty
                </button>
              </td>
            </tr>
            <br />
            <tr>
              <td>10.00</td>
              <td>600 THB</td>
              <td>
                <button
                  class="button is-danger"
                  style="margin-left: 9% width: 100px"
                >
                  Full
                </button>
              </td>
            </tr>
          </table>
        </div>
        <!-- Saturday -->
        <div class="status" v-else-if="Sat">
          <p class="title has-text-centered mt-4">Saturday</p>
          <table style="width: 85%" class="">
            <tr>
              <th>Time</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>9.00</td>
              <td>600 THB</td>
              <td>
                <button class="button" style="margin-left: 9% width: 100px">
                  Empty
                </button>
              </td>
            </tr>
            <br />
            <tr>
              <td>10.00</td>
              <td>600 THB</td>
              <td>
                <button
                  class="button is-danger"
                  style="margin-left: 9% width: 100px"
                >
                  Full
                </button>
              </td>
            </tr>
          </table>
        </div>
        <!-- Sunday -->
        <div class="status" v-else-if="Sun">
          <p class="title has-text-centered mt-4">Sunday</p>
          <table style="width: 85%" class="">
            <tr>
              <th>Time</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>9.00</td>
              <td>600 THB</td>
              <td>
                <button class="button" style="margin-left: 9% width: 100px">
                  Empty
                </button>
              </td>
            </tr>
            <br />
            <tr>
              <td>10.00</td>
              <td>600 THB</td>
              <td>
                <button
                  class="button is-danger"
                  style="margin-left: 9% width: 100px"
                >
                  Full
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
      Mon: true,
      Tue: false,
      Wed: false,
      Thu: false,
      Fri: false,
      Sat: false,
      Sun: false,
    };
  },
  methods: {
    day(Day) {
      console.log(Day);
      if (Day == "mon") {
        this.Mon = true;
        this.Tue = false;
        this.Wed = false;
        this.Thu = false;
        this.Fri = false;
        this.Sat = false;
        this.Sun = false;
      } else if (Day == "tue") {
        this.Mon = false;
        this.Tue = true;
        this.Wed = false;
        this.Thu = false;
        this.Fri = false;
        this.Sat = false;
        this.Sun = false;
      } else if (Day == "wed") {
        this.Mon = false;
        this.Tue = false;
        this.Wed = true;
        this.Thu = false;
        this.Fri = false;
        this.Sat = false;
        this.Sun = false;
      } else if (Day == "thu") {
        this.Mon = false;
        this.Tue = false;
        this.Wed = false;
        this.Thu = true;
        this.Fri = false;
        this.Sat = false;
        this.Sun = false;
      } else if (Day == "fri") {
        this.Mon = false;
        this.Tue = false;
        this.Wed = false;
        this.Thu = false;
        this.Fri = true;
        this.Sat = false;
        this.Sun = false;
      } else if (Day == "sat") {
        this.Mon = false;
        this.Tue = false;
        this.Wed = false;
        this.Thu = false;
        this.Fri = false;
        this.Sat = true;
        this.Sun = false;
      } else if (Day == "sun") {
        this.Mon = false;
        this.Tue = false;
        this.Wed = false;
        this.Thu = false;
        this.Fri = false;
        this.Sat = false;
        this.Sun = true;
      } else {
        this.Mon = false;
        this.Tue = false;
        this.Wed = false;
        this.Thu = false;
        this.Fri = false;
        this.Sat = false;
        this.Sun = false;
      }
    },
    axios,
  },
};
</script>


// <p class="title has-text-centered mt-6">Day</p>
//       <button class="button mr-2" style="margin-left: 4%">09.00</button>
//       <button class="button mr-2" style="margin-left: 4%">10.00</button>
//       <button class="button mr-2" style="margin-left: 4%">11.00</button>
//       <button class="button mr-2" style="margin-left: 4%">12.00</button>
//       <button class="button mr-2" style="margin-left: 4%">13.00</button>
//       <button class="button mr-2" style="margin-left: 4%">14.00</button>
//       <button class="button mr-2" style="margin-left: 4%">15.00</button>
//       <button class="button mr-2" style="margin-left: 4%">16.00</button>
//       <button class="button mr-2" style="margin-left: 4%">17.00</button>
//       <button class="button mr-2" style="margin-left: 4%">18.00</button>

//       <p class="title has-text-centered mt-4">Night</p>
//       <button class="button" style="margin-left: 8%">18.00</button>
//       <button class="button" style="margin-left: 8%">19.00</button>
//       <button class="button" style="margin-left: 8%">20.00</button>
//       <button class="button" style="margin-left: 8%">21.00</button>
//       <button class="button" style="margin-left: 8%">22.00</button>
//       <button class="button" style="margin-left: 8%">23.00</button>
//       <button class="button" style="margin-left: 8%">24.00</button>