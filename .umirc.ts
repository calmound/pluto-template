import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    style: 'less',
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '项目组模板',
  },
  proxy: {
    '/api/': {
      target: 'http://11.1.1.144:31590/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: '用户',
      path: '/user',
      component: './User',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],

  npmClient: 'pnpm',
  tailwindcss: {},
});
