import React from "react"
import "./Login.css";


function Login (){
    return(
    <div className="main">
      <div className="main-inner">
          <div className="inner">
              <div className="inner-header">
                  <h1>
                    <span className="lobster">Westagram</span>
                  </h1>
              </div>
              <form className="form">
                  <div className="inputBox">
                      <input id="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" onkeyup='validate()'/>
                  </div>
                  <div className="inputBox">
                      <input id="psword" type="password" placeholder="비밀번호" onkeyup='validate()'/>
                  </div>
                  <div className="loginBtn">
                      <button type="button" className="disableBtn" id="loginBtn" disabled="true" onclick="login()">
                          <span className="logintext">로그인</span>
                      </button>
                  </div>
              </form>
              <div className="inner-footer">
                  {/* <a href="" className="">
                      <span className="forget">비밀번호를 잊으셨나요?</span>
                  </a> */}
              </div>
           </div>
      </div>
  </div>
    )
}

export default Login;