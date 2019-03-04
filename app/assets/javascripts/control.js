$(function() {

  var search_list = $(".chat-group-user.clearfix.js-chat-member");

  function appendUser(user) {
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                  <input name='group[user_ids][]' type='hidden' value='ユーザーのid'>
                  <p class='chat-group-user__name'>ユーザー名</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn' >削除</a>
                </div>`
    search_list.append(html);
  }

  function appendErrMsgToHTML(msg) {
    var html = `<div class='listview__element--right-icon'>${ msg }</div>`
    search_list.append(html);
  }

  $(".chat-group-user").on("click","#data-user-id", function() {
    var input = $(".chat-group-user.clearfix.js-chat-member").val();
    console.log(input)
    if(input === ""){
      $(".chat-group-user.clearfix.js-chat-member").empty();
      return;
    }
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      $(".chat-group-user.clearfix.js-chat-member").empty();
      if (users.length !== 0) {
        console.log("aaa")
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        console.log("bbb")
        appendErrMsgToHTML("一致するユーザーはいません");
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
  });
});
