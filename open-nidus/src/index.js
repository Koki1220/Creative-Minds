import ReactDom from 'react-dom/client'
import App from './App'
import './index.css'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

// optional configuration
const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }
  
const root =ReactDom.createRoot(document.querySelector('#root'));
root.render(<AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>)