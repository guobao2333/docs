# 为Termux设置Android SDK
0. 在开始之前你需要授予权限并安装依赖：
```bash
termux-setup-storage
pkg update && pkg upgrade
pkg install unzip git openjdk-17
```

1. 首先下载[命令行工具](https://developer.android.google.cn/studio?hl=zh-cn#command-line-tools-only)
2. 接下来解压并删除压缩包
```bash
unzip /sdcard/Download/commandlinetools-linux-*.zip -d ~/android_sdk && rm -v "$(ls /sdcard/Download/commandlinetools-linux-*.zip | head -1)"
mv ~/android_sdk/cmdline-tools ~/android_sdk/latest
mkdir -p ~/android_sdk/cmdline-tools
mv ~/android_sdk/latest ~/android_sdk/cmdline-tools/latest
```

3. 然后把sdk路径写入配置（如果用zsh就改成`.zshrc`）
```bash
echo 'export ANDROID_HOME=$HOME/android_sdk' >> ~/.bashrc
echo 'export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools' >> ~/.bashrc
```

4. 应用配置
   一般：`source ~/.bashrc`
   zsh： `source ~/.zshrc`
5. 修改权限 `chmod -R 755 $ANDROID_HOME`
6. 同意所有许可并安装平台工具和Android 4.0 SDK 
```bash
yes | sdkmanager --licenses "platform-tools" "platforms;android-14"
```

adb相关工具可以直接安装使用： `pkg install android-tools`

如果需要 `local.properties` 文件：
```bash
echo "sdk.dir=$ANDROID_HOME" > local.properties
```
