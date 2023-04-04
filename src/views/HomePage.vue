<template>
  <ion-page>
    <ion-content>
      <ion-button @click="() => router.push('/NadaOne')">Nada One</ion-button>
      <ion-button @click="() => router.push('/NadaTwo')">Nada Two</ion-button>
      <ion-button @click="() => router.push('/NadaThree')">Nada Three</ion-button>
    </ion-content>
  </ion-page>
</template>

<script >
  import { IonButton, IonContent, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'HomePage',
    components: {
      IonButton,
      IonContent,
      IonPage,
    },
    setup() {
      const router = useRouter();
      return { router };
    },
  });
</script>