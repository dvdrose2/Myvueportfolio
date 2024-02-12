<template>
  <div class="uidesign">
    <div class="frame-parent1">
      <div class="rectangle-wrapper1">
        <img class="rectangle-icon" alt="" src="/rectangle-3849@2x.png" />
      </div>
      <div class="button-container">
        <div class="button24" @click="onButtonContainerClick">
          <b class="button25">Home</b>
        </div>
        <div class="button26" @click="onButtonContainer1Click">
          <b class="button25">Resume</b>
        </div>
        <div class="button28">
          <b class="button25">UX Design</b>
        </div>
        <div class="button30" @click="onButtonContainer3Click">
          <b class="button25">Portfolio</b>
        </div>
        <div class="button32" @click="onButtonContainer4Click">
          <b class="button25">Cerfificates</b>
        </div>
        <div class="button34" @click="onButtonContainer5Click">
          <b class="button25">Contact</b>
        </div>
      </div>
    </div>
    <div class="component-1" @click="onComponent1ContainerClick">
      <div class="component-1-child" />
      <div
        class="click-for-more-sites-i-created-wrapper"
        @click="onFrameContainerClick"
      >
        <b class="click-for-more">Click to See More</b>
      </div>
    </div>
    <div class="frame-parent2">
      <div class="frame-wrapper">
        <img class="frame-icon" alt="" src="/frame-6@2x.png" />
      </div>
      <div class="frame-wrapper1">
        <div class="frame-parent3">
          <div class="selfdefensepic-parent">
            <img
              class="selfdefensepic-icon"
              alt=""
              src="/selfdefensepic@2x.png"
            />
            <div class="button-parent1">
              <a
                class="button36"
                href="https://www.figma.com/proto/n6YRaZzLLB7vqtuXR2dszU/CreditBear?type=design&node-id=1-670&viewport=1149%2C-319%2C0.48&t=dJRrEeXdjl2hBO5x-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A670&show-proto-sidebar=1&mode=design"
                target="_blank"
                :onClick="onButtonClick"
              >
                <b class="button37">Figma Design</b>
              </a>
              <a
                class="button38"
                href="https://self-defense-a18a0.web.app/"
                target="_blank"
                :onClick="onButton1Click"
              >
                <a
                  class="button39"
                  href="https://self-defense-a18a0.web.app/"
                  target="_blank"
                  >React Conversion
                </a>
              </a>
            </div>
          </div>
          <div class="selfdefensepic-parent">
            <img class="selfdefensepic-icon" alt="" src="/lawerpic@2x.png" />
            <div class="button-parent1">
              <a
                class="button36"
                href="https://www.figma.com/proto/QnrTPj8x10ESmAVk1egYVr/Practice%3A-Hierarchy-(Copy)?type=design&node-id=55-27&viewport=155%2C274%2C0.12&t=1RkAq0YZBL1Og5SU-1&scaling=scale-down&page-id=55%3A26&starting-point-node-id=55%3A27"
                target="_blank"
                :onClick="onButton3Click"
              >
                <b class="button37">Figma Design</b>
              </a>
              <a
                class="button38"
                href="http://thomaslaw.atwebpages.com/index1.html"
                target="_blank"
                :onClick="onButton4Click"
              >
                <b class="button37">HTML Conversion </b>
              </a>
            </div>
          </div>
          <div class="bikeshoppic-parent">
            <img class="bikeshoppic-icon" alt="" src="/bikeshoppic@2x.png" />
            <div class="button-parent1">
              <a
                class="button36"
                href="https://www.figma.com/proto/Lb0vjRVBBDFZCNyImacuUv/bikeshop?type=design&node-id=61-2020&viewport=228%2C569%2C0.17&t=j31GgbbZZ0T0hZnW-1&scaling=scale-down&page-id=61%3A1726&starting-point-node-id=61%3A2020"
                target="_blank"
                :onClick="onButton5Click"
              >
                <b class="button37">Figma Design</b>
              </a>
              <a
                class="button38"
                href="https://65b45c0341423d35ac5079be--mellifluous-stardust-246ebc.netlify.app/"
                target="_blank"
                :onClick="onButton6Click"
              >
                <b class="button37">React Conversion </b>
              </a>
            </div>
          </div>
          <div class="rectangle-parent">
            <img class="frame-child1" alt="" src="/rectangle-15@2x.png" />
            <div class="button-parent1">
              <a
                class="button36"
                href="https://www.figma.com/proto/LDf5lUo7ubUvvRjwGk1G2I/PhysicalTherapySite?type=design&node-id=6274-573&viewport=1372%2C266%2C0.24&t=0tmdpr1hzIwxZm7z-1&scaling=scale-down&page-id=107%3A2&starting-point-node-id=6274%3A573"
                target="_blank"
                :onClick="onButton7Click"
              >
                <b class="button37">Figma Design</b>
              </a>
              <a
                class="button38"
                href="https://65b46604213eee403180cfd5--chimerical-babka-a2fabe.netlify.app/"
                target="_blank"
                :onClick="onButton8Click"
              >
                <b class="button37">React Conversion </b>
              </a>
            </div>
          </div>
          <div class="rectangle-div" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Uidesign",
    methods: {
      onButtonContainerClick() {
        this.$router.push("/");
      },
      onButtonContainer1Click() {
        this.$router.push("/resume");
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
        this.$router.push("/uidesign2");
      },
      onFrameContainerClick() {
        this.$router.push("/uidesign2");
      },
      onButtonClick() {
        window.open(
          "https://www.figma.com/proto/vhTk2kFL2NFzevwmlUuQSb/Self-DefenseSite?type=design&node-id=223-303&viewport=-258%2C-403%2C0.62&t=m95OFkJoFuAfSDSl-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=223%3A303"
        );
      },
      onButton1Click() {
        window.open("https://self-defense-a18a0.web.app/");
      },
      onButton3Click() {
        window.open(
          "https://www.figma.com/proto/QnrTPj8x10ESmAVk1egYVr/Practice%3A-Hierarchy-(Copy)?type=design&node-id=55-27&viewport=155%2C274%2C0.12&t=1RkAq0YZBL1Og5SU-1&scaling=scale-down&page-id=55%3A26&starting-point-node-id=55%3A27"
        );
      },
      onButton4Click() {
        window.open("http://thomaslaw.atwebpages.com/index1.html");
      },
      onButton5Click() {
        window.open(
          "https://www.figma.com/proto/Lb0vjRVBBDFZCNyImacuUv/bikeshop?type=design&node-id=61-2020&viewport=228%2C569%2C0.17&t=j31GgbbZZ0T0hZnW-1&scaling=scale-down&page-id=61%3A1726&starting-point-node-id=61%3A2020"
        );
      },
      onButton6Click() {
        window.open(
          "https://65b45c0341423d35ac5079be--mellifluous-stardust-246ebc.netlify.app/"
        );
      },
      onButton7Click() {
        window.open(
          "https://www.figma.com/proto/LDf5lUo7ubUvvRjwGk1G2I/PhysicalTherapySite?type=design&node-id=6274-573&viewport=1372%2C266%2C0.24&t=0tmdpr1hzIwxZm7z-1&scaling=scale-down&page-id=107%3A2&starting-point-node-id=6274%3A573"
        );
      },
      onButton8Click() {
        window.open(
          "https://65b46604213eee403180cfd5--chimerical-babka-a2fabe.netlify.app/"
        );
      },
    },
  });
</script>
<style scoped>
  .rectangle-icon {
    width: 82px;
    position: relative;
    height: 73px;
    object-fit: cover;
  }
  .rectangle-wrapper1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
  }
  .button25 {
    flex: 1;
    position: relative;
    line-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
  }
  .button24 {
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
  .button24:hover {
    background-color: var(--color-darkorchid-100);
  }
  .button26 {
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
  .button26:hover {
    background-color: #9352ee;
  }
  .button28 {
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
  }
  .button28:hover {
    background-color: #9d5ff5;
  }
  .button30 {
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
  .button30:hover {
    background-color: var(--color-blueviolet-100);
  }
  .button32 {
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
  .button32:hover {
    background-color: var(--color-darkorchid-200);
  }
  .button34 {
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
  .button34:hover {
    background-color: #965de6;
  }
  .button-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-26xl);
  }
  .frame-parent1 {
    align-self: stretch;
    background-color: var(--color-black);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-3xs) var(--padding-xl);
  }
  .component-1-child {
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
  .click-for-more {
    position: absolute;
    top: -5px;
    left: 574px;
    line-height: 100px;
  }
  .click-for-more-sites-i-created-wrapper {
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
    cursor: pointer;
  }
  .component-1 {
    align-self: stretch;
    position: relative;
    height: 120px;
    cursor: pointer;
    font-size: var(--font-size-17xl);
    color: var(--color-mediumblue-100);
  }
  .frame-icon {
    max-width: 100%;
    overflow: hidden;
    height: 585px;
    object-fit: contain;
  }
  .frame-wrapper {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
  }
  .selfdefensepic-icon {
    width: 608.7px;
    position: relative;
    height: 398px;
    object-fit: cover;
  }
  .button37 {
    flex: 1;
    position: relative;
    line-height: 80.41px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28.9px;
  }
  .button36 {
    text-decoration: none;
    width: 123.8px;
    border-radius: 12.06px;
    background-color: var(--color-mediumblue-100);
    height: 36.2px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 12.866168975830078px 16.08271026611328px;
    box-sizing: border-box;
    cursor: pointer;
    color: inherit;
  }
  .button39 {
    text-decoration: none;
    flex: 1;
    position: relative;
    line-height: 80.41px;
    font-weight: 700;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28.9px;
  }
  .button38 {
    text-decoration: none;
    width: 154.4px;
    border-radius: 12.06px;
    background-color: var(--color-mediumblue-100);
    height: 36.2px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 12.866168975830078px 16.08271026611328px;
    box-sizing: border-box;
    cursor: pointer;
    color: inherit;
  }
  .button-parent1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: var(--gap-215xl);
  }
  .selfdefensepic-parent {
    border-radius: 16.08px;
    background-color: var(--color-gray-300);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32.16542053222656px;
    gap: 28.95px;
  }
  .bikeshoppic-icon {
    width: 602.3px;
    position: relative;
    height: 528.3px;
    object-fit: cover;
  }
  .bikeshoppic-parent {
    border-radius: 16.08px;
    background-color: var(--color-gray-300);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32.16542053222656px;
    gap: 11.26px;
  }
  .frame-child1 {
    width: 602px;
    position: relative;
    height: 499px;
    object-fit: cover;
  }
  .rectangle-parent {
    border-radius: 16.08px;
    background-color: var(--color-gray-300);
    height: 640.1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32.16542053222656px;
    box-sizing: border-box;
    gap: 29.75px;
  }
  .rectangle-div {
    width: 641px;
    position: relative;
    background-color: var(--color-gray-400);
    height: 401px;
  }
  .frame-parent3 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 811px;
    height: 3146px;
    overflow-y: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 66px 53.88px;
  }
  .frame-wrapper1 {
    width: 818px;
    position: relative;
    background-color: var(--color-black);
    border: 4px solid #fdf9f9;
    box-sizing: border-box;
    height: 597px;
    overflow-y: auto;
    flex-shrink: 0;
  }
  .frame-parent2 {
    width: 1119px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-31xl);
    box-sizing: border-box;
    gap: 91px;
    font-size: var(--font-size-sm-7);
  }
  .uidesign {
    width: 100%;
    position: relative;
    background-color: var(--color-gray-400);
    height: 1351px;
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
