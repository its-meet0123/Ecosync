import React, { useState } from 'react';
import { ConfigProvider, Spin, Avatar, Button, Typography, message } from 'antd';
import { LogIn, LogOut, Leaf } from 'lucide-react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

// Import newly created components
import LandingPage from './components/LandingPage';
import AnalyzerDashboard from './components/AnalyzerDashboard';

const { Text } = Typography;

function App() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  const handleAnalyze = async () => {
    if (!input) return message.warning("Please describe your activity!");
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/analyze', { activity: input });
      setResult(res.data);
    } catch (error) {
      message.error("Server connection failed.");
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) return <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Spin size="large" tip="Growing your ecosystem..." /></div>;

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#40916c', borderRadius: 12 } }}>
      <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)', padding: '20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Global Navbar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Leaf color="#40916c" fill="#40916c" size={32} />
              <b style={{ fontSize: '24px', color: '#1b4332' }}>EcoSync</b>
            </div>
            {isAuthenticated ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Avatar src={user.picture} style={{ border: '2px solid #52b788' }} />
                <Text strong>Hi, {user.nickname}</Text>
                <Button type="text" danger onClick={() => logout()} icon={<LogOut size={16} />}>Logout</Button>
              </div>
            ) : (
              <Button type="primary" onClick={() => loginWithRedirect()} icon={<LogIn size={16} />}>Login</Button>
            )}
          </div>

          {/* Conditional Rendering */}
          {isAuthenticated ? (
            <AnalyzerDashboard 
              input={input} 
              setInput={setInput} 
              handleAnalyze={handleAnalyze} 
              loading={loading} 
              result={result} 
            />
          ) : (
            <LandingPage onLogin={() => loginWithRedirect()} />
          )}
          
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;