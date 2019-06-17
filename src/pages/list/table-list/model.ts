import { queryRule, removeRule, addRule, updateRule } from './service';
import { user } from './_mock';
import { TableListDate } from './data';
import { Reducer } from 'redux';
import { EffectsCommandMap } from 'dva';
import { AnyAction } from 'redux';

export interface IStateType {
  data: TableListDate;
}

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: IStateType) => T) => T },
) => void;

export interface ModelType {
  namespace: string;
  state: IStateType;
  effects: {
    user: Effect;
    fetch: Effect;
    add: Effect;
    remove: Effect;
    update: Effect;
  };
  reducers: {
    save: Reducer<IStateType>;
  };
}

const Model: ModelType = {
  namespace: 'listTableList',

  state: {
    data: {
      list: [],
      pagination: {},
    },
  },

  effects: {
    *user({ payload }, { call, put }) {
      const response = yield call(user, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
};

export default Model;
