---
layout: post
title: "rprim"
date: 2024-12-28
category: ABINIT variables
---

# 理解ABINIT中的`rprim`变量

在ABINIT软件中，`rprim`是一个用于定义实空间原始平移矢量的关键变量。本文将解释`rprim`的含义、特性及其在计算中的作用。

## 什么是`rprim`？

`rprim`是ABINIT中的一个实数型变量，维度为`(3,3)`，即一个3x3的矩阵。它用于定义实空间中三个无量纲的原始平移矢量。这些矢量会被`acell`和`scalecart`变量缩放，最终得到实际的晶格矢量。

## `rprim`的特性

- **EVOLVING**: 该变量在计算过程中可能会发生变化，但仅在`ionmov == 2`或`22`且`optcell/=0`时才会变化，否则它是固定的。

## `rprim`的默认值

`rprim`的默认值为单位矩阵：
```
 [1, 0, 0],  
 [0, 1, 0],  
 [0, 0, 1]
```
这意味着默认情况下，三个原始平移矢量是笛卡尔坐标系中的单位矢量。

## `rprim`的使用场景

`rprim`在ABINIT的测试和教程中非常常用。在所有的ABINIT测试中，`rprim`被使用了1000次（共1245次测试），在教程中也被使用了130次（共159个教程）。

## `rprim`与其它变量的关系

- **`acell`**: `rprim`定义的矢量会被`acell`缩放，以得到实际的长度。
- **`scalecart`**: `rprim`定义的矢量还会被`scalecart`沿笛卡尔坐标轴拉伸。
- **`%rprimd`**: 最终的实际晶格矢量存储在内部变量`%rprimd`中。

## `rprim`的具体作用

`rprim`定义了三个原始平移矢量的方向，而`acell`和`scalecart`则分别用于缩放这些矢量的长度和方向。具体来说，实际晶格矢量的计算公式为：
```
R1p(i) = scalecart(i) x rprim(i,1) x acell(1)  
R2p(i) = scalecart(i) x rprim(i,2) x acell(2)  
R3p(i) = scalecart(i) x rprim(i,3) x acell(3)
```
其中，`i=1,2,3`分别对应x、y、z三个方向。

## 注意事项

1. **输入顺序**: `rprim`的输入顺序是Fortran数组的顺序，即前三个数是第一个矢量的坐标，接下来三个是第二个矢量的坐标，最后三个是第三个矢量的坐标。
2. **混合积为正**: `rprim`定义的三个矢量的混合积（即`(R1xR2).R3`）必须为正数，否则需要交换一对矢量。
3. **替代变量**: 对于六方晶格等特殊结构，可以使用`angdeg`变量来定义原始矢量的方向，以避免手动输入复杂的`rprim`值。
4. **常见错误**: 初学者在使用`acell`和`scalecart`时容易混淆。例如，在定义体心四方晶格时，错误地使用`acell`会导致晶格矢量方向错误。

## 示例

以下是一个体心四方晶格的正确定义方式：
```
rprim   1        0       0  
        0        1       0  
        1/2      1/2     1/2  
scalecart  "a"  "a"  "c"  
acell 3*1    ! 默认值
```
而以下方式是错误的：
```
rprim   1       0       0  
        0       1       0  
        1/2     1/2     1/2  
acell  "a"  "a"  "c"    ! 错误  
scalecart 3*1    ! 默认值
```

## 总结

`rprim`是ABINIT中用于定义晶格原始平移矢量的关键变量。通过`rprim`、`acell`和`scalecart`的配合，用户可以灵活地定义晶格的结构。理解`rprim`的含义及其与其它变量的关系，对于正确使用ABINIT进行材料模拟至关重要。