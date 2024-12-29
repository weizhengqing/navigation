---
layout: post
title: "如何在Cursor中安装DeepSeek模型"
date: 2024-12-29
category: AI tools
---
Cursor作为一款集成AI功能的IDE，使用体验非常丝滑。然而，当赠送的额度用完后，还希望能够继续使用AI功能。DeepSeek作为一款很棒的AI模型，特别其v3版本在网页端表现优异。本文将介绍如何在Cursor中通过API使用DeepSeek模型。

## 准备工作
1. **获取API Key**
   - 访问[DeepSeek官网](https://www.deepseek.com)
   - 购买API服务（500万tokens仅需10元人民币，支持支付宝付款）
   - 记录下获取的API Key

## 配置步骤

### 第一步：添加DeepSeek模型
1. 打开Cursor的设置界面
2. 进入"模型"设置
3. 添加新模型，命名为`deepseek-chat`
4. **重要**：取消勾选其他所有模型，仅保留`deepseek-chat`。不做的话后面验证API会报错。

### 第二步：配置API
1. 在"OpenAI API Key"字段中，粘贴购买的DeepSeek API Key
2. 在"Base URL"字段中填写：`https://api.deepseek.com/v1`
   - 注意：必须准确填写，如果是别的模型地址，会导致验证报错。
3. 点击验证按钮
4. 如果没有报错，说明配置成功，可以开始使用

