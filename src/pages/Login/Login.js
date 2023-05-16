import React from "react"
import "./Login.scss";
import { Link } from "react-router-dom";

const login = () => {
    const id = document.getElementById('id').value;
    const psword = document.getElementById('psword').value;
    //id, pwd 유효성 검사
    if(id.includes("@") && psword.length > 4){

        // window.location.href="./main.html";
        alert('클릭');
    }else {
        alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
}

const validate = () => {
    const id = document.getElementById('id').value;
    const psword = document.getElementById('psword').value;
    
    if(!!(id && psword)){
        btnActive();
    }
}

const btnActive = () => {
    const loginBtn = document.getElementById('loginBtn');
    loginBtn.disabled = false;
    loginBtn.classList.remove("disableBtn");
    loginBtn.classList.add("ableBtn");
}

function Login (){
    return(
    <div className="page-login">
      <div className="main-inner">
          <div className="inner">
              <div className="inner-header">
                  <h1>
                    <span className="lobster">Westagram</span>
                  </h1>
              </div>
              <form className="form">
                  <div className="inputBox">
                      <input id="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" onChange={validate}/>
                  </div>
                  <div className="inputBox">
                      <input id="psword" type="password" placeholder="비밀번호" onChange={validate}/>
                  </div>
                  <div className="loginBtn">
                      <button type="button" className="disableBtn" id="loginBtn" disabled={true} onClick={login}>
                          <span className="logintext">로그인</span>
                      </button>
                  </div>
              </form>
              <div className="inner-footer">
                <Link className="link" to="/main">비밀번호를 잊으셨나요?</Link>
              </div>
           </div>
      </div>
  </div>
    )
}

export default Login;