
<header id="topnav" class="defaultscroll sticky nav-sticky">
    <div class="container">
        <!-- Logo container-->
        <div>
            <a class="logo " href="/">
                <span class="l-light"> <x-app-layout.top-bar-logo-light /> </span>
                <span class="l-dark"> <x-app-layout.top-bar-logo-dark /> </span>
            </a>
        </div>                 
        <div class="buy-button">
            <a href="#" class="text-dark h6 mr-3 login" data-toggle="modal" data-target="#LoginForm">Login</a>
            <a href="https://1.envato.market/hostick" target="_blank" class="btn btn-primary">Support</a>
        </div><!--end login button-->
        <!-- End Logo container-->
        <div class="menu-extras">
            <div class="menu-item">
                <!-- Mobile menu toggle-->
                <a class="navbar-toggle">
                    <div class="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
                <!-- End mobile menu toggle-->
            </div>
        </div>

        <div id="navigation">
            <!-- Navigation Menu-->   
            <ul class="navigation-menu nav-light">
                <li class="has-submenu">
                    <a href="javascript:void(0)">Home</a><span class="menu-arrow"></span>
                    <ul class="submenu">
                        <li><a href="index.html">Home One</a></li>
                        <li><a href="index-two.html">Home Two</a></li>
                    </ul>
                </li>

                <li class="has-submenu">
                    <a href="javascript:void(0)">Hosting</a><span class="menu-arrow"></span>
                    <ul class="submenu megamenu">
                        <li>
                            <ul>
                                <li><a href="hosting-shared.html"><img src="{{ asset('theame/images/icons/shared.svg') }}" class="avatar avatar-ex-sm mr-2" alt=""> Shared Hosting</a></li>
                            </ul>
                        </li>

                        <li>
                            <ul>
                                <li><a href="hosting-reseller.html"><img src="{{ asset('theame/images/icons/reseller.svg') }}" class="avatar avatar-ex-sm mr-2" alt=""> Reseller Hosting</a></li>  
                            </ul>
                        </li>
                    </ul>
                </li>

                <li class="has-submenu">
                    <a href="javascript:void(0)">Pages</a><span class="menu-arrow"></span>
                    <ul class="submenu">
                        <li><a href="page-about.html">Company</a></li>
                        <li class="has-submenu"><a href="javascript:void(0)"> Blog</a><span class="submenu-arrow"></span>
                            <ul class="submenu">
                                <li><a href="page-blog.html">Blog</a></li>
                                <li><a href="page-blog-sidebar.html">Blog Sidebar</a></li>
                                <li><a href="page-blog-single.html">Single Blog</a></li>
                            </ul>  
                        </li>
                        <li><a href="page-faqs.html">FAQs</a></li>
                        <li><a href="page-support.html">Support Center</a></li>
                        <li><a href="page-privacy.html">Privacy Policy</a></li>
                        <li><a href="page-terms.html">Terms & Conditions</a></li>
                        <li class="has-submenu"><a href="javascript:void(0)"> Auth Pages</a><span class="submenu-arrow"></span>
                            <ul class="submenu">
                                <li><a href="page-login.html">Login</a></li>
                                <li><a href="page-signup.html">Signup</a></li>
                                <li><a href="page-forgot-password.html">Forgot Password</a></li>
                            </ul>  
                        </li>
                        <li><a href="page-404.html">404</a></li>
                    </ul>
                </li>

                <li><a href="contact.html">Contact</a></li>
            </ul><!--end navigation menu-->
        </div><!--end navigation-->
    </div><!--end container-->
</header><!--end header-->