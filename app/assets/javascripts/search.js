$(function() {

  var search_list = $(".chat-group-form__search-result");

  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id } "data-user-name="${ user.name }" >追加</a>
                </div>`
    search_list.append(html);
  }

  function appendErrMsgToHTML(msg) {
    var html = `<div class='listview__element--right-icon'>${ msg }</div>`
    search_list.append(html);
  }

  $(".chat-group-form__search").on("keyup", function() {
    var input = $("#user-search-result").val();
    if(input === ""){
      $(".chat-group-form__search-result").empty();
      return;
    }
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      $(".chat-group-form__search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendErrMsgToHTML("一致するユーザーはいません");
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
  });
});
