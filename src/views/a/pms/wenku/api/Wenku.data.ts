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
    title: '验证状态(-1-已退款,0-未使用,1-已打开,2-已提交,4-已发送)',
    dataIndex: 'status'
   },
   {
    title: '文库下载地址',
    dataIndex: 'link'
   },
   {
    title: '邮箱地址',
    dataIndex: 'email'
   },
   {
    title: '备注',
    dataIndex: 'remark'
   },
   {
    title: '客户首次访问的时间',
    dataIndex: 'visitTime'
   },
   {
    title: '客户开始验证的时间',
    dataIndex: 'verifyTime'
   },
   {
    title: '买家申请退款时间',
    dataIndex: 'refundTime'
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
    label: '验证状态(-1-已退款,0-未使用,1-已打开,2-已提交,4-已发送)',
    field: 'status',
    component: 'Input',
  },
  {
    label: '文库下载地址',
    field: 'link',
    component: 'Input',
  },
  {
    label: '邮箱地址',
    field: 'email',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
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
  {
    label: '买家申请退款时间',
    field: 'refundTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
  },
];
