var Links = {
  setColor:function (color){
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length){
  alist[i].style.color = color;
  i = i + 1;
  }
}
}
var Body = {
  setColor:function (color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

function nightdayhandler(self){
var target = document.querySelector('body');
if(self.value === 'night'){
Body.setBackgroundColor('#1C1C1C');
Body.setColor('#BDBDBD');
self.value = 'day';

Links.setColor('gray');
}
else
{
Body.setBackgroundColor('#CEF6F5');
Body.setColor('black');
self.value = 'night';

Links.setColor('#9D9C9C');
}
}
