import {App, Plugin} from "vue";
import "../style.css";
import {default as libComponent} from "./lib-components/LktLogin.vue";


const LktLogin: Plugin = {
    install: (app: App) => {
        if (app.component('lkt-login') === undefined) app.component('lkt-login', libComponent)
    },
};

export default LktLogin;