// String 字符串搜索
.length; // 长度
.indexOf("China"); // 首次出现的索引，没有返回-1，不支持正则
.indexOf("China", 18); // 从18开始搜索
.lastIndexOf("China"); // 从后向前搜索，返回最后出现的位置，没有返回-1
.lastIndexOf("China", 50); // 从50开始从后向前搜索
.search("China"); // 支持正则 = .indexOf("China")

// String 字符串提取
.slice(7, 12); // 提取位置7到12的片段
.slice(-12, -7); // 反向搜索提取位置-12到-7的片段
.slice(7); // 提取位置7到最后
.substring(7, 12); // 无法接受负的索引
.substr(7, 6); // 7开始 长度 为6
.substr(7); // 7到剩余部分 = .slice(7)
.substr(-7); // 反向-7到剩余部分 = .slice(7)
// 安全提取
.charAt(0); // 提取第0个字符
.charCodeAt(0); // 返回第0个字符的unicode编码

// String 字符串替换
.replace("Microsoft", "W3School"); // 将Microsoft替换W3School 大小写敏感
.replace(/MICROSOFT/i, "W3School"); // 用正则变为大小写不敏感
.replace(/Microsoft/g, "W3School"); // 替换全部
.toUpperCase(); // 大写
.toLowerCase(); // 小写
.concat("", txt2); // 用“”连接两个字符串
.trim(); // 删除两端空格

// 字符串转换为数组
.split(","); // 用逗号分隔
.split(""); // 分隔


// Number 数字
isNaN(x) // 返回true，因为 x 不是数
.toString(16) // 返回字符串值，输出为十六进制
.toExponential(2) // 返回字符串值，四舍五入到小数点后两位 如：9.66e+0
.toFixed(4) // 返回字符串值，四舍五入到小数点后四位 如：9.6560
.toPrecision(2) // 返回字符串值，数字长度为2 如：9.7
.valueOf() // 返回值

// 转换为数字的JS全局方法
Number() // 转换为数字
parseInt() // 返回首个整数
parseFloat() // 返回首个浮点数数值

// 数值属性
.MAX_VALUE // 返回JS可能的最大数
.MIN_VALUE // 返回JS可能的最小数
.POSITIVE_INFINITY // 正无穷大（溢出返回  1/0
.NEGATIVE_INFINITY // 负无穷大（溢出返回 -1/0bb
.NaN // 非数字值


// Array 数组
.length // 返回长度
arr.forEach(element => {console.log(element)}); // for loop 遍历数组
.push("Lemon") // 添加""Lemon"到最后
new Array(40) // 创建40个未定义元素的数组
Array.isArray(arr) // 返回true (ES 5)
arr instanceof Array // 返回true
.toString() // 把数组转换为数组值
.join("*") // 用*连接合并所有元素
.shift() // 弹出并删除第一个
.pop() // 弹出并删除最后一个
.unshift("Lemon") // 新增"Lemon"到开头并返回长度
.push("Lemon") // 新增"Lemon"到队尾并返回长度
delete arr[0] // 删除内容，会留下空洞
.splice(2,2,"Lemon","Kiwi") // 从[2]开始删除2个添加"Lemon","Kiwi"并返回删除的
.splice(0,1) // 从[0]开始删除1个并返回删除的
arr_1.concat(arr_2,arr_3) // 连接 arr_1,arr_2 和 arr_3
.slice(1,3) // 选取1到3
.sort() // 排序
.sort(function (a,b) {return a - b;}) // 对数字进行从小到大排序
.sort(function (a,b) {return a.year - b.year}) // 按属性值排序
.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
}); // 按字符串属性排序
.reverse() // 反转

Math.max(arr) // 查找最大值
Math.min(arr) // 查找最小值

// 迭代方法
.forEach(myFunction) // 每个元素调用一次函数 接受参数value,index,array
.map(myFunction) // 每个元素执行函数创建新数组 接受参数vlue,index,array
.filter(myFunction) // 创建包含通过测试的元素的新数组 接受参数value,index,array
.every(myFunction) // 检查是否所有元素都通过测试 返回true/false 接受参数value,index,array
.some(myFunction) // 检查是否某些元素通过了测试 返回true/false 接受参数value,index,array
.reduce(myFunction) // 从左到右 每个元素运行函数生成单个值 接受参数total,value,index,array
.reduceRight(myFunction) // 从右到左 每个元素运行函数生成单个值 接受参数total,value,index,array
.indexOf("Apple") // 搜索并返回位置
.lastIndexOf("Apple") // 从队尾开始搜索 并返回位置
.lastIndexOf("Apple",20) // 从[20]开始 从后向前搜索 并返回位置
.find(myFunction) // 返回第一个通过测试的元素的值 接受参数total,value,index,array
.findIndex(myFunction) // 返回第一个通过测试的元素的位置 接受参数total,value,index,array


// 日期
new Date() // Wed Mar 04 2020 15:50:11 GMT+0800 (China Standard Time)
new Date(year, month, day, hours, minutes, seconds, milliseconds) // 
new Date() // 1970年1月1日到现在的毫秒数+0毫秒
new Date("FEBRUARY, 25, 2015"); // Wed Feb 25 2015 00:00:00 GMT+0800 (China Standard Time)
.toUTCString() // 转为UTC标准显示 Wed, 04 Mar 2020 07:59:18 GMT
.toDateString() // Wed Mar 04 2020
// 日期方法
.getTime() // 时间（毫秒）
.getFullYear() // 年
.getMonth() // 月
.getDate() // 日
.getDay() // 周几
.getHours() // 小时
.getMinutes() // 分
.getSeconds() // 秒
.getMilliseconds() // 毫秒
// UTC时间方法
.getUTCFullYear() // 年
.getUTCMonth() // 月
.getUTCDate // 日
.getUTCDay // 周几
.getUTCHours() // 小时
.getUTCMinutes() // 分
.getUTCSeconds() // 秒
.getUTCMilliseconds() // 毫秒
// 日期设置方法
.setFullYear() // 年
.setMonth() // 月
.setDate // 日
.setDay // 周几
.setHours() // 小时
.setMinutes() // 分
.setSeconds() // 秒
.setMilliseconds() // 毫秒


// Math 对象
// Math 属性（常量）
Math.E          // 返回欧拉指数（Euler's number）
Math.PI         // 返回圆周率（PI）
Math.SQRT2      // 返回 2 的平方根
Math.SQRT1_2    // 返回 1/2 的平方根
Math.LN2        // 返回 2 的自然对数
Math.LN10       // 返回 10 的自然对数
Math.LOG2E      // 返回以 2 为底的 e 的对数（约等于 1.414）
Math.LOG10E     // 返回以 10 为底的 e 的对数（约等于0.434）

Math.PI // 3.141592653589793
Math.round(6.8) // 四舍五入 返回7
Math.pow(8, 2) // 8的2次方 返回64
Math.sqrt(64) // 开根号 返回8
Math.log(x) // 返回x的自然对数（底为e）
Math.abs(-4.7) // 绝对值 返回4.7
Math.ceil(6.4) // 上舍入 返回7 向上取整
Math.floor(6.6) // 下舍入 返回6 向下取整
Math.sin(90 * Math.PI / 180) // 返回 1 （90度的正弦）
Math.cos(0 * Math.PI / 180) // 返回 1 （0度的余弦）
Math.tan(x) // 正切
Math.asin(x) // 反正弦
Math.acos() // 反余弦
Math.atan(x) // 反正切
Math.max(arr) // 返回最大值 Math.max().apply(this, arr)
Math.min(arr) // 返回最小值
Math.random() // 返回一个0（包括）至 1（不包括）之间的随机数
Math.floor(Math.random() * 100) // 返回0至99
function getRndInteger(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
} // 返回一个 min 到 max 之间的随机数

// 逻辑
Boolean(x) // x 有“真实”值为true

var voteable = (age < 18)? "true太年轻":"false够成熟" // 条件
<、>、== 比较时非数值字符串将被转换为始终未false的NaN
"2" > "12" 因为 2 > 1

// if
if (condition) {
    
} else if (condition) {
    
} else {

}

// switch 使用===严格比较
switch (key) {
    case value_1:
    case value_2:
        
        break;

    case value_3:
        
        break;

    default:
        break;
}

// for 第一语句（可选）可以初始化多个值
// for 第二语句（可选）返回true开始，返回false结束，如省略必须提供break
// for 第二语句（可选）可以做任何事情
for (let i = 0, len = array.length, text = "" ; i < len; i++) {
    const element = array[i];
    text += array[i] + "<br>";
}

// for/in 语句遍历对象的属性
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];
        
    }
}

break labelname; // “跳出”循环，有标签可以跳过任意代码块
continue // “跳过”本次迭代，只能跳过一个
typeof "bill" // 返回 “string”，“数组”或“日期”返回“object”，typeof 是运算符
"bill".constructor // 返回 "function String(){[native code]}"，返回构造器函数
[1,2].constructor // 返回 "...Array()..." 检查是否为数组
// 返回 true 判断是否为数组
function isArray(arr) {
    return arr.constructor === Array;
}
// 返回 true 判断是否为日期函数
function isDate(date) {
    return date.constructor === Date;
}

String() // 转换为字符串
Number() // 转换为数字，空转为0，其他字符转为NaN






// 位运算
操作    结果        等同于       结果
5 & 1	 1	    0101 & 0001	    0001
5 | 1	 5	    0101 | 0001	    0101
5 ^ 1	 4	    0101 ^ 0001	    0100
~ 5	     10 	 ~0101	1010
5 << 1	 10	    0101 << 1	    1010
5 >> 1	 2	    0101 >> 1	    0010
5 >>> 1	 2	    0101 >>> 1	    0010