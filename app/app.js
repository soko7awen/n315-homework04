import { changePage } from "../model/model.js";
import { createAlert, createToast, dismissAlert } from "../lib/utility.js";

function initListeners() {
    $("#app").on("click", "form button", function (e) {
        e.preventDefault();
        const un = $("#username").val().trim();
        let unl = un.length;
        if (un == "") {
            alert("Username cannot be empty");
        } else if (unl < 3) {
            alert("Username must be at least 3 characters long");
        } else if (un.includes(" ")) {
            alert("Username cannot contain spaces");
        } else {
            createAlert({ message: `Welcome, ${un} `});
        }
    });
}

function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    changePage(pageID);
}

function initRouting() {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
    initRouting();
    initListeners();
});