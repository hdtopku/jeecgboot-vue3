import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
    {
    title: '商品名称',
    dataIndex: 'name'
   },
   {
    title: '商品价格',
    dataIndex: 'price'
   },
   {
    title: '商品进价',
    dataIndex: 'cost'
   },
   {
    title: '备注',
    dataIndex: 'remark'
   },
   {
    title: '商品图片',
    dataIndex: 'pic'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '商品名称',
    field: 'name',
    component: 'Input'
  },
 {
    label: '商品价格',
    field: 'price',
    component: 'InputNumber'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: '商品名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '商品价格',
    field: 'price',
    component: 'InputNumber',
  },
  {
    label: '商品进价',
    field: 'cost',
    component: 'InputNumber',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
  {
    label: '商品图片',
    field: 'pic',
    component: 'Input',
  },
];
