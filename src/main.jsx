import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router.jsx';
import { StoreProvider } from './hooks/useGlobalReducer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider>
      <RouterProvider router={router}/>
    </StoreProvider>
  </StrictMode>,
)
