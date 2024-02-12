<template>
  <div class="portfolio">
    <div class="frame-parent7">
      <div class="rectangle-wrapper4">
        <img class="frame-child4" alt="" src="/rectangle-3849@2x.png" />
      </div>
      <div class="button-parent6">
        <div class="button64" @click="onButtonContainerClick">
          <b class="button65">Home</b>
        </div>
        <div class="button66" @click="onButtonContainer1Click">
          <b class="button65">Resume</b>
        </div>
        <div class="button68" @click="onButtonContainer2Click">
          <b class="button65">UX Design</b>
        </div>
        <div class="button70">
          <b class="button65">Portfolio</b>
        </div>
        <div class="button72" @click="onButtonContainer4Click">
          <b class="button65">Cerfificates</b>
        </div>
        <div class="button74" @click="onButtonContainer5Click">
          <b class="button65">Contact</b>
        </div>
      </div>
    </div>
    <div class="frame-parent8">
      <div class="frame-wrapper3">
        <img class="frame-child5" alt="" src="/frame-61@2x.png" />
      </div>
      <div class="frame-parent9">
        <div class="group-wrapper">
          <div class="my-portfolio-wrapper">
            <b class="my-portfolio">MY PORTFOLIO</b>
          </div>
        </div>
        <div class="frame-wrapper4">
          <div class="rectangle-group">
            <img class="frame-child6" alt="" src="/rectangle-23@2x.png" />
            <img class="frame-child7" alt="" src="/rectangle-24@2x.png" />
            <img class="frame-child8" alt="" src="/rectangle-28@2x.png" />
            <img class="frame-child9" alt="" src="/rectangle-27@2x.png" />
            <img
              class="dolloardays-2-icon"
              alt=""
              src="/dolloardays-2@2x.png"
            />
            <img class="frame-child10" alt="" src="/rectangle-34@2x.png" />
            <img class="frame-child11" alt="" src="/rectangle-29@2x.png" />
            <img class="frame-child12" alt="" src="/rectangle-30@2x.png" />
            <img class="frame-child13" alt="" src="/rectangle-32@2x.png" />
            <img class="frame-child10" alt="" src="/rectangle-31@2x.png" />
            <img class="frame-child15" alt="" src="/rectangle-33@2x.png" />
            <img class="frame-child16" alt="" src="/rectangle-26@2x.png" />
            <img class="frame-child17" alt="" src="/rectangle-25@2x.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="portfolio-child" />
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Portfolio",
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
      onButtonContainer4Click() {
        this.$router.push("/certificates");
      },
      onButtonContainer5Click() {
        this.$router.push("/contact");
      },
    },
  });
</script>
<style scoped>
  .frame-child4 {
    width: 82px;
    position: relative;
    height: 73px;
    object-fit: cover;
  }
  .rectangle-wrapper4 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
  }
  .button65 {
    flex: 1;
    position: relative;
    line-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
  }
  .button64 {
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
  .button64:hover {
    background-color: #995eec;
  }
  .button66 {
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
  .button66:hover {
    background-color: #9556ee;
  }
  .button68 {
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
  .button68:hover {
    background-color: #9754f5;
  }
  .button70 {
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
  }
  .button70:hover {
    background-color: var(--color-darkorchid-300);
  }
  .button72 {
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
    cursor: pointer;
  }
  .button72:hover {
    background-color: #8a46e8;
  }
  .button74 {
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
  .button74:hover {
    background-color: #904def;
  }
  .button-parent6 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-26xl);
  }
  .frame-parent7 {
    align-self: stretch;
    background-color: var(--color-black);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-3xs) var(--padding-xl);
  }
  .frame-child5 {
    max-width: 100%;
    overflow: hidden;
    height: 585px;
    object-fit: contain;
  }
  .frame-wrapper3 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
  }
  .my-portfolio {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 494px;
    height: 99px;
  }
  .my-portfolio-wrapper {
    width: 494px;
    position: relative;
    height: 99px;
  }
  .group-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame-child6 {
    width: 500px;
    position: relative;
    height: 653.7px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .frame-child7 {
    width: 862.3px;
    position: relative;
    height: 653.7px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .frame-child8 {
    width: 672.6px;
    position: relative;
    height: 653.7px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .frame-child9 {
    width: 671.7px;
    position: relative;
    height: 653.7px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .dolloardays-2-icon {
    width: 650.1px;
    position: relative;
    height: 669px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .frame-child10 {
    width: 447.8px;
    position: relative;
    height: 600.7px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .frame-child11 {
    width: 487.4px;
    position: relative;
    height: 653.7px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .frame-child12 {
    width: 464px;
    position: relative;
    height: 624.9px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .frame-child13 {
    width: 462.2px;
    position: relative;
    height: 624.9px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .frame-child15 {
    width: 446px;
    position: relative;
    height: 600.7px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .frame-child16 {
    width: 454.1px;
    position: relative;
    height: 600.7px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .frame-child17 {
    width: 334.5px;
    position: relative;
    height: 572.8px;
    flex-shrink: 0;
    object-fit: cover;
  }
  .rectangle-group {
    position: absolute;
    top: 60px;
    left: 59px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 43.87px;
  }
  .frame-wrapper4 {
    width: 1048px;
    position: relative;
    height: 758px;
    overflow-y: auto;
    flex-shrink: 0;
  }
  .frame-parent9 {
    height: 954px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 28px;
  }
  .frame-parent8 {
    width: 1258px;
    height: 943px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: var(--font-size-45xl);
    color: var(--color-mediumblue-100);
  }
  .portfolio-child {
    width: 1382px;
    position: relative;
    background-color: var(--color-gray-400);
    height: 453px;
  }
  .portfolio {
    width: 100%;
    position: relative;
    background-color: var(--color-gray-400);
    height: 1621px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    gap: 104px;
    text-align: center;
    font-size: var(--font-size-mid);
    color: var(--color-white);
    font-family: var(--font-inter);
  }
</style>
