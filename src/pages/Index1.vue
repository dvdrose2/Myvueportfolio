<template>
  <div class="index">
    <div class="frame-parent">
      <div class="rectangle-wrapper">
        <img class="frame-child" alt="" src="/rectangle-3849@2x.png" />
      </div>
      <div class="button-parent">
        <div class="button">
          <b class="button1">Home</b>
        </div>
        <div class="button2" @click="onButtonContainer1Click">
          <b class="button1">Resume</b>
        </div>
        <div class="button4" @click="onButtonContainer2Click">
          <b class="button1">UX Design</b>
        </div>
        <div class="button6" @click="onButtonContainer3Click">
          <b class="button1">Portfolio</b>
        </div>
        <div class="button8" @click="onButtonContainer4Click">
          <b class="button1">Cerfificates</b>
        </div>
        <div class="button10" @click="onButtonContainer5Click">
          <b class="button1">Contact</b>
        </div>
      </div>
    </div>
    <div class="frame-group">
      <div class="david-rose-ui-ux-graphic-desig-parent">
        <div class="david-rose-ui-container">
          <span class="david-rose-ui-container1">
            <p class="david-rose">David Rose</p>
            <p class="ui-ux-graphic-designer">
              <b>
                <span>
                  <span>UI UX Graphic Designer &</span>
                </span>
              </b>
            </p>
            <p class="front-end-designer">
              <b>
                <span>
                  <span>Front End Designer </span>
                </span>
              </b>
            </p>
            <p class="i-specialize-in-ux-design-con">
              <b>
                <span>I specialize in UX Design. Converting UX Design</span>
              </b>
            </p>
            <p class="front-end-designer">
              <b>
                <span>to React or Vue Frameworks.</span>
              </b>
            </p>
          </span>
        </div>
        <div class="parent">
          <b class="b">20 </b>
          <b class="years-experience">
            <span class="years-experience-txt-container">
              <p class="front-end-designer">years</p>
              <p class="front-end-designer">Experience</p>
            </span>
          </b>
        </div>
      </div>
      <div class="rectangle-container">
        <img class="frame-item" alt="" src="/rectangle-3848@2x.png" />
      </div>
    </div>
    <div class="frame-container">
      <div class="about-me-im-passionate-about-wrapper">
        <b class="about-me-im-container">
          <span>
            <p class="about-me">
              <span>
                <span>About Me</span>
              </span>
            </p>
            <p class="front-end-designer">
              <span>
                <span class="blank-line">&nbsp;</span>
              </span>
              <span
                >I'm passionate about crafting beautiful and intuitive digital
                experiences. Whether it's a captivating logo, a user-friendly
                web app, or a seamless landing page, I get a thrill from the
                process.</span
              >
            </p>
            <p class="front-end-designer">
              With 15+ years of experience in graphic and web design, I’m honing
              my skills in bridging the gap between aesthetics and
              functionality. I love building things that not only look great but
              also make sense, helping users navigate and interact with ease.
            </p>
          </span>
        </b>
      </div>
      <div class="davidr-1-wrapper">
        <img class="frame-item" alt="" src="/davidr-1@2x.png" />
      </div>
    </div>
    <div class="index-inner">
      <div class="but-the-journey-never-ends-i-wrapper">
        <b class="about-me-im-container">
          <span>
            <p class="front-end-designer">
              But the journey never ends! I'm a dedicated learner, constantly
              soaking up new trends and tools. From UI/UX principles to
              front-end development, I'm always pushing myself to evolve and
              keep my skillset sharp.
            </p>
            <p class="front-end-designer">&nbsp;</p>
            <p class="front-end-designer">
              Problem-solving? It's my middle name. When technical hiccups
              arise, I don't panic – I get excited! Troubleshooting and finding
              creative solutions are what keep me energized and make me a
              valuable asset to any team.
            </p>
            <p class="front-end-designer">&nbsp;</p>
            <p class="front-end-designer">
              And teamwork? Let's build something together! I thrive in
              collaborative environments, bouncing ideas off colleagues and
              respecting diverse perspectives. Communication is key for me, and
              I believe in creating an atmosphere where everyone feels heard and
              valued.
            </p>
            <p class="front-end-designer">&nbsp;</p>
            <p class="front-end-designer">
              In short, I'm a confident designer who approaches every project
              with enthusiasm and dedication. I love what I do, I'm always
              learning, and I believe in the power of teamwork to create truly
              remarkable digital experiences.
            </p>
            <p class="front-end-designer">&nbsp;</p>
            <p class="front-end-designer">
              If you're looking for someone who can bring a positive attitude,
              strong skills, and a collaborative spirit to your team, I'd love
              to chat!
            </p>
          </span>
        </b>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Index1",
    methods: {
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
    },
  });
</script>
<style scoped>
  .frame-child {
    width: 82px;
    position: relative;
    height: 73px;
    object-fit: cover;
  }
  .rectangle-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
  }
  .button1 {
    flex: 1;
    position: relative;
    line-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
  }
  .button {
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
  }
  .button:hover {
    background-color: var(--color-darkorchid-200);
  }
  .button2 {
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
  .button2:hover {
    background-color: #9757ef;
  }
  .button4 {
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
  .button4:hover {
    background-color: #9756f1;
  }
  .button6 {
    height: 45px;
    width: 113px;
    border-radius: var(--br-mini);
    background-color: var(--color-mediumblue-100);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-base) var(--padding-xl);
    box-sizing: border-box;
    cursor: auto;
  }
  .button6:hover {
    background-color: #9451f3;
  }
  .button8 {
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
  .button8:hover {
    background-color: var(--color-blueviolet-100);
  }
  .button10 {
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
  .button10:hover {
    background-color: #934ef3;
  }
  .button-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-26xl);
    cursor: auto;
  }
  .frame-parent {
    align-self: stretch;
    background-color: var(--color-black);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-3xs) var(--padding-xl);
    text-align: center;
    font-size: var(--font-size-mid);
  }
  .david-rose {
    margin: 0;
    font-weight: 500;
  }
  .ui-ux-graphic-designer {
    margin: 0;
    font-size: var(--font-size-29xl);
    color: #f7f6f9;
  }
  .front-end-designer {
    margin: 0;
  }
  .i-specialize-in-ux-design-con {
    margin: 0;
    font-size: var(--font-size-xl);
    color: var(--color-gray-100);
  }
  .david-rose-ui-container1 {
    width: 100%;
  }
  .david-rose-ui-container {
    width: 494px;
    position: relative;
    display: flex;
    align-items: center;
    height: 310px;
    flex-shrink: 0;
  }
  .b {
    width: 82px;
    position: relative;
    display: flex;
    align-items: center;
    height: 67px;
    flex-shrink: 0;
  }
  .years-experience-txt-container {
    line-break: anywhere;
    width: 100%;
  }
  .years-experience {
    width: 122px;
    position: relative;
    font-size: var(--font-size-xl);
    display: flex;
    color: var(--color-mediumblue-100);
    align-items: center;
    height: 51px;
    flex-shrink: 0;
  }
  .parent {
    border-radius: var(--br-xl);
    border: 2px solid var(--color-mediumblue-100);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px var(--padding-xl);
    font-size: var(--font-size-29xl);
    color: #f5ecec;
  }
  .david-rose-ui-ux-graphic-desig-parent {
    height: 434px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 32px;
  }
  .frame-item {
    align-self: stretch;
    flex: 1;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .rectangle-container {
    flex: 1;
    height: 434px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
    box-sizing: border-box;
  }
  .frame-group {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0px var(--padding-31xl);
    gap: 138px;
    font-size: 32px;
    color: var(--color-mediumblue-100);
  }
  .about-me {
    margin: 0;
    font-size: var(--font-size-45xl);
    color: var(--color-mediumblue-100);
  }
  .blank-line {
    font-size: var(--font-size-5xl);
  }
  .about-me-im-container {
    align-self: stretch;
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
  }
  .about-me-im-passionate-about-wrapper {
    flex: 1;
    height: 495px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xl) var(--padding-31xl);
    box-sizing: border-box;
  }
  .davidr-1-wrapper {
    width: 495px;
    height: 559px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
    box-sizing: border-box;
  }
  .frame-container {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0px var(--padding-31xl);
  }
  .but-the-journey-never-ends-i-wrapper {
    flex: 1;
    height: 668px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-3xs) var(--padding-31xl);
    box-sizing: border-box;
  }
  .index-inner {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    padding: var(--padding-11xl) var(--padding-31xl);
  }
  .index {
    width: 100%;
    position: relative;
    background-color: var(--color-gray-400);
    height: 2289px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-56xl);
    text-align: left;
    font-size: var(--font-size-11xl);
    color: var(--color-white);
    font-family: var(--font-inter);
  }

  @media screen and (max-width: 1200px) {
    .button6:hover {
      background-color: #9455ec;
    }
  }
</style>
