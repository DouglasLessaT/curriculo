<template>
  <div class="section1about">
    <h1 class="titulosection">My Biography</h1>
    <div class="containersection1about">

      <div class="divfotosection1about">
        <img src="../../../assets/noComputador.jpg" id="fotosection1about" alt="">
      </div>
      <div class="divtextosection1about">
        <p class="textBiography">
          Where shall I begin? I am the youngest son of Silvana and Pedro, born in Vila Velha, 
          Espírito Santo. My family’s origins were modest, rooted in the neighborhood of Aráças,
           though my parents relocated to my grandparents’ home prior to my birth. I have always 
           been an introverted individual, yet deeply curious about understanding how things function
            and the reasons behind their workings. This curiosity often led to complications for my 
            grandfather, as I frequently disassembled his pocket watches. I was primarily raised by 
            my grandparents, spending the majority of my time at home. When my brother and father brought 
            a computer into our household, I became captivated by its mechanics. I devoted countless days 
            and nights to learning how to operate and dismantle it. I read numerous books on hardware and
            software that belonged to my brother. My uncle played a significant role in encouraging me to 
            take up the sport that has since become my hobby: surfing. He would collect me from home every 
            Saturday and Sunday to visit Ulê Beach.
        </p>
        <p class="textBiography">
          I began working and studying to support my parents from the age of 13, as I was uncomfortable with
           them spending money on me. I held various positions, such as distributing flyers, working as a waiter,
            serving as a bricklayer’s assistant, and assisting a mechanic, until I completed high school. Subsequently,
             my father requested that I join him in his carpentry workshop, as he was weary of seeing me labor 
             for others and because I was uncertain of my path following high school. After some time had passed, 
             I rediscovered the hardware and software books I had read in my youth. This rekindled my passion for 
             computers, and I immersed myself in understanding their components and operating systems, particularly 
             since my resources were limited to books on Windows Vista. This ultimately guided my decision to pursue 
             a degree in Systems Analysis and Development Technology.
        </p>
      </div>
    </div>
  </div>

</template>

<script>
</script>

<style>
.section1about {
  background: #000000;
  background-image: linear-gradient(to right, #000000, #00000057);
}

.containersection1about {
  display: flex;
  padding: 10px;

}

.divfotosection1about {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulosection {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

#fotosection1about {
  margin-top: 5px;
  height: 400px;
  filter: opacity(12px);
}

.textBiography {
  color: #fff;
  padding: 5px;
  text-align: justify;
}

@media screen and (max-width: 768px) {
  .containersection1about {
    display: flex;
    flex-direction: column;
  }

  .section1about {
    margin-top: 60px;
    display: flex;
    padding: 15px;
    flex-direction: column;
  }

  #fotosection1about {
    margin-top: 5px;
    max-width: 100%;
    height: auto;
    filter: opacity(12px);
  }


}
</style>