export default {
  path: "/last",
  redirect: "/last/index",
  meta: {
    icon: "informationLine",
    title: "末次水尺计算",
    showLink: true,
    rank: 10
  },
  children: [
    {
      path: "/last/index",
      name: "LastIndex",
      component: () => import("@/views/last/index.vue"),
      meta: {
        title: "末次水尺计算"
      }
    }
  ]
} as RouteConfigsTable;
