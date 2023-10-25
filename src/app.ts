// 运行时配置

import { RequestConfig } from '@umijs/max';
import { AxiosRequestConfig } from 'axios';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};

export const request: RequestConfig = {
  // 错误处理
  errorHandler: (error) => {
    const { response, data } = error;
    if (response && response.status) {
      // 401重定向
      if (response.status == 401) {
        if (!location.pathname.includes(loginPath)) {
          localStorage.removeItem('token');
          message.error('token失效，请重新登录！');
          // history.push(loginPath);
          return null;
        }
      }
    }
    return data;
  },
  // 请求处理
  requestInterceptors: [
    (url: string, options) => {
      console.log(
        '%c [ options ]-41',
        'font-size:13px; background:pink; color:#bf2c9f;',
        options,
      );
      const controller = new AbortController(); // create a controller
      const { signal } = controller;

      let authHeader: { Authorization?: string; systemid?: string } = {};
      if (localStorage.getItem('token')) {
        authHeader = {
          Authorization: localStorage.getItem('token') || undefined,
        };
      }

      const requestOption: AxiosRequestConfig = {
        method: options.method || 'get',
      };

      if (options.header) {
        requestOption.headers = options.header;
      }

      if (options.body) {
        requestOption.data = options.body;
      }

      if (options.query) {
        options.params = options.query;
      }

      return {
        url: `/api${url}`,
        options: {
          ...options,
          signal,
          interceptors: true,
          headers: authHeader,
        },
      };
    },
  ],
};
