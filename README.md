## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

### 1.CSS Styling

#### 1.1 TailwindCSS

Tailwind 能够很轻松的给组件加上样式，并且有自动样式隔离机制，也不需要废头脑去想类名。不过可读性会略差一点。

#### 1.2 CSS Modules

CSS 模块也能实现样式隔离，通过把样式组织在单独的文件中，并且作为模块被导入到组件中。

#### 1.3 clsx

clsx 是一个能够轻松切换类名的第三方库。常用于根据条件决定是否有特殊类名的场景。

### 2.Optimizing Fonts and Images

* 如何用 next/font 添加字体
* 如何用 next/image 添加图片
* 图片和字体在 Next.js 中是如何优化的

#### 2.1 Why optimize fonts

累计布局变化是 Google 用来衡量网站性能和用户体验的指标之一。对于字体来说，网站初始以回退字体或系统字体呈现文本，当加载后转换为自定义字体就会发生布局变化。通常体现为字体大小、间距、布局发生变化，导致周围的元素布局也会发生变化。

#### 2.2 Adding a primary font

创建一个 font 的文件，导入 next 的 font 字体，并配置好后导出

#### 2.3 Adding a secondary font

同上，也可以使用本地文件，需要指定 src，具体可看 **[本地文件](https://nextjs.org/docs/app/getting-started/fonts#local-fonts)**

#### 2.4 Why optimize images

* 确保图像在不同屏幕尺寸下都具有响应性
* 为不同的设备指定图像大小
* 防止图片加载时发生布局偏移
* 图片懒加载

#### 2.5 Image 组件

Image 组件是next 实现的在 image 基础上封装的组件，具备响应式、懒加载、防止布局偏移等特性，可以从 next/image 中导入。

#### 2.6 Adding the desktop hero image

添加只在 Web 端展示的图片，移动端不展示

```TSX
<Image
   src="/hero-desktop.png"
   width={1000}
   height={760}
   className="hidden md:block"
   alt="Screenshots of the dashboard project showing desktop version"
/>
```

#### 2.7 Adding the mobile hero image

添加只在移动端展示的图片，Web 端不展示

```tsx
<Image 
   src="/hero-mobile.png"
   width={560}
   height={620}
   className="block md:hidden"
   alt="Screenshots of the dashboard project showing mobile version"
/>
```
