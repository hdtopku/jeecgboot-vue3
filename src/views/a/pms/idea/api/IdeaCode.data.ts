import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
    {
    title: '激活码',
    dataIndex: 'code'
   },
   {
    title: 'jet激活码id',
    dataIndex: 'activeCodeId'
   },
   {
    title: '获取总次数',
    dataIndex: 'count'
   },
   {
    title: '备注',
    dataIndex: 'remark'
   },
   {
    title: '激活码状态(0:正常,-1:失效)',
    dataIndex: 'valid'
   },
   {
    title: '验证状态(0：未使用,1:使用中,-1:已过期)',
    dataIndex: 'status'
   },
   {
    title: '打开时间',
    dataIndex: 'openTime'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '激活码',
    field: 'code',
    component: 'Input'
  },
 {
    label: 'jet激活码id',
    field: 'activeCodeId',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: '激活码',
    field: 'code',
    component: 'Input',
  },
  {
    label: 'jet激活码id',
    field: 'activeCodeId',
    component: 'Input',
  },
  {
    label: '获取总次数',
    field: 'count',
    component: 'InputNumber',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
  {
    label: '激活码状态(0:正常,-1:失效)',
    field: 'valid',
    component: 'Input',
  },
  {
    label: '验证状态(0：未使用,1:使用中,-1:已过期)',
    field: 'status',
    component: 'Input',
  },
  {
    label: '打开时间',
    field: 'openTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
];
