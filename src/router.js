import Vue from "vue";
import VueRouter from "vue-router";
import {Firebase} from "./main";

Vue.use(VueRouter);

const HomeView = () => import("./views/Home.vue");
const LoginView = () => import("./views/Login.vue");
const AppView = () => import("./views/App.vue");

const redirectIfLoggedIn = function(to, from, next){
    Firebase.auth().onAuthStateChanged(user => {
        if (user) {
            router.push({ path: "/app" });
        }
    });

    next();
}

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
      beforeEnter: redirectIfLoggedIn
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
      beforeEnter: redirectIfLoggedIn
    },
    {
      path: "/logout",
      name: "Logout",
      beforeEnter: function(to, from, next) {
        Firebase.auth().signOut();
        router.push({ path: "/app" });
        next();
      }
    },
    {
        path: "/success",
        beforeEnter() {
            return router.push({ path: "/app" });
        }
    },
    {
        path: "/app",
        component: AppView,
        beforeEnter(to, from, next) {
            Firebase.auth().onAuthStateChanged(user => {
                if (!user) {
                    return router.push({ path: "/login" });
                }
            });
            next();
        }
    },
  ]
});