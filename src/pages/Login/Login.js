import React from "react"
import "./Login.css";


function Login (){
    return(
    <div class="main">
      <div class="main-inner">
          <div class="inner">
              <div class="inner-header">
                  <h1>
                    <span class="lobster">Westagram</span>
                  </h1>
              </div>
              <form class="form">
                  <div class="inputBox">
                      <input id="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" onkeyup='validate()'/>
                  </div>
                  <div class="inputBox">
                      <input id="psword" type="password" placeholder="비밀번호" onkeyup='validate()'/>
                  </div>
                  <div class="loginBtn">
                      <button type="button" class="disableBtn" id="loginBtn" disabled="true" onclick="login()">
                          <span class="logintext">로그인</span>
                      </button>
                  </div>
              </form>
              <div class="inner-footer">
                  {/* <a href="" class="">
                      <span class="forget">비밀번호를 잊으셨나요?</span>
                  </a> */}
              </div>
           </div>
      </div>
  </div>
    )
}

export default Login;