module.exports = function main(str) {
  // console.log("Debug Info");
  // return 'Hello World!';

  var rst = "" //最终结果
  var arr = str.split("") //拆分字符串
  var SaveNumbers = [] //暂存获取的单个数字
  var lcdSaveNumbers = [
    //lcd数字对应 0-9
    [["._."], ["|.|"], ["|_|"]],
    [["..."], ["..|"], ["..|"]],
    [["._."], ["._|"], ["|_."]],
    [["._. "], ["._|"], ["._|"]],
    [["..."], ["|_|"], ["..|"]],
    [["._."], ["|_."], ["._|"]],
    [["._."], ["|_."], ["|_|"]],
    [["._."], ["..|"], ["..|"]],
    [["._."], ["|_|"], ["|_|"]],
    [["._."], ["|_|"], ["..|"]]
  ]
  // 取出单个数字
  arr.forEach(item => {
    SaveNumbers.push(item)
  })
  //   console.log(SaveNumbers, "保存单个数字") // ["9","1","0"]

  //每个数字由3行lcd表示
  for (let i = 0; i < 3; i++) {
    //遍历每个数字 把对应行拼在一起
    for (let j = 0, length = SaveNumbers.length; j < length; j++) {
      //依次取出数字
      var tempNumber = SaveNumbers[j]
      //取出lcd数字
      var lcdNumber = lcdSaveNumbers[tempNumber]
      //如果不是最后一个数字 用' '拼接
      if (j != SaveNumbers.length - 1) {
        rst = rst + lcdNumber[i] + " "
      } else {
        //是最后一个数字 换行
        rst = rst + lcdNumber[i] + "\n"
      }
    }
  }
  //   console.log(rst)
  return rst
}
