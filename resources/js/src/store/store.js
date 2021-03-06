
import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

import moduleAuth from './auth/moduleAuth';
import moduleUser from './user/moduleUser';
import modulePackage from './package/modulePackage';
import moduleRolesAndPermissions from './roles-and-permissions/moduleRolesAndPermissions';
import moduleAgency from "./agency/moduleAgency";
import moduleNotification from "./notification/moduleNotification";
import moduleCategory from "./category/moduleCategory";
import moduleCombination from "./combination/moduleCombination";
import moduleCriteria from "./criteria/moduleCriteria";
import moduleProduct from "./product/moduleProduct";
import moduleUserProduct from "./user-product/moduleUserProduct";
import moduleShipping from "./shipping/moduleShipping";
import moduleCity from "./city/moduleCity";
import moduleShippingPrice from "./shipping-price/moduleShippingPrice";
import moduleStatus from "./status/moduleStatus";
import moduleDesign from "./design/moduleDesign";
import moduleDesignPrintPrice from "./design-print-price/moduleDesignPrintPrice";
import moduleOrder from "./order/moduleOrder";
import moduleRestoredItem from "./restored-item/moduleRestoredItem";
import moduleInvoice from "./invoice/moduleInvoice";
import moduleTransaction from "./transaction/moduleTransaction";


const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
        auth: moduleAuth,
        user: moduleUser,
        package: modulePackage,
        rolesAndPermissions: moduleRolesAndPermissions,
        agency: moduleAgency,
        notification: moduleNotification,
        category: moduleCategory,
        combination: moduleCombination,
        criteria: moduleCriteria,
        product: moduleProduct,
        userProduct: moduleUserProduct,
        shipping: moduleShipping,
        city: moduleCity,
        shippingPrice: moduleShippingPrice,
        status: moduleStatus,
        design: moduleDesign,
        designPrintPrice: moduleDesignPrintPrice,
        order: moduleOrder,
        restoredItem: moduleRestoredItem,
        invoice: moduleInvoice,
        transaction: moduleTransaction,
    },
    plugins: [vuexLocal.plugin],
    strict: process.env.NODE_ENV !== 'production'
})
