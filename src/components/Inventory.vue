<template>
  <div class="row">
    <div
      class="col-lg-4 col-md-6 mb-4"
      v-for="(item, index) in items"
      :key="index"
    >
      <div class="card h-100">
        <a href="#"
          ><img
            class="card-img-top"
            :src="item.image"
            alt=""
            style="height:250px"
        /></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">{{ item.title }}</a>
          </h4>
          <h5>{{ item.price }}</h5>
          <p class="card-text">{{ item.description }}</p>
        </div>
        <div class="card-footer">
          <button class="btn btn-md btn-success">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
  <!-- /.row -->
</template>

<script>
export default {
  props: {
    items: {
      required: true,
    },
  },

  mounted() {
    // console.log(items);
  },
};
</script>

<style lang="stylus" scoped></style>
