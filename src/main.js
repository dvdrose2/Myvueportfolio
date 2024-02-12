import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import Index1 from "./pages/Index1.vue";
import Resume from "./pages/Resume.vue";
import Uidesign from "./pages/Uidesign.vue";
import Uidesign1 from "./pages/Uidesign1.vue";
import Portfolio from "./pages/Portfolio.vue";
import Certificates from "./pages/Certificates.vue";
import Contact from "./pages/Contact.vue";
import "./global.css";

const routes = [
  {
    path: "/",
    name: "Index1",
    component: Index1,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
  {
    path: "/uidesign",
    name: "Uidesign",
    component: Uidesign,
  },
  {
    path: "/uidesign2",
    name: "Uidesign1",
    component: Uidesign1,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/certificates",
    name: "Certificates",
    component: Certificates,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  const documentTitle =
    toRoute?.meta && toRoute?.meta?.title
      ? toRoute?.meta?.title
      : "MyPortfolio";
  window.document.title = documentTitle;
  if (toRoute?.meta?.description) {
    addMetaTag(toRoute?.meta?.description);
  }
  next();
});

const addMetaTag = (value) => {
  let element = document.querySelector(`meta[name='description']`);

  if (element) {
    element.setAttribute("content", value);
  } else {
    element = `<meta name="description" content="${value}" />`;
    document.head.insertAdjacentHTML("beforeend", element);
  }
};

createApp(App).use(router).mount("#app");

export default router;
