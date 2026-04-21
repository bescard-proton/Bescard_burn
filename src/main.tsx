import { StrictMode } from 'react'
import { App as AntdApp, ConfigProvider, theme as antdTheme } from 'antd'
import { RouterProvider } from '@tanstack/react-router'
import ReactDOM from 'react-dom/client'

import 'antd/dist/reset.css'
import '@/index.css'

import { router } from './router'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        algorithm: antdTheme.darkAlgorithm,
        token: {
          borderRadius: 18,
          colorBgBase: '#0d1016',
          colorBgContainer: 'rgba(22, 28, 38, 0.88)',
          colorBgElevated: 'rgba(22, 28, 38, 0.96)',
          colorBorder: 'rgba(255, 255, 255, 0.12)',
          colorPrimary: '#ffdb11',
          colorText: '#ffffff',
          colorTextBase: '#ffffff',
          colorTextSecondary: '#d7d9e0',
          fontFamily: '"PingFang SC", var(--font-sans)',
        },
        components: {
          Button: {
            controlHeight: 48,
            controlHeightLG: 54,
            contentFontSize: 16,
            contentFontSizeLG: 16,
            defaultActiveBg: '#1A1A1A',
            defaultActiveBorderColor: '#1A1A1A',
            defaultActiveColor: '#FFDB11',
            defaultBg: '#1A1A1A',
            defaultBorderColor: '#1A1A1A',
            defaultColor: '#FFFFFF',
            defaultHoverBg: '#1A1A1A',
            defaultHoverBorderColor: '#1A1A1A',
            defaultHoverColor: '#FFDB11',
            defaultShadow: 'none',
            fontWeight: 500,
            primaryShadow: '0 10px 30px rgba(255, 219, 17, 0.2)',
          },
          Modal: {
            contentBg: 'rgba(22, 28, 38, 0.96)',
            headerBg: 'transparent',
            titleColor: '#ffffff',
          },
          Tag: {
            borderRadiusSM: 999,
          },
        },
      }}
    >
      <AntdApp>
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  </StrictMode>,
)
