// 导入文件系统包
let fs = require("fs");
//
// // 同步文件写入
// // 打开文件
// let fd = fs.openSync("hello.txt", "w");
// // 向文件中写入内容
// fs.writeSync(fd, "今天天气真不错~~~", 2);
// // 关闭文件
// fs.closeSync(fd);
//
// // 异步文件写入
// // 打开文件
// fs.open("hello2.txt", "w", function (err, fd) {
//     if (!err) {
//         console.log(fd)
//         // 向文件中写入内容
//         fs.write(fd, "今天天气真不错~~~", 2, function (err) {
//             if (!err) {
//                 console.log("写入成功")
//             }
//             // 关闭文件
//             fs.close(fd, function (err) {
//                 if (!err) {
//                     console.log("文件关闭成功")
//                 }
//             })
//         })
//     } else {
//         console.log(err)
//     }
// })
//
// // 简单文件写入
// fs.writeFile("hello2.txt", "这是通过writeFile写入的内容", function (err) {
//     if (!err) {
//         console.log("写入成功~~~");
//     }
// });
//
// // 流式文件写入
// // 创建一个可写流
// let ws = fs.createWriteStream("hello3.text")
// // 监听流的打开和关闭，通过对ws的open和close事件监听来实现
// /*
// * on(事件字符串， 回调函数)：可以为对象绑定一个事件
// * once(事件字符串， 回调函数)：可以为对象绑定一个事件, 该事件会在触发一次以后自动失效
// * */
// ws.once("open", function () {
//     // 只触发一次
//     console.log("流打开了~~~");
// })
// ws.once("close", function () {
//     // 只触发一次
//     console.log("流关闭了~~~");
// })
// // 向文件中写入内容
// ws.write("这是通过可写流，写入的文件的内容")
// ws.write("今天天气真不错")
// ws.write("锄禾日当午")
// ws.write("红掌拨清清")
// ws.write("清清真漂亮")
// // 关闭流
// ws.end()
// // 注意：流式写入是异步的，所以不要使用close()，
// // 因为一旦目标文件关闭，后面异步写入的内容就写入不进来了
// // ws.close()

// 读取简单文件
// fs.readFile("hello3.text", function (err, data){
//     if (!err) {
//         // 打印读取到的数据
//         console.log(data.toString());
//         // 读完之后，还可以写入到其他地方，相当于文件的复制
//         fs.writeFile("hello4.txt",data,function (errr) {
//             console.log("文件写入成功");
//         })
//     }
// })

// 读取简单文件
// let data = fs.readFileSync("hello3.text")
// // 打印读取到的数据
// console.log(data.toString());
// // 读完之后，还可以写入到其他地方，相当于文件的复制
// fs.writeFileSync("hello5.txt",data)

// // 创建一个可读流
// let rs = fs.createReadStream("hello3.text")
// // 监听流的打开和关闭，
// rs.once("open", function () {
//     // 只触发一次
//     console.log("可读流打开了~~~");
// })
// rs.once("close", function () {
//     // 只触发一次
//     console.log("可读流关闭了~~~");
//     // 读取完毕后，可写流在这里关闭
// })
// // 如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件
// // data事件绑定完毕，他会自动开始，分多次读取数据
// // 读取完毕后，会自动关闭流
// rs.on("data", function (data) {
//     // 会触发多次，分多次读取数据
//     console.log(data.toString());
//     // 读到的数据可通过可写流，写入其他文件
// })


// // pipe() 将可读流中的内容，直接输出到可写流中
// // 创建一个可读流
// let rs = fs.createReadStream("hello3.text")
// // 监听可读流的打开和关闭，
// rs.once("open", function () {
//     // 只触发一次
//     console.log("可读流打开了~~~");
// })
// rs.once("close", function () {
//     // 只触发一次
//     console.log("可读流关闭了~~~");
// })
//
// // 创建一个可写流
// let ws = fs.createWriteStream("hello6.text")
// // 监听可写流的打开和关闭，
// ws.once("open", function () {
//     // 只触发一次
//     console.log("可写流打开了~~~");
// })
// ws.once("close", function () {
//     // 只触发一次
//     console.log("可写流关闭了~~~");
// })
//
// // pipe() 将可读流中的内容，直接输出到可写流中
// rs.pipe(ws)


// console.log(fs.existsSync("hello4.txt"))
//
// fs.stat("hello4.txt", function (err,stats) {
//     /*
//     Stats {
//       dev: 16777220,
//       mode: 33188,
//       nlink: 1,
//       uid: 501,
//       gid: 20,
//       rdev: 0,
//       blksize: 4096,
//       ino: 12966929818,
//       size: 114,
//       blocks: 8,
//       atimeMs: 1658399048068.7727,
//       mtimeMs: 1658399047026.656,
//       ctimeMs: 1658399047026.656,
//       birthtimeMs: 1658397874327.3718,
//       atime: 2022-07-21T10:24:08.069Z,
//       mtime: 2022-07-21T10:24:07.027Z,
//       ctime: 2022-07-21T10:24:07.027Z,
//       birthtime: 2022-07-21T10:04:34.327Z
//     }
//     * */
//     console.log(stats);
// })

// fs.unlink("hello5.txt", function (err,) {
//    if (!err) {
//        console.log("删除文件成功");
//    } else {
//        console.log("删除文件失败");
//    }
// })

// fs.readdir(".", function (err, files) {
//     if (!err) {
//         console.log(files);
//     }
// })

// fs.truncateSync("hello4.txt", 6)

// fs.mkdir("helloDir", function (err) {
//     if (!err) {
//         console.log("创建目录成功");
//     }
// })

// fs.rmdir("helloDir", function (err) {
//     if (!err) {
//         console.log("删除目录成功");
//     }
// })

// fs.rename("hello4.txt", "hello7.txt", function (err) {
//     if (!err) {
//         console.log("文件重命名，或剪切成功");
//     }
// })

fs.watchFile("hello2.txt", function (curr, prev) {
    // 当文件发生变化时，会执行
    console.log("修改前，文件大小" + prev.size);
    console.log("修改后，文件大小" + curr.size);
})
