<template>
  <div class="content">
    <div class="navigator">
      <p>회원가입</p>
    </div>
    <div class="logo">
      <img src="../assets/images/logo.png" alt="logo" />
    </div>
    <input type="text" class="id underline" placeholder="ID" />
    <input type="text" class="password underline" placeholder="password" />
    <input type="text" class="nickname underline" placeholder="닉네임" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.content {
  width: 430px;
  height: 932px;
  justify-content: center;
  align-items: center;
  background: white;
  position: relative;
  border: 2px solid black;
}

.navigator {
  background-color: rgba(46, 72, 45, 1);
  width: 430px;
  height: 89px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1; /* 다른 요소보다 위에 표시될 수 있도록 z-index 값을 설정합니다. */
}

.navigator p {
  color: white; /* 텍스트 색상을 설정합니다. */
  font-size: 30px;
  position: relative;
}

.logo {
  width: 430px;
  height: 430px;
  position: relative; /* 로고 요소의 상대 위치를 설정합니다. */
  overflow: hidden; /* 이미지가 요소를 벗어나는 것을 막습니다. */
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* 이미지를 비율에 맞게 조정합니다. */
  position: absolute;
  top: 0;
  left: 0;
}
input {
  width: 420px;
  height: 40px;
  margin-bottom: 20px;
  font-size: 30px;
}
.id {
}
.password {
}
.nickname {
}
input.underline {
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1px; /* 밑줄의 두께를 설정합니다. */
  border-bottom-style: solid; /* 밑줄의 스타일을 설정합니다. */
  border-bottom-color: black; /* 밑줄의 색상을 설정합니다. */
}
input.underline:focus {
  outline: none; /* 포커스된 input 요소 주변의 외곽선을 제거합니다. */
}
</style>
