<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide my-4"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <img
          class="d-block img-fluid"
          src="https://images.financialexpress.com/2018/12/e-commerce-representational.jpg"
          alt="First slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block img-fluid"
          src="https://shopnobari.com/wp-content/uploads/2020/06/offer-deal-at-shopnobari-online-shopping.jpg"
          alt="Second slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block img-fluid"
          src="https://invoice.ng/blog/wp-content/uploads/2019/07/best-selling-online-products-in-nigeria.jpg"
          alt="Third slide"
        />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
     .carousel-item img{
        width: 100%;
        height: 350px;
     } 
</style>
