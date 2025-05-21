# Faq

关于本项目及附属项目的任何问题你都可以看这里，如果没有，那么请自行[**必应**](https://cn.bing.com/)、[**百度**](https://www.baidu.com/)、[**酷安**](https://coolapk.com/)或[**提交Issues**](https://github.com/mcxiaochenn/Action_OKI_KernelSU_SUSFS/issues)

## 主播我的手机可以刷吗？

[本项目](https://github.com/mcxiaochenn/Action_OKI_KernelSU_SUSFS)目前只支持一加Ace5、一加Ace3V、一加Ace3Pro、一加PadPro四款机型，但LKM版KSU适用所有可以解BootLoader锁并且Kernel为GKI2.0的机型。

## 为什么使用mksu而不是ksu，其与ksu又有什么区别？

首先，个人觉得mksu比ksu更有优势，因为**原版KSU基于OverlayFS**实现，通过内核层创建虚拟文件层覆盖系统分区，依赖Linux内核的OverlayFS特性实现模块加载；而**MKSU采用Magisk同源的Magic Mount方案**，利用绑定挂载（Bind Mount）动态替换系统文件路径，直接修改挂载命名空间实现模块注入。***在实际应用中的表现往往MKSU更好，首先它不会生成1t的稀疏文件，其次针对替换系统文件的模块，它提供了更好的隐藏性***由此，**本人选择MKSU**

## LKM和GKI的区别在哪

GKI（通用内核镜像）是**替换设备原有内核的方式**，优点是可玩性强，缺点是会丢失厂家特性，而LKM（可加载内核模块）则**是加载内核模块**，不会**替换原有内核**，优点是简单上手成本低不丢失厂家特性，缺点是可玩性低。[OKI项目](https://github.com/mcxiaochenn/Action_OKI_KernelSU_SUSFS)专为一加系设备构建，使用一加官方开源内核，**涵盖了GKI的优点和LKM的优点**，***可放心使用***
