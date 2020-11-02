import Home from "./components/Home";
import User from "./components/user/User";
import UserStart from "./components/user/UserStart";
import UserEdit from "./components/user/UserEdit";
import UserDetail from "./components/user/UserDetail";

export const routes = [
  { path: "/", component: Home, name: "anasayfa" },
  {
    path: "/user",
    component: User,
    name: "kullanici",
    children: [
      { path: "/", component: UserStart }, //       user
      { path: ":id", component: UserDetail }, //    user:10
      { path: ":id/edit", component: UserEdit, name: "userEdit" }, // user:/10/edit
    ],
  },
];
