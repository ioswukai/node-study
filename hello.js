let str = "你好 atguigu";
// 使用默认的utf8 编码str，存入buffer
let buf = Buffer.from(str);
// 手动指定使用utf8 编码str，存入buffer
let buf1 = Buffer.from(str , "utf8");

console.log(buf);
console.log(buf.toString());
console.log(buf1);
console.log(buf.toString("utf8"))

const buf3 = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
// 改变对应索引位置的值
buf3[2] = 88;
console.log(buf3)
console.log(buf3.toString("base64"))

