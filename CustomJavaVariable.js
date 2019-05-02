function() {
  if ({{dlv - user id}}) {
    var d = new Date();
    d.setTime(d.getTime()+1000*60*60*24*365*2);
    var expires = 'expires='+d.toGMTString();
    document.cookie = 'userId=' + {{dlv - user id}} + '; '+expires+'; path=/';
    return {{dlv - user id}};
  } else if ({{cookie - user id}}) {
      return {{cookie - user id}};
  }
  return;
}

