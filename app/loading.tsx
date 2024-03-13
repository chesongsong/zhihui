import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Loading: React.FC = () => <Spin indicator={<LoadingOutlined spin />} />;

export default Loading;