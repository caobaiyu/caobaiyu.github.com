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

//判断浏览器
var Browser = new Object();
Browser.userAgent = window.navigator.userAgent.toLowerCase();
Browser.ie = /msie/.test(Browser.userAgent);
Browser.Moz = /gecko/.test(Browser.userAgent);
//判断是否加载完成
function Imagess(url, callback, error) {
  var val = url;
  var img = new Image();
  if(Browser.ie) {
    img.onreadystatechange = function() {
      if(img.readyState == "complete" || img.readyState == "loaded") {
        callback(img);
      }
    }
  } else {
    img.onload = function() {
      if(img.complete == true) {
        callback(img);
      }
    }
  }
  //如果因为网络或图片的原因发生异常，则显示该图片
  // if(error) {
  //   img.onerror = error;
  // } else {
  //   img.onerror = function() {
  //     img.src = "../img/failed.png"
  //   }
  // }
  img.src = val;
}

window.onload = function() {
  img_loading();
}

//初始化需要显示的图片，并且指定显示的位置
function img_loading() {
  var imglist = document.getElementsByTagName('img');
  for(i = 0; i < imglist.length; i++) {
    let tt = imglist[i];
    //防止重复加载
    if(tt.loading) {
      continue;
    }
    //没有该属性代表不加载
    if(!tt.getAttribute("src-data")) {
      continue;
    }
    tt.loading = true;
    tt.style = "background:url(../img/loading.gif) no-repeat center center;";
    Imagess(tt.getAttribute("src-data"), function(obj) {
      tt.style.cssText = "";
      tt.src = obj.src;
    });

  }
}

var hhu = `
没想到适配也这么烦！`
console.log("%c" + hhu ,'color:red;font-size:50px')