export default {
  path: "/table",
  redirect: "/table/index",
  meta: {
    icon: "informationLine",
    title: "中间水尺计算",
    showLink: true,
    rank: 9
  },
  children: [
    {
      path: "/table/index",
      name: "TableIndex",
      component: () => import("@/views/table/index.vue"),
      meta: {
        title: "中间水尺计算"
      }
    }
  ]
} as RouteConfigsTable;
