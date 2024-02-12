<template>
  <div class="contact">
    <div class="frame-parent12">
      <div class="rectangle-wrapper6">
        <img class="frame-child29" alt="" src="/rectangle-3849@2x.png" />
      </div>
      <div class="button-parent8">
        <div class="button88" @click="onButtonContainerClick">
          <b class="button89">Home</b>
        </div>
        <div class="button90" @click="onButtonContainer1Click">
          <b class="button89">Resume</b>
        </div>
        <div class="button92" @click="onButtonContainer2Click">
          <b class="button89">UX Design</b>
        </div>
        <div class="button94" @click="onButtonContainer3Click">
          <b class="button89">Portfolio</b>
        </div>
        <div class="button96" @click="onButtonContainer4Click">
          <b class="button89">Cerfificates</b>
        </div>
        <div class="button98">
          <b class="button89">Contact</b>
        </div>
      </div>
    </div>
    <div class="contact-inner">
      <div class="frame-parent13">
        <div class="group-container">
          <div class="frame-wrapper7">
            <div class="vector-parent">
              <img class="frame-child30" alt="" src="/rectangle-3841.svg" />
              <div class="ellipse-div" />
              <div class="contact-information">Contact Information</div>
              <div class="carbonlocation-filled-parent">
                <img
                  class="carbonlocation-filled-icon"
                  alt=""
                  src="/carbonlocationfilled.svg"
                />
                <div class="bxsphone-call-parent">
                  <img
                    class="bxsphone-call-icon"
                    alt=""
                    src="/bxsphonecall.svg"
                  />
                  <div class="div">607-244-0502</div>
                </div>
                <div class="icsharp-email-parent">
                  <img
                    class="bxsphone-call-icon"
                    alt=""
                    src="/icsharpemail.svg"
                  />
                  <div class="div">dvdrose999@gmail.com</div>
                </div>
                <div class="state-hwy-8-south-container">
                  <p class="state-hwy-8-south">
                    2998 State Hwy 8 South New Berlin, NY 13843
                  </p>
                  <p class="state-hwy-8-south">&nbsp;</p>
                  <p class="state-hwy-8-south">
                    NOTE: This is NOT a functional form.
                  </p>
                </div>
              </div>
              <div class="please-give-me-container">
                <p class="state-hwy-8-south">
                  Please give me a call or drop me an email
                </p>
                <p class="state-hwy-8-south">to contact me.</p>
              </div>
              <img class="polygon-icon" alt="" src="/polygon-2.svg" />
              <div class="frame-child31" />
            </div>
          </div>
        </div>
        <div class="frame-parent14">
          <div class="frame-parent15">
            <div class="group-parent">
              <div class="group-parent1">
                <div class="vector-group">
                  <img class="group-item" alt="" src="/vector-4.svg" />
                  <img class="group-inner" alt="" src="/vector-8.svg" />
                  <div class="first-name">First Name</div>
                </div>
                <input
                  class="rectangle-input"
                  placeholder="First Name"
                  type="text"
                />
              </div>
              <div class="group-parent1">
                <input
                  class="rectangle-input"
                  placeholder="Phone Number"
                  type="text"
                />
                <div class="first-name">Phone Number</div>
              </div>
            </div>
            <div class="group-parent2">
              <div class="group-parent1">
                <div class="vector-group">
                  <img class="group-item" alt="" src="/vector-4.svg" />
                  <div class="first-name">Last Name</div>
                </div>
                <input
                  class="rectangle-input"
                  placeholder="Last Name"
                  type="text"
                />
              </div>
              <div class="group-parent1">
                <div class="vector-group">
                  <img class="group-item" alt="" src="/vector-4.svg" />
                  <div class="first-name">Email</div>
                </div>
                <input
                  class="rectangle-input"
                  placeholder="EMail"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="group-parent5">
            <div class="vector-parent2">
              <img class="group-child5" alt="" src="/vector-9.svg" />
              <div class="first-name">Message</div>
              <div class="write-your-message">Write your message..</div>
            </div>
            <input class="frame-child32" placeholder="Message" type="text" />
          </div>
          <div class="frame-wrapper8">
            <div class="frame-wrapper9">
              <div class="frame-wrapper10">
                <div class="frame-wrapper11">
                  <div class="rectangle-wrapper6">
                    <button class="send-message-wrapper">
                      <div class="send-message">Send Message</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-child" />
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Contact",
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
    },
  });
</script>
<style scoped>
  .frame-child29 {
    width: 82px;
    position: relative;
    height: 73px;
    object-fit: cover;
  }
  .rectangle-wrapper6 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs);
  }
  .button89 {
    flex: 1;
    position: relative;
    line-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
  }
  .button88 {
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
  .button88:hover {
    background-color: var(--color-darkorchid-100);
  }
  .button90 {
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
  .button90:hover {
    background-color: #9554f1;
  }
  .button92 {
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
  .button92:hover {
    background-color: var(--color-darkorchid-300);
  }
  .button94 {
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
  .button94:hover {
    background-color: #9354ec;
  }
  .button96 {
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
  .button96:hover {
    background-color: #924fef;
  }
  .button98 {
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
  }
  .button98:hover {
    background-color: #9049f5;
  }
  .button-parent8 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-26xl);
  }
  .frame-parent12 {
    align-self: stretch;
    background-color: var(--color-black);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-3xs) var(--padding-xl);
  }
  .frame-child30 {
    width: 491px;
    position: relative;
    border-radius: 10px;
    height: 647px;
    z-index: 0;
  }
  .ellipse-div {
    width: 269px;
    position: relative;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.12);
    height: 269px;
    z-index: 1;
  }
  .contact-information {
    width: 291px;
    position: absolute;
    margin: 0 !important;
    top: 40px;
    left: 40px;
    font-weight: 600;
    display: inline-block;
    z-index: 2;
  }
  .carbonlocation-filled-icon {
    position: absolute;
    top: 148px;
    left: 0px;
    width: 24px;
    height: 24px;
    overflow: hidden;
  }
  .bxsphone-call-icon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 24px;
    height: 24px;
    overflow: hidden;
  }
  .div {
    position: absolute;
    top: 0px;
    left: 49px;
  }
  .bxsphone-call-parent {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 165px;
    height: 24px;
  }
  .icsharp-email-parent {
    position: absolute;
    top: 74px;
    left: 0px;
    width: 247px;
    height: 24px;
  }
  .state-hwy-8-south {
    margin: 0;
  }
  .state-hwy-8-south-container {
    position: absolute;
    top: 148px;
    left: 49px;
    display: inline-block;
    width: 288px;
  }
  .carbonlocation-filled-parent {
    width: 337px;
    position: absolute;
    margin: 0 !important;
    top: 226px;
    left: 40px;
    height: 244px;
    z-index: 3;
    font-size: var(--font-size-base);
  }
  .please-give-me-container {
    width: 379px;
    position: absolute;
    margin: 0 !important;
    top: 88px;
    left: 40px;
    font-size: 18px;
    color: #c9c9c9;
    display: inline-block;
    z-index: 4;
  }
  .polygon-icon {
    width: 242.6px;
    position: absolute;
    margin: 0 !important;
    top: 431.3px;
    left: 209.7px;
    height: 214.3px;
    object-fit: contain;
    z-index: 5;
  }
  .frame-child31 {
    width: 138px;
    position: absolute;
    margin: 0 !important;
    top: 2px;
    left: 0px;
    border-radius: 50%;
    background-color: rgba(255, 249, 249, 0.13);
    height: 138px;
    z-index: 6;
  }
  .vector-parent {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-11xl);
    width: 447.9px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame-wrapper7 {
    width: 447.9px;
    position: relative;
    height: 647px;
  }
  .group-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .group-item {
    position: absolute;
    top: 55px;
    left: 0px;
    border-radius: var(--br-11xl);
    max-height: 100%;
    width: 278px;
  }
  .group-inner {
    position: absolute;
    top: 32px;
    left: 5px;
    border-radius: var(--br-11xl);
    max-width: 100%;
    overflow: hidden;
    height: 11.5px;
  }
  .first-name {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 20px;
    font-weight: 500;
  }
  .vector-group {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 278px;
    height: 55px;
  }
  .rectangle-input {
    border: 1px solid var(--color-black);
    outline: none;
    background-color: var(--color-white);
    position: absolute;
    top: 20px;
    left: 0px;
    box-sizing: border-box;
    width: 283px;
    height: 35px;
  }
  .group-parent1 {
    width: 283px;
    position: relative;
    height: 55px;
  }
  .group-parent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 18px;
  }
  .group-parent2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
  }
  .frame-parent15 {
    width: 591px;
    height: 177px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }
  .group-child5 {
    position: absolute;
    top: 56px;
    left: 0px;
    border-radius: var(--br-11xl);
    max-height: 100%;
    width: 595px;
  }
  .write-your-message {
    position: absolute;
    top: 25.5px;
    left: 0px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    display: inline-block;
    width: 149px;
    height: 20.4px;
  }
  .vector-parent2 {
    width: 595px;
    position: relative;
    height: 56px;
  }
  .frame-child32 {
    border: 1px solid var(--color-black);
    outline: none;
    background-color: var(--color-white);
    align-self: stretch;
    position: relative;
    box-sizing: border-box;
    height: 125px;
  }
  .group-parent5 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: var(--color-gray-200);
  }
  .send-message {
    position: relative;
    font-size: var(--font-size-base);
    font-weight: 500;
    font-family: var(--font-poppins);
    color: var(--color-white);
    text-align: center;
  }
  .send-message-wrapper {
    cursor: pointer;
    border: none;
    padding: 15px 48px;
    background-color: var(--color-mediumblue-100);
    border-radius: var(--br-11xl);
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .send-message-wrapper:hover {
    background-color: #9856f5;
  }
  .frame-wrapper11 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .frame-wrapper10 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame-wrapper9 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .frame-wrapper8 {
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame-parent14 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 30px;
    font-size: var(--font-size-xs);
    color: var(--color-black);
  }
  .frame-parent13 {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-xl);
    background-color: var(--color-white);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-xl) var(--padding-31xl);
  }
  .contact-inner {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    padding: var(--padding-11xl) 0px;
    text-align: left;
    font-size: 28px;
    font-family: var(--font-poppins);
  }
  .contact-child {
    width: 1325px;
    position: relative;
    background-color: var(--color-gray-400);
    height: 259px;
  }
  .contact {
    width: 100%;
    position: relative;
    background-color: var(--color-gray-400);
    height: 1487px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 25px;
    box-sizing: border-box;
    gap: var(--gap-56xl);
    text-align: center;
    font-size: var(--font-size-mid);
    color: var(--color-white);
    font-family: var(--font-inter);
  }
</style>
