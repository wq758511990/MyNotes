// 存放 initialState 和 reducer 函数
import * as actionTypes from "./constants";
import { fromJS } from "immutable";

const defualtState = fromJS({
  bannerList: [],
  recommendList: [],
});

export default (state = defualtState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return state.set("bannerList", action.data);
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set("recommendList", action.data);
    default:
      return state;
  }
};
