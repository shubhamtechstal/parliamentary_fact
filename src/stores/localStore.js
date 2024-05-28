import { appConstants } from 'helpers/constants/appConstants';
import { localstorageService } from 'helpers/services/localstorageService';

const localStore = {};

localStore.setToken = (v) =>
  localstorageService.set(appConstants.localStorage.tokenKey, v);
localStore.getToken = () =>
  localstorageService.get(appConstants.localStorage.tokenKey);
localStore.resetToken = () =>
  localstorageService.remove(appConstants.localStorage.tokenKey);

export { localStore };
