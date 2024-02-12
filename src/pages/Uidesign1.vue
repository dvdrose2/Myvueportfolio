<template>
  <div class="uidesign2">
    <div class="frame-parent4">
      <div class="rectangle-wrapper2">
        <img class="frame-child2" alt="" src="/rectangle-3849@2x.png" />
      </div>
      <div class="button-parent5">
        <div class="button52" @click="onButtonContainerClick">
          <b class="button53">Home</b>
        </div>
        <div class="button54" @click="onButtonContainer1Click">
          <b class="button53">Resume</b>
        </div>
        <div class="button56" @click="onButtonContainer2Click">
          <b class="button53">UX Design</b>
        </div>
        <div class="button58" @click="onButtonContainer3Click">
          <b class="button53">Portfolio</b>
        </div>
        <div class="button60" @click="onButtonContainer4Click">
          <b class="button53">Cerfificates</b>
        </div>
        <div class="button62" @click="onButtonContainer5Click">
          <b class="button53">Contact</b>
        </div>
      </div>
    </div>
    <div class="uidesign2-inner">
      <div class="component-1-parent">
        <div class="component-11" @click="onComponent1ContainerClick">
          <div class="component-1-item" />
          <div class="click-for-more-sites-i-created-container">
            <b class="click-for-more1">Click to See Less</b>
          </div>
        </div>
        <div class="frame-parent5">
          <div class="frame-parent6">
            <div class="figma-files-parent">
              <b class="figma-files">FIGMA FILES:</b>
              <b class="hardware-store" :onClick="onHardwareStoreTextClick"
                >Hardware Store</b
              >
              <b class="hardware-store" :onClick="onClothingStoreTextClick"
                >Clothing Store</b
              >
              <b class="hardware-store" :onClick="onLinuxClubSiteClick"
                >Linux Club Site</b
              >
              <b class="hardware-store" :onClick="onLawOfficeSiteClick"
                >Law Office Site</b
              >
              <b class="hardware-store" :onClick="onBikeShopAppClick"
                >Bike Shop App</b
              >
              <b class="hardware-store" :onClick="onClothingStoreAppClick"
                >Clothing Store App</b
              >
              <b class="hardware-store" :onClick="onBookClubAppClick"
                >Book Club App</b
              >
              <b class="hardware-store" :onClick="onRVCamperClick"
                >RV & Camper App</b
              >
            </div>
            <div class="html-javascript-parent">
              <b class="html-javascript">HTML & JAVASCRIPT:</b>
              <div class="frame-wrapper2">
                <div class="figma-files-parent">
                  <b
                    class="hardware-store"
                    :onClick="onClothingStoreStaticClick"
                    >Clothing Store Static Site</b
                  >
                  <b class="hardware-store" :onClick="onCryptoStaticSiteClick"
                    >Crypto Static Site</b
                  >
                  <b
                    class="hardware-store"
                    :onClick="onReactPhysicalTherapyClick"
                    >React Physical Therapy Site</b
                  >
                  <b class="hardware-store" :onClick="onReactSelfDefenseClick"
                    >React Self Defense Site</b
                  >
                  <b class="hardware-store" :onClick="onReactSurvivalSiteClick"
                    >React Survival Site</b
                  >
                  <b class="hardware-store" :onClick="onVuePortfolioFirstClick"
                    >Vue Portfolio (first one)</b
                  >
                  <b class="hardware-store" :onClick="onVueToDoClick"
                    >Vue To Do App</b
                  >
                  <b class="hardware-store" :onClick="onVeryFirstAngularClick"
                    >Very First Angular Site</b
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="rectangle-wrapper3">
            <div class="frame-child3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Uidesign1",
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
      onButtonContainer4Click() {
        this.$router.push("/certificates");
      },
      onButtonContainer5Click() {
        this.$router.push("/contact");
      },
      onComponent1ContainerClick() {
        this.$router.push("/uidesign");
      },
      onHardwareStoreTextClick() {
        window.open(
          "https://www.figma.com/proto/BVOBR4fkN9QVoPLMLLySgm/HardwareStoreIdea?type=design&node-id=9-1592&viewport=172%2C136%2C0.09&t=ISRcfOpBDUpg36ke-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=9%3A1592&mode=design"
        );
      },
      onClothingStoreTextClick() {
        window.open(
          "https://www.figma.com/proto/O5hO3fW5uCTOl0lAH99CTx/Portfolio?node-id=106-46&viewport=236%2C154%2C0.27&scaling=scale-down&page-id=0%3A1&starting-point-node-id=106%3A46"
        );
      },
      onLinuxClubSiteClick() {
        window.open(
          "https://www.figma.com/proto/C0G9GMNH8Sx7nkeITK0aMA/LinuxClubResource?type=design&node-id=9-1361&viewport=181%2C185%2C0.15&t=MIvvFx3LoHaifubT-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=9%3A1361&mode=design"
        );
      },
      onLawOfficeSiteClick() {
        window.open(
          "https://www.figma.com/proto/QnrTPj8x10ESmAVk1egYVr/Practice%3A-Hierarchy-(Copy)?type=design&node-id=55-27&viewport=531%2C741%2C0.62&t=zu3tWrEoWooWKWUh-1&scaling=scale-down&page-id=55%3A26&starting-point-node-id=55%3A27&mode=design"
        );
      },
      onBikeShopAppClick() {
        window.open(
          "https://www.figma.com/proto/Lb0vjRVBBDFZCNyImacuUv/bikeshop?type=design&node-id=21-8266&viewport=600%2C491%2C0.16&t=PpHOKDLwZRYTPC7a-1&scaling=scale-down&page-id=69%3A2752&starting-point-node-id=21%3A8266"
        );
      },
      onClothingStoreAppClick() {
        window.open(
          "https://www.figma.com/proto/18eq4lVUvSavxCsFHlPhnn/e-Commerce-Fashion?node-id=105-162&viewport=-1595%2C2976%2C0.9&scaling=scale-down&page-id=0%3A1&starting-point-node-id=105%3A162"
        );
      },
      onBookClubAppClick() {
        window.open(
          "https://www.figma.com/proto/EIT3gILkmMWXpbEkbCCUvK/Portfolio-Checkout?node-id=117-1369&viewport=485%2C-794%2C0.43&scaling=scale-down&page-id=0%3A1&starting-point-node-id=117%3A1369"
        );
      },
      onRVCamperClick() {
        window.open(
          "https://www.figma.com/proto/b3gij8NZDEUD7AEnem4vw7/Forms-Buttons%26-UI-Elements?node-id=123495-1766&viewport=1360%2C-386%2C0.41&scaling=scale-down&page-id=109575%3A2723&starting-point-node-id=123495%3A1766"
        );
      },
      onClothingStoreStaticClick() {
        window.open("https://mysampleecommerce.000webhostapp.com/index.html");
      },
      onCryptoStaticSiteClick() {
        window.open("https://dvdrose2.github.io/myfirsttest/#");
      },
      onReactPhysicalTherapyClick() {
        window.open(
          "https://65b46604213eee403180cfd5--chimerical-babka-a2fabe.netlify.app/"
        );
      },
      onReactSelfDefenseClick() {
        window.open("https://self-defense-a18a0.web.app/");
      },
      onReactSurvivalSiteClick() {
        window.open("https://react-survival-site.web.app/#");
      },
      onVuePortfolioFirstClick() {
        window.open("https://vueportfolio-428d7.web.app/");
      },
      onVueToDoClick() {
        window.open("https://todoapp-e3d24.web.app/");
      },
      onVeryFirstAngularClick() {
        window.open("https://angularsite-5458e.web.app/");
      },
    },
  });
</script>
<style scoped>
  .frame-child2 {
    width: 82px;
    position: relative;
    height: 73px;
    object-fit: cover;
  }
  .rectangle-wrapper2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
  }
  .button53 {
    flex: 1;
    position: relative;
    line-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
  }
  .button52 {
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
  .button52:hover {
    background-color: #995af1;
  }
  .button54 {
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
  .button54:hover {
    background-color: #a260fe;
  }
  .button56 {
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
  .button56:hover {
    background-color: #9c5ef3;
  }
  .button58 {
    height: 45px;
    width: 113px;
    border-radius: var(--br-mini);
    background-color: #6200ec;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-base) var(--padding-xl);
    box-sizing: border-box;
    cursor: pointer;
  }
  .button58:hover {
    background-color: #914af5;
  }
  .button60 {
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
  .button60:hover {
    background-color: #9b5cf3;
  }
  .button62 {
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
  .button62:hover {
    background-color: #9b5cf5;
  }
  .button-parent5 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-26xl);
  }
  .frame-parent4 {
    align-self: stretch;
    background-color: var(--color-black);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-3xs) var(--padding-xl);
  }
  .component-1-item {
    position: absolute;
    height: 64.17%;
    width: 96.29%;
    top: 0%;
    right: 1.68%;
    bottom: 35.83%;
    left: 2.04%;
    border-radius: var(--br-xl);
    background-color: var(--color-gainsboro);
  }
  .click-for-more1 {
    position: absolute;
    top: -5px;
    left: 578px;
    line-height: 100px;
  }
  .click-for-more-sites-i-created-container {
    position: absolute;
    height: 64.17%;
    width: 100%;
    top: 0%;
    right: 0%;
    bottom: 35.83%;
    left: 0%;
    border-radius: var(--br-8xs);
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(18, 17, 17, 0) 17%,
      #2f2d2d 89%
    );
    overflow: hidden;
  }
  .component-11 {
    width: 1492px;
    position: relative;
    height: 120px;
    flex-shrink: 0;
    cursor: pointer;
  }
  .figma-files {
    position: relative;
    font-size: var(--font-size-21xl);
    line-height: 100px;
  }
  .hardware-store {
    position: relative;
    line-height: 100px;
    cursor: pointer;
  }
  .figma-files-parent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .html-javascript {
    position: relative;
    line-height: 100px;
  }
  .frame-wrapper2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: var(--font-size-17xl);
  }
  .html-javascript-parent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: var(--font-size-21xl);
  }
  .frame-parent6 {
    width: 1307px;
    overflow-y: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 98px;
  }
  .frame-child3 {
    width: 1285px;
    position: relative;
    background-color: var(--color-white);
    height: 124px;
  }
  .rectangle-wrapper3 {
    height: 55px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
    box-sizing: border-box;
  }
  .frame-parent5 {
    align-self: stretch;
    height: 955px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px var(--padding-31xl);
    box-sizing: border-box;
  }
  .component-1-parent {
    align-self: stretch;
    background-color: var(--color-white);
    height: 1167px;
    overflow-y: auto;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 51px;
  }
  .uidesign2-inner {
    align-self: stretch;
    height: 955px;
    overflow-y: auto;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
    box-sizing: border-box;
    font-size: var(--font-size-17xl);
    color: var(--color-mediumblue-100);
  }
  .uidesign2 {
    width: 100%;
    position: relative;
    background-color: var(--color-gray-400);
    height: 1558px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-58xl);
    text-align: center;
    font-size: var(--font-size-mid);
    color: var(--color-white);
    font-family: var(--font-inter);
  }
</style>
