import React from "react";
import "./Main.scss";
import "../../styles/common.scss";

function Main() {
  return (

    <div className="page-main">

      <div className="body-top">
        <nav className="navbar">
          {/* 네비게이션 내용 */}
          <div className="navbar-left">
                <img className ="logo" src="images/instagram.png" alt="instagram_logo"/><p>|</p>  <span className="lobster">Westagram</span>
            </div>
            <div className="navbar-middle">
                <div className="search-bar">
                    <input id="input_search" type="search" placeholder="검색" />
                        <ul className="user-search" id="user-ul">
                            <li className="userli" id="user1">wecode10</li>
                            <li className="userli" id="user2">hwikl__i</li>
                            <li className="userli" id="user3">day_lu_</li>
                        </ul>
                </div>
            </div>
            <div className="navbar-right">
                <img className="imgicons" src="images/explore.png" alt="explore"/>
                <img className="imgicons" src="images/heart.png" alt="heart"/>
                <img className="imgicons" src="images/profile.png" alt="profile"/>
            </div>
        </nav>
      </div>

      <div className="body-bottom">
        <main className="main-main">
          {/* 메인 콘텐츠 내용 */}
          <div className="main-feeds">
                <div className="main-article-header">
                    <div className="article-inner">
                        <div className="article-inner-left">
                            <div className="inner">
                                <div className="inner">
                                    <img className="userimg" src="images/userimg.jpeg" alt="userimg"/>
                                </div>
                                <div className="inner">
                                    <span>shdv3303</span>
                                </div>
                            </div>
                        </div>
                        <div className="article-inner-right">
                            <img className="imgicons" src="images/dot.png" alt="dotimg"/>
                        </div> 
                    </div>
                </div>
                <div className="main-article-body">
                    <img className="feedimg" src="images/feedimg.jpg" alt="feedimg"/>
                </div>
                <div className="main-article-footer">
                    <div className="article-inner">
                        <div className="article-inner-left">
                            <div className="inner">
                                <div className="inner">
                                    <img className="logo" src="images/heart.png" alt="heart"/>
                                    <img className="logo" src="images/chat.png" alt="chat"/>
                                    <img className="logo" src="images/share.png" alt="share" />
                                </div>
                            </div>
                        </div>
                        <div className="article-inner-right">
                            <img className="imgicons" src="images/bookmarks.png" alt="bookmarks"/>
                        </div>
                    </div>
                    <div className="footer-inner">
                        <div className="article-footer-header">
                            <img className="userimg" src="images/userimg.jpeg" alt="userimg"/>
                            <span className="bord-word">aineworld</span> 님 <span className="bord-word">외  10명</span>이 좋아합니다.
                        </div>
                        <div className="article-footer-body">
                            <div className="main-article-header">
                                <div className="article-inner">
                                    <div className="article-inner-left">
                                        <div className="word"><span className="bord-word">shdv3303</span> 오늘도 커피에 취한다 커피는 짱이다 맨날 먹고 싶다.
                                            <br/>
                                            <ul className="chat" id="chat-ul"></ul>
                                        </div>
                                    </div>
                                    <div className="article-inner-right">
                                        <button className="logobtn" id="heartBtn" type="button" onclick="Heart();">
                                            <img className="likeimg" id="nolike" src="images/heart.png" alt="좋아요 하트" />
                                        </button>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        <div className="article-footer-footer">
                            <input type="text" id="chatinput" placeholder="댓글달기.." onkeyup='validate()' />
                            <button type="button" className="disableBtn" id="inputBtn" disabled="true" onclick="chatEvent()">게시
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* main 우측 컨텐츠 */}
            <div className="main-right">
                <div className="right-header">
                    <div className="inner">
                        <div className="inner">
                            <img className="logoimg" src="images/wecodelogo.jpeg" alt="wecodelogo"/>
                        </div>
                        <div className="inner-div">
                            <div className="inner-top">
                                <span className="bord-word">wecode_bootcamp</span>
                            </div>
                            <div className="inner-top">
                                  <span className="gray-word">WeCode | 위코드</span>
                            </div>
                        </div>
                    </div>
                    <div className="right-body">
                        <div className="main-article-header">
                            <div className="article-inner">
                                <div className="article-inner-left">
                                    <span className="gray-word">스토리</span>
                                </div>
                                <div className="article-inner-right">
                                    <span className="bord-word">모두 보기</span>
                                </div> 
                            </div>
                        </div>
                        <div className="right-body-bottom">
                            <div className="inner">
                                <div className="inner">
                                    <button className="logobtn" type="button" onclick="alert('스토리 확인 중');">
                                        <img className="storyimg" src="images/userimg.jpeg" alt="user" />
                                    </button>
                                </div>
                                <div className="inner-div">
                                    <div className="inner-top">
                                        <span className="bord-word">_yum_s</span>
                                    </div>
                                    <div className="inner-top">
                                        <span className="gray-word">16분 전</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-footer">
                        <div className="main-article-header">
                            <div className="article-inner">
                                <div className="article-inner-left">
                                    <span className="gray-word">회원님을 위한 추천</span>
                                </div>
                                <div className="article-inner-right">
                                    <span className="bord-word">모두 보기</span>
                                </div> 
                            </div>
                        </div>
                        <div className="right-body-bottom">
                            <div className="main-article-header">
                                <div className="article-inner">
                                    <div className="article-inner-left">
                                        <img className="logoimg" src="images/userimg.jpeg" alt="userimg"/>
                                        <div className="inner-div">
                                            <div className="inner-top">
                                                <span className="bord-word"> joaaahye</span>
                                            </div>
                                            <div className="inner-top">
                                                <span className="gray-word-dot">_lequend_a님 외 2명이 좋아합니다.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="article-inner-right">
                                        <span>팔로우</span>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <br />
                        <span className="gray-word">
                            Instagram 정보 지원 홍보 센터 API<br />
                            채용 정보 개인정보처리방침 약관<br />
                            디렉터리 프로필 해시태그 언어<br />
                            <br />
                            @ 2019 INSTAGRAM
                        </span>
                    </div>
                </div>
            </div>
        </main>
      </div>
    </div>
  );
}

export default Main;