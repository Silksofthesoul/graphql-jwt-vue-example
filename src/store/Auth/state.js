import storage from '@/library/storage';
import array from '@/library/array';
import dataTemplates from './dataTemplates';

export const STORAGE_NAME = 'test-application';
export const STORAGE_CHUNK = 'Auth';
export const IS_CHUNK_ENCRIPTED = true;
export const INIT_TEMPLATE = dataTemplates.DEFAULT_OBJECT;

const allData = storage.init({
  storageName: STORAGE_NAME,
  template: array.co(INIT_TEMPLATE),
  storageChunk: STORAGE_CHUNK,
  isEncryptedChunk: IS_CHUNK_ENCRIPTED,
}).getData();

export default allData.data;
