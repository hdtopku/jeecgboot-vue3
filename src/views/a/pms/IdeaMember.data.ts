import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '用户标识(手机号/微信号/qq/邮箱等)',
    dataIndex: 'identity',
  },
  {
    title: 'idea分组',
    dataIndex: 'ideaGroupId',
  },
  {
    title: '状态(0：正常，-1:失效)',
    dataIndex: 'status',
  },
  {
    title: '有效时间',
    dataIndex: 'validTime',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '用户标识(手机号/微信号/qq/邮箱等)',
    field: 'identity',
    component: 'Input',
  },
  {
    label: 'idea分组',
    field: 'ideaGroupId',
    component: 'Input',
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  { label: '', field: 'id', component: 'Input', show: false },
  {
    label: '用户标识(手机号/微信号/qq/邮箱等)',
    field: 'identity',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
    ],
  },
  {
    label: '有效期至',
    field: 'invalidTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
    rules: [
      {
        required: true,
        message: '请选择有效截至日期',
      },
    ],
  },
];
