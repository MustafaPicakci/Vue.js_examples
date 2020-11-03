import Home from "./components/Home";
import Header from "./components/Header";

const User = (resolve) => {
  require.ensure(
    ["./components/user/User.vue"],
    () => {
      resolve(require("./components/user/User.vue"));
    },
    "user"
  ); //buradaki "user" parametresi sayesinde komponentleri grupladık ve bu gruptaki komponentlerden bir tanesi yüklenirse tamamı yüklensin demiş olduk. (Bu parametreyi kullanmak zorunda değiliz.)
};
const UserStart = (resolve) => {
  require.ensure(
    ["./components/user/UserStart.vue"],
    () => {
      resolve(require("./components/user/UserStart.vue"));
    },
    "user"
  ); //buradaki "user" parametresi sayesinde komponentleri grupladık ve bu gruptaki komponentlerden bir tanesi yüklenirse tamamı yüklensin demiş olduk. (Bu parametreyi kullanmak zorunda değiliz.)
};
const UserDetail = (resolve) => {
  require.ensure(
    ["./components/user/UserDetail.vue"],
    () => {
      resolve(require("./components/user/UserDetail.vue"));
    },
    "user"
  ); //buradaki "user" parametresi sayesinde komponentleri grupladık ve bu gruptaki komponentlerden bir tanesi yüklenirse tamamı yüklensin demiş olduk. (Bu parametreyi kullanmak zorunda değiliz.)
};
const UserEdit = (resolve) => {
  require.ensure(["./components/user/UserEdit.vue"], () => {
    resolve(require("./components/user/UserEdit.vue"));
  }); //burada user parametresini kullanmadık. Bu komponent sadeec ihtiyaç duyulduğunda yüklenecek
};

/*
Aşağıdaki componentler kullanılacağı zaman yükleniyor. Bu işlem yukarıda tanımlandı.

import User from "./components/user/User";
import UserStart from "./components/user/UserStart";
import UserEdit from "./components/user/UserEdit";
import UserDetail from "./components/user/UserDetail";
*/
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
      "header-top": Header,
    },
    name: "kullanici",
    children: [
      { path: "/", component: UserStart }, //       user
      {
        path: ":id",
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log("route seviyesinde kontrol!!");
          next();
        },
      }, //    user:10
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
