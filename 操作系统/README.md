# 操作系统

参考资源：<https://frank-lam.github.io/fullstack-tutorial/#/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F>

## `CPU组成`

CPU是由`运算器`和`控制器`这两个部分组成的。

`1、` `运算器`由 ***算术逻辑单元（ALU，Arithmetic Logic Unit）、累加器、状态寄存器、通用寄存器组*** 等组成。算术逻辑运算单元（ALU）的基本功能为 ***加、减、乘、除*** 四则运算，***与、或、非、异或*** 等逻辑操作，以及移位、求补等操作。

计算机运行时，运算器的操作和操作种类由控制器决定。运算器处理的数据来自存储器；处理后的结果数据通常送回存储器，或暂时寄存在运算器中。与CU(Control Unit)共同组成了CPU的核心部分。

`2、` `控制器`分 ***组合逻辑控制器*** 和 ***微程序控制器*** ，两种控制器各有长处和短处。

***组合逻辑控制器*** 设计麻烦，结构复杂，一旦设计完成，就不能再修改或扩充，但速度快。组合逻辑控制器又称硬布线控制器，由逻辑电路构成，完全靠硬件来实现指令的功能。

***微程序控制器*** 设计方便，结构简单，修改或扩充都方便，修改一条机器指令的功能，只需重编所对应的微程序；要增加一条机器指令，只需在控制存储器中增加一段微程序。
