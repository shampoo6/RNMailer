import {BackHandler} from 'react-native';

// const registerBackHandler = (route, toast) => {
//   if (route.name === 'Layout') {
//     toast('再次返回 将退出', 5000);
//     return true;
//   } else {
//     return false;
//   }
// };

// const backHandler = () => {};

class QuitBackHandler {
  // 计时器索引
  timerIndex;
  toast;

  constructor() {
    this.handler = this.handler.bind(this);
  }

  // 注册返回按钮事件处理程序
  register(_toast) {
    this.toast = _toast;
    BackHandler.addEventListener('hardwareBackPress', this.handler);
  }

  handler() {
    console.log('back button trigger');
    this.toast.show('再次返回 将退出 ', 3000);
    BackHandler.removeEventListener('hardwareBackPress', this.handler);
    this.timerIndex = setTimeout(() => {
      this.register(this.toast);
    }, 3000);
    return true;
  }

  unregister() {
    BackHandler.removeEventListener('hardwareBackPress');
    clearTimeout(this.timerIndex);
  }
}

const instance = new QuitBackHandler();

export default instance;
