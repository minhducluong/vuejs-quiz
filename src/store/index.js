import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current: 0,
    questions: [
      {
        ask: 'Hà Nội có bao nhiêu con voi?',
        options: [0, 1, 2, 3],
        answerIndex: 3
      },
      {
        ask: 'Voi Hà Nội sống ở đâu (nếu có)?',
        options: [
          'Ba Vì',
          'HN không có voi',
          'Vườn Bách Thảo',
          'Thủ Lệ'
        ],
        answerIndex: 3
      },
      {
        ask: 'So sánh về chức năng, vòi của voi tương ứng với bộ phận nào của con người?',
        options: [
          'Miệng',
          'Tay',
          'Mũi',
          'Mũi + tay + môi trên'
        ],
        answerIndex: 3
      },
      {
        ask: 'Voi con biết đi sau bao lâu kể từ khi chào đời?',
        options: [
          'vài phút',
          'vài giờ',
          'vài ngày',
          'vài tuần'
        ],
        answerIndex: 1
      },
      {
        ask: 'Việt Nam tính đến giữa năm 2019 đang có tất cả bao nhiêu con voi?',
        options: [
          'Khoảng 100',
          'Khoảng 200',
          'Khoảng 500',
          'Khoảng 50'
        ],
        answerIndex: 0
      },
    ]
  },
  getters: {
    answered(state) {
      return state.questions.reduce((total, question) => 
        question.chosen || question.chosen === 0 
        ? total + 1 
        : total
      , 0);
    },
    point(state) {
      const questions = state.questions;

      return questions.reduce( (point, question) => 
        question.chosen === question.answerIndex
        ? point + 1
        : point
      , 0)
    }
  },
  mutations: {
    PREV(state) {
      let current = state.current
      const questions = state.questions

      if (current === 0) {
        state.current =  questions.length - 1
      } else {
        state.current -= 1
      }
    },
    NEXT(state) {
      let current = state.current
      const questions = state.questions

      if (current === questions.length - 1) {
        state.current =  0
      } else {
        state.current += 1
      }
    },
    SELECT(state, index) {
      const current = state.current
      const questions = state.questions
      let chosen = questions[current].chosen

      if (!chosen && chosen !== 0) {
        // Select option
        Vue.set(questions[current], 'chosen', index); // Register 'chosen' to Vue instance to make it reactive
      } else if (chosen === index) {
      // Clear answer
        questions[current].chosen = null
      } else {
      // Change option
        questions[current].chosen = index
      }
      
    }
  },
  actions: {
    prev({ commit }) {
      commit('PREV')
    },
    next({ commit }) {
      commit('NEXT')
    },
    select({ commit }, index) {
      commit('SELECT', index)
    }
  },
  modules: {
  }
})
