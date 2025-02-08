import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';

const clerk_key = import.meta.env.VITE_CLERK_KEY;

console.log(clerk_key);

if(!clerk_key){
  throw new Error('CLERK_KEY is not set');
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={clerk_key}>
      <App />
    </ClerkProvider>
  </BrowserRouter>
)
