(function($) {

    var projects = [
        {
            name: "cheat-app",
            title: "Cheat Diet - Fitness App",
            img_url: "http://aqueel.me/img/projects/cheat-app.png",
            caption: "Cheat Diet App is available for iOS 10 and 11",
            short_descr: "Engineered algorithms to lookup food data and calculate time in 9 different exercises to burn calories. Improved search accuracy by 36% using N-gram based algorithm. Deployed REST api to manage nutrition info.",
            long_desr: "Engineered algorithms to lookup food data and calculate time in 9 different exercises to burn calories. Improved search accuracy by 36% using N-gram based algorithm. Deployed REST api to manage nutrition info.",
            languages: [
                "Swift",
                "Javascript"
            ],
            frameworks: [
                "Node.js",
                "Alamofire",
                "Mongo DB",
                "iOS Development"
            ],
            tools: [
                "Xcode",
                "Shell",
                "UNIX"
            ]
        },

        {
            name: "heal-app",
            title: "Heal - ‘Uber’ for people in need of care ",
            img_url: "http://aqueel.me/img/projects/heal-app.png",
            caption: "Heal App is available for iOS 10 and 11 ",
            short_descr: "Connects sick/elderly to caretakers nearby using live data. Incorporated a rating system for better searching. Coded a native iOS app in 36hrs, streams live user data. Won 4 awards and grand prize for automation hack.",
            long_desr: "Connects sick/elderly to caretakers nearby using live data. Incorporated a rating system for better searching. Coded a native iOS app in 36hrs, streams live user data. Won 4 awards and grand prize for automation hack.",
            languages: [
                "Swift",
                "Javascript",
                "Python"
            ],
            frameworks: [
                "Firebase",
                "Alamofire",
                "iOS Development"
            ],
            tools: [
                "Xcode",
                "Shell",
                "UNIX"
            ]
        },

        {
            name: "almanac-app",
            title: "Almanac - A Social Calendar for busy planners",
            img_url: "http://aqueel.me/img/projects/almanac.png",
            caption: "Preview of social calendar UI ",
            short_descr: "Integrated Google and Outlook calendars/todo lists with Facebook API. Manage, share and view friends’ calendars. Implemented a heat map based social calendar UI to plan social/business events for groups effectively.",
            long_desr: "Integrated Google and Outlook calendars/todo lists with Facebook API. Manage, share and view friends’ calendars. Implemented a heat map based social calendar UI to plan social/business events for groups effectively.",
            languages: [
                "HTML",
                "Javascript",
                "CSS"
            ],
            frameworks: [
                "Node.js",
                "Angular 4",
                "Mongo DB"
            ],
            tools: [
                "Angular-CLI",
                "Shell",
                "UNIX"
            ]
        }
    ];

    $("#nav-overlay").hide();
    $("#info-dialog").hide();

    $("#nav-button").click(function(){
        $("#nav-overlay").show();
    });

    $("#nav-close-button").click(function(){
        $("#nav-overlay").hide();
    });

    $("#dialog-close-button").click(function(){
        $("#info-dialog").hide();
    });

    
    var findDetail = function(name) {
        return projects.filter(function(data) {
            return data.name === name;
        })[0]
    };

    var clearElement = function(node) {
        while(node.firstChild) {
            node.removeChild(node.firstChild);
        }
    }

    var appendAsList = function(list, root) {
        $(root).empty()
        list.forEach(function(data) {
            $(root).append(
                $('<div/>').text(data)
            );
        });
    };

    var addDialogFor = function(name, btn) {
        $(btn).click(function(){
            var details = findDetail(name);
            $("#project-title").text(details.title);
            $("#project-img").attr("src", details.img_url);
            $("long-descr").text(details.long_desr);
            appendAsList(details.languages, "#project-languages")
            appendAsList(details.frameworks, "#project-frameworks")
            appendAsList(details.tools, "#project-tools")
            $("#info-dialog").show();
        });
    }

    addDialogFor("cheat-app", "#cheat-app-btn");
    addDialogFor("heal-app", "#heal-app-btn");
    addDialogFor("almanac-app", "#almanac-app-btn");

}(jQuery));