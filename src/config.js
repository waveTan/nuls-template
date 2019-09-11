//开发模式
export const IS_DEV = process.env.NODE_ENV !== 'production';
//运行环境（true:正式环境，false:测试环境）
export const RUN_DEV = true;
//链ID
export const API_CHAIN_ID = 2;
//链前缀
export const API_PREFIX = 'tNULS';
//pocm api url
export let POCM_API_URL = RUN_DEV ? 'http://pocm.zhoulijun.top' : 'http://pocm.zhoulijun.top';
//正式、测试网络的api
export let API_URL = IS_DEV ? 'http://ps.zhoulijun.top' : 'http://ps.zhoulijun.top';
//请求最迟时间
export const API_TIME = IS_DEV ? '9000' : '8000';
//浏览器连接地址
export const EXPLORER_URL = IS_DEV ? 'http://wallet.zhoulijun.top/' : 'http://wallet.zhoulijun.top/';
