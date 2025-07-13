/*
 * @Author: NanluQingshi
 * @Date: 2025-07-12 21:05:26
 * @LastEditors: NanluQingshi
 * @LastEditTime: 2025-07-13 09:58:53
 * @Description: 根组件
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({ children }: LayoutComponentProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
