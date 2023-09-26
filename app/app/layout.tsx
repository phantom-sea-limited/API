import type { Metadata } from 'next'
import { Header, Drawer, Footer } from './Header'
import './js'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Header />
      <body className='mdui-drawer-body-left
        mdui-appbar-with-toolbar
        mdui-theme-primary-indigo
        mdui-theme-accent-pink
        mdui-theme-layout-dark' id='p-d'>
        <Drawer />
        <div className="container p-index mdui-container" id="root">{children}</div>
        <Footer />
      </body>
    </html>
  )
}