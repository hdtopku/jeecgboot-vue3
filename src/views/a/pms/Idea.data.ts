import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
    {
    title: '账号',
    dataIndex: 'account'
   },
   {
    title: '密码',
    dataIndex: 'password'
   },
   {
    title: '状态(0：正常，-1:失效)',
    dataIndex: 'status'
   },
   {
    title: '激活时间',
    dataIndex: 'activeTime'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '账号',
    field: 'account',
    component: 'Input'
  },
 {
    label: '密码',
    field: 'password',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: '账号',
    field: 'account',
    component: 'Input',
  },
  {
    label: '密码',
    field: 'password',
    component: 'Input',
  },
  {
    label: '状态(0：正常，-1:失效)',
    field: 'status',
    component: 'Input',
  },
  {
    label: '激活时间',
    field: 'activeTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
];
