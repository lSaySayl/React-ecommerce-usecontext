import React from 'react'
import ReactDOM from 'react-dom/client'
import {routes} from "./router/router"
import { RouterProvider } from 'react-router-dom'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)