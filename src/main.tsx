import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

 
//precisa envolver toda a aplicação
//<QueryClientProvider Client = {queryClient}></QueryClientProvider>
//</QueryClientProvider>

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
