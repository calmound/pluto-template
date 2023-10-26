// 运行时配置

import { RequestConfig } from '@umijs/max';
import { AxiosRequestConfig } from 'axios';

import '@inspir/assembly-css/dist/special.css';
import { message } from 'antd';
import { RESPONSE_CODE } from './constants/enum';

// import './style/global.less';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    menu: {
      locale: false,
      // header: true,
      headerRender: true,
      // rightContentRender: () => <RightContent />,
      // footerRender: () => <Footer />,
    },
  };
};

export const request: RequestConfig = {
  // 错误处理
  errorHandler: (error) => {
    const { response, data } = error;
    if (response && response.status) {
      // 401重定向
      if (response.status === 401) {
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
  responseInterceptors: [
    // 一个二元组，第一个元素是 request 拦截器，第二个元素是错误处理
    [
      (response) => {
        // 不再需要异步处理读取返回体内容，可直接在data中读出，部分字段可在 config 中找到
        const { data = {} as any } = response;
        if (data.code !== RESPONSE_CODE.SUCCESS) {
          message.error('服务器错误，请稍后再试！');
        }
        // do something
        return response;
      },
      (error) => {
        return Promise.reject(error);
      },
    ],
  ],
};
