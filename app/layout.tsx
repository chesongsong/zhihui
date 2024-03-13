'use client'
import React, { createContext, useCallback, useEffect, useState } from 'react';
import './globals.css'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { getUserInfo } from './api/user';

import LoginModal from './components/LoginModal';
import { useAuth } from './hook';
import { GlobalContext } from './context';

const RootLayout = ({ children }: React.PropsWithChildren) => {

  const [showLoginModal, setShowLoadingModal] = useState(false);
  const isAuth = useAuth();
console.log('isAuth', isAuth)
  const fetchUserInfo = useCallback(async () => {
    const userInfo = await getUserInfo();
    console.log(userInfo);
  }, []);

  useEffect(() => {
    fetchUserInfo();
  }, []);
  return (
    <html lang="en">
      <body>
        <GlobalContext.Provider value={{ showLoginModal, setShowLoadingModal }}>
          <AntdRegistry>
            <ConfigProvider theme={{
              token: {
                colorPrimary: '#ff0000',
              }
            }}>
              <LoginModal isAuth={isAuth} />
              {children}
            </ConfigProvider>
          </AntdRegistry>

        </GlobalContext.Provider>
      </body>
    </html>
  )
};

export default RootLayout;