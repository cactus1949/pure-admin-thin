export default {
  path: "/table",
  redirect: "/table/index",
  meta: {
    icon: "informationLine",
    title: "table",
    showLink: true,
    rank: 9
  },
  children: [
    {
      path: "/table/index",
      name: "TableIndex",
      component: () => import("@/views/table/index.vue"),
      meta: {
        title: "tableIndex"
      }
    }
  ]
} as RouteConfigsTable;
