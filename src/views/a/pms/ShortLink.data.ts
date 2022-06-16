import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
    {
    title: '账号',
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
    label: '账号',
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
    label: '账号',
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
