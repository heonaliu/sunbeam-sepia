import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CameraPage from "./pages/CameraPage";
import EditorPage from "./pages/EditorPage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/capture", element: <CameraPage /> },
  { path: "/edit", element: <EditorPage /> },
]);

export default router;