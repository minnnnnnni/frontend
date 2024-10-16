import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js';

// import Home from './pages/home.jsx'
import WritePost from './pages/write-post.jsx';

const router = createBrowserRouter([
  // { path: '/', element: <Home /> },
  { path: '/write', element: <WritePost /> },
])

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
)