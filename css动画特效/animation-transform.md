animation

动画 每帧的元素显示方式
添加浏览器前缀 获取各版本浏览器支持 
-webkit-    /* Safari and Chrome */
-ms-   /* IE 9 */
-moz-   /*  火狐  */

注意: 必须定义动画的名称和动画的持续时间。
如果省略的持续时间，动画将无法运行，因为默认值是0。

# 自定义动画名称
animation-name: myfirst;

## 动画持续时长
animation-duration: 5s;

## 动画播放速度
animation-timing-function: linear;
linear	动画从头到尾的速度是相同的。	
ease	默认。动画以低速开始，然后加快，在结束前变慢。	
ease-in	动画以低速开始。	
ease-out	动画以低速结束。	
ease-in-out	动画以低速开始和结束。	
cubic-bezier(n,n,n,n)	在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。

# 动画开始时间  默认是 0
animation-delay: 2s;

# # 循环播放次数  默认播放1次
animation-iteration-count: infinite;

# 规定动画是否在下一周期逆向地播放
# 注意：如果动画被设置为只播放一次，该属性将不起作用。
animation-direction: normal;

# 指定动画是否在运行或者暂停
animation-play-state: running;

@keyform 自定义name {
    频率帧的显示内容
}

transition
动画 开始帧和结束帧的 打开方式

transform
属性显示元素 可以改变操作元素旋转，缩放，移动，倾斜
transform: rotate(7deg)

transform: scale(0.5) 偏移量




