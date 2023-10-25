/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */

export interface ZFWJInternalPkgRequestAddDicReq {
  /**
   * @example
   *   标签1
   */
  Description: string;
  /**
   * @example
   *   1
   */
  SortOrder: number;
  /**
   * @example
   *   用户标签
   */
  Type: string;
}

export interface ZFWJInternalPkgRequestCreateGdmTaskRequest {
  DataSource: Array<number>;
  Faction: number;
  Model: string;
  Scenario: number;
  TacticalLevel: number;
  TaskName: string;
  TaskStatus: number;
  UserTags: Array<number>;
}

export interface ZFWJInternalPkgRequestCreateGdmUploadRequest {
  FileUrl: Array<number>;
  GameScenario: number;
  Model: string;
  TacticalLevel: number;
  TaskName: string;
}

export interface ZFWJInternalPkgRequestCreateOrsRequest {
  EndTime: string;
  FileId: string;
  StartTime: string;
}

export interface ZFWJInternalPkgRequestCreateStrategyRuleRequest {
  /**
   * @example
   *   1
   */
  Faction?: number;
  /**
   * @example
   *   1
   */
  Scenario?: number;
  /**
   * @example
   *   1
   */
  Source: number;
  StateMachineResult?: Array<number>;
  /**
   * @example
   *   厉害的战法
   */
  StrategyName: string;
  /**
   * @example
   *   1
   */
  StrategyType: string;
  TacticalLevel?: number;
  /**
   * @example
   *   1
   */
  TaskType: number;
}

export interface ZFWJInternalPkgRequestCreateTmtRequest {
  /**
   * @example
   *   作战手册1挖掘
   */
  TaskName: string;
  /**
   * @example
   *   1
   */
  TextType: number;
  TextUrl: Array<number>;
}

export interface ZFWJInternalPkgRequestDeleteDicReq {
  /**
   * @example
   *   1
   */
  Id: number;
}

export interface ZFWJInternalPkgRequestDeleteUserRequest {
  /**
   * @example
   *   alan
   */
  username?: string;
}

export interface ZFWJInternalPkgRequestGetDicList {
  /**
   * @example
   *   1
   */
  PageNum: number;
  /**
   * @example
   *   10
   */
  PageSize: number;
  /**
   * @example
   *   标签
   */
  Type?: string;
}

export interface ZFWJInternalPkgRequestLoginRequest {
  /**
   * @example
   *   123456
   */
  password: string;
  /**
   * @example
   *   alan
   */
  username: string;
}

export interface ZFWJInternalPkgRequestOpenTaskRequest {
  TaskId: string;
}

export interface ZFWJInternalPkgRequestRegisterRequest {
  /**
   * @example
   *   alan
   */
  nickname?: string;
  /**
   * @example
   *   123456
   */
  password: string;
  /**
   * @example
   *   1
   */
  type?: number;
  /**
   * @example
   *   alan
   */
  username: string;
}

export interface ZFWJInternalPkgRequestStrategyRuleArchiveRequest {
  /**
   * @example
   *   1
   */
  Faction?: number;
  /**
   * @example
   *   1
   */
  Id: string;
  /**
   * @example
   *   1
   */
  OriginalText?: string;
  /**
   * @example
   *   1
   */
  Scenario?: number;
  StateMachineResult?: Array<number>;
  /**
   * @example
   *   1
   */
  StrategyName: string;
  /**
   * @example
   *   1
   */
  StrategyType?: string;
  /**
   * @example
   *   1
   */
  TacticalLevel?: number;
  /**
   * @example
   *   1
   */
  TaskId: string;
  /**
   * @example
   *   1
   */
  TaskName: string;
  /**
   * @example
   *   1
   */
  TaskType?: number;
}

export interface ZFWJInternalPkgRequestUpdateDicReq {
  /**
   * @example
   *   标签1
   */
  Description?: string;
  Id: number;
  /**
   * @example
   *   1
   */
  SortOrder?: number;
  /**
   * @example
   *   字典类型
   */
  Type?: string;
}

export interface ZFWJInternalPkgRequestUpdateGameDataMiningResultRequest {
  Id: string;
  StateMachineResult?: Array<number>;
  StrategyName?: string;
  StrategyType?: string;
}

export interface ZFWJInternalPkgRequestUpdateGdmUploadRequest {
  FileUrl: Array<number>;
  Id: string;
  TaskName: string;
}

export interface ZFWJInternalPkgRequestUpdateOrsRequest {
  EndTime: string;
  SliceId: string;
  StartTime: string;
}

export interface ZFWJInternalPkgRequestUpdateProfileRequest {
  /**
   * @example
   *   alan
   */
  nickname?: string;
  /**
   * @example
   *   123456
   */
  password?: string;
  /**
   * @example
   *   1
   */
  type?: number;
  /**
   * @example
   *   alan
   */
  username?: string;
}

export interface ZFWJInternalPkgRequestUpdateStrategyRuleRequest {
  /**
   * @example
   *   1
   */
  Faction?: number;
  /**
   * @example
   *   1
   */
  Id: string;
  /**
   * @example
   *   1
   */
  Scenario?: number;
  StateMachineResult?: Array<number>;
  /**
   * @example
   *   厉害的战法
   */
  StrategyName?: string;
  /**
   * @example
   *   1
   */
  StrategyType?: string;
  /**
   * @example
   *   1
   */
  TacticalLevel?: number;
}

export interface ZFWJInternalPkgRequestUpdateTmrRequest {
  GraphResult?: Array<number>;
  /**
   * @example
   *   1
   */
  Id: string;
  /**
   * @example
   *   xxxxxxxx
   */
  OriginalText?: string;
  StateMachineResult?: Array<number>;
  /**
   * @example
   *   1
   */
  StorageStatus?: number;
  /**
   * @example
   *   高速Yo-Yo
   */
  StrategyName?: string;
}

export interface ZFWJInternalPkgRequestUpdateTmtRequest {
  /**
   * @example
   *   1
   */
  TaskId: string;
  /**
   * @example
   *   作战手册1挖掘
   */
  TaskName: string;
}

export interface ZFWJInternalPkgResponseResponse {
  code?: number;
  data?: any;
  message?: string;
}
