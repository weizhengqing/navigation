---
layout: post
title: "Hartree–Fock方程推导"
date: 2024-12-28
category: DFT理论
---

我们将详细介绍Hartree-Fock方程的推导过程。为了使形式尽可能简单，我们考虑两个电子的情况，并且暂时忽略自旋。在最后，我们将指出如何将以下推导推广到任意数量且带有自旋自由度的电子。

我们首先重写多体薛定谔方程（公式2.28），针对$N=2$个电子的特定情况：

$$
\left[\hat{H}_0(\mathbf{r}_1) + \hat{H}_0(\mathbf{r}_2) + \frac{1}{|\mathbf{r}_1-\mathbf{r}_2|}\right]\Psi = E\Psi \tag{A.1}
$$

其中单粒子哈密顿量$\hat{H}_0$与公式2.31中的相同。Hartree-Fock方法的核心思想是寻找该方程的Slater行列式形式的解 $\Psi$。下面我们报告了公式2.41中给出的Slater行列式的定义，并为了方便起见，用 $\psi_1$ 和 $\psi_2$ 表示单粒子波函数：

$$
\Psi(\mathbf{r}_1, \mathbf{r}_2) = \frac{1}{\sqrt{2}}[\psi_1(\mathbf{r}_1)\psi_2(\mathbf{r}_2) - \psi_1(\mathbf{r}_2)\psi_2(\mathbf{r}_1)] \tag{A.2}
$$

在这个阶段，我们并不知道$\psi_{1}$和$\psi_{2}$，为了继续推导，我们需要额外的信息。我们可以使用的一个信息是，公式A.2中的两体波函数$\Psi$不仅仅是公式A.1的任意解，而是具有最低能量$E$的解，即电子基态。

为了找到使总能量最小化的函数$\psi_{1}$和$\psi_{2}$，第一步是将$E$写成波函数的显式泛函。这是通过结合公式2.53、A.1和A.2来实现的。经过一些繁琐但直接的操作，我们得到：

$$
\begin{multline*}
E = \langle\psi_{1}|\hat{H}_{0}|\psi_{1}\rangle\langle\psi_{2}|\psi_{2} \rangle+\langle\psi_{2}|\hat{H}_{0}|\psi_{2}\rangle\langle\psi_{1}|\psi_{1} \rangle \\
-\langle\psi_{1}|\hat{H}_{0}|\psi_{2}\rangle\langle\psi_{2}|\psi_{1} \rangle-\langle\psi_{2}|\hat{H}_{0}|\psi_{1}\rangle\langle\psi_{1}|\psi_{2} \rangle \\
+ \int d\mathbf{r}_{1}d\mathbf{r}_{2}\,\frac{|\psi_{1}(\mathbf{r}_{1})|^{2}|\psi_{2}(\mathbf{r}_{2})|^{2}}{|\mathbf{r}_{1}-\mathbf{r}_{2}|} \\
-\int d\mathbf{r}_{1}d\mathbf{r}_{2}\,\frac{\psi_{1}^{*}(\mathbf{r}_{1})\psi_{2}^{*}(\mathbf{r}_{2})\psi_{1}(\mathbf{r}_{2})\psi_{2}(\mathbf{r}_{1})}{|\mathbf{r}_{1}-\mathbf{r}_{2}|}
\end{multline*}
\tag{A.3}
$$

其中使用了第2章中介绍的Dirac符号。

如果我们要求函数$\psi_{1}({\bf r})$和$\psi_{2}({\bf r})$是正交归一的，即归一化且正交，那么公式A.3将大大简化。这一要求对应于设置：

$$\langle \psi_1 |\psi_1 \rangle = \langle \psi_2 |\psi_2 \rangle = 1, \text{ 且 } \langle \psi_1 |\psi_2 \rangle = \langle \psi_2 |\psi_1 \rangle = 0 \tag{A.4}$$

这些条件自动意味着我们的试探解 $\Psi$ 是正确归一化的，正如第2.6节所讨论的那样。在方程A.3中使用方程A.4，我们立即得到：

$$E = \int d\mathbf{r} \psi_1^*(\mathbf{r}) \hat{H}_0(\mathbf{r}) \psi_1(\mathbf{r}) + \int d\mathbf{r} \psi_2^*(\mathbf{r}) \hat{H}_0(\mathbf{r}) \psi_2(\mathbf{r})$$

$$+ \int d\mathbf{r}_1 d\mathbf{r}_2 \frac{\psi_1^*(\mathbf{r}_1) \psi_2^*(\mathbf{r}_2) \psi_1(\mathbf{r}_1) \psi_2(\mathbf{r}_2)}{|\mathbf{r}_1 - \mathbf{r}_2|} - \int d\mathbf{r}_1 d\mathbf{r}_2 \frac{\psi_1^*(\mathbf{r}_1) \psi_2^*(\mathbf{r}_2) \psi_1(\mathbf{r}_2) \psi_2(\mathbf{r}_1)}{|\mathbf{r}_1 - \mathbf{r}_2|} \tag{A.5}$$

方程A.5显示了能量 $E$ 如何是 $\psi_1$ 和 $\psi_2$ 的泛函，简写为 $E = E[\psi_1, \psi_2]$。现在我们可以寻找使这个泛函最小化的函数 $\psi_1$ 和 $\psi_2$。原则上，我们可以通过要求 $E$ 对 $\psi_1$ 和 $\psi_2$ 的泛函导数等于零来实现这一点（参见练习3.4了解泛函导数的定义）：

$$\frac{\delta E}{\delta \psi_1} = 0, \quad \frac{\delta E}{\delta \psi_2} = 0 \tag{A.6}$$

这与标准微积分中多变量函数的极值计算完全类似。然而，这里的极小化过程由于我们的函数需要满足方程A.4中的约束而变得复杂。为了有效地处理这些约束，使用拉格朗日乘数法（Nocedal and Wright, 1999）是方便的。在这种方法中，引入一个新的泛函，自动包含约束：

$$L[\psi_1, \psi_2, \lambda_{11}, \ldots, \lambda_{22}] = E[\psi_1, \psi_2] - \sum_{i,j} \lambda_{ij} [\langle \psi_i |\psi_j \rangle - \delta_{ij}] \tag{A.7}$$

其中常数 $\lambda_{11}, \lambda_{12}, \lambda_{21}$ 和 $\lambda_{22}$ 是未知的。用 $L$ 替换 $E$ 是合理的，因为根据方程A.4，方括号中的项需要消失。常数 $\lambda_{ij}$ 称为拉格朗日乘数，可以被视为新的独立变量。在拉格朗日的方法中，由方程A.6和A.4定义的约束极小化问题被替换为以下无约束极小化问题：

$$\frac{\delta L}{\delta \psi_i} = 0, \quad i = 1,2, \quad \frac{\delta L}{\delta \lambda_{ij}} = 0, \quad i,j = 1,2 \tag{A.8}$$

可以立即验证，对拉格朗日乘数的泛函导数正好得到方程A.4中的约束。

在继续之前，我们注意到对 $\psi_i$ 和 $\psi_i^\*$ 的导数并不是独立的；然而，它们可以有效地被视为独立的。这是一个微妙的问题，与哈密顿量是厄米的事实有关，关于这一点的澄清可以在Bransden和Joachain（1983）的第2.8章找到。在下面，为了方便起见，我们计算对 $\psi_i^*$ 的导数。让我们以方程A.5中的第一项为例，为了明确起见，我们称之为 $G$：

$$
G = \int d\mathbf{r}\,\psi_1^*(\mathbf{r})\hat{H}_0(\mathbf{r})\psi_1(\mathbf{r})
$$

根据方程3.24中给出的泛函导数的定义，我们得到：

$$\int dr h(r) \frac{\delta G}{\delta \psi_1^*} = \frac{d}{d\epsilon} \int dr [\psi_1^*(r) + \epsilon h(r)] \hat{H}_0(r)\psi_1(r) = \int dr h(r) \hat{H}_0(r)\psi_1(r)$$

因此，我们有：

$$\frac{\delta G}{\delta \psi_1^*} = \hat{H}_0(r)\psi_1(r)$$

方程A.5中所有其他项以及方程A.7中的正交归一约束的泛函导数可以类似地得到。我们发现：

$$\frac{\delta L}{\delta \psi_1^*} = \hat{H}_0(r)\psi_1(r) + \int dr' \frac{|\psi_2(r')|^2}{|r - r'|} \psi_1(r) - \int dr' \frac{\psi_2^*(r') \psi_2(r)}{|r - r'|} \psi_1(r') - \lambda_{11} \psi_1(r) - \lambda_{12} \psi_2(r)$$

$$\frac{\delta L}{\delta \psi_2^*} = \hat{H}_0(r)\psi_2(r) + \int dr' \frac{|\psi_1(r')|^2}{|r - r'|} \psi_2(r) - \int dr' \frac{\psi_1^*(r') \psi_1(r)}{|r - r'|} \psi_2(r') - \lambda_{21} \psi_1(r) - \lambda_{22} \psi_2(r)$$

$$\frac{\delta L}{\delta \lambda_{ij}} = \delta_{ij} - \langle \psi_i | \psi_j \rangle \quad \text{对于任意 } i,j = 1,2$$

通过将这些导数设为零，我们得到了函数$\psi_1$和$\psi_2$必须满足的条件，以最小化能量：

$$\hat{H}_0(r)\psi_1(r) + \int dr' \frac{|\psi_2(r')|^2}{|r - r'|} \psi_1(r) - \int dr' \frac{\psi_2^*(r') \psi_2(r)}{|r - r'|} \psi_1(r') = \lambda_{11} \psi_1(r) + \lambda_{12} \psi_2(r)$$

$$\hat{H}_0(r)\psi_2(r) + \int dr' \frac{|\psi_1(r')|^2}{|r - r'|} \psi_2(r) - \int dr' \frac{\psi_1^*(r') \psi_1(r)}{|r - r'|} \psi_2(r') = \lambda_{21} \psi_1(r) + \lambda_{22} \psi_2(r)$$

$$\int dr \psi_i^*(r) \psi_j(r) = \delta_{ij} \quad \text{对于任意 } i,j = 1,2.$$

方程A.9和A.10可以重新表述为类似于第2.8节中的Hartree-Fock方程的形式。为此，我们使用方程2.47中的Hartree势和方程2.60中的交换势的表达式：

$$V_H(r) = \sum_j \int dr' \frac{|\psi_j(r')|^2}{|r - r'|}, \quad V_X(r,r') = -\sum_j \frac{\psi_j^*(r') \psi_j(r)}{|r - r'|}$$

其中$j = 1,2$。通过将这些表达式代入方程A.9和A.10，我们立即得到：

$$\left[ -\frac{\nabla^2}{2} + V_n(r) + V_H(r) \right] \psi_1(r) + \int dr' V_X(r,r') \psi_1(r') = \lambda_{11} \psi_1(r) + \lambda_{12} \psi_2(r)$$

$$\left[ -\frac{\nabla^2}{2} + V_n(r) + V_H(r) \right] \psi_2(r) + \int dr' V_X(r,r') \psi_2(r') = \lambda_{21} \psi_1(r) + \lambda_{22} \psi_2(r)$$

最后一步是消除两个方程右侧的其中一个函数。这可以通过引入一个$2 \times 2$矩阵$S$来实现，该矩阵对角化拉格朗日乘数。

$$
S\begin{pmatrix} \lambda_{11} & \lambda_{12} \\ \lambda_{21} & \lambda_{22} \end{pmatrix}S^{-1} = \begin{pmatrix} \varepsilon_1 & 0 \\ 0 & \varepsilon_2 \end{pmatrix}
$$

由于哈密顿量 $\hat{H}$ 是厄米的，拉格朗日乘子也是厄米的，即 $\lambda_{ij}^* = \lambda_{ji}$（Messiah, 1965, Section II.9）；因此 $S$ 是一个酉矩阵，且特征值 $\varepsilon_1, \varepsilon_2$ 是实数。如果我们现在定义新的波函数 $\phi_1$ 和 $\phi_2$ 如下：

$$
\phi_i = \sum_j S_{ij} \psi_j,
$$

我们可以将方程 A.9 和 A.10 重写为：

$$
\left[ -\frac{\nabla^2}{2} + V_n(\mathbf{r}) + V_H(\mathbf{r}) \right] \phi_1(\mathbf{r}) + \int d\mathbf{r}' V_X(\mathbf{r}, \mathbf{r}')\phi_1(\mathbf{r}) = \varepsilon_1 \phi_1(\mathbf{r}) \tag{A.16}
$$

$$
\left[ -\frac{\nabla^2}{2} + V_n(\mathbf{r}) + V_H(\mathbf{r}) \right] \phi_2(\mathbf{r}) + \int d\mathbf{r}' V_X(\mathbf{r}, \mathbf{r}')\phi_2(\mathbf{r}) = \varepsilon_2 \phi_2(\mathbf{r}) \tag{A.17}
$$

在这种形式下，我们可以看到引入的拉格朗日乘子实际上是 Hartree-Fock 特征值的代理。利用 $S$ 是酉矩阵的事实，还可以验证，在新的函数 $\phi_1$ 和 $\phi_2$ 下，方程 A.11 中的正交归一条件和方程 A.12 中的 Hartree 和交换势变为：

$$
\int d\mathbf{r}\phi_i^*( \mathbf{r})\phi_j(\mathbf{r}) = \delta_{ij} \quad \text{对于} \quad i,j=1,2 \tag{A.18}
$$

$$
V_H(\mathbf{r}) = \sum_j \int d\mathbf{r}' \frac{|\phi_j(\mathbf{r})|^2}{|\mathbf{r}-\mathbf{r}'|}, \quad V_X(\mathbf{r}, \mathbf{r}') = - \sum_j \frac{\phi_j^*( \mathbf{r}') \phi_j(\mathbf{r})}{|\mathbf{r}-\mathbf{r}'|} \tag{A.19}
$$

也就是说，它们在形式上与用函数 $\psi_1$ 和 $\psi_2$ 表达的相应表达式相同。方程 A.16-A.18 正是第 2.8 节中讨论的 Hartree-Fock 方程。在 $N$ 个电子的情况下，推导与上述相同，唯一的区别是我们得到 $N$ 个类似于方程 A.16 的方程，并且方程 A.19 中的求和是对具有最低能量特征值 $\varepsilon_i$ 的 $N$ 个波函数 $\phi_i$ 进行的。

在前面的推导中引入自旋（参见第 11 章）可以通过将变量 $\mathbf{r}_1$ 和 $\mathbf{r}_2$ 视为描述两个电子的位置以及它们相对于无穷小均匀磁场的自旋方向来实现：

$$
\mathbf{r}_1 \rightarrow (\mathbf{r}_1, \sigma_1) \quad \text{和} \quad \mathbf{r}_2 \rightarrow (\mathbf{r}_2, \sigma_2)
$$

其中 $\sigma = \uparrow$ 或 $\downarrow$。在此替换之后，每个积分应被视为对空间变量的积分和对自旋变量的求和：

$$
\int d\mathbf{r} \rightarrow \sum_\sigma \int d\mathbf{r}
$$

这是我们需要对旋量取期望值的结果，如方程 11.38 所示。在这些替换之后，方程 A.16 几乎保持不变。唯一的新颖之处是，只有与 $\phi_1$ 具有相同自旋的波函数 $\phi_j$ 才会对定义方程 A.19 中交换势的求和做出贡献。


---
本文参考自：

[1] Giustino, Feliciano. Materials modelling using density functional theory: properties and predictions. Oxford University Press, 2014.