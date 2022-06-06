import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';

export const columns: BasicColumn[] = [
    {
    title: 'md5(ip+model+system+platform)',
    dataIndex: 'md5'
   },
   {
    title: '访问次数',
    dataIndex: 'visitCount'
   },
   {
    title: '域名',
    dataIndex: 'hostname'
   },
   {
    title: '访问链接',
    dataIndex: 'href'
   },
   {
    title: '请求参数',
    dataIndex: 'requestParam'
   },
   {
    title: '请求java方法',
    dataIndex: 'method'
   },
   {
    title: '访问路径',
    dataIndex: 'pathname'
   },
   {
    title: '用户ip',
    dataIndex: 'ip'
   },
   {
    title: 'ip对应的国家',
    dataIndex: 'country'
   },
   {
    title: 'ip对应的省份',
    dataIndex: 'province'
   },
   {
    title: 'ip对应的城市',
    dataIndex: 'city'
   },
   {
    title: 'ip对应的县城',
    dataIndex: 'county'
   },
   {
    title: 'ip对应的运营商',
    dataIndex: 'operator'
   },
   {
    title: 'ip对应的邮编',
    dataIndex: 'zipcode'
   },
   {
    title: 'ip对应的区号',
    dataIndex: 'areacode'
   },
   {
    title: '设备型号(PC、MOBILE)',
    dataIndex: 'model'
   },
   {
    title: '操作系统名称及版本(如Android 10、Mac 10.15.7、window10等)',
    dataIndex: 'system'
   },
   {
    title: '客户端平台，值域为：ios、android、mac（3.1.10+）、windows（3.1.10+）、linux（3.1.10+）',
    dataIndex: 'platform'
   },
   {
    title: '设备id',
    dataIndex: 'deviceid'
   },
];

export const searchFormSchema: FormSchema[] = [
 {
    label: 'md5(ip+model+system+platform)',
    field: 'md5',
    component: 'Input'
  },
 {
    label: '访问次数',
    field: 'visitCount',
    component: 'InputNumber'
  },
];

export const formSchema: FormSchema[] = [
  // TODO 主键隐藏字段，目前写死为ID
  {label: '', field: 'id', component: 'Input', show: false},
  {
    label: 'md5(ip+model+system+platform)',
    field: 'md5',
    component: 'Input',
  },
  {
    label: '访问次数',
    field: 'visitCount',
    component: 'InputNumber',
  },
  {
    label: '域名',
    field: 'hostname',
    component: 'Input',
  },
  {
    label: '访问链接',
    field: 'href',
    component: 'Input',
  },
  {
    label: '请求参数',
    field: 'requestParam',
    component: 'Input',
  },
  {
    label: '请求java方法',
    field: 'method',
    component: 'Input',
  },
  {
    label: '访问路径',
    field: 'pathname',
    component: 'Input',
  },
  {
    label: '用户ip',
    field: 'ip',
    component: 'Input',
  },
  {
    label: 'ip对应的国家',
    field: 'country',
    component: 'Input',
  },
  {
    label: 'ip对应的省份',
    field: 'province',
    component: 'Input',
  },
  {
    label: 'ip对应的城市',
    field: 'city',
    component: 'Input',
  },
  {
    label: 'ip对应的县城',
    field: 'county',
    component: 'Input',
  },
  {
    label: 'ip对应的运营商',
    field: 'operator',
    component: 'Input',
  },
  {
    label: 'ip对应的邮编',
    field: 'zipcode',
    component: 'Input',
  },
  {
    label: 'ip对应的区号',
    field: 'areacode',
    component: 'Input',
  },
  {
    label: '设备型号(PC、MOBILE)',
    field: 'model',
    component: 'Input',
  },
  {
    label: '操作系统名称及版本(如Android 10、Mac 10.15.7、window10等)',
    field: 'system',
    component: 'Input',
  },
  {
    label: '客户端平台，值域为：ios、android、mac（3.1.10+）、windows（3.1.10+）、linux（3.1.10+）',
    field: 'platform',
    component: 'Input',
  },
  {
    label: '设备id',
    field: 'deviceid',
    component: 'Input',
  },
];
