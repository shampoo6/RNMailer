import storage from './storage';

// 已发送的邮件列表
class PostRecordList {
  // 在storage中保存一个id
  // 每添加一条数据就id自增
  // 新记录使用id保存在storage中
  // 查询时，使用当前id开始查，然后id递减，直到查不出数据为止，返回所有查询的结果

  // 获取列表
  getList() {
    const promiseGetOne = (id, result, resolve) => {
      this.getOne(id).then((r) => {
        if (r) {
          result.push(r);
          id--;
          promiseGetOne(id, result, resolve);
        } else {
          resolve(result);
        }
      });
    };
    return new Promise((resolve) => {
      this.getId().then((id) => {
        let result = [];
        promiseGetOne(id, result, resolve);
      });
    });
  }

  // 获取条记录的数据
  getOne(id) {
    return new Promise((resolve) => {
      storage
        .load({
          key: 'postRecords',
          id: id,
        })
        .then((record) => {
          resolve(record);
        })
        .catch(() => {
          resolve(null);
        });
    });
  }

  // 插入新记录
  insert(record) {
    return this.increaseId().then((id) => {
      record.id = id;
      return storage.save({
        key: 'postRecords',
        id: id,
        data: record,
        // expires: 1000 * 60, // 超时时间
        expires: 1000 * 60 * 60 * 24 * 14, // 超时时间
      });
    });
  }

  // 获取当前id
  getId() {
    return new Promise((resolve) => {
      let _id;
      storage
        .load({
          key: 'recordId',
          id: 'id',
        })
        .then((id) => {
          _id = id;
        })
        .catch(() => {
          this.saveId(0);
          _id = 0;
        })
        .finally(() => {
          resolve(_id);
        });
    });
  }

  // id 自增
  increaseId() {
    return new Promise((resolve) => {
      this.getId().then((id) => {
        id++;
        this.saveId(id).then(() => {
          resolve(id);
        });
      });
    });
  }

  saveId(id) {
    return storage.save({
      key: 'recordId',
      id: 'id',
      data: id,
      expires: null,
    });
  }
}

PostRecordList.prototype.instance = new PostRecordList();
PostRecordList.getInstance = () => {
  return PostRecordList.prototype.instance;
};

export default PostRecordList;
