import { Suspense, lazy } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Nav from "./pages/home/nav/Nav";
import "./Normalize.scss";
import { Ring } from "@uiball/loaders";
const Posts = lazy(() => import("./pages/home/posts/Posts"));
const Category = lazy(() => import("./routes/Category"));

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/:category"
          element={
            <Suspense fallback={<Ring size={60} speed={2} color="black" />}>
              <Posts />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
