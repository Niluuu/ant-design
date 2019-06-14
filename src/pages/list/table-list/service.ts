import request from 'umi-request';
import { TableListParams } from './data';

export async function user(params: TableListParams) {
  return request(`http://84.201.150.33:8000/v1/users`, {
    method: 'GET'
  }).then(res => {
    console.log("get",res);
  }).catch(err => {
    console.log(err);
  });;
}


export async function queryRule(params: TableListParams) {
  return request(`/api/rule`, {
    params,
  });
}

export async function removeRule(params: TableListParams) {
  return request('/api/rule', 
  {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
