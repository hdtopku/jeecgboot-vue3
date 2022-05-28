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
    title: '状态(0-待使用,1-已访问,2-验证中,3-验证完成,-1-已过期,-2-未使用已退款,-3-已使用退款)',
    dataIndex: 'status'
   },
   {
    title: '客户首次访问的时间',
    dataIndex: 'visitTime'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: '链接key',
    field: 'code',
    component: 'Input'
  },
 {
    label: '状态(0-待使用,1-已访问,2-验证中,3-验证完成,-1-已过期,-2-未使用已退款,-3-已使用退款)',
    field: 'status',
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
    label: '状态(0-待使用,1-已访问,2-验证中,3-验证完成,-1-已过期,-2-未使用已退款,-3-已使用退款)',
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
];
