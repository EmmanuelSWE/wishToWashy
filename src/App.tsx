// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './providers/authProvider';
import AppRoutes from './routes/AppRoutes';
import { MachineProvider } from './providers/machineProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MachineProvider>
          <AppRoutes/>
        </MachineProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
