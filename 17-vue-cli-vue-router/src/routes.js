import Home from "./components/Home";
import User from "./components/user/User";
import UserStart from "./components/user/UserStart";
import UserEdit from "./components/user/UserEdit";
import UserDetail from "./components/user/UserDetail";
import Header from "./components/Header";

export const routes = [
  {
    path: "/",
    name: "anasayfa",
    components: {
      default: Home,
      "header-top": Header,
    },
  },
  {
    path: "/user",
    components: {
      default: User,
      "header-bottom": Header,
    },
    name: "kullanici",
    children: [
      { path: "/", component: UserStart }, //       user
      { path: ":id", component: UserDetail }, //    user:10
      { path: ":id/edit", component: UserEdit, name: "userEdit" }, // user:/10/edit
    ],
  },
  {
    path: "/redirect",
    redirect: { name: "anasayfa" },
  },
  {
    path: "*", //hiçbirine uymayan bir istek gelirse /'ya yönlendirme işlemi
    redirect: "/",
  },
];
