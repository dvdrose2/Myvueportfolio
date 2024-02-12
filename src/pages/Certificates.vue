<template>
  <div class="certificates">
    <div class="frame-parent10">
      <div class="rectangle-wrapper5">
        <img class="frame-child18" alt="" src="/rectangle-3849@2x.png" />
      </div>
      <div class="button-parent7">
        <div class="button76" @click="onButtonContainerClick">
          <b class="button77">Home</b>
        </div>
        <div class="button78" @click="onButtonContainer1Click">
          <b class="button77">Resume</b>
        </div>
        <div class="button80" @click="onButtonContainer2Click">
          <b class="button77">UX Design</b>
        </div>
        <div class="button82" @click="onButtonContainer3Click">
          <b class="button77">Portfolio</b>
        </div>
        <div class="button84">
          <b class="button77">Cerfificates</b>
        </div>
        <div class="button86" @click="onButtonContainer5Click">
          <b class="button77">Contact</b>
        </div>
      </div>
    </div>
    <div class="certificates-inner">
      <div class="my-certificates-wrapper">
        <b class="my-certificates">MY CERTIFICATES</b>
      </div>
    </div>
    <div class="frame-parent11">
      <div class="frame-wrapper5">
        <img class="frame-child19" alt="" src="/frame-62@2x.png" />
      </div>
      <div class="frame-wrapper6">
        <div class="figmacourse24-1-parent">
          <img
            class="figmacourse24-1-icon"
            alt=""
            src="/figmacourse24-1@2x.png"
          />
          <img class="frame-child20" alt="" src="/rectangle-40@2x.png" />
          <img class="frame-child21" alt="" src="/rectangle-41@2x.png" />
          <img class="frame-child22" alt="" src="/rectangle-42@2x.png" />
          <img class="frame-child22" alt="" src="/rectangle-43@2x.png" />
          <img class="frame-child24" alt="" src="/rectangle-44@2x.png" />
          <img class="frame-child25" alt="" src="/rectangle-45@2x.png" />
          <img class="frame-child26" alt="" src="/rectangle-37@2x.png" />
          <img class="frame-child26" alt="" src="/rectangle-38@2x.png" />
          <img class="frame-child26" alt="" src="/rectangle-39@2x.png" />
        </div>
      </div>
    </div>
    <div class="certificates-child" />
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Certificates",
    methods: {
      onButtonContainerClick() {
        this.$router.push("/");
      },
      onButtonContainer1Click() {
        this.$router.push("/resume");
      },
      onButtonContainer2Click() {
        this.$router.push("/uidesign");
      },
      onButtonContainer3Click() {
        this.$router.push("/portfolio");
      },
      onButtonContainer5Click() {
        this.$router.push("/contact");
      },
    },
  });
</script>
<style scoped>
  .frame-child18 {
    width: 82px;
    position: relative;
    height: 73px;
    object-fit: cover;
  }
  .rectangle-wrapper5 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
  }
  .button77 {
    flex: 1;
    position: relative;
    line-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
  }
  .button76 {
    width: 96px;
    border-radius: var(--br-mini);
    background-color: var(--color-mediumblue-100);
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-base) var(--padding-xl);
    box-sizing: border-box;
    cursor: pointer;
  }
  .button76:hover {
    background-color: var(--color-darkorchid-100);
  }
  .button78 {
    width: 111px;
    border-radius: var(--br-mini);
    background-color: var(--color-mediumblue-100);
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-base) var(--padding-xl);
    box-sizing: border-box;
    cursor: pointer;
  }
  .button78:hover {
    background-color: #9e60f5;
  }
  .button80 {
    width: 132px;
    border-radius: var(--br-mini);
    background-color: var(--color-mediumblue-100);
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-base) var(--padding-xl);
    box-sizing: border-box;
    cursor: pointer;
  }
  .button80:hover {
    background-color: #8e4dea;
  }
  .button82 {
    width: 113px;
    border-radius: var(--br-mini);
    background-color: var(--color-mediumblue-100);
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-base) var(--padding-xl);
    box-sizing: border-box;
    cursor: pointer;
  }
  .button82:hover {
    background-color: #8c48ec;
  }
  .button84 {
    width: 140px;
    border-radius: var(--br-mini);
    background-color: var(--color-mediumblue-100);
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-base) var(--padding-xl);
    box-sizing: border-box;
  }
  .button84:hover {
    background-color: #8e48ef;
  }
  .button86 {
    width: 117px;
    border-radius: var(--br-mini);
    background-color: var(--color-mediumblue-100);
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-base) var(--padding-xl);
    box-sizing: border-box;
    cursor: pointer;
  }
  .button86:hover {
    background-color: #8c49ea;
  }
  .button-parent7 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-26xl);
  }
  .frame-parent10 {
    align-self: stretch;
    background-color: var(--color-black);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px var(--padding-xl);
  }
  .my-certificates {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1502px;
    height: 99px;
  }
  .my-certificates-wrapper {
    align-self: stretch;
    position: relative;
    height: 99px;
  }
  .certificates-inner {
    width: 1502px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: var(--font-size-45xl);
    color: var(--color-mediumblue-100);
  }
  .frame-child19 {
    max-width: 100%;
    overflow: hidden;
    height: 585px;
    object-fit: contain;
  }
  .frame-wrapper5 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
  }
  .figmacourse24-1-icon {
    width: 551px;
    position: relative;
    height: 372px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .frame-child20 {
    width: 533px;
    position: relative;
    height: 372px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .frame-child21 {
    width: 533px;
    position: relative;
    height: 371px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .frame-child22 {
    width: 518px;
    position: relative;
    height: 361px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .frame-child24 {
    width: 517px;
    position: relative;
    height: 360px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .frame-child25 {
    width: 525px;
    position: relative;
    height: 366px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .frame-child26 {
    width: 516px;
    position: relative;
    height: 360px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .figmacourse24-1-parent {
    position: absolute;
    top: 96px;
    left: 195px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 27px;
  }
  .frame-wrapper6 {
    width: 941px;
    position: relative;
    background-color: var(--color-gray-400);
    height: 658px;
    overflow-y: auto;
    flex-shrink: 0;
  }
  .frame-parent11 {
    width: 1151px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
  }
  .certificates-child {
    width: 1325px;
    position: relative;
    background-color: var(--color-gray-400);
    height: 259px;
  }
  .certificates {
    width: 100%;
    position: relative;
    background-color: var(--color-gray-400);
    height: 1336px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 28px var(--padding-31xl);
    box-sizing: border-box;
    gap: 65px;
    text-align: center;
    font-size: var(--font-size-mid);
    color: var(--color-white);
    font-family: var(--font-inter);
  }
</style>
