import React from 'react';
import { Card, Input, Button, Space, Typography, Tag, Row, Col, Divider } from 'antd';
import { Send, Globe, Leaf } from 'lucide-react';

const { Title, Text, Paragraph } = Typography;

const AnalyzerDashboard = ({ input, setInput, handleAnalyze, loading, result }) => (
  <Space direction="vertical" size="large" style={{ width: '100%' }}>
    <div style={{ textAlign: 'center' }}>
      <Title level={2} style={{ color: '#1b4332' }}>AI Footprint Analysis</Title>
      <Text type="secondary">Enter your activities to see their environmental impact.</Text>
    </div>

    <Card bordered={false} style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.08)', borderRadius: '20px' }}>
      <Input.TextArea 
        rows={4} 
        placeholder="Example: I flew from New York to London today..." 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ marginBottom: '20px', borderRadius: '12px', padding: '12px' }}
      />
      <Button 
        type="primary" 
        icon={<Send size={18} />} 
        block 
        size="large" 
        onClick={handleAnalyze} 
        loading={loading}
        style={{ height: '50px', borderRadius: '12px' }}
      >
        Analyze Activity
      </Button>
    </Card>

    {result && (
      <Card 
        title={<span><Globe size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Analysis Report</span>}
        style={{ background: '#f7fee7', border: '1px solid #d9f99d', borderRadius: '20px' }}
      >
        <Row gutter={16} align="middle">
          <Col span={12}>
            <Text type="secondary">CARBON FOOTPRINT</Text>
            <Title level={3} style={{ margin: 0, color: '#2d6a4f' }}>{result.carbonValue} kg CO2</Title>
          </Col>
          <Col span={12}>
            <Text type="secondary">IMPACT LEVEL</Text>
            <div>
              <Tag color={result.impact === 'High' ? 'red' : 'green'} style={{ padding: '4px 12px', fontSize: '14px', borderRadius: '20px' }}>
                {result.impact}
              </Tag>
            </div>
          </Col>
        </Row>
        <Divider />
        <div style={{ display: 'flex', gap: '10px' }}>
          <Leaf size={20} color="#40916c" />
          <div>
            <Text strong>AI Suggestion:</Text>
            <Paragraph italic style={{ marginTop: '4px' }}>{result.tip}</Paragraph>
          </div>
        </div>
      </Card>
    )}
  </Space>
);

export default AnalyzerDashboard;