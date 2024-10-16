import { Route, Routes, useLocation } from "react-router-dom";
import { DefaultLayout } from "@/components";
import { Main, Study } from "@/pages";
import NotFound from "@/pages/404";
import Progress from "@/pages/Progress";
import analysis from "@/pages/analysis";
import Signin from "@/pages/login";
import QuizDeck from "@/pages/quiz-deck";
import Signup from "@/pages/signup";
import support from "@/pages/support";

// Ensure Loader is imported correctly

const coreRoutes = [
  {
    path: "/",
    title: "Home",
    component: Main
  },
  {
    path: "/study/:moduleId",
    title: "study",
    component: Study
  },
  {
    path: "/quiz-deck",
    title: "quiz-deck",
    component: QuizDeck
  },
  {
    path: "/Progress",
    title: "Progress",
    component: Progress
  },
  {
    path: "/support",
    title: "support",
    component: support
  },
  {
    path: "/analysis",
    title: "analysis",
    component: analysis
  }
];

const CustomRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      {/* Routes with DefaultLayout */}
      <Route path="/login" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<DefaultLayout />}>
        {coreRoutes.map((route, index) => {
          const { path, component: Component } = route;

          return <Route key={index} path={path} element={<Component />} />;
        })}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default CustomRoutes;
