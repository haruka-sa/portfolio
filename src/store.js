import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    skillCategories: [],
    loaded: false
  },

  getters: {
    getSkills: (state) => (category) => {
      if (state.skillCategories.length > 0) {
        return state.skillCategories.find((skill) => skill.category===category);
      }
      return [];
    },
  },

  mutations: {
  //   setSkillCategories : function(state,skillsArray) {
  //     skillsArray[0].skill.forEach((skillInfo) => {
  //       state.skillCategories.push(skillInfo.name)
  //     })
  //     state.loaded = true
  //   }
  // },
    setSkillCategories(state,payload) {
      state.skillCategories = payload.skillCategories;
      state.loaded = true
    }

  },

  actions: {
    async updateSkillCategories({commit}) {
      const skillCategories = [];
      const res = await axios.get('https://us-central1-myfirstfirebase-34643.cloudfunctions.net/skillCategories')
      res.data.forEach((category) => {
        skillCategories.push(category);
      });
      commit('setSkillCategories', {skillCategories});
    },
  },
})
