var currentTab = 'd1';

function swapTabs(newtab) {
    var currTab = document.getElementById(currentTab);
    var newTab = document.getElementById(newtab);
    currTab.style.display = 'none';
    currTab.style.visibility = 'hidden';
    newTab.style.display = 'block';
    newTab.style.visibility = 'visible';
    currentTab = newtab;
}

// object.getElementById(s1).onclick = function () { swapTabs(object.getElementById(s1)) };
// object.getElementById(s2).onclick = function () { swapTabs(object.getElementById(s2)) };
// object.getElementById(s3).onclick = function () { swapTabs(object.getElementById(s3)) };