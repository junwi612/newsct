<template>
  <div class="container">
    <div class="logo">
      <div class="letter letterN">N</div>
      <div class="letter letterE">E</div>
      <div class="letter letterW">W</div>
      <div class="letter letterS">S</div>
    </div>
  </div>
</template>

<script setup></script>

<style>
  :root {
    --logo-size: 80px;
    --font-size: 24px;
  }
  .container {
    width: var(--logo-size);
    height: var(--logo-size);
  }
  .logo {
    width: var(--logo-size);
    height: var(--logo-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo .letter {
    font: var(--font-size) bold;
    width: calc(var(--font-size) * 1.5);
    line-height: var(--font-size);
    color: #000;
    font-style: italic;
    text-align: center;
    opacity: 0;
  }

  .letterN {
    animation: letterAN 2.4s linear forwards;
  }

  .letterE {
    animation: letterAN 2.1s linear forwards;
    animation-delay: 0.3s;
  }

  .letterW {
    animation: letterAP 1.8s linear forwards;
    animation-delay: 0.7s;
  }

  .letterS {
    animation: letterAP 0.9s linear forwards;
    animation-delay: 1.2s;
  }

  @keyframes letterAN {
    0% {
      opacity: 1;
      transform: rotateY(0deg);
    }

    100% {
      opacity: 1;
      transform: rotateY(720deg);
    }
  }

  @keyframes letterAP {
    0% {
      opacity: 1;
      transform: rotateY(180deg);
    }

    100% {
      opacity: 1;
      transform: rotateY(720deg);
    }
  }
</style>
