document.getElementById("myForm").onsubmit = function(event) {
    const password = document.getElementById("password").value;

    if (password.length < 8) {
      alert("비밀번호는 8자 이상이어야 합니다.");
      event.preventDefault(); // 제출 방지
    }
  };