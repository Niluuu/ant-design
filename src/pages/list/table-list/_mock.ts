import request from 'umi-request';
import { TableListItem } from "./data"

let tableListDataSource: TableListItem[] = [];

export async function user(params: TableListItem) {
  return request(`http://84.201.150.33:8000/v1/users`, {
    method: 'GET',
    params
    }).then(res => {
    tableListDataSource.push(
      res.data
    ) 
    console.log("list", tableListDataSource)
  }).catch(err => {
    console.log(err);
  });
}
