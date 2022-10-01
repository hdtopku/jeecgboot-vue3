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
    component: 'Input',
    componentProps: {
      placeholder: 'https://itunes.apple.com...',
    },
  },
  {
    label: '长链接',
    field: 'longLink',
    component: 'Input',
    componentProps: {
      placeholder: 'https://email.myunidays.uk...',
    },
  },
  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
    componentProps: {
      placeholder: '请输入邮箱',
    },
  },
  {
    label: '第三方短链',
    field: 'thirdLink',
    component: 'Input',
    componentProps: {
      placeholder: '小程序短链',
    },
  },
  {
    label: '短链是否有效',
    field: 'thirdLinkValid',
    component: 'Switch',
    defaultValue: 0,
    componentProps: {
      checkedValue: 0,
      unCheckedValue: -1,
    },
  },
  {
    label: '记忆符',
    field: 'code',
    component: 'Input',
    componentProps: {
      placeholder: '非必填，可自动生成',
    },
    helpMessage: '为了方便识别记忆，无实际用途',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'Input',
  },
];
