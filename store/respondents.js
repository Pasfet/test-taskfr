export const state = () => ({
  conditions: [],
  quiz: [],
});

export const mutations = {
  setConditions(state, payload) {
    state.conditions = payload;
  },
  addCondition(state) {
    state.quiz.push({ id: state.quiz.length, value: null });
  },
  saveCondition(state, { payload }) {
    const findCond = state.quiz.find((c) => payload.id === c.id);

    if (findCond) {
      findCond.value = payload.cond;
    }
  },
  removeCondition(state, { payload }) {
    state.quiz = state.quiz.filter((c) => c.id !== payload.id);
  },
};

export const getters = {
  getConditions(state) {
    return state.conditions;
  },
  getQuiz(state) {
    return state.quiz;
  },
};
