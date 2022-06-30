import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
    {
    title: '用户名(手机号/微信号/qq/邮箱等)',
    dataIndex: 'username'
   },
   {
    title: 'idea分组',
    dataIndex: 'ideaGroupId'
   },
   {
    title: '状态(0：正常，-1:失效)',
    dataIndex: 'status'
   },
   {
    title: '有效时间',
    dataIndex: 'validTime'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '用户名(手机号/微信号/qq/邮箱等)',
    field: 'username',
    component: 'Input'
  },
 {
    label: 'idea分组',
    field: 'ideaGroupId',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: '用户名(手机号/微信号/qq/邮箱等)',
    field: 'username',
    component: 'Input',
  },
  {
    label: 'idea分组',
    field: 'ideaGroupId',
    component: 'Input',
  },
  {
    label: '状态(0：正常，-1:失效)',
    field: 'status',
    component: 'Input',
  },
  {
    label: '有效时间',
    field: 'validTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
];
