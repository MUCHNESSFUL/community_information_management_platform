function jumpPage(searchValue) {
    window.location.href="http://127.0.0.1:5500/html/search.html"+searchValue;
  }
  // 按Enter键,执行事件
  function entersearch(event){
      if (event.keyCode == 13)
      {
          to();
      }
  }
  // 按钮点击触发函数
  function to(){
      var searchValue = document.getElementById("searchInput").value;

     jumpPage(searchValue);
     //alert(searchValue);
  }