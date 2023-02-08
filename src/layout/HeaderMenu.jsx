import { useHistory } from "react-router-dom";
import { HomeOutlined, SettingOutlined, AccountBookOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';

const items = [
  {
    label: 'Home',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: 'About',
    key: 'about',
    icon: <AccountBookOutlined />,
  },
  {
    label: 'Todo',
    key: 'todo',
    icon: <AccountBookOutlined />,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        ant design document
      </a>
    ),
    key: 'alipay',
  },
];
const App = () => {
  const history = useHistory();
  const toHome = (key) => {
      history.push(key)
  }
  
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    toHome(e.key)
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default App;