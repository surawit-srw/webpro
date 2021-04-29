<template>
  <div id="app">
    <div class="modal" v-bind:class="{ 'is-active': show_modal }">
      <div class="modal-background" @click="show_modal = !show_modal"></div>
      <div class="modal-card" style="max-width: 960px; width: 90%">
        <header class="modal-card-head">
          <p class="modal-card-title">รายการจองสินค้า</p>
          <button
            @click="show_modal = !show_modal"
            class="delete"
            aria-label="close"
          ></button>
        </header>
        <section class="modal-card-body">
          <p class="has-background-info-light p-2">
            การจองสินค้าของท่านเสร็จสิ้นท่านสามารถนำเลขคำสั่งจองมายื่นให้กับพนักงานเมื่อท่านมาถึงสนาม
          </p>
          <div class="my-4">
            <b>เลขคำสั่งจอง </b> {{ order_number }}
            <li>
              ราคาที่ต้องชำระ <b>{{ totalPrice }} ฿</b>
            </li>
          </div>
        </section>
      </div>
    </div>

    <div class="columns" style="margin-left: 8%">
      <!-- Column แสดงสินค้า--------------------------------------------------------->
      <div class="column is-8 pt-6">
        <h1 class="is-size-4 mb-4">สินค้าทั้งหมด ({{ products.length }})</h1>
        <div class="container is-max-desktop">
          <div class="is-multiline columns is-variable is-2">
            <!-- Card element start here------------------------------------------>
            <div
              id="card_product"
              class="column is-one-quarter"
              v-for="product in products"
              :key="product.id"
            >
              <div class="card">
                <div class="card-image">
                  <figure class="image is-1by1">
                    <img
                      :src="imagePath(product.url)"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">{{ product.name }}</p>
                      <p class="subtitle is-6">{{ product.type }}</p>
                      <p class="subtitle is-6 has-text-danger">
                        {{ product.price }} ฿
                      </p>
                    </div>
                  </div>

                  <div style="display: flex; justify-content: space-between">
                    <button
                      v-if="product.quantity > 0"
                      class="button is-warning is-focused is-rounded"
                      @click="addToCart(product)"
                    >
                      Add
                    </button>
                    <button
                      v-else
                      disabled
                      class="button is-danger is-focused is-rounded"
                      @click="addToCart(product)"
                    >
                      Sold Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Column แสดงตะกร้า--------------------------------------------------->
      <div class="column is-3 pt-6 pl-0 pr-5">
        <div style="display: flex; justify-content: space-between">
          <span class="is-size-4 mb-4">Cart ({{ cart.length }})</span>
          <a @click="cart = []" class="is-danger mb-4 button">Clear</a>
        </div>

        <!-- Card element start here ------------------------------------------>
        <div v-for="product in cart" class="card mb-4" :key="product.id">
          <div class="card-content p-0">
            <div class="media">
              <div class="media-left">
                <figure class="image is-96x96">
                  <img :src="imagePath(product.url)" alt="Placeholder image" />
                </figure>
              </div>
              <div class="media-content pt-2">
                <p class="is-5">{{ product.type }}</p>
                <p class="has-text-grey-light is-6">{{ product.name }}</p>
                <div style="display: flex; justify-content: space-between">
                  <div>
                    <!-- ราคาสินค้า------------------------------------------------ -->
                    <span class="is-6 has-text-danger">{{
                      product.price
                    }}</span>
                    <!-- จำนวนสินค้า----------------------------------------------- -->
                    <span>x{{ product.quantity }}</span>
                  </div>
                  <div>
                    <!-- icon รูปถังขยะ------------------------------------------- -->
                    <span
                      @click="removeFromCart(product)"
                      class="icon mr-2"
                      key="false"
                    >
                      <i class="far fa-trash-alt"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            font-size: 1.25rem;
          "
        >
          <span class="has-text-weight-bold">Total</span>
          <span id="totalPrice">{{ totalPrice }}</span>
        </div>

        <!-- ปุ่ม Checkout ------------------------------------------------------------ -->
        <a
          @click="goCheckout"
          class="button is-warning mt-3"
          style="width: 100%"
          >Order</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      shopName: "IT-Stadiam Store",
      order_number: 0,
      products: [],
      cart: [],
      show_modal: false,
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
          this.products = response.data.store;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    imagePath(file_path) {
      if (file_path) {
        return "http://localhost:3000/" + file_path;
      } else {
        return "https://bulma.io/images/placeholders/640x360.png";
      }
    },
    addToCart(product) {
      axios;
      let found = false;
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id == product.id) {
          found = true;
          this.cart[i].quantity++;
        }
      }
      if (!found) {
        product.quantity = 1;
        this.cart.push(product);
      }
    },
    removeFromCart(product) {
      axios;
      this.cart = this.cart.filter((p) => p.id != product.id);
    },
    goCheckout() {
      axios;
      if (this.cart != 0) {
        this.order_number = Math.floor(Math.random() * 99999);
        this.show_modal = !this.show_modal;
      } else if (this.cart == 0) {
        alert("กรุณาเลือกสินค้าก่อนทำการจอง");
      }
    },
  },
  computed: {
    totalPrice() {
      axios;
      let list_price_in_cart = [];
      this.cart.forEach((p) => list_price_in_cart.push(p.price * p.quantity));
      return list_price_in_cart.reduce((sum, price) => sum + price, 0);
    },
  },
};
</script>