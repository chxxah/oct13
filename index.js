//scope를 보장받기 위해 즉시 실행 함수를 시행
;(function ($) {
  $(function () {
    //onload event
    // $.alert('hello world')
    // .then(() => {
    //     alert('close or ok')
    // })

    //사용자에 대한 input을 보장받고 싶음
    // 사용자가 확인, 닫는 경우 콜백을 받고싶음
    //(1)promise, (2)function을 파라미터로 넘겨주기

    // $.static();
    // $('h1').instance();
    $('#only-number').onInputOnlyNumber()

    //오버라이딩 안되지만 하는 것처럼 쓸 수 있음
    // $.confirm('확인 또는 취소').then((result) => {
    //   if (result) alert('확인')
    //   else alert('취소')
    // })

    // jquery element는 $표시를 하는 게 좋음 (private하게 쓸 땐 _)
    var $time = $('#current-time')
    var interval = setInterval(() => {
      $time.text(dayjs().format('YYYY-MM-DD hh:mm:ss'))
    }, 1000) //1초마다 수행

    setTimeout(() => {
      clearInterval(interval)
    }, 10000)
  })
})(jQuery)
