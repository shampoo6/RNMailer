import {createSlice} from '@reduxjs/toolkit';
// import storage from '../storage';
import storage from '../myStorage';
import {useSelector} from 'react-redux';

const defaultTemplate = {
  email: 'shampoo6@163.com',
  pwd: 'PDIVXWEXEPZWGXDR',
  smtp: 'smtp.163.com',
  name: '陆宪甫2233',
  to: 'hywllxf@163.com',
  cc: '2721445883@qq.com, 454714691@qq.com',
  subject: '测试主题',
  content: '测试内容',
  sign:
    '<p>顺颂商祺！</p><p><img src="http://mail-online.nosdn.127.net/bccc117b969ed7620287b262eb8b5763.jpg" /></p><p class="ql-align-justify"><strong>陆宪甫&nbsp;&nbsp;|&nbsp;教学部</strong></p><p class="ql-align-justify">公司地址：<span style="color: rgb(31, 31, 31);">重庆市九龙坡区渝州路87号双薪时代九楼</span></p><p class="ql-align-justify">手机号码：17783683002</p><p class="ql-align-justify">电子邮件：<a href="mailto:luxf_cq@hqyj.com" rel="noopener noreferrer" target="_blank">luxf_cq@hqyj.com</a></p><p class="ql-align-justify">集团官网：<a href="http://www.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">www.hqyj.com</a>&nbsp;</p><p class="ql-align-justify">创客学院：<a href="http://www.makeru.com.cn/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">www.makeru.com.cn</a><span style="color: rgb(31, 31, 31);">&nbsp;</span></p><p class="ql-align-justify"><span style="color: rgb(31, 31, 31);">研发中心：</span><a href="http://www.fsdev.com.cn/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">www.fsdev.com.cn</a></p><p class="ql-align-justify"><br></p><p class="ql-align-justify"><a href="http://bj.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">北京</a>·<a href="http://sh.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">上海</a>·<a href="http://sz.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">深圳</a>·<a href="http://cd.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">成都</a>·<a href="http://nj.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">南京</a>·<a href="http://wh.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">武汉</a>·<a href="http://xa.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">西安</a>·<a href="http://gz.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">广州</a>·<a href="http://sy.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">沈阳</a>·<a href="http://jn.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">济南</a>·<a href="http://cq.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">重庆</a>·<a href="http://cs.hqyj.com/" rel="noopener noreferrer" target="_blank" style="color: rgb(51, 51, 51);">长沙</a></p>',
};

export const slice = createSlice({
  name: 'mailTemplate',
  initialState: {},
  reducers: {
    setTemplate: (state, action) => {
      for (let key in action.payload) {
        state[key] = action.payload[key];
      }
      saveState(state);
    },
    setContent: (state, action) => {
      state.content = action.payload;
      saveState(state);
    },
    setSign: (state, action) => {
      state.sign = action.payload;
      saveState(state);
    },
  },
});

export const {setTemplate, setContent, setSign} = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const screenName = (state) => state.navigator.screenName;

const _getTemplate = (state) => state.mailTemplate;

export const getTemplate = () => (dispatch) => {
  return new Promise((resolve) => {
    let template = useSelector(_getTemplate);
    if (template.email) {
      resolve(template);
    } else {
      // 读取storage
      storage
        .load({
          key: 'email',
          id: 'template',
        })
        .then((_template) => {
          template = _template;
        })
        .catch(() => {
          saveState(defaultTemplate);
          template = defaultTemplate;
        })
        .finally(() => {
          dispatch(setTemplate(template));
          resolve(template);
        });
    }
  });
};

const saveState = (state) => {
  storage
    .save({
      key: 'email',
      id: 'template',
      data: state,
      expires: null,
    })
    .then((r) => {
      // console.log(r);
    })
    .catch((reason) => {
      console.error(reason);
    });
};

export default slice.reducer;
