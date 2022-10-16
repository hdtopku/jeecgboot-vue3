import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { getList } from '/@/views/a/pms/Idea.api';
import { ref } from 'vue';

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
interface Options {
  label: String;
  value: String;
}
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
      showTime: false,
      valueFormat: 'YYYY-MM-DD hh:mm:ss',
    },
    rules: [
      {
        required: true,
        message: '请选择有效截至日期',
      },
    ],
  },
  {
    label: '选择账号',
    field: 'ideaId',
    component: 'Select',
    componentProps: ({}) => {
      const options = ref<Array<Options>>([]);
      getList({ pageSize: 1000, status: 1 }).then((res) => {
        res?.records?.forEach((item: any) => {
          options.value.push({ label: item?.invalidTime?.substring(0, 10) + '👉' + item.account, value: item.id });
        });
      });
      return {
        options: options.value,
        showSearch: true,
        placeholder: '请选择账号',
        onChange: (e: any) => {},
        optionLabelProp: 'label',
      };
    },
  },
];
