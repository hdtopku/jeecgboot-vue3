import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { rules } from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
  {
    title: '记忆符',
    dataIndex: 'code',
  },
  {
    title: '激活链接',
    dataIndex: 'link',
  },
  {
    title: '激活链绑定的第三方短连接',
    dataIndex: 'thirdLink',
  },
  {
    title: '第三方链接是否有效：0-有效，1-停用',
    dataIndex: 'thirdLinkValid',
  },
  {
    title: '长链接',
    dataIndex: 'longLink',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
  {
    title: '激活链接状态(0-正常，-1-失效)',
    dataIndex: 'status',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '记忆符',
    field: 'code',
    component: 'Input',
  },
  {
    label: '激活链接',
    field: 'link',
    component: 'Input',
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  { label: '', field: 'id', component: 'Input', show: false },
  {
    label: '激活链',
    field: 'link',
    component: 'InputTextArea',
    componentProps: {
      placeholder: '短链、或https://itunes.apple.com...',
    },
  },
  {
    label: '预存',
    field: 'email',
    component: 'InputTextArea',
    componentProps: {
      placeholder: '可复制，如邮箱、短链、激活链等',
    },
  },
  {
    label: '长链接',
    field: 'longLink',
    component: 'InputTextArea',
    componentProps: {
      placeholder: 'https://email.myunidays.uk...',
    },
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
    componentProps: {
      placeholder: '重要的信息',
    },
  },
  {
    label: '预存',
    field: 'thirdLink',
    component: 'InputTextArea',
    componentProps: {
      placeholder: '可复制，如邮箱、短链、激活链等',
    },
  },
  // {
  //   label: '记忆符',
  //   field: 'code',
  //   helpMessage: '为方便记忆识别，无其他用途',
  //   component: 'Input',
  // },
];
