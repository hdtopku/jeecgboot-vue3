import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { rules } from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
  {
    title: 'jet正版激活码',
    dataIndex: 'jetCode',
  },
  {
    title: '激活链状态(1-待使用，0-使用中，-1-删除)',
    dataIndex: 'status',
  },
  {
    title: '激活码获取次数',
    dataIndex: 'useCount',
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: 'jet正版激活码',
    field: 'jetCode',
    component: 'InputTextArea',
  },
  {
    label: '激活链状态(1-待使用，0-使用中，-1-删除)',
    field: 'status',
    component: 'Input',
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  { label: '', field: 'id', component: 'Input', show: false },
  {
    label: 'jet正版激活码',
    field: 'jetCode',
    component: 'InputTextArea',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
];
