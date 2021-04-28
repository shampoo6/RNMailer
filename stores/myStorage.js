import StorageModule from '../nativeModule/StorageModule';

class MyStorage {
  load(params) {
    let {key, id} = params;
    return new Promise((resolve, reject) => {
      StorageModule.load(key, id).then((result) => {
        if (result) {
          resolve(result);
        } else {
          reject(null);
        }
      });
    });
  }

  save(params) {
    let {key, id, data, expires} = params;
    if (typeof data === 'object') {
      data = JSON.stringify(data);
    }
    return StorageModule.save(key, id, data, expires ? expires + '' : null);
  }
}

MyStorage.getInstance = () => {
  if (!MyStorage.instance) {
    MyStorage.instance = new MyStorage();
  }
  return MyStorage.instance;
};

export default MyStorage.getInstance();
