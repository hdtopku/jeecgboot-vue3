import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
    {
    title: '短链接码',
    dataIndex: 'code'
   },
   {
    title: '链接',
    dataIndex: 'link'
   },
   {
    title: '备注',
    dataIndex: 'remark'
   },
   {
    title: '访问次数',
    dataIndex: 'visitCount'
   },
   {
    title: '手机是否可以访问(0-可以,-1-不可以)',
    dataIndex: 'mobile'
   },
   {
    title: '电脑是否可以访问(0-可以,-1-不可以)',
    dataIndex: 'pc'
   },
   {
    title: '状态(0：正常，-1:失效)',
    dataIndex: 'status'
   },
   {
    title: '链接类型:1-agiso订单',
    dataIndex: 'linkType'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '短链接码',
    field: 'code',
    component: 'Input'
  },
 {
    label: '链接',
    field: 'link',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: '短链接码',
    field: 'code',
    component: 'Input',
  },
  {
    label: '链接',
    field: 'link',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
  {
    label: '访问次数',
    field: 'visitCount',
    component: 'InputNumber',
  },
  {
    label: '手机是否可以访问(0-可以,-1-不可以)',
    field: 'mobile',
    component: 'InputNumber',
  },
  {
    label: '电脑是否可以访问(0-可以,-1-不可以)',
    field: 'pc',
    component: 'InputNumber',
  },
  {
    label: '状态(0：正常，-1:失效)',
    field: 'status',
    component: 'Input',
  },
  {
    label: '链接类型:1-agiso订单',
    field: 'linkType',
    component: 'Input',
  },
];
