import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { useMemo } from 'react';
import { themeSettings } from './theme.js';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from 'sections/Dashboard';
import Layout from 'sections/Layout';

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className='App'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* routes */}
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Navigate to='/dashboard' replace />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
          </Routes>
          {/* routes */}
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
