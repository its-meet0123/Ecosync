import React from 'react';
import { Typography, Row, Col, Card, Button, Divider } from 'antd';
import { Globe, TreeDeciduous, Zap, ShieldCheck } from 'lucide-react';

const { Title, Paragraph } = Typography;

const LandingPage = ({ onLogin }) => (
  <div style={{ textAlign: 'center', padding: '40px 0' }}>
    <div style={{ marginBottom: '40px' }}>
      <Globe size={64} color="#2d6a4f" style={{ marginBottom: '20px' }} />
      <Title level={1} style={{ color: '#1b4332' }}>Small Steps, Big Impact.</Title>
      <Paragraph style={{ fontSize: '18px', color: '#40916c' }}>
        Track your daily carbon footprint and learn how to heal the planet with AI-driven insights.
      </Paragraph>
      <Button 
        type="primary" 
        size="large" 
        onClick={onLogin} 
        style={{ height: '50px', borderRadius: '25px', padding: '0 40px', fontWeight: 'bold' }}
      >
        Get Started Now
      </Button>
    </div>

    <Divider>Why Preserve Our Ecosystem?</Divider>

    <Row gutter={[24, 24]} style={{ marginTop: '30px' }}>
      {[
        { icon: <TreeDeciduous size={40} color="#52b788" />, title: "Reforestation", desc: "One tree can absorb 48 lbs of CO2 annually. More trees means a cooler planet." },
        { icon: <Zap size={40} color="#ffb703" />, title: "Energy Savings", desc: "Switching to renewables can reduce household emissions by up to 30%." },
        { icon: <ShieldCheck size={40} color="#2a9d8f" />, title: "Sustainability", desc: "Managing resources today ensures a greener world for future generations." }
      ].map((item, index) => (
        <Col xs={24} md={8} key={index}>
          <Card hoverable style={{ height: '100%', borderRadius: '15px' }}>
            <div style={{ marginBottom: '15px' }}>{item.icon}</div>
            <Card.Meta title={item.title} description={item.desc} />
          </Card>
        </Col>
      ))}
    </Row>

    <div style={{ marginTop: '50px', background: '#d8f3dc', padding: '30px', borderRadius: '20px', textAlign: 'left' }}>
      <Title level={4} style={{ color: '#1b4332' }}>🌱 Daily Eco-Action Guide</Title>
      <ul style={{ color: '#1b4332', fontSize: '16px', lineHeight: '2' }}>
        <li><b>Avoid Plastic:</b> Switch to bamboo toothbrushes and cloth bags.</li>
        <li><b>Save Water:</b> A 5-minute shower saves up to 40 liters of water.</li>
        <li><b>Go Digital:</b> Reduce paper waste by choosing e-statements.</li>
      </ul>
    </div>
  </div>
);

export default LandingPage;