import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { rules } from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
  {
    title: '组名',
    dataIndex: 'groupName',
  },
  {
    title: '状态(0：正常，-1:失效)',
    dataIndex: 'status',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '组名',
    field: 'groupName',
    component: 'Input',
  },
  {
    label: '状态(0：正常，-1:失效)',
    field: 'status',
    component: 'Input',
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  { label: '', field: 'id', component: 'Input', show: false },
  {
    label: '组名',
    field: 'groupName',
    component: 'Input',
  },
  {
    field: 'JSwitch',
    component: 'JSwitch',
    label: 'JSwitch',
  },
  {
    label: '状态(0：正常，-1:失效)',
    field: 'status',
    component: 'Input',
  },
];