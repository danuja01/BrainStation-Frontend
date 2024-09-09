import { configureStore } from "@reduxjs/toolkit";
import lecturesReducer from "./lecturesSlice";
import mcqReducer from "./mcqSlice";
import modulesReducer from "./moduleSlice";
import quizzesReducer from "./quizzesSlice";

const store = configureStore({
  reducer: {
    lectures: lecturesReducer,
    quizzes: quizzesReducer,
    mcq: mcqReducer,
    modules: modulesReducer
  }
});

export default store;
