import { createAction, ActionType, createReducer  } from 'typesafe-actions';

//스테이트 정의
  //스테이트 타입
export interface userInfoState {
    email: string,
    nickname: string,
    area: string,
    area2?: string,
    manager: boolean,
    socialType: string
  };

  //스테이트 기본값
export const userInfoInitialState: userInfoState = {
    email: '',
    nickname: '',
    area: '',
    area2: '',
    manager: false,
    socialType: ''
};


//액션 정의
  //액션 타입 정의
  //액션은 '앱이름/reducer이름/Acction_type' 형태
const USERINFO = 'UDONDAM/UserInfo/USERINFO';

  //액션 생성자 정의 및 export
export const UserInfoHandler = createAction(USERINFO)<userInfoState>();

const actions = {UserInfoHandler}; 

export type UserInfoAction = ActionType<typeof actions>
export type IsLoginAction = ActionType<typeof actions>

const UserInfoReducer = createReducer<userInfoState, UserInfoAction>(userInfoInitialState, {
  [USERINFO]: (state, action) => {
    return Object.assign({}, state, {
      email: action.payload.email,
      nickname: action.payload.nickname,
      area: action.payload.area,
      area2: action.payload.area2,
      manager: action.payload.manager,
      socialType: action.payload.socialType
    });
  }
});
//export default로 export 한다
export default UserInfoReducer