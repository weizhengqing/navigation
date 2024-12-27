---
layout: post
title: "Ollama模型Tokens输出测试与局域网内设备使用配置"
date: 2024-12-27
category: AI tools
---
本文介绍如何在局域网内通过手机、平板等设备访问运行在主机上的Ollama开源模型。

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
- 桌面端：Open WebUI
- iPhone：Enchanted

## 通过Docker部署Open WebUI
在主机上我们直接采用 Docker 部署 Open WebUI，因为已经部署了 Ollama，采用如下命令：

```bash
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```
其中：`--add-host=host.docker.internal:host-gateway` 是为了添加一个主机名映射，将 `host.docker.internal` 指向主机的网关，方便容器访问宿主机服务。

假设你之前没有安装过 Ollama，也可以采用如下镜像（打包安装 Ollama + Open WebUI）：

```bash
docker run -d -p 3000:8080 -v ollama:/root/.ollama -v open-webui:/app/backend/data --name <container_name> ghcr.io/open-webui/open-webui:ollama
```
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

## LM Studio 使用开源AI大模型

LM Studio提供了便捷的开源大模型使用方式。在其发现页面可以直接下载和管理模型文件，支持多种主流开源模型。特别值得注意的是带有MLX标记的模型，这些模型使用了苹果公司专门为Apple Silicon开发的机器学习框架MLX进行优化。在M系列芯片的Mac设备上，MLX优化版本相比原生模型可提升2-3倍的推理速度。

使用步骤：
1. 下载并安装LM Studio
2. 在Discover页面选择合适的模型（推荐选择MLX标记的版本）
3. 下载完成后，点击Run可直接启动本地服务
4. 默认服务地址为 http://localhost:1234

MLX优化版性能参考：
- MLX优化版Mistral 7B在M2芯片上可达到25-30 tokens/s
- 原生版本速度约为8-12 tokens/s
