/*
 * @Author: NanluQingshi
 * @Date: 2025-07-13 09:50:47
 * @LastEditors: NanluQingshi
 * @LastEditTime: 2025-07-13 10:10:44
 * @Description: 字体文件
 */
import { Inter, Tajawal, Lusitana } from 'next/font/google'; 

export const inter = Inter({
  subsets: ['latin'],
});

export const tajawal = Tajawal({
  subsets: ['arabic'],
  variable: '--font-tajawal',
  weight: '700'
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  variable: '--font-lusitana',
  weight: '400'
});