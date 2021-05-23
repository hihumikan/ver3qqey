<template>
  <div>
    <ul class="background">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <About></About>
    </ul>
  </div>
</template>


<script>
import about from "./about.vue";
export default {
  components: { about },
  data() {
    return {
      message: "qqey.net",
      show: true,
    };
  },
  methods: {},
};
</script>

<style>
@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }
  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background: #000000;
  overflow: hidden;
}
.background li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.5);
  animation: animate 24s linear infinite;
}

.background li:nth-child(0) {
  left: 57%;
  width: 159px;
  height: 159px;
  bottom: -159px;
  animation-delay: 1s;
}
.background li:nth-child(1) {
  left: 5%;
  width: 186px;
  height: 186px;
  bottom: -186px;
  animation-delay: 3s;
}
.background li:nth-child(2) {
  left: 60%;
  width: 137px;
  height: 137px;
  bottom: -137px;
  animation-delay: 7s;
}
.background li:nth-child(3) {
  left: 35%;
  width: 204px;
  height: 204px;
  bottom: -204px;
  animation-delay: 2s;
}
.background li:nth-child(4) {
  left: 74%;
  width: 102px;
  height: 102px;
  bottom: -102px;
  animation-delay: 6s;
}
.background li:nth-child(5) {
  left: 75%;
  width: 189px;
  height: 189px;
  bottom: -189px;
  animation-delay: 19s;
}
</style>