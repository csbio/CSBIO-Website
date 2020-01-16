//This is the header for every web page so we don't have to copy paste it

var html =  "" +
"<nav class='navbar fixed-top navbar-expand-lg py-2' role='navigation'>" +
"    <a class='navbar-brand px-5' href='/index.html'>Myers Lab</a>" +
"    <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>" +
"        <span class='navbar-toggler-icon'></span>" +
"    </button>" +
"    <div class='collapse navbar-collapse' id='navbarSupportedContent'>" +
"        <ul class='nav navbar-nav ml-auto px-5'>" +
"            <li class='nav-item'>" +
"                <a class='nav-link' href='/research.html'>Research</a>" +
"            </li>" +
"            <li class='nav-item'>" +
"                <a class='nav-link' href='/people.html'>People</a>" +
"            </li>" +
"            <li class='nav-item'>" +
"                <a class='nav-link' href='/publication.html'>Publications</a>" +
"            </li>" +
"            <li class='nav-item'>" +
"                <a class='nav-link' href='/software.html'>Software</a>" +
"            </li>" +
"            <li class='nav-item dropdown'>" +
"                <a href='#' class='nav-link dropdown-toggle' data-toggle='dropdown' id='dropdownMenuLink' role='button' aria-haspopup='true' aria-expanded='false'>" +
"                    Other Pages" +
"                </a>" +
"                <div class='dropdown-menu' aria-labelledby='dropdownMenuLink'>" +
"                    <a class='dropdown-item' href='/LabMemberArea/LabMemberArea.html'>Lab Member Area</a>" +
"                    <a class='dropdown-item' href='/collaborators.html'>Collaborators</a>" +
"                    <a class='dropdown-item' href='/positions.html'>Positions</a>" +
"                    <a class='dropdown-item' href='/contact.html'>Contact us</a>" +
"                </div>" +
"            </li>" +
"        </ul>" +
"    </div>" +
"</nav>"
document.getElementById('nav').innerHTML = html;