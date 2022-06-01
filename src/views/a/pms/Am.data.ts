import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
    {
    title: '链接key',
    dataIndex: 'code'
   },
   {
    title: '激活码状态(0-正常,-1-失效)',
    dataIndex: 'valid'
   },
   {
    title: '验证状态(0-待使用,1-待验证,2-验证中,3-验证完成)',
    dataIndex: 'status'
   },
   {
    title: '客户首次访问的时间',
    dataIndex: 'visitTime'
   },
   {
    title: '客户开始验证的时间',
    dataIndex: 'verifyTime'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '链接key',
    field: 'code',
    component: 'Input'
  },
 {
    label: '激活码状态(0-正常,-1-失效)',
    field: 'valid',
    component: 'Input'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: '链接key',
    field: 'code',
    component: 'Input',
  },
  {
    label: '激活码状态(0-正常,-1-失效)',
    field: 'valid',
    component: 'Input',
  },
  {
    label: '验证状态(0-待使用,1-待验证,2-验证中,3-验证完成)',
    field: 'status',
    component: 'Input',
  },
  {
    label: '客户首次访问的时间',
    field: 'visitTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
  {
    label: '客户开始验证的时间',
    field: 'verifyTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
];
