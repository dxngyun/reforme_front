<template>
  <div>
    <button class="chatbot">
      <img src="../assets/images/chatbot.png" alt="챗봇버튼" />
    </button>

    <button class="generate1">
      <img src="../assets/images/generate1.png" alt="생성버튼1" />
    </button>

    <button class="generate2">
      <img src="../assets/images/generate2.png" alt="생성버튼2" />
    </button>

    <button class="delete">
      <img src="../assets/images/delete.png" alt="삭제버튼" />
    </button>
  </div>

  <div class="second">
    <button class="active">제출</button>

    <button class="small_complete">확인</button>

    <button class="small_cancel">취소</button>

    <button class="categori">상의</button>
  </div>

  <div class="ai_input_container">
    <input type="text" class="ai_input" placeholder="Type here..." />
    <button class="ai_submit_button">
      <img src="../assets/images/imagelogo.png" alt="image" />
      <img src="../assets/images/submitlogo.png" alt="sumbit" />
    </button>
  </div>
</template>

<script>
export default {
  name: "buttons",
};
</script>

<style>
div {
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

button {
  border: none;
  background: transparent;
  padding: 0;
  margin: 10px;
}

img {
  display: inline;
  width: 100%;
  height: 100%;
}

.chatbot {
  width: 70px;
  height: 70px;
  border-radius: 10px;
}

.generate1 {
  width: 70px;
  height: 70px;
  border-radius: 10px;
}

.generate2 {
  width: 74px;
  height: 74px;
  border-radius: 10px;
}

.delete {
  width: 40px;
  height: 40px;
  border-radius: 10px;
}

.active {
  background-color: rgba(46, 72, 45, 1);
  width: 410px;
  height: 76px;
  color: white;
  font-size: 200%;
  border-radius: 10px;
}

.small_complete {
  background-color: rgba(46, 72, 45, 1);
  width: 113px;
  height: 54px;
  color: white;
  font-size: 150%;
  border-radius: 10px;
}

.small_cancel {
  background-color: rgba(46, 72, 45, 1);
  width: 113px;
  height: 54px;
  color: white;
  font-size: 150%;
  border-radius: 10px;
}

.categori {
  background-color: rgba(74, 118, 72, 1);
  width: 72px;
  height: 46px;
  color: black;
  font-size: 150%;
  border-radius: 10px;
}

.ai_input_container {
  display: flex;
  align-items: center;
  background-color: rgba(74, 118, 72, 1);
  width: 410px;
  height: 50px;
  border-radius: 10px;
  border: none;
}

.ai_input {
  flex-grow: 1;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  padding: 15px 10px;
  font-size: 16px;
  border-radius: 25px;
}

.ai_submit_button {
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
}

.ai_submit_button img {
  width: auto;
  height: 100%;
}

.ai_submit_button img:first-child {
  margin-right: 10px;
}
</style>
