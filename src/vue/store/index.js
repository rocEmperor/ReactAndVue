import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const context = require.context('./', true, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');
let modules = {};

keys.forEach(item => {
  item = item.replace('./', '');
  let moduleItem = require(`./${item}`).default;
  if (moduleItem) {
    let name = moduleItem.name;
    delete moduleItem.name;
    modules[name] = moduleItem;
  }
});
export default new Vuex.Store({
  modules: { ...modules }
});