
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Router dom:
import { BrowserRouter } from 'react-router-dom'

// Toast:
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// antd
import { StyleProvider } from '@ant-design/cssinjs';

// redux
import { Provider } from 'react-redux';
import { store } from 'store'

// antd:
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ToastContainer />
    <ConfigProvider
      theme = {{
        token: {
          colorPrimary: '#e50914',
        },
        components: {
          Table: {
            headerBg: '#6c757d',
            headerColor: 'white',
            rowHoverBg: '#e4e8ee'
          }
        }
      }}
    >
      {/* Làm cho ant đè lại taiwind */}
      <StyleProvider hashPriority='high'>
        <Provider store={store}>
          <App />
        </Provider>
      </StyleProvider>
    </ConfigProvider>
  </BrowserRouter>
  // </React.StrictMode>,
)
