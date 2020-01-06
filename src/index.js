const  u = navigator.userAgent;
const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
const jumper = document.getElementById('navigation-link')
if(isAndroid){
    jumper.setAttribute('href','market://details?id=com.hk01.news_app');//'https://play.google.com/store/apps/details?id=com.hk01.news_app')
  } else if(isIOS) {
    jumper.setAttribute('href','itms-apps://itunes.apple.com/us/app/xiang-gang01/id1084662006?l=zh&ls=1&mt=8')
  }