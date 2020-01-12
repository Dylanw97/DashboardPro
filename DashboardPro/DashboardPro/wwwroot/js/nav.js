//This set of scripts is used to add functionaltiy to the side navbar
function openNav() {//Sets the look of the pop-out nav bar
    document.getElementById("menubutton").style.display = "none";

    document.body.style.backgroundColor = "#e4e4e4";
    document.getElementById("main").style.opacity = "0.2";

    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("navbar").style.marginLeft = "250px";
    document.getElementById("sidenav").style.borderRight = "0.1px solid white";

    navlistings();//Used to build the listing in the nav menu
}

function navlistings() {//Builds menu listings
    /*
     * 1: Admin
     * 2: Executive
     * 3: Asset
     * 4: 
    */
    var usertype = userauth();

    if (usertype == 1) {
        document.getElementById("navlist").innerHTML = "<div>" +
            "<a id=\"namelisting\" href=\"#\" style=\"margin-bottom: 50px;\"></a>" +

            "<button class=\"dropdown-btn\" onclick=\"sublisting()\">Admin<i class=\"fa-caret-down\"></i></button>" +
            "<div class=\"dropdown-container\">" +
            "<a href=\"#\">Link 1</a>" +
            "<a href=\"#\">Link 2</a>" +
            "<a href=\"#\">Link 3</a>" +
            "</div>" +
            "<button class=\"dropdown-btn\" onclick=\"sublisting()\">Users<i class=\"fa fa-caret-down\"></i></button>" +
            "<div class=\"dropdown-container\">" +
            "<a href=\"#\">All users</a>" +
            "<a href=\"#\">Create Users</a>" +
            "<a href=\"#\">Delete Users</a>" +
            "<a href=\"#\">Change Permission</a>" +
            "</div>" +
            "<div>";
        document.getElementById("namelisting").innerHTML = WAI();
    }
    //if (usertype == 2){}
    //if (usertype == 3){}
    //if (usertype == 4){}
    //if (usertype == 5){}
    //if (usertype == 6){}
    else {
        document.getElementById("navlistings").innerHTML = "<div><a>unauthorized</a></div>";
    }
    var dropdown = document.getElementsByClassName("dropdown-btn");

    for (var i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }
}

function closeNav() {//Reverts or "closes" the pop-out navbar
    document.body.style.backgroundColor = "white";
    document.getElementById("main").style.opacity = "1";

    document.getElementById("sidenav").style.width = "0";
    document.getElementById("navbar").style.marginLeft = "0";
    document.getElementById("sidenav").style.borderRight = "none";

    document.getElementById("menubutton").style.display = "inline";
}