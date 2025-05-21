# 什么是 OKI？ {#wtisoki}

OKI全名Oneplus Kernel Image即“一加内核镜像”。它不同于GKI，其编译内核源码来自一加官方，保留官核特性。

## GKI又是什么？ {#wtisgki}

GKI全名Generic Kernel Image即“通用内核镜像”，是由谷歌为统一安卓内核乱象，提高不同机型内核通用性，减少人力开销而编写的。

关于GKI的具体详情可以[看这里](https://source.android.google.cn/docs/core/architecture/kernel/generic-kernel-image?hl=zh-cn)

## 为什么要使用OKI而不是GKI {#whyuseoki}

由于一加魔改了Boot内核部分代码，导致使用GKI（通用内核镜像）无法正常引导系统，虽然格式化data分区可以解决此问题，但使用GKI会导致失去一加官方线程调度，实际表现通常为功耗或发热异常，高负载下卡顿等等。而使用OKI可以完美解决此问题。

## Faq

如果你有关于本项目的任何问题，可以查看: [Faq](Faq)

## 如何使用 {#how-to-use}

请参考: [安装](installation)

## 如何构建 {#how-to-build}

请参考: [如何自行构建](how-to-build)

## 讨论 {#discussion}

- QQ群: [安卓root隐藏交流](https://qm.qq.com/cgi-bin/qm/qr?k=Tncp0qgTxddBSogy17jM2C5wPLqNtQpF&jump_from=webapi&authKey=+/7NoQk9GJWAYkMAWjbA45sIsUDdbpPd8+NoEJSiDEoEeAKdIADuvfwwaztVdmU5) 群号：1021796828

- 酷安：[@我不是尘桑](https://www.coolapk.com/u/21508887)