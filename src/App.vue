<template>
  <Terminal v-if="isLoading" @loadingComplete="isLoading = false" />
  <div v-else class="main-content">
    <div>
      <HeaderNav></HeaderNav>
    </div>
    <div class="sections">
      <router-view />
    </div>
    <div>
      <TheFooter></TheFooter>
    </div>
  </div>
</template>


<script>
import Terminal from "@/components/homeView/terminal/Terminal.vue";
import HeaderNav from './components/header/HeaderNav.vue';
import TheFooter from './components/footer/TheFooter';
export default {
  name: 'App',
  components: {
    Terminal,
    HeaderNav,
    TheFooter

  },
  data() {
    return {
      isLoading: true,
    };
  },
}
</script>

<style>

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

.sections {
  margin-top: 70px;
}
</style>