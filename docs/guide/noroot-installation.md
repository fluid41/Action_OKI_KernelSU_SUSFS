# 无root安装 {#noroot-installation}

::: warning
此教程为一加系设备定制，不一定具有通用型，请知晓！
:::

## 解锁Bootloader {#unlock-bootloader}

请确保你的手机已解锁bl，如果已经解锁可跳过此步骤。

::: warning
一加解锁Bootloader会导致数据清空，请注意备份！！！
:::

## 通过全能工具箱解锁（需要电脑） {#use-toolbox-unbl}

下载[大侠阿木](https://coolapk.com/u/%E5%A4%A7%E4%BE%A0%E9%98%BF%E6%9C%A8)的[一加全能工具箱](https://optool.daxiaamu.com/wiki_pctool)（[蓝奏云](https://daxiaamu.lanzn.com/b03xkgs9a)、[百度云](https://pan.baidu.com/s/1GtTjrsccONw0ORFNtI03yg?pwd=dxam) 提取码均为dxam）

打开后使用该工具的解锁bootloader功能，按照操作指引做即可

## 通过adb命令行解锁（可选电脑） {#use-platform-tools}

查找你身边一切有USB接口的可联网便携式设备，包括的不限于：安卓手机、win电脑、mac电脑、linux电脑、鸿蒙电脑、甚至树莓派nas都可以

### 下载 platform-tools 工具 {#dl-platform-tools}

::: code-group
```sh [win]
$ https://googledownloads.cn/android/repository/platform-tools-latest-windows.zip
```

```sh [mac]
$ https://googledownloads.cn/android/repository/platform-tools-latest-darwin.zip
```

```sh [linux]
$ https://googledownloads.cn/android/repository/platform-tools-latest-linux.zip
```

```sh [android]
$ 可使用甲壳虫ADB助手
```
:::

### 打开开发者选项 {#open-kfzxx}

设置 – 关于手机 – 版本信息 – 连击 版本号（开启 **开发者选项**）

![开发者选项](./pictures/noroot-installation/开发者选项.jpg)

### 开启OEM解锁和USB调试 {#open-oem-usb}

设置 – 其他设置（系统设置）- 开发者选项 – 开启 **OEM解锁**、**USB调试**

![开启OEM解锁和USB调试](./pictures/noroot-installation/开启OEM解锁和USB调试.jpg)

### 正式开始解锁 {#start-unlock-bl}

手机插入电脑，选择**传输文件**模式，解压[上面步骤](#dl-platform-tools)下载的**platform-tools**工具

在解压出来的文件夹中打开**CMD** or **终端**

输入下面的命令 进入**Bootloader**模式

```sh
adb reboot bootloader
```

进入**Bootloader**模式，再输入解锁命令

```sh
fastboot flashing unlock
```

:::warning
这是你最后的机会，如果你发现你还有重要资料没备份，那你现在后悔还来得及，请立刻长按电源键10秒重启回系统
:::

手机选择 **UNLOCK THE BOOTLOADER**

::: tip
音量键选择，电源键确定
:::

![手机确认解锁](./pictures/noroot-installation/手机确认解锁.jpg)

### 解锁完成！ {#unlock-bl-ok}

开机有黄字警告，就是解锁完成了（第一次开机会有点慢）

## 获取root权限 {#give-root}

持续更新中......