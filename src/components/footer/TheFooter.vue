<template>
  <div class="divfooter">

    <div class="containerfooter">
      <div class="containersocial">
        <a href="https://github.com/DouglasLessaT"><img class="imgsocialfooter" src="@/assets/github.svg"
            alt=""></a>
        <a href="https://www.linkedin.com/in/douglaslessat/"><img class="imgsocialfooter" src="@/assets/linkedin.svg"
            alt=""></a>
        <a href="https://www.instagram.com/igdouglaslessa/"><img class="imgsocialfooter" src="@/assets/Instagram.svg" alt=""></a>
      </div>
      <div class="containerlogo">
        <img class="imgfooter" src="@/assets/iconCurriculo.psd.svg" alt="">
      </div>
    </div>

  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.divfooter {
  background: #272727;
  padding: 10px;
  display: flex;
  justify-content: center;
}

.containerfooter {
  margin: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: space-between;
  padding-right: 2%; /* Defina o preenchimento para se ajustar automaticamente ao tamanho da tela */
  width: 100%; 
  border-top: 2px solid #fff;
  padding-top: 5px;
}

.imgsocialfooter {
  margin: 2px;
  height: 40px;
  filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.5));
}

.imgfooter {
  height: 50px;
}
</style>