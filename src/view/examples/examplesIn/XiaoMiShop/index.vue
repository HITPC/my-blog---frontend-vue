<template>
  <div class="">
    <div class="header">
        <div class="header-up">
            <div class="header-up-container">
                <a href="#">小米商城</a>
                <span>|</span>
                <a href="#">MIUI</a>
                <span>|</span>
                <a href="#">loT</a>
                <span>|</span>
                <a href="#">云服务</a>
                <span>|</span>
                <a href="#">天星数科</a>
                <span>|</span>
                <a href="#">有品</a>
                <span>|</span>
                <a href="#">小爱开放平台</a>
                <span>|</span>
                <a href="#">企业团购</a>
                <span>|</span>
                <a href="#">资质证照</a>
                <span>|</span>
                <a href="#">协议规则</a>
                <span>|</span>
                <a href="#" class="app">下载app
                    <div class="code">
                        <img src="./img/code.png" alt=".">
                        <span>小米商城APP</span>
                    </div>
                </a>
                <span>|</span>
                <a href="#">智能生活</a>
                <span>|</span>
                <a href="#">Select Location</a>

                <div class="header-up-container-right">
                    <a href="#">登录</a>
                    <span>|</span>
                    <a href="#">注册</a>
                    <span>|</span>
                    <a href="#">消息通知</a>
                </div>

                <div class="shopcar">
                    <a href="#">购物车（0）</a>
                    <div class="cart">
                        <span>购物车中还没有商品，赶紧选购吧！</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="header-down">
            <a href="#" class="header-logo"><img src="./img/logo-mi2.png" alt=""></a>
            <ul class="header-down-ul">
                <li><a href="#" id="xiaomi">Xiaomi手机</a></li>
                <li><a href="#" id="redmi">Redmi 红米</a></li>
                <li><a href="#">电视</a></li>
                <li><a href="#">笔记本</a></li>
                <li><a href="#">平板</a></li>
                <li><a href="#">家电</a></li>
                <li><a href="#">路由器</a></li>
                <li><a href="#">服务</a></li>
                <li><a href="#">社区</a></li>
            </ul>
            <div class="push-down">
                <ul id="xiaomi-ul" class="cansee">
                    <li>
                        <div class="img-contain">
                            <img src="./img/小米12pro.webp" alt=".">
                        </div>
                        <div class="title">Xiaomi 12 Pro</div>
                        <p class="price">4699元起</p>
                    </li>
                    <li>
                        <div class="img-contain">
                            <img src="./img/小米12.webp" alt=".">
                        </div>
                        <div class="title">Xiaomi 12</div>
                        <p class="price">3699元起</p>
                    </li>
                    <li>
                        <div class="img-contain">
                            <img src="./img/小米12x.webp" alt=".">
                        </div>
                        <div class="title">Xiaomi 12x</div>
                        <p class="price">3199元起</p>
                    </li>
                    <li>
                        <div class="img-contain">
                            <img src="./img/小米11青春活力版.webp" alt=".">
                        </div>
                        <div class="title">Xiaomi 11 青春活力版</div>
                        <p class="price">1999元起</p>
                    </li>
                    <li>
                        <div class="img-contain">
                            <img src="./img/小米civi.webp" alt=".">
                        </div>
                        <div class="title">Xiaomi Civi</div>
                        <p class="price">2599元起</p>
                    </li>
                    <li>
                        <div class="img-contain">
                            <img src="./img/小米mix4.webp" alt=".">
                        </div>
                        <div class="title">Xiaomi MIX4</div>
                        <p class="price">4199元起</p>
                    </li>
                </ul>
                <ul id="redmi-ul" class="cantsee">
                    <li>
                        <div class="img-contain">
                            <img src="./img/红米Note11pro系列.webp" alt=".">
                        </div>
                        <div class="title">Redmi Note 11 Pro系列</div>
                        <p class="price">1799元起</p>
                    </li>
                    <li>
                        <div class="img-contain">
                            <img src="./img/红米note115g.webp" alt=".">
                        </div>
                        <div class="title">Redmi Note 11 5G</div>
                        <p class="price">1199元起</p>
                    </li>
                    <li>
                        <div class="img-contain">
                            <img src="./img/红米note114g.webp" alt=".">
                        </div>
                        <div class="title">Redmi Note 11 4G</div>
                        <p class="price">999元起</p>
                    </li>
                    <li>
                        <div class="img-contain">
                            <img src="./img/红米note10pro.webp" alt=".">
                        </div>
                        <div class="title">Redmi Note 10 Pro</div>
                        <p class="price">1499元起</p>
                    </li>
                    <li>
                        <div class="img-contain">
                            <img src="./img/红米note105g.webp" alt=".">
                        </div>
                        <div class="title">Redmi Note 10 5G</div>
                        <p class="price">1099元起</p>
                    </li>
                    <li>
                        <div class="img-contain">
                            <img src="./img/K40游戏增强版.webp" alt=".">
                        </div>
                        <div class="title">K40 游戏增强版</div>
                        <p class="price">1999元起</p>
                    </li>
                </ul>
            </div>
            <div class="ss">
                <input type="text" class="search" id="search-text" placeholder="净水器" >
                <button class="search-btn" id="search-btn"><img src="./img/search_btn.png" alt="x"></button>
                <div class="list" id="list">
                    <ul>
                        <li>全部商品</li>
                        <li>红米</li>
                        <li>小米手机</li>
                        <li>洗衣机</li>
                        <li>小米平板5 Pro</li>
                        <li>电视</li>
                        <li>耳机</li>
                        <li>冰箱</li>
                    </ul>
                </div>
            </div>


        </div>
    </div>

    <div class="sidebox" id="sidebox">
        <ul>
            <li>
                <div class="sidebox-img"><img src="./img/原色侧边手机.png" alt="" class="yes-img"><img src="./img/橙色侧边手机.png" alt="" class="no-imgs"></div><span class="sidebox-li-span">手机APP</span>
            </li>
            <div class="code2">
                <img src="./img/code.png" alt="">
                <span class="code2-span"> 扫码领取新人百元礼包</span>
            </div>
            <li>
                <div class="sidebox-img"><img src="./img/原色侧边人.png" alt="" class="yes-img"><img src="./img/橙色侧边人.png" alt="" class="no-imgs"></div><span class="sidebox-li-span">个人中心</span></li>
            <li>
                <div class="sidebox-img"><img src="./img/原色侧边扳手.png" alt="" class="yes-img"><img src="./img/橙色侧边扳手.png" alt="" class="no-imgs"></div><span class="sidebox-li-span">售后服务</span></li>
            <li>
                <div class="sidebox-img"><img src="./img/原色侧边耳麦.png" alt="" class="yes-img"><img src="./img/橙色侧边耳麦.png" alt="" class="no-imgs"></div><span class="sidebox-li-span">人工客服</span></li>
            <li>
                <div class="sidebox-img"><img src="./img/原色侧边购物车.png" alt="" class="yes-img"><img src="./img/橙色侧边购物车.png" alt="" class="no-imgs"></div><span class="sidebox-li-span">购物车</span></li>
        </ul>
    </div>

    <div class="goback" id="goback">
        <em class="iconfont icon-huidingbu"></em>
        <span>回顶部</span>
    </div>

    <div class="home">
        <div class="up">
            <div class="left">
                <ul id="leftUl">
                    <li>
                        <a href="javascript:void(0);">手机</a>
                        <div class="arrowl"><img src="./img/右箭头.png" alt=""></div>
                    </li>
                    <li>
                        <a href="javascript:void(0);">电视</a>
                        <div class="arrowl"><img src="./img/右箭头.png" alt=""></div>
                    </li>
                    <li>
                        <a href="javascript:void(0);">笔记本 平板</a>
                        <div class="arrowl"><img src="./img/右箭头.png" alt=""></div>
                    </li>
                    <li>
                        <a href="javascript:void(0);">家电</a>
                        <div class="arrowl"><img src="./img/右箭头.png" alt=""></div>
                    </li>
                    <li>
                        <a href="javascript:void(0);">出行 穿戴</a>
                        <div class="arrowl"><img src="./img/右箭头.png" alt=""></div>
                    </li>
                    <li>
                        <a href="javascript:void(0);">智能 路由器</a>
                        <div class="arrowl"><img src="./img/右箭头.png" alt=""></div>
                    </li>
                    <li>
                        <a href="javascript:void(0);">电源 配件</a>
                        <div class="arrowl"><img src="./img/右箭头.png" alt=""></div>
                    </li>
                    <li>
                        <a href="javascript:void(0);">健康 儿童</a>
                        <div class="arrowl"><img src="./img/右箭头.png" alt=""></div>
                    </li>
                    <li>
                        <a href="javascript:void(0);">耳机 音箱</a>
                        <div class="arrowl"><img src="./img/右箭头.png" alt=""></div>
                    </li>
                    <li>
                        <a href="javascript:void(0);">生活 箱包</a>
                        <div class="arrowl"><img src="./img/右箭头.png" alt=""></div>
                    </li>
                </ul>
            </div>
            <div class="board" id="board">
                <div class="shouji" id="shouji">
                    <ul>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                        <li>
                            <a href="#"><img src="./img/小米12pro.webp" alt=""><span>Xiaomi 12 Pro</span></a>
                        </li>
                    </ul>
                </div>
                <div class="else" id="else"></div>
            </div>
            <div id="banner">
                <div class="arrow">
                    <div id="leftArrow"></div>
                    <div id="rightArrow"></div>
                </div>

                <div class="img-wrap">
                    <ul id="imgs">
                        <li class="item"><img src="./img/大轮播图-米12.jpg" alt=""></li>
                        <li class="item"><img src="./img/大轮播图-平板5.jpg" alt=""></li>
                        <li class="item"><img src="./img/大轮播图-笔记本.jpg" alt=""></li>
                    </ul>
                </div>

                <ul class="zero-point">
                    <li class="hover"></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>

        <div class="home-down">
            <div class="ph1">
                <ul class="ph1-ul">
                    <li>
                        <a href="#"><img src="./img/保障服务.png" alt="保障服务">保障服务</a>
                    </li>
                    <li>
                        <a href="#"><img src="./img/企业团购.png" alt="企业团购">企业团购</a>
                    </li>
                    <li>
                        <a href="#"><img src="./img/F码通道.png" alt="F码通道">F码通道</a>
                    </li>
                    <li>
                        <a href="#"><img src="./img/米粉卡.png" alt="米粉卡">米粉卡</a>
                    </li>
                    <li>
                        <a href="#"><img src="./img/以旧换新.png" alt="以旧换新">以旧换新</a>
                    </li>
                    <li>
                        <a href="#"><img src="./img/话费充值.png" alt="话费充值">话费充值</a>
                    </li>
                </ul>
            </div>
            <div class="ph2">
                <ul class="ph2-ul">
                    <li style="margin-left: 0;">
                        <a href="#"><img src="./img/1one.jpg" alt=""></a>
                    </li>
                    <li>
                        <a href="#"><img src="./img/2two.png" alt=""></a>
                    </li>
                    <li>
                        <a href="#"><img src="./img/3three.jpeg" alt=""></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="another-home-main">
        <div class="another-home-container">
            <div class="top-banner">
                <a href="#"><img src="./img/K40.webp" alt=""></a>
            </div>
            <div class="inner-box">
                <div class="top-text">
                    <h2 class="ud-title">生活电器</h2>
                    <div class="more">
                        <ul class="more-ul" id="moreUl">
                            <li class="active-li" id="saodijit">扫地机</li>
                            <li class="" id="kongjingt">空净</li>
                            <li class="" id="qingjiet">清洁</li>
                            <li class="" id="fengshant">风扇</li>
                        </ul>
                    </div>
                </div>
                <div class="inner-body-box">
                    <div class="inner-body">
                        <div class="left-box">
                            <ul class="leftbox-ul">
                                <li>
                                    <a href="#"><img src="./img/001.jpg" alt=""></a>
                                </li>
                                <li>
                                    <a href="#"><img src="./img/002.jpg" alt=""></a>
                                </li>
                            </ul>
                        </div>
                        <div class="right-box">
                            <div>
                                <ul class="last-ul" id="saodiji">
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/mi2pro.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/mi2.webp" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2</h3>
                                                <p class="desc">经典延续，全面升级</p>
                                                <p class="dprice">1699元
                                                    <del><span>1799元</span></del>
                                                </p>

                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/mi2pro.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/mi2pro.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/mi2pro.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/mi2pro.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/mi2pro.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <li class="last-li">
                                        <a href="#">
                                            <div class="getmore"><img src="./img/圈右箭头(1).png" alt=""></div>
                                            <div class="textmore">
                                                浏览更多
                                                <small>扫地机</small>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul class="last-ul-hide" id="kongjing">
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/空净.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家空气净化机 4Pro</h3>
                                                <p class="desc">抗醛抗菌升级</p>
                                                <p class="dprice">1299元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/空净.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家空气净化器Pro H 高效除菌</h3>
                                                <p class="desc">0.3微米级净化 部分细菌滤除率高达99.9%</p>
                                                <p class="dprice">1599元
                                                    <del><span>1699元</span></del>
                                                </p>

                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/空净.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/空净.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/空净.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/空净.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <li class="last-li">
                                        <a href="#">
                                            <div class="getmore"><img src="./img/圈右箭头(1).png" alt=""></div>
                                            <div class="textmore">
                                                浏览更多
                                                <small>空净</small>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul class="last-ul-hide" id="qingjie">
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/清洁.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/清洁.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2</h3>
                                                <p class="desc">经典延续，全面升级</p>
                                                <p class="dprice">1699元
                                                    <del><span>1799元</span></del>
                                                </p>

                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/清洁.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/清洁.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/清洁.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/清洁.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/清洁.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <li class="last-li">
                                        <a href="#">
                                            <div class="imgbox2">
                                                <img src="./img/清洁.jpg" alt="">
                                            </div>
                                            <h3 class="h3t2">米家扫拖机器人 2Pro</h3>
                                            <p class="dprice2">2699元</p>
                                          </a>
                                    </li>
                                    <li class="last-li">
                                        <a href="#">
                                            <div class="getmore"><img src="./img/圈右箭头(1).png" alt=""></div>
                                            <div class="textmore">
                                                浏览更多
                                                <small>清洁</small>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul class="last-ul-hide" id="fengshan">
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/风扇.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/风扇.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2</h3>
                                                <p class="desc">经典延续，全面升级</p>
                                                <p class="dprice">1699元
                                                    <del><span>1799元</span></del>
                                                </p>

                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/风扇.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/风扇.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/风扇.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/风扇.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a href="#">
                                                <div class="imgbox">
                                                    <img src="./img/风扇.jpg" alt="">
                                                </div>
                                                <h3 class="h3t">米家扫拖机器人 2Pro</h3>
                                                <p class="desc">扫拖除菌一步到位</p>
                                                <p class="dprice">2699元</p>
                                            </a>
                                        </li>
                                    </div>
                                    <li class="last-li">
                                      <a href="#">
                                            <div class="imgbox2">
                                                <img src="./img/风扇.jpg" alt="">
                                            </div>
                                            <h3 class="h3t2">米家扫拖机器人 2Pro</h3>
                                            <p class="dprice2">2699元</p>
                                          </a>
                                    </li>
                                    <li class="last-li">
                                        <a href="#">
                                            <div class="getmore"><img src="./img/圈右箭头(1).png" alt=""></div>
                                            <div class="textmore">
                                                浏览更多
                                                <small>风扇</small>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="footer-box">
        <div class="another-home-container footer-up">
            <div class="footer-service">
                <ul class="footer-service-ul">
                    <li>
                        <a href="#">
                            <em class="iconfont icon-weixiubanshou"></em> 预约维修服务
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <em class="iconfont icon-7tiantuihuanhuo"></em> 7天无理由退货
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <em class="iconfont icon-tian"></em> 15天免费换货
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <em class="iconfont icon-lihe"></em> 满69包邮
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <em class="iconfont icon-position"></em> 520余家售后网点
                        </a>
                    </li>
                </ul>
            </div>

            <div class="footer-links">
                <dl>
                    <dt>帮助中心</dt>
                    <dd><a href="#">账户管理</a></dd>
                    <dd><a href="#">购物指南</a></dd>
                    <dd><a href="#">订单操作</a></dd>
                </dl>
                <dl>
                    <dt>服务支持</dt>
                    <dd><a href="#">售后政策</a></dd>
                    <dd><a href="#">自助服务</a></dd>
                    <dd><a href="#">相关下载</a></dd>
                </dl>
                <dl>
                    <dt>线下门店</dt>
                    <dd><a href="#">小米之家</a></dd>
                    <dd><a href="#">服务网点</a></dd>
                    <dd><a href="#">授权体验店/专区</a></dd>
                </dl>
                <dl>
                    <dt>关于小米</dt>
                    <dd><a href="#">了解小米</a></dd>
                    <dd><a href="#">加入小米</a></dd>
                    <dd><a href="#">投资者关系</a></dd>
                    <dd><a href="#">企业社会责任</a></dd>
                    <dd><a href="#">廉洁举报</a></dd>
                </dl>
                <dl>
                    <dt>关注我们</dt>
                    <dd><a href="#">新浪微博</a></dd>
                    <dd><a href="#">官方微信</a></dd>
                    <dd><a href="#">联系我们</a></dd>
                    <dd><a href="#">公益基金会</a></dd>
                </dl>
                <dl>
                    <dt>特色服务</dt>
                    <dd><a href="#">F 码通道</a></dd>
                    <dd><a href="#">礼物码</a></dd>
                    <dd><a href="#">防伪查询</a></dd>
                </dl>

                <div class="footer-con">
                    <p class="phone">400-100-5678</p>
                    <p>8:00-18:00（仅收市话费）</p>
                    <a href="#" class="footer-con-a">
                        <em class="iconfont icon-xinxi"></em>人工客服
                    </a>
                    <div class="footer-con-under">
                        关注小米：
                        <a href="#" class="wb"></a>
                        <a href="javascript:void(0);" class="wx"></a>
                        <img src="./img/wx-img.png" alt="" class="code3">
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom-box">
            <div class="another-home-container footer-bottom">
                <div class="logo-bt"></div>
                <div class="bot-text">
                    <p>
                        <a href="#">小米商城</a>
                        <span>|</span>
                        <a href="#">MIUI</a>
                        <span>|</span>
                        <a href="#">米家</a>
                        <span>|</span>
                        <a href="#">米聊</a>
                        <span>|</span>
                        <a href="#">多看</a>
                        <span>|</span>
                        <a href="#">游戏</a>
                        <span>|</span>
                        <a href="#">政企服务</a>
                        <span>|</span>
                        <a href="#">小米天猫店</a>
                        <span>|</span>
                        <a href="#">小米集团隐私政策</a>
                        <span>|</span>
                        <a href="#">小米公司儿童信息保护规则</a>
                        <span>|</span>
                        <a href="#">小米商城隐私政策</a>
                        <span>|</span>
                        <a href="#">小米商城用户协议</a>
                        <span>|</span>
                        <a href="#">问题反馈</a>
                        <span>|</span>
                        <a href="#">Select Location</a>
                    </p>
                    <p>
                        <a href="#">北京互联网法院法律服务工作站</a>
                        <span>|</span>
                        <a href="#">中国消费者协会</a>
                        <span>|</span>
                        <a href="#">北京市消费者协会</a>
                    </p>

                    <p class="pd">
                        &copy;
                        <a href="#">mi.com</a> 京ICP证110507号
                        <a href="#">京ICP备10046444号</a>
                        <a href="#">京公网安备11010802020134号</a>
                        <a href="#">京网文[2020]0276-042号</a>
                        <br>
                        <a href="#">（京）网械平台备字（2018）第00005号</a>
                        <a href="#">互联网药品信息服务资格证 (京)-非经营性-2014-0090</a>
                        <a href="#">营业执照</a>
                        <a href="#">医疗器械质量公告</a>
                        <br>
                        <a href="#">增值电信业务许可证</a>&nbsp;网络食品经营备案 京食药网食备202010048 &nbsp;
                        <a href="#">食品经营许可证</a>
                        <br> 违法和不良信息举报电话：171-5104-4404&nbsp;
                        <a href='#'>知识产权侵权投诉</a>&nbsp;本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
                    </p>
                </div>
                <div class="btd-links">
                    <a href="#"><img src="./img/truste.png" alt=""></a>
                    <a href="#"><img src="./img/v-logo-2.png" alt=""></a>
                    <a href="#"><img src="./img/icon3.png" alt=""></a>
                    <a href="#"><img src="./img/ba10428a4f9495ac310fd0b5e0cf8370.png" alt=""></a>
                    <a href="#">
                        <img src="./img/f1ee261b96ae71e845efba398efeca02.png" alt="" id="bti1">
                        <img src="./img/800eab5457cc34c41260b9ad033e3bec.png" alt="" id="bti2">
                    </a>
                </div>
            </div>
        </div>
        <div class="btt">

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XiaoMiShop',
  props: {},
  data () {
    return {
      
    }
  },
  components: {
    
  },
  computed: {
    
  },
  mounted() {
    document.title = "小米商城";
    //搜索框
var content = ['空调', '小米手机', '小米平板5 Pro', '冰箱', '净水器', '洗衣机', '耳机'];
var btn = document.getElementById('search-btn');
var text = document.getElementById('search-text');
var list = document.getElementById('list');
var i = 0;


btn.onmouseover = function() {
    btn.children[0].src = './img/搜索白.png';
}

btn.onmouseout = function() {
    btn.children[0].src = './img/search_btn.png';
}

text.onfocus = function() {
    text.className = "search-onfocus";
    btn.className = "search-btn-onfocus";
    list.style.display = 'block';
}

text.onblur = function() {
    text.className = "search";
    btn.className = "search-btn";
    list.style.display = 'none';
}

function changeContent() {
    if (i < content.length) {
        text.placeholder = content[i];
        i++;
    } else {
        i = 0;
    }
}
window.setInterval(changeContent, 3000); //自动变化的搜索框内容

//上拉开 可切换的 仅限红米小米
var xiaomi = document.getElementById('xiaomi');
var redmi = document.getElementById('redmi');
var xiaomiUL = document.getElementById('xiaomi-ul');
var redmiUL = document.getElementById('redmi-ul');

xiaomi.onmousemove = function() {
    xiaomiUL.style.display = 'block';
    redmiUL.style.display = 'none';
}

redmi.onmousemove = function() {
    xiaomiUL.style.display = 'none';
    redmiUL.style.display = 'block';
}


//侧拉开
var leftUl = document.getElementById('leftUl');
var board = document.getElementById('board');
var shouji = document.getElementById('shouji');
var other = document.getElementById('else');

board.onmouseover = function() {
    this.style.display = 'block';
}

board.onmouseout = function() {
    this.style.display = 'none';
}

leftUl.children[0].onmouseover = function() {
    board.style.display = 'block';
}

leftUl.children[0].onmouseout = function() {
    board.style.display = 'none';
}

for (var j = 1; j < leftUl.children.length; j++) {
    leftUl.children[j].onmouseover = function() {
        board.style.display = 'block';
        shouji.style.display = 'none';
        other.style.display = 'block';
    }

    leftUl.children[j].onmouseout = function() {
        board.style.display = 'none';
        shouji.style.display = 'block';
        other.style.display = 'none';
    }
}

//轮播图
var index = 0;
var imgs = document.getElementById('imgs');
var zeroPoint = document.querySelector(".zero-point");
var imgLis = document.querySelectorAll(".img-wrap li");
var lis = zeroPoint.querySelectorAll("li");

zeroPoint.addEventListener("click", function(event) {
    var target = event.target; //返回谁触发了对象
    for (let [n, li] of lis.entries()) { //遍历器 返回lis的下表和值
        if (li == target) { //更改被点击的小圆点的样式，背景色为白色
            index = n;
            target.className = "hover";
        } else { //否则恢复为小圆点的默认样式
            li.className = li.className.replace("hover", "");
        }
    }
    setPicture(); //设置图片
});
//左箭头点击事件
var leftArrow = document.querySelector("#leftArrow");
leftArrow.addEventListener("click", function() {
    clearInterval(time1); //消除定时器
    index--; //点击左箭头时，index--
    if (index < 0) { //若index < 0 则赋值为2，达到循环的效果
        index = 2;
    }
    setZero(); //设置小圆点
    setPicture(); //设置图片
    time1 = setInterval(timeSeter, 5000); //重新加上定时器
});
//右箭头点击事件
var rightArrow = document.querySelector("#rightArrow");
rightArrow.addEventListener("click", function() {
    clearInterval(time1);
    index++;
    if (index > 2) {
        index = 0;
    }
    setZero();
    setPicture();
    time1 = setInterval(timeSeter, 5000);
});

function setPicture() {
    //遍历所有图片
    for (var i = 0, length = imgLis.length; i < length; i++) {
        if (i == index) {
            imgLis[i].style.opacity = 1;
        } else {
            imgLis[i].style.opacity = 0;
        }
    }
}

function setZero() {
    for (let [n, li] of lis.entries()) {
        if (n == index) { //如果是第index个小圆点，则修改这个小圆点的背景颜色为白色
            li.className = "hover";
        } else { //其他小圆点恢复默认样式
            li.className = li.className.replace("hover", "");
        }
    }
}

function timeSeter() { //定时器函数，达到自动轮播的效果
    index++; //循环++
    if (index > 2) { //当循环到最后一个就再从第一个开始
        index = 0;
    }
    setZero(); //设置小圆点
    setPicture(); //设置图片
}
var time1 = setInterval(timeSeter, 5000);

//鼠标移入移出暂停开始计时器
imgs.onmouseover = function() {
    clearInterval(time1);
}

imgs.onmouseout = function() {
    time1 = setInterval(timeSeter, 5000);
}

//悬浮改界面
var saodijit = document.getElementById('saodijit');
var kongjingt = document.getElementById('kongjingt');
var qingjiet = document.getElementById('qingjiet');
var fengshant = document.getElementById('fengshant');
var saodiji = document.getElementById('saodiji');
var kongjing = document.getElementById('kongjing');
var qingjie = document.getElementById('qingjie');
var fengshan = document.getElementById('fengshan');

saodijit.onmouseover = function() {
    saodijit.className = 'active-li';
    kongjingt.className = '';
    qingjiet.className = '';
    fengshant.className = '';
    saodiji.className = 'last-ul';
    kongjing.className = 'last-ul-hide';
    qingjie.className = 'last-ul-hide';
    fengshan.className = 'last-ul-hide';
}

kongjingt.onmouseover = function() {
    saodijit.className = '';
    kongjingt.className = 'active-li';
    qingjiet.className = '';
    fengshant.className = '';
    saodiji.className = 'last-ul-hide';
    kongjing.className = 'last-ul';
    qingjie.className = 'last-ul-hide';
    fengshan.className = 'last-ul-hide';
}

qingjiet.onmouseover = function() {
    saodijit.className = '';
    kongjingt.className = '';
    qingjiet.className = 'active-li';
    fengshant.className = '';
    saodiji.className = 'last-ul-hide';
    kongjing.className = 'last-ul-hide';
    qingjie.className = 'last-ul';
    fengshan.className = 'last-ul-hide';
}

fengshant.onmouseover = function() {
    saodijit.className = '';
    kongjingt.className = '';
    qingjiet.className = '';
    fengshant.className = 'active-li';
    saodiji.className = 'last-ul-hide';
    kongjing.className = 'last-ul-hide';
    qingjie.className = 'last-ul-hide';
    fengshan.className = 'last-ul';
}

//最底部变换图片
var bti1 = document.getElementById('bti1');
var bti2 = document.getElementById('bti2');
var b1 = 1;
var b2 = 0;

function changeImg() {
    if (b1 == 1) {
        b1 = 0;
        b2 = 1;
        bti2.style.display = 'inline-block';
        bti1.style.display = 'none';
    } else if (b2 == 1) {
        b1 = 1;
        b2 = 0;
        bti1.style.display = 'inline-block';
        bti2.style.display = 'none';
    }
}

setInterval(changeImg, 2000);

//回顶部
var sidebox = document.getElementById('sidebox');
var goback = document.getElementById('goback');

function judgeHowFar() {
    var howFar = document.documentElement.scrollTop;
    if (howFar > 700) {
        sidebox.style.top = '120px';
        goback.style.display = 'block';
    } else if (howFar <= 700) {
        sidebox.style.top = '210px';
        goback.style.display = 'none';
    }
}

setInterval(judgeHowFar, 1);

goback.onclick = function() {
    document.documentElement.scrollTop = 0;
}
  },
  watch: {
    
  },
  methods: {
    
  },
  created () {
    
  },
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    /* box-sizing: border-box; */
}

body {
    font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
    color: #333;
    background-color: #fff;
    min-width: 1226px;
}

.header {
    width: 100%;
    height: 140px;
}

.header-up {
    width: 100%;
    height: 40px;
    font-size: 12px;
    color: #b0b0b0;
    background-color: #333;
}

.header-up-container {
    width: 1226px;
    height: 100%;
    line-height: 40px;
    margin: 0 auto;
}

.header-up-container a {
    display: inline-block;
    color: #b0b0b0;
}

.header-up-container span {
    margin: 0 0.3em;
    color: #424242;
}

.header-up-container a:hover {
    color: white;
}

.app {
    position: relative;
}

.app:hover::before {
    position: absolute;
    content: '';
    width: 0px;
    height: 0px;
    bottom: -1px;
    left: 13px;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent white transparent;
}

.code {
    position: absolute;
    transition: all .3s;
    overflow: hidden;
    box-shadow: 0 1px 5px #aaa;
    z-index: 22;
    width: 126px;
    height: 0px;
    right: -41px;
    top: 40px;
    background-color: #fff;
}

.code span {
    position: relative;
    display: none;
    transition: all .2s;
    right: -22px;
    top: -30px;
}

.code img {
    display: none;
    transition: all .2s;
    width: 90px;
    margin: 18px;
}

.app:hover .code {
    height: 126px;
}

.app:hover .code span {
    display: block;
}

.app:hover .code img {
    display: block;
}

.header-up-container-right {
    position: relative;
    float: right;
    right: 139px;
    width: 143px;
    height: 40px;
    text-align: center;
    line-height: 40px;
}

.shopcar {
    position: relative;
    float: right;
    right: -143px;
    width: 120px;
    height: 40px;
    margin-left: 15px;
    transition: all .2s;
    background-color: #444444;
    background-image: url('./img/iconfont-cart.png');
    background-position: 15px center;
    background-repeat: no-repeat;
}

.shopcar a {
    margin-left: 40px;
    margin-top: 2px;
    font-size: 12px;
    color: #b0b0b0;
    text-align: center;
    transition: all .2s;
}

.shopcar:hover {
    background-color: #fff;
    background-image: url('./img/iconfont-cart\ \(橙\).png');
}

.shopcar:hover a {
    color: #ff6700;
}

.cart {
    position: absolute;
    transition: all .3s;
    z-index: 99;
    width: 330px;
    height: 0px;
    right: 0px;
    top: 40px;
    font-size: 12px;
    text-align: center;
    line-height: 100px;
    background-color: #fff;
    box-shadow: 0 2px 5px;
}

.cart span {
    display: none;
    color: #b0b0b0;
}

.shopcar:hover .cart {
    height: 100px;
}

.shopcar:hover span {
    display: block;
}

.sidebox {
    position: fixed;
    right: 0;
    top: 210px;
    z-index: 99;
    height: 455px;
    width: 84px;
    border: 1px solid #f5f5f5;
    background-color: #fff;
}

.sidebox li {
    position: relative;
    width: 84px;
    height: 91px;
    color: #757575;
    transition: all .3s;
    border-bottom: 1px solid #f5f5f5;
}

.sidebox li:last-child {
    border-bottom: 0;
}

.sidebox-li-span {
    position: absolute;
    width: 84px;
    font-size: 14px;
    text-align: center;
    bottom: 20px;
}

.sidebox-img {
    position: relative;
    width: 30px;
    height: 30px;
    margin: 0 auto 8px;
    padding-top: 18px;
    text-align: center;
}

.sidebox-img img {
    width: 30px;
}

.goback {
    position: fixed;
    display: none;
    width: 84px;
    height: 91px;
    right: 0;
    z-index: 99;
    border: 1px solid #f5f5f5;
    top: 590px;
    background-color: #fff;
    cursor: pointer;
}

.goback em {
    display: block;
    color: #757575;
    font-size: 30px;
    text-align: center;
    padding-top: 18px;
}

.goback span {
    position: absolute;
    width: 84px;
    text-align: center;
    font-size: 14px;
    color: #757575;
}

.goback:hover em {
    color: #ff6700;
}

.goback:hover span {
    color: #ff6700;
}

.no-imgs {
    display: none;
}

.sidebox li:hover .yes-img {
    display: none;
}

.sidebox li:hover .no-imgs {
    display: block;
}

.sidebox li:hover {
    color: #ff6700;
}

.code2 {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    height: 160px;
    right: 100px;
    top: 0;
    padding: 14px;
    background: #fff;
    border: 1px solid #f5f5f5;
    transition: opacity .3s;
    transform: translateZ(0);
}

.code2::after {
    position: absolute;
    content: '';
    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #fff;
    top: 21%;
    left: 128px;
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: solid;
    overflow: hidden;
}

.code2 img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 6px auto;
}

.code2-span {
    display: block;
    font-size: 14px;
    width: 82px;
    margin: 14px auto 0;
    color: #757575;
    text-align: center;
}

.sidebox li:first-child:hover+.code2 {
    visibility: visible;
    opacity: 1;
}

.code2:hover {
    visibility: visible;
    opacity: 1;
}

.header-down {
    position: relative;
    width: 1226px;
    height: 100px;
    line-height: 40px;
    margin: 0 auto;
    background-color: #fff;
}

.header-down a img {
    margin-top: 22px;
    height: 56px;
}

.header-down-ul {
    float: left;
    position: relative;
    margin-left: 180px;
    top: 33px;
    margin-bottom: 7px;
}

.header-down li {
    float: left;
}

.header-down li a:hover {
    color: #ff6700;
}

.header-down-ul:hover+.push-down {
    height: 240px;
}

.header-logo {
    float: left;
    /* padding: 0 10px 38px; */
}

.header-down li a {
    font-size: 16px;
    color: #333;
    padding: 26px 10px 38px;
}

.push-down {
    position: absolute;
    transition: all .3s;
    overflow: hidden;
    top: 100px;
    z-index: 33;
    width: 100%;
    height: 0px;
    box-shadow: 0 3px 5px #aaa;
    background-color: #fff;
}

.push-down:hover {
    height: 240px;
}

.push-down li {
    position: relative;
    float: left;
    left: 154px;
    width: 180px;
    height: 200px;
    padding: 35px 12px 0;
    text-align: center;
    cursor: pointer;
}

.push-down li::before {
    position: absolute;
    left: 0;
    top: 35px;
    z-index: 1;
    width: 1px;
    height: 100px;
    content: "";
    background-color: #e0e0e0
}

.cansee {
    display: block;
}

.cantsee {
    display: none;
}

ul>li:first-child::before {
    display: none;
}

.img-contain {
    width: 160px;
    height: 110px;
    margin: 0 auto 16px;
    text-align: center;
}

.img-contain img {
    width: 160px;
}

.title {
    margin: 0;
    font-size: 12px;
    line-height: 20px;
}

.price {
    margin: 0;
    font-size: 12px;
    line-height: 20px;
    color: #ff6700;
}

.redmii {
    display: none;
}

.redmit {
    display: none;
}

.redmip {
    display: none;
}

.xiaomii {
    display: block;
}

.xiaomit {
    display: block;
}

.xaiomip {
    display: block;
}

.ss {
    position: relative;
    float: right;
    margin-top: 25px;
    height: 50px;
    width: 296px;
}

.search {
    border: 1px solid #e0e0e0;
    outline: 0;
    transition: all .2s;
    width: 225px;
    height: 48px;
    padding: 0 10px;
    font-size: 14px;
    line-height: 48px;
}

.search-btn {
    position: absolute;
    transition: all 0.2s;
    right: 0;
    height: 50px;
    width: 50px;
    display: inline-block;
    border: 1px solid #e0e0e0;
    cursor: pointer;
    background-color: #fff;
}

.search-btn img {
    width: 24px;
}

.ss:hover .search {
    border: 1px solid #b0b0b0;
}

.ss:hover .search-btn {
    border: 1px solid #b0b0b0;
}

.search-btn:hover {
    background-color: #ff6700;
}

.search-btn-onfocus:hover {
    background-color: #ff6700;
}

.search-onfocus {
    border: 1px solid #ff6700;
    outline: 0;
    transition: all .2s;
    width: 225px;
    height: 48px;
    padding: 0 10px;
    font-size: 14px;
    line-height: 48px;
}

.search-btn-onfocus {
    position: absolute;
    transition: all 0.2s;
    /* box-sizing: border-box; */
    right: 0;
    height: 50px;
    width: 50px;
    display: inline-block;
    border: 1px solid #ff6700;
    cursor: pointer;
    background-color: #fff;
}

.list {
    position: absolute;
    display: none;
    z-index: 66;
    width: 243px;
    border: 1px solid #ff6700;
    border-top: 0;
    background: #fff;
}

.list li {
    width: 233px;
    height: 30px;
    font-size: 12px;
    padding-left: 10px;
    cursor: pointer;
}

.list li:hover {
    background-color: #f5f5f5;
}

.home {
    width: 1226px;
    height: 670px;
    margin: 0 auto;
}

.up {
    position: relative;
    width: 100%;
    height: 460px;
}

.arrowl {
    position: absolute;
    right: 20px;
    top: 12px;
}

.left {
    position: absolute;
    width: 234px;
    height: 460px;
    z-index: 2;
    background-color: rgba(105, 101, 101, .6);
}

.left ul {
    margin-top: 20px;
    width: 234px;
    height: 440px;
}

.left li {
    position: relative;
    width: 234px;
    height: 42px;
    cursor: pointer;
}

.left li a {
    display: block;
    font-size: 14px;
    padding-left: 30px;
    color: white;
    line-height: 42px;
}

.arrow #leftArrow,
.arrow #rightArrow {
    position: absolute;
    width: 40px;
    height: 69px;
    top: 195px;
}

.arrow #leftArrow {
    z-index: 10;
    left: 234px;
    cursor: pointer;
    background-image: url(./img/轮播箭头.png);
    background-repeat: no-repeat;
    background-position: -84px 50%;
}

.arrow #rightArrow {
    z-index: 10;
    right: 0px;
    cursor: pointer;
    background-image: url(./img/轮播箭头.png);
    background-repeat: no-repeat;
    background-position: -125px 50%;
}

#banner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: all 1s;
    background-color: #fff;
}

.img-wrap {
    width: 100%;
    height: 100%;
}

#imgs {
    width: 100%;
    height: 100%;
}

#banner .item {
    position: absolute;
    top: 0;
    opacity: 0;
    transition: all 1s;
}

#banner .item:first-child {
    opacity: 1;
}

#banner ul li img {
    width: 1226px;
    height: 460px;
    cursor: pointer;
}

.zero-point li.hover {
    background-color: #fff;
}

.zero-point {
    position: absolute;
    right: 30px;
    bottom: 20px;
}

.zero-point li {
    width: 5px;
    height: 5px;
    border: 2px solid #616161;
    background: #616161;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
    cursor: pointer;
}

.zero-point li:hover {
    background-color: #fff;
}

#p1 {
    position: absolute;
    opacity: 0;
    transition: all .8s;
}

#p2 {
    position: absolute;
    opacity: 0;
    transition: all .8s;
}

#p3 {
    position: absolute;
    opacity: 1;
    transition: all .8s;
}


/* .left-arr {
    position: absolute;
    left: 234px;
    top: 50%;
    transform: translateY(-50%);
    width: 41px;
    height: 69px;
    z-index: 10;
    cursor: pointer;
    background-image: url(./img/轮播箭头.png);
    background-repeat: no-repeat;
    background-position: -84px 50%;
}

.right-arr {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 41px;
    height: 69px;
    z-index: 10;
    cursor: pointer;
    background-image: url(./img/轮播箭头.png);
    background-repeat: no-repeat;
    background-position: -125px 50%;
} */

.left li:hover {
    background-color: #ff6700;
}

#leftArrow:hover {
    background-position: 0 50%;
}

#rightArrow:hover {
    background-position: -41px 50%;
}

.picture button {
    position: absolute;
    top: 425px;
    width: 10px;
    height: 10px;
    border: 2px solid #b3b3b3;
    border-radius: 10px;
    background-color: #919191;
    cursor: pointer;
}

.b1 {
    right: 66px;
}

.b2 {
    right: 48px;
}

.b3 {
    right: 30px;
}

.board {
    position: absolute;
    display: none;
    left: 234px;
    top: 0;
    z-index: 24;
    width: 992px;
    height: 460px;
    border: 1px solid #e0e0e0;
    border-left: 0;
    background: #fff;
}

.shouji {
    width: 100%;
    height: 100%;
}

.shouji ul {
    float: left;
    overflow: hidden;
    width: 248px;
    height: 458px;
    margin: 0;
    padding: 2px 0;
    list-style-type: none;
}

.shouji li {
    position: relative;
    float: left;
    width: 265px;
    height: 76px;
}

.shouji ul li a {
    display: block;
    padding: 18px 20px;
    line-height: 40px;
    color: #333;
    transition: color .2s;
}

.shouji ul li a img {
    display: inline-block;
    width: 40px;
    margin-right: 12px;
    vertical-align: middle;
}

.shouji ul li a span {
    float: left;
    position: absolute;
    left: 70px;
    width: 172px;
    line-height: 40px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.shouji li a:hover {
    color: #ff6700;
}

.else {
    display: none;
    width: 100%;
    height: 100%;
}

.home-down {
    width: 100%;
    height: 170px;
    margin-top: 14px;
    background-color: #fff;
}

.ph1 {
    float: left;
    width: 234px;
    height: 170px;
}

.ph2 {
    float: left;
    width: 978px;
    height: 170px;
    margin-left: 14px;
}

.ph1-ul {
    width: 100%;
    height: 100%;
    margin: 0;
    list-style-type: none;
    font-size: 12px;
    text-align: center;
    background: #5f5750;
}

.ph1-ul li {
    position: relative;
    float: left;
    width: 70px;
    height: 82px;
    padding: 0 3px;
}

.ph1-ul li::before {
    position: absolute;
    content: "";
    background: #665e57;
    top: 0px;
    left: 6px;
    width: 64px;
    height: 1px;
}

.ph1-ul li::after {
    position: absolute;
    content: "";
    background: #665e57;
    top: 6px;
    left: 0;
    width: 1px;
    height: 70px;
}

.ph1-ul li a {
    display: block;
    padding-top: 18px;
    text-overflow: ellipsis;
    color: #fff;
    opacity: .7;
    transition: opacity .2s;
}

.ph1-ul li a img {
    display: block;
    width: 24px;
    height: 24px;
    margin: 0 auto 4px;
}

.ph1-ul li a:hover {
    opacity: 1;
}

.ph2-ul {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.ph2-ul li {
    float: left;
    width: 316px;
    height: 170px;
    margin-left: 15px;
    transition: box-shadow .2s linear;
}

.ph2-ul li:hover {
    z-index: 2;
    box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
}

.ph2-ul li a img {
    width: 316px;
}

.another-home-main {
    width: 100%;
    height: auto;
    padding-top: 4px;
    padding-bottom: 12px;
    background: #f5f5f5;
}

.another-home-container {
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
}

.top-banner {
    height: 120px;
    margin: 22px 0;
    overflow: hidden;
}

.top-banner img {
    width: 1226px;
    height: 120px;
}

.inner-box {
    margin-bottom: 8px;
}

.top-text {
    position: relative;
    height: 58px;
}

.ud-title {
    margin: 0;
    font-size: 22px;
    font-weight: 200;
    line-height: 58px;
    color: #333;
}

.more {
    position: absolute;
    top: 0;
    right: 0;
}

.more-ul {
    margin: 0;
    padding: 16px 0 0;
    list-style-type: none;
    font-size: 16px;
}

.more-ul li {
    display: inline-block;
    padding: 0;
    margin: 0 0 0 30px;
    transition: all .2s;
    cursor: pointer;
    font-size: 16px;
}

.active-li {
    color: #ff6700;
    border-bottom: 2px solid #ff6700;
}

.inner-body {
    margin-left: -14px;
    height: 623px;
}

.left-box {
    float: left;
    margin-left: 14px;
    min-height: 1px;
    width: 234px;
}

.leftbox-ul {
    margin: 0 0 -14px -14px;
    height: 614px;
    padding: 0;
    list-style-type: none;
}

.leftbox-ul li {
    position: relative;
    height: 300px;
    padding: 0;
    z-index: 1;
    float: left;
    width: 234px;
    margin-left: 14px;
    margin-bottom: 14px;
    background: #fff;
    transition: all .2s linear;
}

.leftbox-ul li a {
    display: block;
    width: 100%;
    height: 100%;
}

.leftbox-ul li a img {
    width: 234px;
    height: 300px;
}

.right-box {
    float: left;
    width: 978px;
    margin-left: 14px;
    min-height: 1px;
}

.last-ul {
    width: 992px;
    height: 614px;
    margin: 0 0 -14px -14px;
}

.last-ul-hide {
    display: none!important;
}

.last-ul div li {
    height: 300px;
    padding: 0;
    position: relative;
    z-index: 1;
    float: left;
    width: 234px;
    margin-left: 14px;
    margin-bottom: 14px;
    background: #fff;
    transition: all .2s linear;
}

.last-ul div li a {
    display: block;
    height: 100%;
    box-sizing: border-box;
    padding: 20px 0;
}

.imgbox {
    width: 160px;
    height: 160px;
    margin: 0 auto 18px;
}

.imgbox img {
    width: 160px;
    height: 160px;
}

.h3t {
    margin: 0 10px 2px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;
    font-weight: 400;
    color: #333;
}

.desc {
    margin: 0 10px 10px;
    height: 18px;
    font-size: 12px;
    color: #b0b0b0;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.dprice {
    margin: 0 10px 14px;
    text-align: center;
    color: #ff6700;
}

.last-ul li del {
    text-decoration: line-through;
    margin-left: .5em;
    color: #b0b0b0;
}

.last-li {
    position: relative;
    z-index: 1;
    float: left;
    width: 234px;
    margin-left: 14px;
    margin-bottom: 14px;
    background: #fff;
    transition: all .2s linear;
    height: 93px;
    padding-top: 50px;
}

.getmore {
    position: absolute;
    right: 35px;
    top: 48px;
    width: 48px;
    height: 48px;
    color: #ff6700;
}

.textmore {
    display: block;
    margin: 0 110px 0 30px;
    font-size: 18px;
    color: #333;
}

.textmore small {
    display: block;
    font-size: 12px;
    color: #757575;
}

.inner-body li:hover {
    z-index: 2;
    box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
    transform: translate3d(0, -2px, 0);
}

.imgbox2 {
    position: absolute;
    right: 20px;
    top: 32px;
    width: 80px;
    height: 80px;
}

.imgbox2 img {
    width: 80px;
    height: 80px;
}

.h3t2 {
    margin: -10px 110px 5px 30px;
    font-size: 14px;
    font-weight: 400;
    color: #333;
}

.dprice2 {
    margin: 0 110px 0 30px;
    font-size: 12px;
    color: #ff6700;
}

.footer-box {
    width: 100%;
    height: 595px;
}

.footer-up {
    height: 331px;
}

.footer-service {
    padding: 27px 0;
    height: 30px;
    border-bottom: 1px solid #e0e0e0;
}

.footer-service-ul li:first-child {
    border-left: 0;
}

.footer-service-ul a {
    color: #616161;
    transition: color .2s;
}

.footer-service-ul em {
    margin-right: 6px;
    font-size: 24px;
    line-height: 24px;
    vertical-align: -4px;
}

.footer-service-ul li {
    float: left;
    width: 19.8%;
    height: 25px;
    border-left: 1px solid #e0e0e0;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
}

.footer-service-ul li a:hover {
    color: #ff6700;
}

.footer-links {
    padding: 40px 0;
}

.footer-links dl {
    float: left;
    width: 160px;
    margin: 0;
}

.footer-links dl dt {
    margin: -1px 0 26px;
    font-size: 14px;
    line-height: 1.25;
    color: #424242;
}

.footer-links dl dd {
    margin: 10px 0 0;
    font-size: 12px;
}

.footer-links dl dd a {
    color: #757575;
}

.footer-links dl dd a:hover {
    color: #ff6700;
}

.footer-con {
    float: right;
    width: 251px;
    border-left: 1px solid #e0e0e0;
    text-align: center;
    color: #616161;
}

.footer-con p {
    margin: 0 0 5px 0;
    font-size: 12px;
}

.phone {
    font-size: 22px!important;
    line-height: 1;
    color: #ff6700;
}

.footer-con-a {
    display: inline-block;
    padding: 0;
    margin: 0;
    border: 1px solid #ff6700;
    width: 118px;
    height: 28px;
    font-size: 12px;
    line-height: 28px;
    transition: all .4s;
    text-align: center;
    background: #fff;
    color: #ff6700;
}

.footer-con-a:hover {
    color: white;
    background-color: #ff6700;
}

.footer-con-under {
    position: relative;
    font-size: 12px;
    margin-top: 10px;
}

.footer-con-under a {
    width: 24px;
    height: 24px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 6px;
    margin-top: -3px;
}

.wb {
    background: url(./img/wb.png) 50% 0 no-repeat;
    background-size: cover;
}

.wx {
    background: url(./img/wx.png) 50% 0 no-repeat;
    background-size: cover;
}

.code3 {
    position: absolute;
    display: none;
    width: 126px;
    height: 126px;
    z-index: 2;
    top: 20px;
    left: 100px;
}

.wb:hover {
    background: url(./img/wb-ho.png) 50% 0 no-repeat;
    background-size: cover;
}

.wx:hover {
    background: url(./img/wx-ho.png) 50% 0 no-repeat;
    background-size: cover;
}

.wx:hover+.code3 {
    display: block;
}

.footer-bottom-box {
    font-size: 12px;
    background: #fafafa;
}

.logo-bt {
    float: left;
    margin-top: 30px;
    width: 56px;
    height: 56px;
    margin-right: 20px;
    background: url(./img/logo-mi2.png) no-repeat;
    background-size: 56px;
    text-align: left;
    text-indent: -9999em;
    overflow: hidden;
}

.footer-bottom {
    height: 264px;
}

.bot-text {
    color: #b0b0b0;
    padding-top: 30px;
    padding-left: 77px;
}

.bot-text p {
    line-height: 18px;
}

.bot-text a {
    color: #757575;
}

.pd a {
    color: #b0b0b0;
}

.footer-bottom-box a:hover {
    color: #ff6700;
}

.btd-links {
    height: 28px;
    margin: 4px 0 15px;
    padding-left: 77px;
}

.btd-links a {
    display: inline-block;
}

.btd-links a img {
    width: auto;
    height: 28px;
    margin-left: 0;
}

#bti1 {
    display: inline-block;
}

#bti2 {
    display: none;
}

.btt {
    position: relative;
    top: -75px;
    clear: both;
    margin: 30px auto 0;
    width: 100%;
    height: 19px;
    background: url(./img/bttt.png) no-repeat center 0;
}
</style>
