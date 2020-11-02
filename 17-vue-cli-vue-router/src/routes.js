import Home from "./components/Home";
import User from "./components/user/User";

export const routes = [
  { path: "/", component: Home, name: "anasayfa" },
  { path: "/user", component: User, name: "kullanici" },
];
