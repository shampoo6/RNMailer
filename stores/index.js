import {configureStore} from '@reduxjs/toolkit';
import navigator from './navigator';
import mailTemplate from './mailTemplate';

export default configureStore({
  reducer: {
    navigator,
    mailTemplate,
  },
});
