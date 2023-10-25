/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import { request as requester } from "umi";
import type {
  ZFWJInternalPkgRequestUpdateProfileRequest,
  ZFWJInternalPkgResponseResponse,
  ZFWJInternalPkgRequestDeleteUserRequest,
  ZFWJInternalPkgRequestAddDicReq,
  ZFWJInternalPkgRequestDeleteDicReq,
  ZFWJInternalPkgRequestGetDicList,
  ZFWJInternalPkgRequestUpdateDicReq,
  ZFWJInternalPkgRequestCreateGdmTaskRequest,
  ZFWJInternalPkgRequestCreateGdmUploadRequest,
  ZFWJInternalPkgRequestUpdateGdmUploadRequest,
  ZFWJInternalPkgRequestUpdateGameDataMiningResultRequest,
  ZFWJInternalPkgRequestOpenTaskRequest,
  ZFWJInternalPkgRequestUpdateOrsRequest,
  ZFWJInternalPkgRequestCreateOrsRequest,
  ZFWJInternalPkgRequestLoginRequest,
  ZFWJInternalPkgRequestRegisterRequest,
  ZFWJInternalPkgRequestUpdateStrategyRuleRequest,
  ZFWJInternalPkgRequestCreateStrategyRuleRequest,
  ZFWJInternalPkgRequestStrategyRuleArchiveRequest,
  ZFWJInternalPkgRequestUpdateTmtRequest,
  ZFWJInternalPkgRequestCreateTmtRequest,
  ZFWJInternalPkgRequestUpdateTmrRequest,
} from "./definition";

/** @description request parameter type for putAdminUser */
export interface PutAdminUserOption {
  /**
   * @description
   *   用户信息
   */
  body: {
    /**
        @description
          用户信息 */
    request: ZFWJInternalPkgRequestUpdateProfileRequest;
  };
}

/** @description response type for putAdminUser */
export interface PutAdminUserResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type PutAdminUserResponseSuccess = PutAdminUserResponse[200];
/**
 * @description
 *   更新用户信息
 * @tags 用户模块
 * @produces application/json
 * @consumes application/json
 */
export const putAdminUser = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/admin/user";
  function request(
    option: PutAdminUserOption
  ): Promise<PutAdminUserResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PutAdminUserResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for deleteAdminUserDelete */
export interface DeleteAdminUserDeleteOption {
  /**
   * @description
   *   删除用户
   */
  body: {
    /**
        @description
          删除用户 */
    request: ZFWJInternalPkgRequestDeleteUserRequest;
  };
}

/** @description response type for deleteAdminUserDelete */
export interface DeleteAdminUserDeleteResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type DeleteAdminUserDeleteResponseSuccess =
  DeleteAdminUserDeleteResponse[200];
/**
 * @description
 *   删除用户
 * @tags 用户模块
 * @produces application/json
 * @consumes application/json
 */
export const deleteAdminUserDelete = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/admin/user/delete";
  function request(
    option: DeleteAdminUserDeleteOption
  ): Promise<DeleteAdminUserDeleteResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<DeleteAdminUserDeleteResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getAdminUserList */
export interface GetAdminUserListOption {
  /**
   * @description
   *   PageNum
   */
  query: {
    /**
        @description
          PageNum */
    PageNum: number;
    /**
        @description
          PageSize */
    PageSize: number;
  };
}

/** @description response type for getAdminUserList */
export interface GetAdminUserListResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetAdminUserListResponseSuccess = GetAdminUserListResponse[200];
/**
 * @description
 *   获取用户列表
 * @tags 用户模块
 * @produces application/json
 * @consumes application/json
 */
export const getAdminUserList = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/admin/user/list";
  function request(
    option: GetAdminUserListOption
  ): Promise<GetAdminUserListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetAdminUserListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for putDictionaryCreate */
export interface PutDictionaryCreateOption {
  /**
   * @description
   *   字典信息
   */
  body: {
    /**
        @description
          字典信息 */
    request: Array<ZFWJInternalPkgRequestAddDicReq>;
  };
}

/** @description response type for putDictionaryCreate */
export interface PutDictionaryCreateResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type PutDictionaryCreateResponseSuccess =
  PutDictionaryCreateResponse[200];
/**
 * @description
 *   新增字典
 *   新增字典
 * @tags 字典
 * @produces application/json
 * @consumes application/json
 */
export const putDictionaryCreate = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/dictionary/create";
  function request(
    option: PutDictionaryCreateOption
  ): Promise<PutDictionaryCreateResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PutDictionaryCreateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for deleteDictionaryDelete */
export interface DeleteDictionaryDeleteOption {
  /**
   * @description
   *   字典id
   */
  body: {
    /**
        @description
          字典id */
    request: ZFWJInternalPkgRequestDeleteDicReq;
  };
}

/** @description response type for deleteDictionaryDelete */
export interface DeleteDictionaryDeleteResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type DeleteDictionaryDeleteResponseSuccess =
  DeleteDictionaryDeleteResponse[200];
/**
 * @description
 *   删除字典
 *   删除字典
 * @tags 字典
 * @produces application/json
 * @consumes application/json
 */
export const deleteDictionaryDelete = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/dictionary/delete";
  function request(
    option: DeleteDictionaryDeleteOption
  ): Promise<DeleteDictionaryDeleteResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<DeleteDictionaryDeleteResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for getDictionaryGetAll */
export interface GetDictionaryGetAllResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetDictionaryGetAllResponseSuccess =
  GetDictionaryGetAllResponse[200];
/**
 * @description
 *   获取全量字典
 *   获取全量字典
 * @tags 字典
 * @produces application/json
 * @consumes application/json
 */
export const getDictionaryGetAll = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/dictionary/get-all";
  function request(): Promise<GetDictionaryGetAllResponseSuccess> {
    return requester(request.url, {
      method: request.method,
    }) as unknown as Promise<GetDictionaryGetAllResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postDictionaryList */
export interface PostDictionaryListOption {
  /**
   * @description
   *   当前页,页面大小
   */
  body: {
    /**
        @description
          当前页,页面大小 */
    request: ZFWJInternalPkgRequestGetDicList;
  };
}

/** @description response type for postDictionaryList */
export interface PostDictionaryListResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type PostDictionaryListResponseSuccess = PostDictionaryListResponse[200];
/**
 * @description
 *   获取字典列表
 *   获取字典列表
 * @tags 字典
 * @produces application/json
 * @consumes application/json
 */
export const postDictionaryList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/dictionary/list";
  function request(
    option: PostDictionaryListOption
  ): Promise<PostDictionaryListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostDictionaryListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postDictionaryUpdate */
export interface PostDictionaryUpdateOption {
  /**
   * @description
   *   字典信息
   */
  body: {
    /**
        @description
          字典信息 */
    request: ZFWJInternalPkgRequestUpdateDicReq;
  };
}

/** @description response type for postDictionaryUpdate */
export interface PostDictionaryUpdateResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type PostDictionaryUpdateResponseSuccess =
  PostDictionaryUpdateResponse[200];
/**
 * @description
 *   更新字典信息
 *   更新字典信息
 * @tags 字典
 * @produces application/json
 * @consumes application/json
 */
export const postDictionaryUpdate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/dictionary/update";
  function request(
    option: PostDictionaryUpdateOption
  ): Promise<PostDictionaryUpdateResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostDictionaryUpdateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postGamedataminingCreateMiningTask */
export interface PostGamedataminingCreateMiningTaskOption {
  /**
   * @description
   *   创建博弈数据挖掘任务
   */
  body: {
    /**
        @description
          创建博弈数据挖掘任务 */
    request: ZFWJInternalPkgRequestCreateGdmTaskRequest;
  };
}

/** @description response type for postGamedataminingCreateMiningTask */
export interface PostGamedataminingCreateMiningTaskResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type PostGamedataminingCreateMiningTaskResponseSuccess =
  PostGamedataminingCreateMiningTaskResponse[200];
/**
 * @description
 *   创建博弈数据挖掘任务
 * @tags 博弈数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const postGamedataminingCreateMiningTask = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/gamedatamining/create-mining-task";
  function request(
    option: PostGamedataminingCreateMiningTaskOption
  ): Promise<PostGamedataminingCreateMiningTaskResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostGamedataminingCreateMiningTaskResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postGamedataminingCreateUploadTask */
export interface PostGamedataminingCreateUploadTaskOption {
  /**
   * @description
   *   上传博弈数据
   */
  body: {
    /**
        @description
          上传博弈数据 */
    request: ZFWJInternalPkgRequestCreateGdmUploadRequest;
  };
}

/** @description response type for postGamedataminingCreateUploadTask */
export interface PostGamedataminingCreateUploadTaskResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type PostGamedataminingCreateUploadTaskResponseSuccess =
  PostGamedataminingCreateUploadTaskResponse[200];
/**
 * @description
 *   上传博弈数据
 * @tags 博弈数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const postGamedataminingCreateUploadTask = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/gamedatamining/create-upload-task";
  function request(
    option: PostGamedataminingCreateUploadTaskOption
  ): Promise<PostGamedataminingCreateUploadTaskResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostGamedataminingCreateUploadTaskResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getGamedataminingGameDataDetail */
export interface GetGamedataminingGameDataDetailOption {
  /**
   * @description
   *   数据ID
   */
  query: {
    /**
        @description
          数据ID */
    id: string;
  };
}

/** @description response type for getGamedataminingGameDataDetail */
export interface GetGamedataminingGameDataDetailResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetGamedataminingGameDataDetailResponseSuccess =
  GetGamedataminingGameDataDetailResponse[200];
/**
 * @description
 *   获取博弈数据详情
 * @tags 博弈数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const getGamedataminingGameDataDetail = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/gamedatamining/game-data-detail";
  function request(
    option: GetGamedataminingGameDataDetailOption
  ): Promise<GetGamedataminingGameDataDetailResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetGamedataminingGameDataDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for putGamedataminingGameDataDetail */
export interface PutGamedataminingGameDataDetailOption {
  /**
   * @description
   *   更新博弈数据
   */
  body: {
    /**
        @description
          更新博弈数据 */
    request: ZFWJInternalPkgRequestUpdateGdmUploadRequest;
  };
}

/** @description response type for putGamedataminingGameDataDetail */
export interface PutGamedataminingGameDataDetailResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type PutGamedataminingGameDataDetailResponseSuccess =
  PutGamedataminingGameDataDetailResponse[200];
/**
 * @description
 *   更新博弈数据
 * @tags 博弈数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const putGamedataminingGameDataDetail = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/gamedatamining/game-data-detail";
  function request(
    option: PutGamedataminingGameDataDetailOption
  ): Promise<PutGamedataminingGameDataDetailResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PutGamedataminingGameDataDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for deleteGamedataminingGameDataDetail */
export interface DeleteGamedataminingGameDataDetailOption {
  /**
   * @description
   *   数据ID
   */
  query: {
    /**
        @description
          数据ID */
    Id: string;
  };
}

/** @description response type for deleteGamedataminingGameDataDetail */
export interface DeleteGamedataminingGameDataDetailResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type DeleteGamedataminingGameDataDetailResponseSuccess =
  DeleteGamedataminingGameDataDetailResponse[200];
/**
 * @description
 *   删除博弈数据
 * @tags 博弈数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const deleteGamedataminingGameDataDetail = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/gamedatamining/game-data-detail";
  function request(
    option: DeleteGamedataminingGameDataDetailOption
  ): Promise<DeleteGamedataminingGameDataDetailResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<DeleteGamedataminingGameDataDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getGamedataminingGameDataList */
export interface GetGamedataminingGameDataListOption {
  /**
   * @description
   *   页码
   * @default 1
   */
  query: {
    /**
        @description
          页码
        @default 1 */
    PageNum: string;
    /**
        @description
          每页数量
        @default 10 */
    PageSize: string;
    /**
        @description
          任务名称 */
    TaskName?: string;
  };
}

/** @description response type for getGamedataminingGameDataList */
export interface GetGamedataminingGameDataListResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetGamedataminingGameDataListResponseSuccess =
  GetGamedataminingGameDataListResponse[200];
/**
 * @description
 *   支持分页
 *   获取博弈数据列表
 * @tags 博弈数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const getGamedataminingGameDataList = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/gamedatamining/game-data-list";
  function request(
    option: GetGamedataminingGameDataListOption
  ): Promise<GetGamedataminingGameDataListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetGamedataminingGameDataListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getGamedataminingMiningResultDetail */
export interface GetGamedataminingMiningResultDetailOption {
  /**
   * @description
   *   结果ID
   */
  query: {
    /**
        @description
          结果ID */
    Id: string;
  };
}

/** @description response type for getGamedataminingMiningResultDetail */
export interface GetGamedataminingMiningResultDetailResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetGamedataminingMiningResultDetailResponseSuccess =
  GetGamedataminingMiningResultDetailResponse[200];
/**
 * @description
 *   获取博弈数据挖掘结果详情
 * @tags 博弈数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const getGamedataminingMiningResultDetail = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/gamedatamining/mining-result-detail";
  function request(
    option: GetGamedataminingMiningResultDetailOption
  ): Promise<GetGamedataminingMiningResultDetailResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetGamedataminingMiningResultDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for putGamedataminingMiningResultDetail */
export interface PutGamedataminingMiningResultDetailOption {
  /**
   * @description
   *   更新博弈数据挖掘结果
   */
  body: {
    /**
        @description
          更新博弈数据挖掘结果 */
    request: ZFWJInternalPkgRequestUpdateGameDataMiningResultRequest;
  };
}

/** @description response type for putGamedataminingMiningResultDetail */
export interface PutGamedataminingMiningResultDetailResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type PutGamedataminingMiningResultDetailResponseSuccess =
  PutGamedataminingMiningResultDetailResponse[200];
/**
 * @description
 *   更新博弈数据挖掘结果
 * @tags 博弈数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const putGamedataminingMiningResultDetail = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/gamedatamining/mining-result-detail";
  function request(
    option: PutGamedataminingMiningResultDetailOption
  ): Promise<PutGamedataminingMiningResultDetailResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PutGamedataminingMiningResultDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getGamedataminingMiningResultList */
export interface GetGamedataminingMiningResultListOption {
  /**
   * @description
   *   任务ID
   */
  query: {
    /**
        @description
          任务ID */
    TaskId: string;
  };
}

/** @description response type for getGamedataminingMiningResultList */
export interface GetGamedataminingMiningResultListResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetGamedataminingMiningResultListResponseSuccess =
  GetGamedataminingMiningResultListResponse[200];
/**
 * @description
 *   获取博弈数据挖掘结果列表
 * @tags 博弈数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const getGamedataminingMiningResultList = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/gamedatamining/mining-result-list";
  function request(
    option: GetGamedataminingMiningResultListOption
  ): Promise<GetGamedataminingMiningResultListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetGamedataminingMiningResultListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for deleteGamedataminingMiningTask */
export interface DeleteGamedataminingMiningTaskOption {
  /**
   * @description
   *   任务ID
   */
  query: {
    /**
        @description
          任务ID */
    TaskId: string;
  };
}

/** @description response type for deleteGamedataminingMiningTask */
export interface DeleteGamedataminingMiningTaskResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type DeleteGamedataminingMiningTaskResponseSuccess =
  DeleteGamedataminingMiningTaskResponse[200];
/**
 * @description
 *   删除博弈数据挖掘任务
 * @tags 博弈数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const deleteGamedataminingMiningTask = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/gamedatamining/mining-task";
  function request(
    option: DeleteGamedataminingMiningTaskOption
  ): Promise<DeleteGamedataminingMiningTaskResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<DeleteGamedataminingMiningTaskResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getGamedataminingMiningTaskDetail */
export interface GetGamedataminingMiningTaskDetailOption {
  /**
   * @description
   *   任务ID
   */
  query: {
    /**
        @description
          任务ID */
    id: string;
  };
}

/** @description response type for getGamedataminingMiningTaskDetail */
export interface GetGamedataminingMiningTaskDetailResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetGamedataminingMiningTaskDetailResponseSuccess =
  GetGamedataminingMiningTaskDetailResponse[200];
/**
 * @description
 *   获取博弈数据挖掘任务详情
 * @tags 博弈数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const getGamedataminingMiningTaskDetail = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/gamedatamining/mining-task-detail";
  function request(
    option: GetGamedataminingMiningTaskDetailOption
  ): Promise<GetGamedataminingMiningTaskDetailResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetGamedataminingMiningTaskDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getGamedataminingMiningTaskList */
export interface GetGamedataminingMiningTaskListOption {
  /**
   * @description
   *   页码
   * @default 1
   */
  query: {
    /**
        @description
          页码
        @default 1 */
    PageNum: string;
    /**
        @description
          每页数量
        @default 10 */
    PageSize: string;
    /**
        @description
          任务名称 */
    TaskName?: string;
  };
}

/** @description response type for getGamedataminingMiningTaskList */
export interface GetGamedataminingMiningTaskListResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetGamedataminingMiningTaskListResponseSuccess =
  GetGamedataminingMiningTaskListResponse[200];
/**
 * @description
 *   支持分页
 *   获取博弈数据挖掘任务列表
 * @tags 博弈数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const getGamedataminingMiningTaskList = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/gamedatamining/mining-task-list";
  function request(
    option: GetGamedataminingMiningTaskListOption
  ): Promise<GetGamedataminingMiningTaskListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetGamedataminingMiningTaskListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for putGamedataminingOpenTask */
export interface PutGamedataminingOpenTaskOption {
  /**
   * @description
   *   taskID
   */
  body: {
    /**
        @description
          taskID */
    request: ZFWJInternalPkgRequestOpenTaskRequest;
  };
}

/** @description response type for putGamedataminingOpenTask */
export interface PutGamedataminingOpenTaskResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type PutGamedataminingOpenTaskResponseSuccess =
  PutGamedataminingOpenTaskResponse[200];
/**
 * @description
 *   开启博弈数据挖掘任务
 * @tags 博弈数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const putGamedataminingOpenTask = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/gamedatamining/open-task";
  function request(
    option: PutGamedataminingOpenTaskOption
  ): Promise<PutGamedataminingOpenTaskResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PutGamedataminingOpenTaskResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getGamedataminingOrganizeResultList */
export interface GetGamedataminingOrganizeResultListOption {
  /**
   * @description
   *   页码
   * @default 1
   */
  query: {
    /**
        @description
          页码
        @default 1 */
    PageNum: string;
    /**
        @description
          每页数量
        @default 10 */
    PageSize: string;
    /**
        @description
          任务ID */
    TaskId?: string;
  };
}

/** @description response type for getGamedataminingOrganizeResultList */
export interface GetGamedataminingOrganizeResultListResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetGamedataminingOrganizeResultListResponseSuccess =
  GetGamedataminingOrganizeResultListResponse[200];
/**
 * @description
 *   支持分页
 *   获取整编结果列表
 * @tags 博弈数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const getGamedataminingOrganizeResultList = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/gamedatamining/organize-result-list";
  function request(
    option: GetGamedataminingOrganizeResultListOption
  ): Promise<GetGamedataminingOrganizeResultListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetGamedataminingOrganizeResultListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for putGamedataminingOrganizeResultSlice */
export interface PutGamedataminingOrganizeResultSliceOption {
  /**
   * @description
   *   更新整编结果切片
   */
  body: {
    /**
        @description
          更新整编结果切片 */
    request: ZFWJInternalPkgRequestUpdateOrsRequest;
  };
}

/** @description response type for putGamedataminingOrganizeResultSlice */
export interface PutGamedataminingOrganizeResultSliceResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type PutGamedataminingOrganizeResultSliceResponseSuccess =
  PutGamedataminingOrganizeResultSliceResponse[200];
/**
 * @description
 *   更新整编结果切片
 * @tags 博弈数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const putGamedataminingOrganizeResultSlice = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/gamedatamining/organize-result-slice";
  function request(
    option: PutGamedataminingOrganizeResultSliceOption
  ): Promise<PutGamedataminingOrganizeResultSliceResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PutGamedataminingOrganizeResultSliceResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postGamedataminingOrganizeResultSlice */
export interface PostGamedataminingOrganizeResultSliceOption {
  /**
   * @description
   *   创建整编结果切片
   */
  body: {
    /**
        @description
          创建整编结果切片 */
    request: ZFWJInternalPkgRequestCreateOrsRequest;
  };
}

/** @description response type for postGamedataminingOrganizeResultSlice */
export interface PostGamedataminingOrganizeResultSliceResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type PostGamedataminingOrganizeResultSliceResponseSuccess =
  PostGamedataminingOrganizeResultSliceResponse[200];
/**
 * @description
 *   创建整编结果切片
 * @tags 博弈数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const postGamedataminingOrganizeResultSlice = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/gamedatamining/organize-result-slice";
  function request(
    option: PostGamedataminingOrganizeResultSliceOption
  ): Promise<PostGamedataminingOrganizeResultSliceResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostGamedataminingOrganizeResultSliceResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for deleteGamedataminingOrganizeResultSlice */
export interface DeleteGamedataminingOrganizeResultSliceOption {
  /**
   * @description
   *   切片ID
   */
  query: {
    /**
        @description
          切片ID */
    SliceId: string;
  };
}

/** @description response type for deleteGamedataminingOrganizeResultSlice */
export interface DeleteGamedataminingOrganizeResultSliceResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type DeleteGamedataminingOrganizeResultSliceResponseSuccess =
  DeleteGamedataminingOrganizeResultSliceResponse[200];
/**
 * @description
 *   删除整编结果切片
 * @tags 博弈数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const deleteGamedataminingOrganizeResultSlice = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/gamedatamining/organize-result-slice";
  function request(
    option: DeleteGamedataminingOrganizeResultSliceOption
  ): Promise<DeleteGamedataminingOrganizeResultSliceResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<DeleteGamedataminingOrganizeResultSliceResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getGamedataminingOrganizeResultSlices */
export interface GetGamedataminingOrganizeResultSlicesOption {
  /**
   * @description
   *   文件ID
   */
  query: {
    /**
        @description
          文件ID */
    id: string;
  };
}

/** @description response type for getGamedataminingOrganizeResultSlices */
export interface GetGamedataminingOrganizeResultSlicesResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetGamedataminingOrganizeResultSlicesResponseSuccess =
  GetGamedataminingOrganizeResultSlicesResponse[200];
/**
 * @description
 *   获取整编结果切片列表
 * @tags 博弈数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const getGamedataminingOrganizeResultSlices = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/gamedatamining/organize-result-slices";
  function request(
    option: GetGamedataminingOrganizeResultSlicesOption
  ): Promise<GetGamedataminingOrganizeResultSlicesResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetGamedataminingOrganizeResultSlicesResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getKnowledgegraph */
export interface GetKnowledgegraphOption {
  /**
   * @description
   *   节点ID
   */
  query: {
    /**
        @description
          节点ID */
    NodeId: number;
    /**
        @description
          任务ID */
    TaskId: string;
  };
}

/** @description response type for getKnowledgegraph */
export interface GetKnowledgegraphResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetKnowledgegraphResponseSuccess = GetKnowledgegraphResponse[200];
/**
 * @description
 *   根据Node获取图谱数据
 * @tags 知识库模块
 * @produces application/json
 * @consumes application/json
 */
export const getKnowledgegraph = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/knowledgegraph";
  function request(
    option: GetKnowledgegraphOption
  ): Promise<GetKnowledgegraphResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetKnowledgegraphResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getKnowledgegraphAdvance */
export interface GetKnowledgegraphAdvanceOption {
  /**
   * @description
   *   国家
   */
  query: {
    /**
        @description
          国家 */
    Country: string;
    /**
        @description
          大类 */
    BigType: string;
    /**
        @description
          类型 */
    Type: string;
    /**
        @description
          任务ID */
    TaskId: string;
    /**
        @description
          文本类型 */
    TextType: string;
  };
}

/** @description response type for getKnowledgegraphAdvance */
export interface GetKnowledgegraphAdvanceResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetKnowledgegraphAdvanceResponseSuccess =
  GetKnowledgegraphAdvanceResponse[200];
/**
 * @description
 *   高级搜索
 * @tags 知识库模块
 * @produces application/json
 * @consumes application/json
 */
export const getKnowledgegraphAdvance = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/knowledgegraph/advance";
  function request(
    option: GetKnowledgegraphAdvanceOption
  ): Promise<GetKnowledgegraphAdvanceResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetKnowledgegraphAdvanceResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getKnowledgegraphInit */
export interface GetKnowledgegraphInitOption {
  /**
   * @description
   *   任务ID
   */
  query: {
    /**
        @description
          任务ID */
    TaskId: string;
    /**
        @description
          文本类型 */
    TextType: string;
    /**
        @description
          层数 */
    Storey: number;
  };
}

/** @description response type for getKnowledgegraphInit */
export interface GetKnowledgegraphInitResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetKnowledgegraphInitResponseSuccess =
  GetKnowledgegraphInitResponse[200];
/**
 * @description
 *   获取初始图谱数据
 * @tags 知识库模块
 * @produces application/json
 * @consumes application/json
 */
export const getKnowledgegraphInit = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/knowledgegraph/init";
  function request(
    option: GetKnowledgegraphInitOption
  ): Promise<GetKnowledgegraphInitResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetKnowledgegraphInitResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getKnowledgegraphKeyword */
export interface GetKnowledgegraphKeywordOption {
  /**
   * @description
   *   关键词
   */
  query: {
    /**
        @description
          关键词 */
    Keyword: string;
    /**
        @description
          文本类型 */
    TextType: string;
    /**
        @description
          任务ID */
    TaskId: string;
  };
}

/** @description response type for getKnowledgegraphKeyword */
export interface GetKnowledgegraphKeywordResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetKnowledgegraphKeywordResponseSuccess =
  GetKnowledgegraphKeywordResponse[200];
/**
 * @description
 *   根据关键词搜索
 * @tags 知识库模块
 * @produces application/json
 * @consumes application/json
 */
export const getKnowledgegraphKeyword = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/knowledgegraph/keyword";
  function request(
    option: GetKnowledgegraphKeywordOption
  ): Promise<GetKnowledgegraphKeywordResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetKnowledgegraphKeywordResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getKnowledgegraphLabels */
export interface GetKnowledgegraphLabelsOption {
  /**
   * @description
   *   任务ID
   */
  query: {
    /**
        @description
          任务ID */
    TaskId: string;
  };
}

/** @description response type for getKnowledgegraphLabels */
export interface GetKnowledgegraphLabelsResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetKnowledgegraphLabelsResponseSuccess =
  GetKnowledgegraphLabelsResponse[200];
/**
 * @description
 *   获取标签数据
 * @tags 知识库模块
 * @produces application/json
 * @consumes application/json
 */
export const getKnowledgegraphLabels = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/knowledgegraph/labels";
  function request(
    option: GetKnowledgegraphLabelsOption
  ): Promise<GetKnowledgegraphLabelsResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetKnowledgegraphLabelsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postLogin */
export interface PostLoginOption {
  /**
   * @description
   *   params
   */
  body: {
    /**
        @description
          params */
    request: ZFWJInternalPkgRequestLoginRequest;
  };
}

/** @description response type for postLogin */
export interface PostLoginResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type PostLoginResponseSuccess = PostLoginResponse[200];
/**
 * @description
 *   账号登录
 * @tags 用户模块
 * @produces application/json
 * @consumes application/json
 */
export const postLogin = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/login";
  function request(option: PostLoginOption): Promise<PostLoginResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostLoginResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postRegister */
export interface PostRegisterOption {
  /**
   * @description
   *   params
   */
  body: {
    /**
        @description
          params */
    request: ZFWJInternalPkgRequestRegisterRequest;
  };
}

/** @description response type for postRegister */
export interface PostRegisterResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type PostRegisterResponseSuccess = PostRegisterResponse[200];
/**
 * @description
 *   用户注册
 * @tags 用户模块
 * @produces application/json
 * @consumes application/json
 */
export const postRegister = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/register";
  function request(
    option: PostRegisterOption
  ): Promise<PostRegisterResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostRegisterResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getStrategyrule */
export interface GetStrategyruleOption {
  /**
   * @description
   *   Id
   */
  query: {
    /**
        @description
          Id */
    Id: string;
  };
}

/** @description response type for getStrategyrule */
export interface GetStrategyruleResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetStrategyruleResponseSuccess = GetStrategyruleResponse[200];
/**
 * @description
 *   获取战法规则
 *   获取战法规则
 * @tags 战法规则库
 * @produces application/json
 * @consumes application/json
 */
export const getStrategyrule = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/strategyrule";
  function request(
    option: GetStrategyruleOption
  ): Promise<GetStrategyruleResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetStrategyruleResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for putStrategyrule */
export interface PutStrategyruleOption {
  /**
   * @description
   *   战法规则信息
   */
  body: {
    /**
        @description
          战法规则信息 */
    request: ZFWJInternalPkgRequestUpdateStrategyRuleRequest;
  };
}

/** @description response type for putStrategyrule */
export interface PutStrategyruleResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type PutStrategyruleResponseSuccess = PutStrategyruleResponse[200];
/**
 * @description
 *   更新战法规则
 *   更新战法规则
 * @tags 战法规则库
 * @produces application/json
 * @consumes application/json
 */
export const putStrategyrule = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/strategyrule";
  function request(
    option: PutStrategyruleOption
  ): Promise<PutStrategyruleResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PutStrategyruleResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postStrategyrule */
export interface PostStrategyruleOption {
  /**
   * @description
   *   战法规则信息
   */
  body: {
    /**
        @description
          战法规则信息 */
    request: ZFWJInternalPkgRequestCreateStrategyRuleRequest;
  };
}

/** @description response type for postStrategyrule */
export interface PostStrategyruleResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type PostStrategyruleResponseSuccess = PostStrategyruleResponse[200];
/**
 * @description
 *   创建战法规则
 *   创建战法规则
 * @tags 战法规则库
 * @produces application/json
 * @consumes application/json
 */
export const postStrategyrule = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/strategyrule";
  function request(
    option: PostStrategyruleOption
  ): Promise<PostStrategyruleResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostStrategyruleResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for deleteStrategyrule */
export interface DeleteStrategyruleOption {
  /**
   * @description
   *   Id
   */
  query: {
    /**
        @description
          Id */
    Id: string;
  };
}

/** @description response type for deleteStrategyrule */
export interface DeleteStrategyruleResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type DeleteStrategyruleResponseSuccess = DeleteStrategyruleResponse[200];
/**
 * @description
 *   删除战法规则
 *   删除战法规则
 * @tags 战法规则库
 * @produces application/json
 * @consumes application/json
 */
export const deleteStrategyrule = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/strategyrule";
  function request(
    option: DeleteStrategyruleOption
  ): Promise<DeleteStrategyruleResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<DeleteStrategyruleResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postStrategyruleArchive */
export interface PostStrategyruleArchiveOption {
  /**
   * @description
   *   战法规则信息
   */
  body: {
    /**
        @description
          战法规则信息 */
    request: ZFWJInternalPkgRequestStrategyRuleArchiveRequest;
  };
}

/** @description response type for postStrategyruleArchive */
export interface PostStrategyruleArchiveResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type PostStrategyruleArchiveResponseSuccess =
  PostStrategyruleArchiveResponse[200];
/**
 * @description
 *   战法规则入库
 *   战法规则入库
 * @tags 战法规则库
 * @produces application/json
 * @consumes application/json
 */
export const postStrategyruleArchive = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/strategyrule/archive";
  function request(
    option: PostStrategyruleArchiveOption
  ): Promise<PostStrategyruleArchiveResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostStrategyruleArchiveResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getStrategyruleList */
export interface GetStrategyruleListOption {
  /**
   * @description
   *   PageNum
   */
  query: {
    /**
        @description
          PageNum */
    PageNum: number;
    /**
        @description
          PageSize */
    PageSize: number;
    /**
        @description
          StrategyType */
    StrategyType?: string;
    /**
        @description
          Level */
    Level?: number;
    /**
        @description
          Scenario */
    Scenario?: number;
    /**
        @description
          Source */
    Source?: number;
    /**
        @description
          TaskType */
    TaskType?: number;
    /**
        @description
          StrategyName */
    StrategyName?: string;
  };
}

/** @description response type for getStrategyruleList */
export interface GetStrategyruleListResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetStrategyruleListResponseSuccess =
  GetStrategyruleListResponse[200];
/**
 * @description
 *   获取战法规则列表
 *   获取战法规则列表
 * @tags 战法规则库
 * @produces application/json
 * @consumes application/json
 */
export const getStrategyruleList = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/strategyrule/list";
  function request(
    option: GetStrategyruleListOption
  ): Promise<GetStrategyruleListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetStrategyruleListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for putTextminingtask */
export interface PutTextminingtaskOption {
  /**
   * @description
   *   params
   */
  body: {
    /**
        @description
          params */
    request: ZFWJInternalPkgRequestUpdateTmtRequest;
  };
}

/** @description response type for putTextminingtask */
export interface PutTextminingtaskResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type PutTextminingtaskResponseSuccess = PutTextminingtaskResponse[200];
/**
 * @description
 *   任务编辑
 * @tags 文本数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const putTextminingtask = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/textminingtask";
  function request(
    option: PutTextminingtaskOption
  ): Promise<PutTextminingtaskResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PutTextminingtaskResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postTextminingtask */
export interface PostTextminingtaskOption {
  /**
   * @description
   *   params
   */
  body: {
    /**
        @description
          params */
    request: ZFWJInternalPkgRequestCreateTmtRequest;
  };
}

/** @description response type for postTextminingtask */
export interface PostTextminingtaskResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type PostTextminingtaskResponseSuccess = PostTextminingtaskResponse[200];
/**
 * @description
 *   创建任务
 * @tags 文本数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const postTextminingtask = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/textminingtask";
  function request(
    option: PostTextminingtaskOption
  ): Promise<PostTextminingtaskResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostTextminingtaskResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for deleteTextminingtask */
export interface DeleteTextminingtaskOption {
  /**
   * @description
   *   任务id
   */
  query: {
    /**
        @description
          任务id */
    id: string;
  };
}

/** @description response type for deleteTextminingtask */
export interface DeleteTextminingtaskResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type DeleteTextminingtaskResponseSuccess =
  DeleteTextminingtaskResponse[200];
/**
 * @description
 *   删除任务
 * @tags 文本数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const deleteTextminingtask = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/textminingtask";
  function request(
    option: DeleteTextminingtaskOption
  ): Promise<DeleteTextminingtaskResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<DeleteTextminingtaskResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getTextminingtaskDetail */
export interface GetTextminingtaskDetailOption {
  /**
   * @description
   *   任务id
   */
  query: {
    /**
        @description
          任务id */
    id: string;
  };
}

/** @description response type for getTextminingtaskDetail */
export interface GetTextminingtaskDetailResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetTextminingtaskDetailResponseSuccess =
  GetTextminingtaskDetailResponse[200];
/**
 * @description
 *   根据任务id获取任务信息、战法列表
 * @tags 文本数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const getTextminingtaskDetail = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/textminingtask/detail";
  function request(
    option: GetTextminingtaskDetailOption
  ): Promise<GetTextminingtaskDetailResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetTextminingtaskDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getTextminingtaskList */
export interface GetTextminingtaskListOption {
  /**
   * @description
   *   页码
   * @default 1
   */
  query: {
    /**
        @description
          页码
        @default 1 */
    PageNum: string;
    /**
        @description
          每页数量
        @default 10 */
    PageSize: string;
    /**
        @description
          任务名称 */
    TaskName?: string;
  };
}

/** @description response type for getTextminingtaskList */
export interface GetTextminingtaskListResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetTextminingtaskListResponseSuccess =
  GetTextminingtaskListResponse[200];
/**
 * @description
 *   支持分页
 *   获取所有任务
 * @tags 文本数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const getTextminingtaskList = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/textminingtask/list";
  function request(
    option: GetTextminingtaskListOption
  ): Promise<GetTextminingtaskListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetTextminingtaskListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getTextminingtaskOriginalText */
export interface GetTextminingtaskOriginalTextOption {
  /**
   * @description
   *   任务id
   */
  query: {
    /**
        @description
          任务id */
    id: string;
  };
}

/** @description response type for getTextminingtaskOriginalText */
export interface GetTextminingtaskOriginalTextResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetTextminingtaskOriginalTextResponseSuccess =
  GetTextminingtaskOriginalTextResponse[200];
/**
 * @description
 *   根据任务id获取任务原文
 * @tags 文本数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const getTextminingtaskOriginalText = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/textminingtask/original-text";
  function request(
    option: GetTextminingtaskOriginalTextOption
  ): Promise<GetTextminingtaskOriginalTextResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetTextminingtaskOriginalTextResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getTextminingtaskResult */
export interface GetTextminingtaskResultOption {
  /**
   * @description
   *   任务id
   */
  query: {
    /**
        @description
          任务id */
    id: string;
  };
}

/** @description response type for getTextminingtaskResult */
export interface GetTextminingtaskResultResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetTextminingtaskResultResponseSuccess =
  GetTextminingtaskResultResponse[200];
/**
 * @description
 *   根据战法id获取战法信息
 * @tags 文本数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const getTextminingtaskResult = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/textminingtask/result";
  function request(
    option: GetTextminingtaskResultOption
  ): Promise<GetTextminingtaskResultResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetTextminingtaskResultResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for putTextminingtaskResult */
export interface PutTextminingtaskResultOption {
  /**
   * @description
   *   params
   */
  body: {
    /**
        @description
          params */
    request: ZFWJInternalPkgRequestUpdateTmrRequest;
  };
}

/** @description response type for putTextminingtaskResult */
export interface PutTextminingtaskResultResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type PutTextminingtaskResultResponseSuccess =
  PutTextminingtaskResultResponse[200];
/**
 * @description
 *   战法编辑
 * @tags 文本数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const putTextminingtaskResult = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/textminingtask/result";
  function request(
    option: PutTextminingtaskResultOption
  ): Promise<PutTextminingtaskResultResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PutTextminingtaskResultResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getTextminingtaskSentenceAnalyse */
export interface GetTextminingtaskSentenceAnalyseOption {
  /**
   * @description
   *   战法id
   */
  query: {
    /**
        @description
          战法id */
    id: string;
  };
}

/** @description response type for getTextminingtaskSentenceAnalyse */
export interface GetTextminingtaskSentenceAnalyseResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetTextminingtaskSentenceAnalyseResponseSuccess =
  GetTextminingtaskSentenceAnalyseResponse[200];
/**
 * @description
 *   战法分析
 * @tags 文本数据挖掘模块
 * @produces application/json
 * @consumes application/json
 */
export const getTextminingtaskSentenceAnalyse = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/textminingtask/sentence-analyse";
  function request(
    option: GetTextminingtaskSentenceAnalyseOption
  ): Promise<GetTextminingtaskSentenceAnalyseResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetTextminingtaskSentenceAnalyseResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postUpload */
export interface PostUploadOption {
  /**
   * @description
   *   文件
   */
  formData: {
    /**
        @description
          文件 */
    files: File;
  };
}

/** @description response type for postUpload */
export interface PostUploadResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type PostUploadResponseSuccess = PostUploadResponse[200];
/**
 * @description
 *   上传文件
 * @tags 文件上传模块
 * @produces application/json
 * @consumes application/json
 */
export const postUpload = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/upload";
  function request(
    option: PostUploadOption
  ): Promise<PostUploadResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostUploadResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for getUploadGeneratePresignedUrl */
export interface GetUploadGeneratePresignedUrlOption {
  /**
   * @description
   *   文件名
   */
  query: {
    /**
        @description
          文件名 */
    objectName: string;
  };
}

/** @description response type for getUploadGeneratePresignedUrl */
export interface GetUploadGeneratePresignedUrlResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetUploadGeneratePresignedUrlResponseSuccess =
  GetUploadGeneratePresignedUrlResponse[200];
/**
 * @description
 *   生成上传文件的预签名url
 * @tags 文件上传模块
 * @produces application/json
 * @consumes application/json
 */
export const getUploadGeneratePresignedUrl = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/upload/generate-presigned-url";
  function request(
    option: GetUploadGeneratePresignedUrlOption
  ): Promise<GetUploadGeneratePresignedUrlResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<GetUploadGeneratePresignedUrlResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for getUser */
export interface GetUserResponse {
  /**
   * @description
   *   OK
   */
  200: ZFWJInternalPkgResponseResponse;
}

export type GetUserResponseSuccess = GetUserResponse[200];
/**
 * @description
 *   获取用户信息
 * @tags 用户模块
 * @produces application/json
 * @consumes application/json
 */
export const getUser = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/user";
  function request(): Promise<GetUserResponseSuccess> {
    return requester(request.url, {
      method: request.method,
    }) as unknown as Promise<GetUserResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();
