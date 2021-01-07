import {configureStore} from '@reduxjs/toolkit';
import navigator from './navigator';

export default configureStore({
  reducer: {
    navigator,
  },
});
