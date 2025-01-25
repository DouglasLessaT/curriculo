<template>
  <div>
      <SectionOne></SectionOne>
  </div>
</template>

<script>
import SectionOne from "@/components/homeView/section1/SectionOne.vue";


export default {
  name: "HomeView",
  components: {
    SectionOne
  }
};
</script>

<style scoped>
.terminal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
  color: #0f0;
  font-family: "Courier New", Courier, monospace;
  overflow: hidden;
}

.terminal {
  max-width: 90%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px #0f0;
  background-color: #000;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 1.1rem;
  line-height: 1.5;
}
</style>