import { createApp } from 'vue'

import "bootstrap/dist/css/bootstrap.min.css";

import App from './App.vue'

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
// brands
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {faArrowCircleLeft, faArrowLeft, faArrowRight, faBriefcase, faCartShopping, faClapperboard, faCrosshairs, faDisplay, faGear, faImage, faList, faMobileScreenButton, faRocket, faSignal, faStar, faThumbsUp, faUserGroup, faWrench } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';




/* add icons to the library */
library.add(
  faXTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
  faSignal,
  faList,
  faClock,
  faDisplay,
  faCrosshairs,
  faWrench,
  faCartShopping,
  faMobileScreenButton,
  faBriefcase,
  faRocket,
  faGear,
  faThumbsUp,
  faUserGroup,
  faClapperboard,
  faImage,
  faStar,
  faArrowRight,
  faArrowLeft,
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
