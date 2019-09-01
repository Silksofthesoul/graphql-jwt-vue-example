import {
  STORAGE_NAME,
  STORAGE_CHUNK,
  IS_CHUNK_ENCRIPTED,
} from './state';

import array from '@/library/array';
import storage from '@/library/storage';

function cryptoStorage(store, namespace) {
  store.subscribe((mutation, items) => {
    if (namespace && items[namespace]) {
      return storage.init({
        keyLength: 128,
        storageName: STORAGE_NAME,
      }).setData({
        storageChunk: STORAGE_CHUNK,
        isEncryptedChunk: IS_CHUNK_ENCRIPTED,
        data: array.co(items[namespace]),
      });
    }
  });
}

export default (options) => {
  const { namespace } = options;
  return (store) => {
    cryptoStorage(store, namespace);
  };
};
