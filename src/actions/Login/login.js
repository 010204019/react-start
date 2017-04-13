export const ACT_PAGE_CHANGE_LOADING = "AC_PAGE_CHANGE_LOADING";
//登录
export function actf_pageChangeLoading(flg) {
  return { 
    type: ACT_PAGE_CHANGE_LOADING, 
    payload:{flg}}
}