import HorizontalLayout from "@/components/layouts/HorizontalLayout.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HorizontalLayout,
    children: [
      {
        path: "",
        component: HomeView,
      },
    ],
  },
];

export default routes;
