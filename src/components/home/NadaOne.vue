<template>
  <ion-page>
    <div class="col-md-12" v-for="(product, index) in products" :key="index">
        <div v-for="(image, imageIndex) in product.image" :key="imageIndex">
            <img :src="image" class="img-fluid"  />
            <!-- {{ product.Id }} -->
        </div>
</div> 
  </ion-page>
</template>
<script>
import { IonPage } from "@ionic/vue";
export default {
  components: {
    IonPage,
  },
  data() {
    return {
      products: [
        {
          image: [require("@/Quran-Image/1.png") ],
          Id: 1
        },
        {
          image: [require("@/Quran-Image/2.png") ],
          Id: 2
        },
        {
          image: [require("@/Quran-Image/3.png") ], 
          Id: 3
        },
        {
          image: [require("@/Quran-Image/4.png") ], 
          Id: 3
        },
        {
          image: [require("@/Quran-Image/5.png") ], 
          Id: 3
        },
        {
          image: [require("@/Quran-Image/6.png") ], 
          Id: 3
        },
        {
          image: [require("@/Quran-Image/7.png") ], 
          Id: 3
        },

      ],
    }
  },
  methods: {

  }
}
</script>
<style></style>