---
layout: post
title: "Ollama 模型Tokens输出测试与局域网内设备使用配置"
date: 2024-12-27
category: AI tools
---
这篇文章介绍如何在局域网内其他设备如手机，平板上使用主机的ollama开源模型。

## 不同开源模型输出的tokens速度测试

使用 `--verbose` 参数可以实时查看每秒输出的tokens，例如：
```bash
ollama run --verbose qwen2.5-coder:32b
```
### qwen2.5-coder:32b
```
总时长: 2m13.328514583s
加载时长: 25.161ms
提示词评估数量: 33 tokens
提示词评估时长: 10.819s
提示词评估速率: 3.05 tokens/s
生成数量: 611 tokens
生成时长: 2m2.318s
生成速率: 5.00 tokens/s
```

### qwen2.5-coder:7b
```
总时长: 14.339346583s
加载时长: 26.574958ms
提示词评估数量: 33 tokens
提示词评估时长: 2.44s
提示词评估速率: 13.52 tokens/s
生成数量: 246 tokens
生成时长: 11.708s
生成速率: 21.01 tokens/s
```

### llama3.1:8b
```
总时长: 28.566681417s
加载时长: 27.195334ms
提示词评估数量: 14 tokens
提示词评估时长: 2.426s
提示词评估速率: 5.77 tokens/s
生成数量: 515 tokens
生成时长: 26.112s
生成速率: 19.72 tokens/s
```

### qwen2.5:14b-instruct-q8_0
注：q8_0为精度设置，相比q4具有更高精度。
```
总时长: 1m25.738078416s
加载时长: 27.547791ms
提示词评估数量: 33 tokens
提示词评估时长: 399ms
提示词评估速率: 82.71 tokens/s
生成数量: 542 tokens
生成时长: 1m25.308s
生成速率: 6.35 tokens/s
```

## 局域网内主机Ollama 配置说明

### 内存管理
默认情况下，Ollama在闲置5分钟后会释放所有模型。若需保持模型常驻内存，可设置：
```bash
OLLAMA_KEEP_ALIVE=-1
```

### 网络设置
默认情况下，Ollama仅监听localhost (127.0.0.1)。要允许局域网设备访问，需修改监听地址：
```bash
OLLAMA_HOST=0.0.0.0:11434
ollama serve
```
其中0.0.0.0表示监听所有网络接口，11434为默认端口。

### 客户端支持
- 桌面端：open-webui
- iPhone：Enchanted

## Enchanted配置指南

### 设置步骤
1. 获取PC的IP地址
   - Windows：使用`ipconfig`命令
   - macOS/Linux：使用`ifconfig`命令

2. 启动Ollama服务
   - 确保已运行`ollama serve`

3. 配置手机端
   - 在Enchanted中输入服务器地址：`<PC的IP地址>:11434`
   - 示例：`192.168.1.100:11434`

4. 检查防火墙
   - 确保PC防火墙允许11434端口的入站连接

5. 测试连接
   - 访问配置的地址确认连接状态

注意：首次配置Enchanted后可能看不到模型列表，关闭并重启应用后即可正常显示和使用。