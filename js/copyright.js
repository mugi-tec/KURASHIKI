// JS Information ======================================================
// Site URL:http://kurashiki.me/
// File name:copyright.js
// Summary:西暦自動繰上
// Created:2020-10-23
// Last update:2020-10-23 by Sadaoka
// Copyright:(C) BUNKASOZOSHA Co.,Ltd.
//======================================================================

myD = new Date();
myYear = myD.getYear();
myYears = (myYear < 2000) ? myYear+1900 : myYear;
document.write("&copy; 2009-",myYears," BUNKASOZOSHA Co.,Ltd.");
