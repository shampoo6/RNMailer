import {BackHandler, ToastAndroid} from 'react-native';

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

  constructor() {
    this.handler = this.handler.bind(this);
  }

  // 注册返回按钮事件处理程序
  register() {
    BackHandler.addEventListener('hardwareBackPress', this.handler);
  }

  handler() {
    console.log('back button trigger');
    // this.toast.show('再次返回 将退出 ', 3000);
    ToastAndroid.showWithGravityAndOffset(
      '再次返回 将退出 ',
      3000,
      ToastAndroid.BOTTOM,
      0,
      50,
    );
    // BackHandler.removeEventListener('hardwareBackPress', this.handler);
    this.unregister();
    this.timerIndex = setTimeout(() => {
      console.log('re register back event');
      this.register();
    }, 3000);
    return true; // 返回true 将不会执行后退键的默认行为
  }

  unregister() {
    BackHandler.removeEventListener('hardwareBackPress', this.handler);
    clearTimeout(this.timerIndex);
  }
}

const instance = new QuitBackHandler();

export default instance;
