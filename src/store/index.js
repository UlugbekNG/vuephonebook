
import {createStore} from "vuex";

import contactModule from "./contact";
import contactGroupModule from "./contactGroup";

export default createStore({
    modules: {
        contact: contactModule,
        contactGroup: contactGroupModule
    }
})