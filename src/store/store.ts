import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';

export const store = configureStore({
  reducer: {
    user: userReducer
  }
<<<<<<< HEAD
});
=======
});
>>>>>>> de8b53c8ff72cf860437186bbefd386c909cf130
