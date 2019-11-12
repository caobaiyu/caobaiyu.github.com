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



// jQuery('.skillbar').each(function() {
//   jQuery(this).appear(function() {
//     jQuery(this).find('.count-bar').animate({
//       width:jQuery(this).attr('data-percent')
//     },3000);
//     var percent = jQuery(this).attr('data-percent');
//     jQuery(this).find('.count').html('<span>' + percent + '</span>');
//   });
// }); 

let skillbar = document.getElementsByClassName("skillbar")



makeArray(skillbar).forEach( (a,b) => {
  a.addEventListener("mouseover",(e)=>{
    console.log(e.target)
  })
});






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