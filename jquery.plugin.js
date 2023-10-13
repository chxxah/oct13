// scope 를 보장받기위해 즉시실행함수를 사용한다.

(function ($) {
  // jquery 확장은 두가지 방법

  // static
  $.static = function () {
    console.log(this);
  };

  // instance method
  $.prototype.instance = function () {
    console.log(this);
    this.html("hello jquery");
  };

  //숫자만 입력받을 수 있도록 확장 기능 사용
  $.prototype.onInputOnlyNumber = function () {
    this.on("change input keyup", function () {
      var $this = $(this);
      var val = $this.val();
      val = val.replace(/[^0-9]/g, "");
      $this.val(val);
    });
  };

  $.alert = function (message) {
    // sweetalert 사용
    return Swal.fire(message); //리턴값은 promise
  };

  $.confirm = function (options) {
    if (typeof options === "string") {
      options = { text: options };
    }
    var _options = {
      title: "경고",
      confirmButtonText: "확인",
      cancelButtonText: "취소",
      ...options,
    };
    return new Promise((resolve) => {
      Swal.fire({
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        ..._options,
      }).then((result) => {
        resolve(result.isConfirmed);
      });
    });
  };
})(jQuery);
