import { defHttp } from '/@/utils/http/axios';
import { Modal } from 'ant-design-vue';
import { useMessage } from '/@/hooks/web/useMessage';

enum Api {
  list = '/pms/am/list',
  getList = '/pms/am/getList',
  save = '/pms/am/add',
  edit = '/pms/am/edit',
  deleteOne = '/pms/am/delete',
  deleteBatch = '/pms/am/deleteBatch',
  importExcel = '/pms/am/importExcel',
  exportXls = '/pms/am/exportXls',
  getCodes = '/pms/am/getCodes',
}
/**
 * 导出api
 * @param params
 */
export const getExportUrl = Api.exportXls;
/**
 * 导入api
 */
export const getImportUrl = Api.importExcel;
/**
 * 列表接口
 * @param params
 */
export const list = (params) => defHttp.get({ url: Api.list, params });
export const getList = (params) => defHttp.get({ url: Api.getList, params });

/**
 * 删除单个
 * @param params
 * @param handleSuccess
 */
export const deleteOne = (params, handleSuccess) => {
  return defHttp.delete({ url: Api.deleteOne, params }, { joinParamsToUrl: true }).then(() => {
    handleSuccess();
  });
};
/**
 * 批量删除
 * @param params
 * @param handleSuccess
 */
export const batchDelete = (params, handleSuccess) => {
  Modal.confirm({
    title: '确认删除',
    content: '是否删除选中数据',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      return defHttp.delete({ url: Api.deleteBatch, data: params }, { joinParamsToUrl: true }).then(() => {
        handleSuccess();
      });
    },
  });
};
/**
 * 保存或者更新
 * @param params
 * @param isUpdate 是否是更新数据
 */
export const saveOrUpdate = (params, isUpdate) => {
  const url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({ url: url, params });
};

export const getCodes = (params, handleSuccess, handleError) => {
  return defHttp
    .get({ url: Api.getCodes, params }, { joinParamsToUrl: true })
    .then((res) => {
      handleSuccess(res.join('\r\n'));
    })
    .catch((err) => {
      const { createMessage } = useMessage();
      createMessage.error(err);
      handleError();
    });
};
