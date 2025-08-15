import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {RouterProvider} from "react-router-dom";
import myRouter from './Route/Route';

import { Provider } from 'react-redux'
import store from './Redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={myRouter} />
    </Provider>
  </StrictMode>,
)
