<div class="navbar container">
    <div class="navbar-inner">
        <!-- .btn-navbar is used as the toggle for collapsed navbar content -->
        <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </a>

        <!-- Be sure to leave the brand out there if you want it shown -->
        <a id="logo" class="brand" href="#">
            <img src="res/logo.png">
        </a>

        <!-- Everything you want hidden at 940px or less, place within here -->
        <div class="nav-collapse collapse">
            <ul class="nav pull-right">
                <!-- Does markdown have if else logic? Replace line with better href if so. -->

                <li><a {{#is filename "index.html"}}href="#"{{else}}href="index.html"{{/is}}>Home</a></li>

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">About Us<b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu">

                        <li><a {{#is filename "pastors_message.html"}}href="#"{{else}}href="pastors_message.html"{{/is}}>Pastor's Message</a></li>
                        <li><a {{#is filename "theme.html"}}href="#"{{else}}href="theme.html"{{/is}}>"1 Lord, 1 Faith, 1 Baptism"</a></li>
                        <li><a {{#is filename "history.html"}}href="#"{{else}}href="history.html"{{/is}}>History</a></li>
                        <li><a {{#is filename "beliefs.html"}}href="#"{{else}}href="beliefs.html"{{/is}}>Beliefs</a></li>
                        <li><a {{#is filename "denomination.html"}}href="#"{{else}}href="denomination.html"{{/is}}>Denomination</a></li>
                        <li><a {{#is filename "values.html"}}href="#"{{else}}href="values.html"{{/is}}>Values</a></li>
                        <li><a {{#is filename "vision.html"}}href="#"{{else}}href="vision.html"{{/is}}>Vision</a></li>
                        <li><a {{#is filename "worship.html"}}href="#"{{else}}href="worship.html"{{/is}}>Worship</a></li>
                        <li><a {{#is filename "staff.html"}}href="#"{{else}}href="staff.html"{{/is}}>Staff</a></li>
                    </ul>
                </li>
                <li>
                    <a {{#is filename "events.html"}}href="#"{{else}}href="events.html"{{/is}}>Events</a>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        Resources
                        <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a {{#is filename "sermon_archives.html"}}href="#"{{else}}href="sermon_archives.html"{{/is}}>Sermon Archives</a></li>
                        <li><a {{#is filename "daily_prayer.html"}}href="#"{{else}}href="daily_prayer.html"{{/is}}>Daily Prayer</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        Connect
                        <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a {{#is filename "ministries.html"}}href="#"{{else}}href="ministries.html"{{/is}}>Ministries</a></li>
                        <li><a {{#is filename "contact.html"}}href="#"{{else}}href="contact.html"{{/is}}>Contact</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>