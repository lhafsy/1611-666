$(function(){
      $('.moreCity').css('display','block');
      $('#City').click(function(){
          var $City = $('#City').html();
          // $('.moreCity').css('display','none');
          $('#thisCity').html($City);
      });
      $('.li_item').click(function(){
          var $this = $(this).html();
          // $('.moreCity').css('display','block');
          $('#thisCity').html($this);
      })
      $('#thisCity').click(function(){
        location.href = "../index/index.html?"+"name="+$(this).html();
      })
      // $('#front').click(function(){
      //     $('.moreCity').css('display','block');

      // })
})