import {} from "vite-plugin-mock";

export default [
  // test
  {
    url: "/first/list",
    method: "post",
    response: () => {
      return {
        success: true,
        data: {
          list: [
            {
              name: "杭州总公司",
              parentId: 0,
              id: 100,
              sort: 0,
              phone: "15888888888",
              principal: "@cname()",
              email: "@email",
              status: 1, // 状态 1 启用 0 停用
              type: 1, // 1 公司 2 分公司 3 部门
              createTime: 1605456000000,
              remark: "@cparagraph(1, 3)"
            },
            {
              name: "郑州分公司",
              parentId: 100,
              id: 101,
              sort: 1,
              phone: "15888888888",
              principal: "@cname()",
              email: "@email",
              status: 1,
              type: 2,
              createTime: 1605456000000,
              remark: "@cparagraph(1, 3)"
            },
            {
              name: "研发部门",
              parentId: 101,
              id: 103,
              sort: 1,
              phone: "15888888888",
              principal: "@cname()",
              email: "@email",
              status: 1,
              type: 3,
              createTime: 1605456000000,
              remark: "@cparagraph(1, 3)"
            }
          ],
          total: 3,
          currentPage: 1,
          pageSize: 10
        }
      };
    }
  }
];
