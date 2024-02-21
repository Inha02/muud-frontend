import CalendarPage from "../pages/calendar-page";
import LoginPage from "../pages/login-page";
import MoodResultPage from "../pages/mood-result-page";
import RegisterPage from "../pages/register-page";
import SuggestPlaylistPage from "../pages/suggest-playlist-page";

export const MenuList = [
  {
    path: "/",
    element: <SuggestPlaylistPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/calendar",
    element: <CalendarPage />,
  },
  {
    path: "/result",
    element: <MoodResultPage />,
  },
  {
    path: "/playlist",
    element: <SuggestPlaylistPage />,
  },
];
