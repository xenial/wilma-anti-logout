// ==UserScript==
// @name         Wilma Anti-Logout
// @namespace    http://xenial.cash/
// @version      0.2
// @description  Prevents automatic logout
// @author       xenial
// @grant        unsafeWindow
// @include      /https:\/\/wilma.*\.fi.*/
// @run-at       document-idle
// ==/UserScript==

(function(window) {
    'use strict';

    window.AutoLogoutWarning.promptWithTimeStamp = function() {
        window.console.log("Intercepting logout...");
        location.reload();
    }
})(unsafeWindow);