$(function(){

    function buildHTML(message){
      if ( message.image ) {
        var html =
        `<div class="right-chat_space__chats">
            <div class="right-chat_space__chats__members">
              <div class="right-chat_space__chats__members__name">
                ${message.user_name}
              </div>
              <div class="right-chat_space__chats__members__remark-time">
                ${message.created_at}
              </div>
            </div>
            <div class="right-chat_space__chats__message">
              <p class="right-chat_space__chats__message__content">
                ${message.content}
              </p>
              <img class="lower-message__image" src=${message.image} >
            </div>
          </div>`
        return html;
      } else {
        var html =
        `<div class="right-chat_space__chats">
            <div class="right-chat_space__chats__members">
              <div class="right-chat_space__chats__members__name">
                ${message.user_name}
              </div>
              <div class="right-chat_space__chats__members__remark-time">
                ${message.created_at}
              </div>
            </div>
            <div class="right-chat_space__chats__message">
              <p class="right-chat_space__chats__message__content">
                ${message.content}
              </p>
            </div>
          </div>`
        return html;
      }
    };

  $('#new_message').on('submit', function(e){

    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(post){

      var html = buildHTML(post);

      $('.right-chat_space').append(html);
      $('.right-form__input__form__text').val('');
      $('#message_image').val('');
      $('.right-chat_space').animate({ scrollTop: $('.right-chat_space')[0].scrollHeight});
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
    .always(() => {
      $(".right-form__input__send-btn").removeAttr("disabled");
    })
  })
});