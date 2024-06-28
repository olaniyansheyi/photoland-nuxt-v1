import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faTimes,
  faSearch,
  faCartPlus,
  faSpinner,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBars,
  faSearch,
  faCartPlus,
  faTwitter,
  faLinkedin,
  faWhatsapp,
  faTimes,
  faSpinner,
  faSignOutAlt
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
