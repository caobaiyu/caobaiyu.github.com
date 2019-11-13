let divTyping = document.getElementById('prtext')
let i = 0,
  timer = 0,
  str = '我是一条没有梦想的咸鱼'



function typing() {
  if (i <= str.length) {
    divTyping.innerHTML = str.slice(0, i++) + '_'
    timer = setTimeout(function () {
      typing()
    }, 200)
  } else {
    divTyping.innerHTML = str
    i = 0
    typing()
    // clearTimeout(timer)
  }
}

typing()



function makeArray(obj) {
  var rs = [],
    len = obj.length;
  try {
    rs = [].slice.call(obj, 0);
  } catch (e) { //for IE
    for (var i = 0; j = obj[i++];) {
      rs.push(j);
    }
  }
  return rs;
}



var hhu = `
没想到适配也这么烦！`
console.log("%c" + hhu ,'color:red;font-size:50px')