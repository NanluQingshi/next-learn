/*
 * @Author: NanluQingshi
 * @Date: 2025-07-12 21:05:26
 * @LastEditors: NanluQingshi
 * @LastEditTime: 2025-07-12 22:00:26
 * @Description: 根组件
 */
import '@/app/ui/global.css';
 
export default function RootLayout({ children }: LayoutComponentProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
