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

Image 组件是 next 实现的在 image 基础上封装的组件，具备响应式、懒加载、防止布局偏移等特性，可以从 `next/image `中导入。

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

#### 2.8 Recommend Reading

* [Image Optimization Docs](https://nextjs.org/docs/app/building-your-application/optimizing/images)
* [Font Optimization Docs](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
* [Improving Web Performance with Images (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Performance/Multimedia)
* [Web Fonts (MDN)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)
* [How Core Web Vitals Affect SEO](https://vercel.com/blog/how-core-web-vitals-affect-seo)
* [How Google handles JavaScript throughout the indexing process](https://vercel.com/blog/how-google-handles-javascript-throughout-the-indexing-process)

### 3.Creating Layouts and Pages

* 用文件系统路由创建 dashboard 路由
* 了解创建新路由段是文件和文件夹的角色
* 创建可在多个仪表板页面之间共享的嵌套路由
* 了解什么是服务器托管、部分渲染和根布局

#### 3.1 Nested routing

Next.js 使用文件系统路由，其中每个文件夹代表一个路由段，对应着一个 URL 段，可以用来创建嵌套路由。

#### 3.2 Creating the dashboard page

* /app/dashboard/page.tsx 对应着 /dashboard 路径。
* /app/dashboard/customers/page.tsx 对应着 /dashboard/customers
* /app/dashboard/invoices/page.tsx 对应着 /dashboard/invoices

#### 3.3 Creating the dashboard layout

在 Next.js 中，使用特殊的文件 `layout.tsx` 来创建在多页面之间共享的 UI。Layout 组件接受一个 children 属性，这个 children 可以是页面也可以是其他的 Layout。

使用 layout 的一个好处是，他只会进行局部渲染。也就是说：在导航时，只有页面组件会更新，而整体布局不会重新渲染。并且在页面之间转换时，局部渲染会在 layout 中保留客户端的 React 状态。

### 4.Navigating Between Pages

* 如何使用 `next/link `组件
* 如何用 hook `usePathname() `实现链接激活状态
* Next.js 中 navigation 的工作原理

#### 4.1 Why optimize navigation

导航使用超链接：每次切换页面，都会进行整个页面的刷新。

#### 4.2 The `<Link>` Component

Link 组件实现和 a 标签类似的效果，使用也类似。Link 允许你用 JavaScript 实现客户端导航。位于 `next/link `下。使用 Link 组件后，网站不再像使用 a 标签那样，进行全部刷新，而是会进行局部刷新。

#### 4.3 Automatic code-splitting and prefetching

在传统的 React 单页面应用中，浏览器会在页面初始加载时就加载全部代码。与之不同，Next.js 会自动根据路由片段来分割代码，提高用户体验。

根据路由片段来分割代码，意味着页面之间是隔离的。这个页面报错，其他的页面仍然能够正常运行。同时这也减少了浏览器的代码解析量，使得网站速度更快了。

而且，在生产环境下，Next.js 会自动在后台预获取当前链接路由的代码，也就是说 在Link 组件出现在视口中时，它的代码早已经被加载好了，所以页面转换几乎发生在瞬间。

#### 4.4 Pattern: Showing active links

使用 React hook `usePathname() `来进行导航栏中当前路由的高亮。`usePathname()` 是 React hook，因此需要在文件顶部添加指令 `'use client'`，然后导入该 hook。
