var eventBanner = [];
var eventBannerLast = 0;
var counterE4;
var counterE5;
var weaponBanner = [];
var weaponBannerLast = 0;
var counterW4;
var counterW5;
var standardBanner = [];
var standardBannerLast = 0;
var counterS4;
var counterS5;
var newbieBanner = [];
var newbieBannerLast = 0;
var counterN4;
var counterN5;
var freeChars = [];
var shopChars = [];
var freeWeapons = [];
var shopWeapons = [];

//Buttons onclick auf +
function addStuff(y) {
    var x = document.getElementById("buttonArea1"+y);
    if(y == 1){
        if(counterE4 >= 10){
            x.innerHTML = '<div id ="buttons5" class ="buttons5"><button class="button1" id="button1" onclick="dropList(1)"></button><button class="button2" id="button2" onclick="dropList(2)"></button><button class="sinactive" id="button3" onclick="add3(1)"></button><button class="button4" id="button4" onclick="dropList(4)"></button><button class="wginactive" id="button5"></button></div>';
        }else if(counterE5 >= 90){
            x.innerHTML = '<div id ="buttons5" class ="buttons5"><button class="chpinactive" id="button1" onclick="dropList(1)"></button><button class="wpinactive" id="button2"  onclick="dropList(2)"></button><button class="sinactive" id="button3" onclick="add3(1)"></button><button class="button4" id="button4" onclick="dropList(4)"></button><button class="wginactive" id="button5"></button></div>';
        }else{
            x.innerHTML = '<div id ="buttons5" class ="buttons5"><button class="button1" id="button1" onclick="dropList(1)"></button><button class="button2" id="button2" onclick="dropList(2)"></button><button class="button3" id="button3" onclick="add3(1)"></button><button class="button4" id="button4" onclick="dropList(4)"></button><button class="wginactive" id="button5"></button></div>';
        }
    }else if(y==2){
        if(counterW4 >= 10){
            x.innerHTML = '<div id ="buttons5" class ="buttons5"><button class="button6" id="button6" onclick="dropList(6)"></button><button class="button7" id="button7" onclick="dropList(7)"></button><button class="sinactive" id="button8" onclick="add3(2)"></button><button class="chginactive" id="button9"></button><button class="button10" id="button10 " onclick="dropList(10)"></button></div>';
        }else if(counterW5 >= 90){
            x.innerHTML = '<div id ="buttons5" class ="buttons5"><button class="chpinactive" id="button6" onclick="dropList(6)"></button><button class="wpinactive" id="button7"  onclick="dropList(7)"></button><button class="sinactive" id="button8" onclick="add3(2)"></button><button class="chginactive" id="button9" onclick="dropList(9)"></button><button class="button10" id="button10" onclick="dropList(10)"></button></div>';
        }else{
            x.innerHTML = '<div id ="buttons5" class ="buttons5"><button class="button6" id="button6" onclick="dropList(6)"></button><button class="button7" id="button7" onclick="dropList(7)"></button><button class="button8" id="button8" onclick="add3(2)"></button><button class="chginactive" id="button9" onclick="dropList(9)"></button><button class="button10" id="button10" onclick="dropList(10)"></button></div>';
        }
    }else if(y==3){
        if(counterS4 >= 10){
            x.innerHTML = '<div id ="buttons5" class ="buttons5"><button class="button11" id="button11" onclick="dropList(11)"></button><button class="button12" id="button12" onclick="dropList(12)"></button><button class="sinactive" id="button13" onclick="add3(3)"></button><button class="button14" id="button14" onclick="dropList(14)"></button><button class="button15" id="button15 " onclick="dropList(15)"></button></div>';
        }else if(counterS5 >= 90){
            x.innerHTML = '<div id ="buttons5" class ="buttons5"><button class="chpinactive" id="button11" onclick="dropList(11)"></button><button class="wpinactive" id="button12"  onclick="dropList(12)"></button><button class="sinactive" id="button13" onclick="add3(3)"></button><button class="button14" id="button14" onclick="dropList(14)"></button><button class="button15" id="button15" onclick="dropList(15)"></button></div>';
        }else{
            x.innerHTML = '<div id ="buttons5" class ="buttons5"><button class="button11" id="button11" onclick="dropList(11)"></button><button class="button12" id="button12" onclick="dropList(12)"></button><button class="button13" id="button13" onclick="add3(3)"></button><button class="button14" id="button14" onclick="dropList(14)"></button><button class="button15" id="button15" onclick="dropList(15)"></button></div>';
        }
    }else if(y==4){
        if(counterN4 >= 10){
            x.innerHTML = '<div id ="buttons5" class ="buttons5"><button class="button16" id="button16" onclick="dropList(16)"></button><button class="wpinactive" id="button17" ></button><button class="sinactive" id="button18" onclick="add3(4)"></button><button class="button19" id="button19" onclick="dropList(19)"></button><button class="wginactive" id="button20 "></button></div>';
        }else{
            x.innerHTML = '<div id ="buttons5" class ="buttons5"><button class="button16" id="button16" onclick="dropList(16)"></button><button class="wpinactive" id="button17" ></button><button class="button18" id="button18" onclick="add3(4)"></button><button class="button19" id="button19" onclick="dropList(19)"></button><button class="wginactive" id="button20"></button></div>';
        }
    }
}
//Lädt die Geschichte aus LocalSpeicher und die Dropdowns onload
function prepare(){
    loadDropdowns();
    parseStorage(1);
    parseStorage(2);
    parseStorage(3);
    parseStorage(4);
}

//Lädt dropdowns, ein Attribut muss übergeben werden
function loadDropdowns() {
    a = document.getElementById("myDropdown1");
    b = document.getElementById("myDropdown2");   
    d = document.getElementById("myDropdown4");
    e = document.getElementById("myDropdown6");  
    f = document.getElementById("myDropdown7");
    g = document.getElementById("myDropdown10");
    h = document.getElementById("myDropdown11");
    k = document.getElementById("myDropdown12");   
    l = document.getElementById("myDropdown14");
    o = document.getElementById("myDropdown15");
    m = document.getElementById("myDropdown16");
    n = document.getElementById("myDropdown19");
    var i;
    var j;
    var charsnew1 = [];
    var charsnew2 = [];
    var charsnew3 = [];
    var weaponsnew1 = [];
    var weaponsnew2 = [];
    var weaponsnew3 = [];
    var weaponsnew4 = [];
    var charsnew4 = [];
    //Char 4 lila event
    for (i = 0; i < chars.length; i++) {
        if (chars[i][1]!='' & chars[i][5]=='4' & (chars[i][65]=='es'||chars[i][65]=='e')){
        charsnew1.push([chars[i][0],chars[i][1]]);      
        }
    } 
    charsnew1 = charsnew1.sort((a, b) => a[1].localeCompare(b[1]));
    for (j = 0; j < charsnew1.length; j++) {
        a.innerHTML = a.innerHTML + '<a href="#" onclick = "add4(1,'+charsnew1[j][0]+')">'+charsnew1[j][1]+'</a>';
        e.innerHTML = e.innerHTML + '<a href="#" onclick = "add4(2,'+charsnew1[j][0]+')">'+charsnew1[j][1]+'</a>';
        m.innerHTML = m.innerHTML + '<a href="#" onclick = "add4(4,'+charsnew1[j][0]+')">'+charsnew1[j][1]+'</a>';
    }
    //Char 4 lila standard
    for (i = 0; i < chars.length; i++) {
        if (chars[i][1]!='' & chars[i][5]=='4' & (chars[i][65]=='es'||chars[i][65]=='s')){
        charsnew2.push([chars[i][0],chars[i][1]]);      
        }
    } 
    charsnew2 = charsnew2.sort((a, b) => a[1].localeCompare(b[1]));
    for (j = 0; j < charsnew2.length; j++) {
        h.innerHTML = h.innerHTML + '<a href="#" onclick = "add4(3,'+charsnew2[j][0]+')">'+charsnew2[j][1]+'</a>';
    }
    //Weapon 4 lila event and standard
    for (i = 0; i < weapons.length; i++) {
        if (weapons[i][1]!='' & weapons[i][8]=='4' & (weapons[i][7]=='ws')){
        weaponsnew2.push([weapons[i][0],weapons[i][1]]);      
        }
    } 
    weaponsnew2 = weaponsnew2.sort((a, b) => a[1].localeCompare(b[1]));
    for (j = 0; j < weaponsnew2.length; j++) {
        b.innerHTML = b.innerHTML + '<a href="#" onclick = "add4(1,'+weaponsnew2[j][0]+')">'+weaponsnew2[j][1]+'</a>';
        k.innerHTML = k.innerHTML + '<a href="#" onclick = "add4(3,'+weaponsnew2[j][0]+')">'+weaponsnew2[j][1]+'</a>';
    }
    //Weapon 4 lila weapon banner
    for (i = 0; i < weapons.length; i++) {
        if (weapons[i][1]!='' & weapons[i][8]=='4' & (weapons[i][7]=='ws' | weapons[i][7]=='w')){
        weaponsnew1.push([weapons[i][0],weapons[i][1]]);      
        }
    } 
    weaponsnew1 = weaponsnew1.sort((a, b) => a[1].localeCompare(b[1]));
    for (j = 0; j < weaponsnew1.length; j++) {
        f.innerHTML = f.innerHTML + '<a href="#" onclick = "add4(2,'+weaponsnew1[j][0]+')">'+weaponsnew1[j][1]+'</a>';
    }
    //Char 5 gold event
    for (i = 0; i < chars.length; i++) {
        if (chars[i][1]!='' & chars[i][5]=='5' & (chars[i][65]=='es'| chars[i][65]=='e')){
        charsnew4.push([chars[i][0],chars[i][1]]); 
        }
    }
    charsnew4 = charsnew4.sort((a, b) => a[1].localeCompare(b[1]));
    for (j = 0; j < charsnew4.length; j++) {
        d.innerHTML = d.innerHTML + '<a href="#" onclick = "add5(1,'+charsnew4[j][0]+')">'+charsnew4[j][1]+'</a>';
    }
    //Char 5 gold standard
    for (i = 0; i < chars.length; i++) {
        if (chars[i][1]!='' & chars[i][5]=='5' & (chars[i][65]=='es')){
        charsnew3.push([chars[i][0],chars[i][1]]); 
        }
    }
    charsnew3 = charsnew3.sort((a, b) => a[1].localeCompare(b[1]));
    for (j = 0; j < charsnew3.length; j++) {
        l.innerHTML = l.innerHTML + '<a href="#" onclick = "add5(3,'+charsnew3[j][0]+')">'+charsnew3[j][1]+'</a>';
        n.innerHTML = n.innerHTML + '<a href="#" onclick = "add5(4,'+charsnew3[j][0]+')">'+charsnew3[j][1]+'</a>';
    }
    //Waffe 5 gold waffenbanner
    for (i = 0; i < weapons.length; i++) {
        if (weapons[i][1]!='' & weapons[i][8]=='5' & (weapons[i][7]=='ws'| weapons[i][7]=='w')){
        weaponsnew3.push([weapons[i][0],weapons[i][1]]); 
        }
    }
    weaponsnew3 = weaponsnew3.sort((a, b) => a[1].localeCompare(b[1]));
    for (j = 0; j < weaponsnew3.length; j++) {
        g.innerHTML = g.innerHTML + '<a href="#" onclick = "add5(2,'+weaponsnew3[j][0]+')">'+weaponsnew3[j][1]+'</a>';
    }
    //Waffe 5 gold standard
    for (i = 0; i < weapons.length; i++) {
        if (weapons[i][1]!='' & weapons[i][8]=='5' & (weapons[i][7]=='ws')){
        weaponsnew4.push([weapons[i][0],weapons[i][1]]); 
        }
    }
    weaponsnew4 = weaponsnew4.sort((a, b) => a[1].localeCompare(b[1]));
    for (j = 0; j < weaponsnew4.length; j++) {
        o.innerHTML = o.innerHTML + '<a href="#" onclick = "add5(3,'+weaponsnew4[j][0]+')">'+weaponsnew4[j][1]+'</a>';
    }

}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropList(x) {
    d = document.getElementById("myDropdown"+x);   
    d.classList.toggle("show");
}


window.onclick = function(event) {
    //Event Banner Char Lila
    if (!event.target.matches('.button1')) {
        var dropdowns = document.getElementsByClassName("dropdown-content1");
        var j;
        for (j = 0; j < dropdowns.length; j++) {
            var openDropdown = dropdowns[j];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    //Event Banner Waffe Lila
    if (!event.target.matches('.button2')) {
        var dropdowns = document.getElementsByClassName("dropdown-content2");
        var k;
        for (k = 0; k < dropdowns.length; k++) {
            var openDropdown = dropdowns[k];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    //Event Banner Char Gold
    if (!event.target.matches('.button4')) {
        var dropdowns = document.getElementsByClassName("dropdown-content4");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.button6')) {
        var dropdowns = document.getElementsByClassName("dropdown-content6");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.button7')) {
        var dropdowns = document.getElementsByClassName("dropdown-content7");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.button10')) {
        var dropdowns = document.getElementsByClassName("dropdown-content10");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.button11')) {
        var dropdowns = document.getElementsByClassName("dropdown-content11");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.button12')) {
        var dropdowns = document.getElementsByClassName("dropdown-content12");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.button14')) {
        var dropdowns = document.getElementsByClassName("dropdown-content14");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.button15')) {
        var dropdowns = document.getElementsByClassName("dropdown-content15");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.button16')) {
        var dropdowns = document.getElementsByClassName("dropdown-content16");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.button19')) {
        var dropdowns = document.getElementsByClassName("dropdown-content19");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
function add3(x) {   
    var parent = document.getElementById("container"+x);
    var buttons = document.getElementById("buttonArea1"+x);
    var drop = document.getElementById("buttonArea2"+x);
    var newcontent = document.createElement('div');
    if (x == 1){
        if(counterE4==null || counterE5==null){
            counterE4 = 1;
            counterE5 = 1;      
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(1)">double-click here to delete last entry</button>';
        }
        if(counterE4>=10){
            //alert('wtf');
        }else if(counterE5>=90){
            //alert('wtf dude');
        }else{
            newcontent.innerHTML = '<div class="entry"><div class="nr4">'+counterE4+'</div><div class="name">3*</div><div class="nr5" id="nr5">'+counterE5+'</div></div>';
            //event
            eventBannerLast++;
            localStorage.removeItem("eventBannerLast");
            localStorage.setItem("eventBannerLast", eventBannerLast);
            
            changes = 1;
            localStorage.removeItem("changes");
            localStorage.setItem("changes", changes);
            if (parent.hasChildNodes()) {
                parent.insertBefore(newcontent, parent.firstChild);
            }else{
                parent.appendChild(newcontent);
            }
            counterE4++;
            counterE5++;
            if(counterE4>=10){
                b3 = buttons.getElementsByClassName("button3")[0];
                b3.className = "sinactive";
            }else if(counterE5>=90){
                b1 = buttons.getElementsByClassName("button1")[0];
                b1.className = "chpinactive";
                b2 = buttons.getElementsByClassName("button2")[0];
                b2.className = "wpinactive";
                b3 = buttons.getElementsByClassName("button3")[0];
                b3.className = "sinactive";
            }
        }
    }else if (x == 2){
        if(counterW4==null || counterW5==null){
            counterW4 = 1;
            counterW5 = 1;      
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(2)">double-click here to delete last entry</button>';
        }
        if(counterW4>=10){
            //alert('wtf');
        }else if(counterW5>=90){
            //alert('wtf dude');
        }else{
            newcontent.innerHTML = '<div class="entry"><div class="nr4">'+counterW4+'</div><div class="name">3*</div><div class="nr5" id="nr5">'+counterW5+'</div></div>';
            //event
            weaponBannerLast++;
            localStorage.removeItem("weaponBannerLast");
            localStorage.setItem("weaponBannerLast", weaponBannerLast);
            changes = 1;
            localStorage.removeItem("changes");
            localStorage.setItem("changes", changes);
            if (parent.hasChildNodes()) {
                parent.insertBefore(newcontent, parent.firstChild);
            }else{
                parent.appendChild(newcontent);
            }
            counterW4++;
            counterW5++;
            if(counterW4>=10){
                b3 = buttons.getElementsByClassName("button8")[0];
                b3.className = "sinactive";
            }else if(counterW5>=80){
                b1 = buttons.getElementsByClassName("button6")[0];
                b1.className = "chpinactive";
                b2 = buttons.getElementsByClassName("button7")[0];
                b2.className = "wpinactive";
                b3 = buttons.getElementsByClassName("button8")[0];
                b3.className = "sinactive";
            }
        }
    }else if (x == 3){
        if(counterS4==null || counterS5==null){
            counterS4 = 1;
            counterS5 = 1;      
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(3)">double-click here to delete last entry</button>';
        }
        if(counterS4>=10){
            //alert('wtf');
        }else if(counterS5>=90){
            //alert('wtf dude');
        }else{
            newcontent.innerHTML = '<div class="entry"><div class="nr4">'+counterS4+'</div><div class="name">3*</div><div class="nr5" id="nr5">'+counterS5+'</div></div>';
            //event
            standardBannerLast++;
            localStorage.removeItem("standardBannerLast");
            localStorage.setItem("standardBannerLast", standardBannerLast);
            changes = 1;
            localStorage.removeItem("changes");
            localStorage.setItem("changes", changes);
            if (parent.hasChildNodes()) {
                parent.insertBefore(newcontent, parent.firstChild);
            }else{
                parent.appendChild(newcontent);
            }
            counterS4++;
            counterS5++;
            if(counterS4>=10){
                b3 = buttons.getElementsByClassName("button13")[0];
                b3.className = "sinactive";
            }else if(counterS5>=90){
                b1 = buttons.getElementsByClassName("button11")[0];
                b1.className = "chpinactive";
                b2 = buttons.getElementsByClassName("button12")[0];
                b2.className = "wpinactive";
                b3 = buttons.getElementsByClassName("button13")[0];
                b3.className = "sinactive";
            }
        }
    }else if (x == 4){
        if(counterN4==null || counterN5==null){
            counterN4 = 1;
            counterN5 = 1;      
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(4)">double-click here to delete last entry</button>';
        }
        if(counterN4>=10){
            //alert('wtf');
        }else if(counterN5>=90){
            //alert('wtf dude');
        }else{
            newcontent.innerHTML = '<div class="entry"><div class="nr4">'+counterN4+'</div><div class="name">3*</div><div class="nr5" id="nr5">'+counterN5+'</div></div>';
            //event
            newbieBannerLast++;
            localStorage.removeItem("newbieBannerLast");
            localStorage.setItem("newbieBannerLast", newbieBannerLast);
            changes = 1;
            localStorage.removeItem("changes");
            localStorage.setItem("changes", changes);
            if (parent.hasChildNodes()) {
                parent.insertBefore(newcontent, parent.firstChild);
            }else{
                parent.appendChild(newcontent);
            }
            counterN4++;
            counterN5++;
            if(counterN4>=10){
                b3 = buttons.getElementsByClassName("button18")[0];
                b3.className = "sinactive";
            }else if(counterN5>=90){
                b1 = buttons.getElementsByClassName("button16")[0];
                b1.className = "chpinactive";
                b2 = buttons.getElementsByClassName("button17")[0];
                b2.className = "wpinactive";
                b3 = buttons.getElementsByClassName("button18")[0];
                b3.className = "sinactive";
            }
        }
    }
    updown();
}  


function add4(x, y) {
    var parent = document.getElementById("container"+x);
    var drop = document.getElementById("buttonArea2"+x);
    var newcontent = document.createElement('div');
    var buttons = document.getElementById("buttonArea1"+x);
    if(x == 1){
        if(counterE4==null || counterE5==null){
            counterE4 = 1;
            counterE5 = 1;
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(1)">double-click here to delete last entry</button>';
        }
        if(counterE5>=90){
            //alert('wtf dude');
        }else{
            var i;
            var a;
            if (y < 1000){
                for (i = 0; i < chars.length; i++) {
                    if (chars[i][0] == y){
                        a = chars[i][1]; 
                    }
                }
            }else{
                for (i = 0; i < weapons.length; i++) {
                    if (weapons[i][0] == y){
                        a = weapons[i][1]; 
                    }
                }
            }
            newcontent.innerHTML = '<div class="entry"><div class="nr4" style="background-color: #887bad; font-weight: 900; color: #111111;">'+counterE4+'</div><div class="name" style="background-color: #887bad; font-weight: 900; color: #111111;">'+a+'</div><div class="nr5" id="nr5">'+counterE5+'</div></div>';
            //event
            eventBanner.push([counterE4,y,4,counterE5]);
            changes = 1;
            localStorage.removeItem("changes");
            localStorage.setItem("changes", changes);
            //!!!!!!UPDOWN
            updown();
            localStorage.removeItem("eventBanner");
            localStorage.setItem("eventBanner", JSON.stringify(eventBanner));
            eventBannerLast = 0;
            localStorage.removeItem("eventBannerLast");
            localStorage.setItem("eventBannerLast", eventBannerLast);
            if (parent.hasChildNodes()) {
                parent.insertBefore(newcontent, parent.firstChild);
            }else{
                parent.appendChild(newcontent);
            }
            counterE4 = 1;
            counterE5++;
            if(counterE5>=90){
                b1 = buttons.getElementsByClassName("button1")[0];
                b1.className = "chpinactive";
                b2 = buttons.getElementsByClassName("button2")[0];
                b2.className = "wpinactive";
                b3 = buttons.getElementsByClassName("button3")[0];
                b3.className = "sinactive";
            }else if(counterE4 = 1){
                b3 = buttons.getElementsByClassName("sinactive")[0];
                b3.className = "button3";
            }
        }
    }else if(x == 2){
        if(counterW4==null || counterW5==null){
            counterW4 = 1;
            counterW5 = 1;
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(2)">double-click here to delete last entry</button>';
        }
        if(counterW5>=90){
            //alert('wtf dude');
        }else{
            var i;
            var a;
            if (y < 1000){
                for (i = 0; i < chars.length; i++) {
                    if (chars[i][0] == y){
                        a = chars[i][1]; 
                    }
                }
            }else{
                for (i = 0; i < weapons.length; i++) {
                    if (weapons[i][0] == y){
                        a = weapons[i][1]; 
                    }
                }
            }
            newcontent.innerHTML = '<div class="entry"><div class="nr4" style="background-color: #887bad; font-weight: 900; color: #111111;">'+counterW4+'</div><div class="name" style="background-color: #887bad; font-weight: 900; color: #111111;">'+a+'</div><div class="nr5" id="nr5">'+counterW5+'</div></div>';
            //event
            weaponBanner.push([counterW4,y,4,counterW5]);
            changes = 1;
            localStorage.removeItem("changes");
            localStorage.setItem("changes", changes);
            //!!!!!!UPDOWN
            updown();
            localStorage.removeItem("weaponBanner");
            localStorage.setItem("weaponBanner", JSON.stringify(weaponBanner));
            weaponBannerLast = 0;
            localStorage.removeItem("weaponBannerLast");
            localStorage.setItem("weaponBannerLast", weaponBannerLast);
            if (parent.hasChildNodes()) {
                parent.insertBefore(newcontent, parent.firstChild);
            }else{
                parent.appendChild(newcontent);
            }
            counterW4 = 1;
            counterW5++;
            if(counterW5>=80){
                b1 = buttons.getElementsByClassName("button6")[0];
                b1.className = "chpinactive";
                b2 = buttons.getElementsByClassName("button7")[0];
                b2.className = "wpinactive";
                b3 = buttons.getElementsByClassName("button8")[0];
                b3.className = "sinactive";
            }else if(counterW4 = 1){
                b3 = buttons.getElementsByClassName("sinactive")[0];
                b3.className = "button8";
            }
        }
    }else if(x == 3){
        if(counterS4==null || counterS5==null){
            counterS4 = 1;
            counterS5 = 1;
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(3)">double-click here to delete last entry</button>';
        }
        if(counterS5>=90){
            //alert('wtf dude');
        }else{
            var i;
            var a;
            if (y < 1000){
                for (i = 0; i < chars.length; i++) {
                    if (chars[i][0] == y){
                        a = chars[i][1]; 
                    }
                }
            }else{
                for (i = 0; i < weapons.length; i++) {
                    if (weapons[i][0] == y){
                        a = weapons[i][1]; 
                    }
                }
            }
            newcontent.innerHTML = '<div class="entry"><div class="nr4" style="background-color: #887bad; font-weight: 900; color: #111111;">'+counterS4+'</div><div class="name" style="background-color: #887bad; font-weight: 900; color: #111111;">'+a+'</div><div class="nr5" id="nr5">'+counterS5+'</div></div>';
            //event
            standardBanner.push([counterS4,y,4,counterS5]);
            changes = 1;
            localStorage.removeItem("changes");
            localStorage.setItem("changes", changes);
            //!!!!!!UPDOWN
            updown();
            localStorage.removeItem("standardBanner");
            localStorage.setItem("standardBanner", JSON.stringify(standardBanner));
            standardBannerLast = 0;
            localStorage.removeItem("standardBannerLast");
            localStorage.setItem("standardBannerLast", standardBannerLast);
            if (parent.hasChildNodes()) {
                parent.insertBefore(newcontent, parent.firstChild);
            }else{
                parent.appendChild(newcontent);
            }
            counterS4 = 1;
            counterS5++;
            if(counterS5>=90){
                b1 = buttons.getElementsByClassName("button11")[0];
                b1.className = "chpinactive";
                b2 = buttons.getElementsByClassName("button12")[0];
                b2.className = "wpinactive";
                b3 = buttons.getElementsByClassName("button13")[0];
                b3.className = "sinactive";
            }else if(counterS4 = 1){
                b3 = buttons.getElementsByClassName("sinactive")[0];
                b3.className = "button13";
            }
        }
    }else if(x == 4){
        if(counterN4==null || counterN5==null){
            counterN4 = 1;
            counterN5 = 1;
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(4)">double-click here to delete last entry</button>';
        }
        if(counterN5>=90){
            //alert('wtf dude');
        }else{
            var i;
            var a;
            if (y < 1000){
                for (i = 0; i < chars.length; i++) {
                    if (chars[i][0] == y){
                        a = chars[i][1]; 
                    }
                }
            }else{
                for (i = 0; i < weapons.length; i++) {
                    if (weapons[i][0] == y){
                        a = weapons[i][1]; 
                    }
                }
            }
            newcontent.innerHTML = '<div class="entry"><div class="nr4" style="background-color: #887bad; font-weight: 900; color: #111111;">'+counterN4+'</div><div class="name" style="background-color: #887bad; font-weight: 900; color: #111111;">'+a+'</div><div class="nr5" id="nr5">'+counterN5+'</div></div>';
            //event
            newbieBanner.push([counterN4,y,4,counterN5]);
            changes = 1;
            localStorage.removeItem("changes");
            localStorage.setItem("changes", changes);
            //!!!!!!UPDOWN
            updown();
            localStorage.removeItem("newbieBanner");
            localStorage.setItem("newbieBanner", JSON.stringify(newbieBanner));
            newbieBannerLast = 0;
            localStorage.removeItem("newbieBannerLast");
            localStorage.setItem("newbieBannerLast", newbieBannerLast);
            if (parent.hasChildNodes()) {
                parent.insertBefore(newcontent, parent.firstChild);
            }else{
                parent.appendChild(newcontent);
            }
            counterN4 = 1;
            counterN5++;
            if(counterN5>=90){
                b1 = buttons.getElementsByClassName("button16")[0];
                b1.className = "chpinactive";
                b2 = buttons.getElementsByClassName("button17")[0];
                b2.className = "wpinactive";
                b3 = buttons.getElementsByClassName("button18")[0];
                b3.className = "sinactive";
            }else if(counterS4 = 1){
                b3 = buttons.getElementsByClassName("sinactive")[0];
                b3.className = "button18";
            }
        }
    }
}
function add5(x, y) {
    var parent = document.getElementById("container"+x);
    var drop = document.getElementById("buttonArea2"+x);
    var newcontent = document.createElement('div');
    var buttons = document.getElementById("buttonArea1"+x);
    if(x == 1){
        if(counterE4==null || counterE5==null){
            counterE4 = 1;
            counterE5 = 1;
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(1)">double-click here to delete last entry</button>';
        }
        var i;
        var a;
        if (y < 1000){
            for (i = 0; i < chars.length; i++) {
                if (chars[i][0] == y){
                    a = chars[i][1]; 
                }
            }
        }else{
            for (i = 0; i < weapons.length; i++) {
                if (weapons[i][0] == y){
                    a = weapons[i][1]; 
                }
            }
        }
        newcontent.innerHTML = '<div class="entry"><div class="nr4">'+counterE4+'</div><div class="name" style="background-color: #b6a16d; font-weight: 900; color: #111111;">'+a+'</div><div class="nr5" id="nr5" style="background-color: #b6a16d; font-weight: 900; color: #111111;">'+counterE5+'</div></div>';
        //event
        eventBanner.push([counterE4,y,5,counterE5]);
        localStorage.removeItem("eventBanner");
        localStorage.setItem("eventBanner", JSON.stringify(eventBanner));
        eventBannerLast = 0;
        localStorage.removeItem("eventBannerLast");
        localStorage.setItem("eventBannerLast", eventBannerLast);
        changes = 1;
        localStorage.removeItem("changes");
        localStorage.setItem("changes", changes);
        //UPDOWN
        updown();
        if (parent.hasChildNodes()) {
            parent.insertBefore(newcontent, parent.firstChild);
        }else{
            parent.appendChild(newcontent);
        }
        counterE4++;
        counterE5 = 1;  
        if(counterE5 =1){
            b1 = buttons.getElementsByClassName("chpinactive")[0];
            b1.className = "button1";
            b2 = buttons.getElementsByClassName("wpinactive")[0];
            b2.className = "button2";
            b3 = buttons.getElementsByClassName("sinactive")[0];
            b3.className = "button3";
        }else if(counterE4 = 10){
            b3 = buttons.getElementsByClassName("button3")[0];
            b3.className = "sinactive";
        } 
    }else if(x == 2){
        if(counterW4==null || counterW5==null){
            counterW4 = 1;
            counterW5 = 1;
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(2)">double-click here to delete last entry</button>';
        }
        var i;
        var a;
        if (y < 1000){
            for (i = 0; i < chars.length; i++) {
                if (chars[i][0] == y){
                    a = chars[i][1]; 
                }
            }
        }else{
            for (i = 0; i < weapons.length; i++) {
                if (weapons[i][0] == y){
                    a = weapons[i][1]; 
                }
            }
        }
        newcontent.innerHTML = '<div class="entry"><div class="nr4">'+counterW4+'</div><div class="name" style="background-color: #b6a16d; font-weight: 900; color: #111111;">'+a+'</div><div class="nr5" id="nr5" style="background-color: #b6a16d; font-weight: 900; color: #111111;">'+counterW5+'</div></div>';
        //event
        weaponBanner.push([counterW4,y,5,counterW5]);
        localStorage.removeItem("weaponBanner");
        localStorage.setItem("weaponBanner", JSON.stringify(weaponBanner));
        weaponBannerLast = 0;
        localStorage.removeItem("weaponBannerLast");
        localStorage.setItem("weaponBannerLast", weaponBannerLast);
        changes = 1;
        localStorage.removeItem("changes");
        localStorage.setItem("changes", changes);
        //UPDOWN
        updown();
        if (parent.hasChildNodes()) {
            parent.insertBefore(newcontent, parent.firstChild);
        }else{
            parent.appendChild(newcontent);
        }
        counterW4++;
        counterW5 = 1;  
        if(counterW5 =1){
            b1 = buttons.getElementsByClassName("chpinactive")[0];
            b1.className = "button6";
            b2 = buttons.getElementsByClassName("wpinactive")[0];
            b2.className = "button7";
            b3 = buttons.getElementsByClassName("sinactive")[0];
            b3.className = "button8";
        }else if(counterW4 = 10){
            b3 = buttons.getElementsByClassName("button8")[0];
            b3.className = "sinactive";
        } 
    }else if(x == 3){
        if(counterS4==null || counterS5==null){
            counterS4 = 1;
            counterS5 = 1;
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(3)">double-click here to delete last entry</button>';
        }
        var i;
        var a;
        if (y < 1000){
            for (i = 0; i < chars.length; i++) {
                if (chars[i][0] == y){
                    a = chars[i][1]; 
                }
            }
        }else{
            for (i = 0; i < weapons.length; i++) {
                if (weapons[i][0] == y){
                    a = weapons[i][1]; 
                }
            }
        }
        newcontent.innerHTML = '<div class="entry"><div class="nr4">'+counterS4+'</div><div class="name" style="background-color: #b6a16d; font-weight: 900; color: #111111;">'+a+'</div><div class="nr5" id="nr5" style="background-color: #b6a16d; font-weight: 900; color: #111111;">'+counterS5+'</div></div>';
        //event
        standardBanner.push([counterS4,y,5,counterS5]);
        localStorage.removeItem("standardBanner");
        localStorage.setItem("standardBanner", JSON.stringify(standardBanner));
        standardBannerLast = 0;
        localStorage.removeItem("standardBannerLast");
        localStorage.setItem("standardBannerLast", standardBannerLast);
        changes = 1;
        localStorage.removeItem("changes");
        localStorage.setItem("changes", changes);
        //UPDOWN
        updown();
        if (parent.hasChildNodes()) {
            parent.insertBefore(newcontent, parent.firstChild);
        }else{
            parent.appendChild(newcontent);
        }
        counterS4++;
        counterS5 = 1;  
        if(counterS5 =1){
            b1 = buttons.getElementsByClassName("chpinactive")[0];
            b1.className = "button11";
            b2 = buttons.getElementsByClassName("wpinactive")[0];
            b2.className = "button12";
            b3 = buttons.getElementsByClassName("sinactive")[0];
            b3.className = "button13";
        }else if(counterS4 = 10){
            b3 = buttons.getElementsByClassName("button13")[0];
            b3.className = "sinactive";
        } 
    }else if(x == 4){
        if(counterN4==null || counterN5==null){
            counterN4 = 1;
            counterN5 = 1;
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(4)">double-click here to delete last entry</button>';
        }
        var i;
        var a;
        if (y < 1000){
            for (i = 0; i < chars.length; i++) {
                if (chars[i][0] == y){
                    a = chars[i][1]; 
                }
            }
        }else{
            for (i = 0; i < weapons.length; i++) {
                if (weapons[i][0] == y){
                    a = weapons[i][1]; 
                }
            }
        }
        newcontent.innerHTML = '<div class="entry"><div class="nr4">'+counterN4+'</div><div class="name" style="background-color: #b6a16d; font-weight: 900; color: #111111;">'+a+'</div><div class="nr5" id="nr5" style="background-color: #b6a16d; font-weight: 900; color: #111111;">'+counterN5+'</div></div>';
        //event
        newbieBanner.push([counterN4,y,5,counterN5]);
        localStorage.removeItem("newbieBanner");
        localStorage.setItem("newbieBanner", JSON.stringify(newbieBanner));
        newbieBannerLast = 0;
        localStorage.removeItem("newbieBannerLast");
        localStorage.setItem("newbieBannerLast", newbieBannerLast);
        changes = 1;
        localStorage.removeItem("changes");
        localStorage.setItem("changes", changes);
        //UPDOWN
        updown();
        if (parent.hasChildNodes()) {
            parent.insertBefore(newcontent, parent.firstChild);
        }else{
            parent.appendChild(newcontent);
        }
        counterN4++;
        counterN5 = 1;  
        if(counterN5 =1){
            b1 = buttons.getElementsByClassName("chpinactive")[0];
            b1.className = "button16";
            b2 = buttons.getElementsByClassName("wpinactive")[0];
            b2.className = "button17";
            b3 = buttons.getElementsByClassName("sinactive")[0];
            b3.className = "button18";
        }else if(counterN4 = 10){
            b3 = buttons.getElementsByClassName("button18")[0];
            b3.className = "sinactive";
        } 
    }
}
//beim starten
function addS3(x) {   
    var parent = document.getElementById("container"+x);
    var drop = document.getElementById("buttonArea2"+x);
    var newcontent = document.createElement('div');
    if(x == 1){
        if(counterE4==null || counterE5==null){
            counterE4 = 1;
            counterE5 = 1;
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(1)">double-click here to delete last entry</button>';
        }
        if(counterE4>=10){
            //alert('wtf');
        }else if(counterE5>=90){
            //alert('wtf dude');
        }else{
            newcontent.innerHTML = '<div class="entry"><div class="nr4">'+counterE4+'</div><div class="name">3*</div><div class="nr5" id="nr5">'+counterE5+'</div></div>';
            if (parent.hasChildNodes()) {
                parent.insertBefore(newcontent, parent.firstChild);
            }else{
                parent.appendChild(newcontent);
            }
            counterE4++;
            counterE5++;
        }
    }else if(x == 2){
        if(counterW4==null || counterW5==null){
            counterW4 = 1;
            counterW5 = 1;
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(2)">double-click here to delete last entry</button>';
        }
        if(counterW4>=10){
            //alert('wtf');
        }else if(counterW5>=90){
            //alert('wtf dude');
        }else{
            newcontent.innerHTML = '<div class="entry"><div class="nr4">'+counterW4+'</div><div class="name">3*</div><div class="nr5" id="nr5">'+counterW5+'</div></div>';
            if (parent.hasChildNodes()) {
                parent.insertBefore(newcontent, parent.firstChild);
            }else{
                parent.appendChild(newcontent);
            }
            counterW4++;
            counterW5++;
        }
    }else if(x == 3){
        if(counterS4==null || counterS5==null){
            counterS4 = 1;
            counterS5 = 1;
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(3)">double-click here to delete last entry</button>';
        }
        if(counterS4>=10){
            //alert('wtf');
        }else if(counterS5>=90){
            //alert('wtf dude');
        }else{
            newcontent.innerHTML = '<div class="entry"><div class="nr4">'+counterS4+'</div><div class="name">3*</div><div class="nr5" id="nr5">'+counterS5+'</div></div>';
            if (parent.hasChildNodes()) {
                parent.insertBefore(newcontent, parent.firstChild);
            }else{
                parent.appendChild(newcontent);
            }
            counterS4++;
            counterS5++;
        }
    }else if(x == 4){
        if(counterN4==null || counterE5==null){
            counterN4 = 1;
            counterN5 = 1;
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(4)">double-click here to delete last entry</button>';
        }
        if(counterN4>=10){
            //alert('wtf');
        }else if(counterN5>=90){
            //alert('wtf dude');
        }else{
            newcontent.innerHTML = '<div class="entry"><div class="nr4">'+counterN4+'</div><div class="name">3*</div><div class="nr5" id="nr5">'+counterN5+'</div></div>';
            if (parent.hasChildNodes()) {
                parent.insertBefore(newcontent, parent.firstChild);
            }else{
                parent.appendChild(newcontent);
            }
            counterN4++;
            counterN5++;
        }
    }
} 
function addS4(x, y) {
    var parent = document.getElementById("container"+x);
    var drop = document.getElementById("buttonArea2"+x);
    var newcontent = document.createElement('div');
    if(x == 1){
        if(counterE4==null || counterE5==null){
            counterE4 = 1;
            counterE5 = 1;
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(1)">double-click here to delete last entry</button>';
        }
        var i;
        var a;
        if (y < 1000){
            for (i = 0; i < chars.length; i++) {
                if (chars[i][0] == y){
                    a = chars[i][1]; 
                }
            }
        }else{
            for (i = 0; i < weapons.length; i++) {
                if (weapons[i][0] == y){
                    a = weapons[i][1]; 
                }
            }
        }
        newcontent.innerHTML = '<div class="entry"><div class="nr4" style="background-color: #887bad; font-weight: 900; color: #111111;">'+counterE4+'</div><div class="name" style="background-color: #887bad; font-weight: 900; color: #111111;">'+a+'</div><div class="nr5" id="nr5">'+counterE5+'</div></div>';
        if (parent.hasChildNodes()) {
            parent.insertBefore(newcontent, parent.firstChild);
        }else{
            parent.appendChild(newcontent);
        }
        counterE4 = 1;
        counterE5++;
    }else if(x == 2){
        if(counterW4==null || counterW5==null){
            counterW4 = 1;
            counterW5 = 1;
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(2)">double-click here to delete last entry</button>';
        }
        var i;
        var a;
        if (y < 1000){
            for (i = 0; i < chars.length; i++) {
                if (chars[i][0] == y){
                    a = chars[i][1]; 
                }
            }
        }else{
            for (i = 0; i < weapons.length; i++) {
                if (weapons[i][0] == y){
                    a = weapons[i][1]; 
                }
            }
        }
        newcontent.innerHTML = '<div class="entry"><div class="nr4" style="background-color: #887bad; font-weight: 900; color: #111111;">'+counterW4+'</div><div class="name" style="background-color: #887bad; font-weight: 900; color: #111111;">'+a+'</div><div class="nr5" id="nr5">'+counterW5+'</div></div>';
        if (parent.hasChildNodes()) {
            parent.insertBefore(newcontent, parent.firstChild);
        }else{
            parent.appendChild(newcontent);
        }
        counterW4 = 1;
        counterW5++;
    }else if(x == 3){
        if(counterS4==null || counterS5==null){
            counterS4 = 1;
            counterS5 = 1;
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(3)">double-click here to delete last entry</button>';
        }
        var i;
        var a;
        if (y < 1000){
            for (i = 0; i < chars.length; i++) {
                if (chars[i][0] == y){
                    a = chars[i][1]; 
                }
            }
        }else{
            for (i = 0; i < weapons.length; i++) {
                if (weapons[i][0] == y){
                    a = weapons[i][1]; 
                }
            }
        }
        newcontent.innerHTML = '<div class="entry"><div class="nr4" style="background-color: #887bad; font-weight: 900; color: #111111;">'+counterS4+'</div><div class="name" style="background-color: #887bad; font-weight: 900; color: #111111;">'+a+'</div><div class="nr5" id="nr5">'+counterS5+'</div></div>';
        if (parent.hasChildNodes()) {
            parent.insertBefore(newcontent, parent.firstChild);
        }else{
            parent.appendChild(newcontent);
        }
        counterS4 = 1;
        counterS5++;
    }else if(x == 4){
        if(counterN4==null || counterN5==null){
            counterN4 = 1;
            counterN5 = 1;
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(4)">double-click here to delete last entry</button>';
        }
        var i;
        var a;
        if (y < 1000){
            for (i = 0; i < chars.length; i++) {
                if (chars[i][0] == y){
                    a = chars[i][1]; 
                }
            }
        }else{
            for (i = 0; i < weapons.length; i++) {
                if (weapons[i][0] == y){
                    a = weapons[i][1]; 
                }
            }
        }
        newcontent.innerHTML = '<div class="entry"><div class="nr4" style="background-color: #887bad; font-weight: 900; color: #111111;">'+counterN4+'</div><div class="name" style="background-color: #887bad; font-weight: 900; color: #111111;">'+a+'</div><div class="nr5" id="nr5">'+counterN5+'</div></div>';
        if (parent.hasChildNodes()) {
            parent.insertBefore(newcontent, parent.firstChild);
        }else{
            parent.appendChild(newcontent);
        }
        counterN4 = 1;
        counterN5++;
    }
} 
function addS5(x, y) {
    var parent = document.getElementById("container"+x);
    var drop = document.getElementById("buttonArea2"+x);
    var newcontent = document.createElement('div');
    if(x == 1){
        if(counterE4==null || counterE5==null){
            counterE4 = 1;
            counterE5 = 1;
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(1)">double-click here to delete last entry</button>';
        }
        var i;
        var a;
        if (y < 1000){
            for (i = 0; i < chars.length; i++) {
                if (chars[i][0] == y){
                    a = chars[i][1]; 
                }
            }
        }else{
            for (i = 0; i < weapons.length; i++) {
                if (weapons[i][0] == y){
                    a = weapons[i][1]; 
                }
            }
        }
        newcontent.innerHTML = '<div class="entry"><div class="nr4">'+counterE4+'</div><div class="name" style="background-color: #b6a16d; font-weight: 900; color: #111111;">'+a+'</div><div class="nr5" id="nr5" style="background-color: #b6a16d; font-weight: 900; color: #111111;">'+counterE5+'</div></div>';
        if (parent.hasChildNodes()) {
            parent.insertBefore(newcontent, parent.firstChild);
        }else{
            parent.appendChild(newcontent);
        }
        counterE4++;
        counterE5 = 1;
    }else if(x == 2){
        if(counterW4==null || counterW5==null){
            counterW4 = 1;
            counterW5 = 1;
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(2)">double-click here to delete last entry</button>';
        }
        var i;
        var a;
        if (y < 1000){
            for (i = 0; i < chars.length; i++) {
                if (chars[i][0] == y){
                    a = chars[i][1]; 
                }
            }
        }else{
            for (i = 0; i < weapons.length; i++) {
                if (weapons[i][0] == y){
                    a = weapons[i][1]; 
                }
            }
        }
        newcontent.innerHTML = '<div class="entry"><div class="nr4">'+counterW4+'</div><div class="name" style="background-color: #b6a16d; font-weight: 900; color: #111111;">'+a+'</div><div class="nr5" id="nr5" style="background-color: #b6a16d; font-weight: 900; color: #111111;">'+counterW5+'</div></div>';
        if (parent.hasChildNodes()) {
            parent.insertBefore(newcontent, parent.firstChild);
        }else{
            parent.appendChild(newcontent);
        }
        counterW4++;
        counterW5 = 1;
    }else if(x == 3){
        if(counterS4==null || counterS5==null){
            counterS4 = 1;
            counterS5 = 1;
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(3)">double-click here to delete last entry</button>';
        }
        var i;
        var a;
        if (y < 1000){
            for (i = 0; i < chars.length; i++) {
                if (chars[i][0] == y){
                    a = chars[i][1]; 
                }
            }
        }else{
            for (i = 0; i < weapons.length; i++) {
                if (weapons[i][0] == y){
                    a = weapons[i][1]; 
                }
            }
        }
        newcontent.innerHTML = '<div class="entry"><div class="nr4">'+counterS4+'</div><div class="name" style="background-color: #b6a16d; font-weight: 900; color: #111111;">'+a+'</div><div class="nr5" id="nr5" style="background-color: #b6a16d; font-weight: 900; color: #111111;">'+counterS5+'</div></div>';
        if (parent.hasChildNodes()) {
            parent.insertBefore(newcontent, parent.firstChild);
        }else{
            parent.appendChild(newcontent);
        }
        counterS4++;
        counterS5 = 1;
    }else if(x == 4){
        if(counterN4==null || counterN5==null){
            counterN4 = 1;
            counterN5 = 1;
            drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(4)">double-click here to delete last entry</button>';
        }
        var i;
        var a;
        if (y < 1000){
            for (i = 0; i < chars.length; i++) {
                if (chars[i][0] == y){
                    a = chars[i][1]; 
                }
            }
        }else{
            for (i = 0; i < weapons.length; i++) {
                if (weapons[i][0] == y){
                    a = weapons[i][1]; 
                }
            }
        }
        newcontent.innerHTML = '<div class="entry"><div class="nr4">'+counterN4+'</div><div class="name" style="background-color: #b6a16d; font-weight: 900; color: #111111;">'+a+'</div><div class="nr5" id="nr5" style="background-color: #b6a16d; font-weight: 900; color: #111111;">'+counterN5+'</div></div>';
        if (parent.hasChildNodes()) {
            parent.insertBefore(newcontent, parent.firstChild);
        }else{
            parent.appendChild(newcontent);
        }
        counterN4++;
        counterN5 = 1;
    }                   
}
function drop(x){  
        var parent = document.getElementById("container"+x);
        var buttons = document.getElementById("buttonArea1"+x);
        var drop = document.getElementById("buttonArea2"+x);   
        var deleted;
        var last;
        a = parent.firstElementChild.textContent;
        if(x == 1){
            if(a.includes("3*")){
                a = a.split('3*');
                eventBannerLast--;
                localStorage.removeItem("eventBannerLast");
                localStorage.setItem("eventBannerLast", eventBannerLast);
            }else{
                a = a.match(/[a-zA-Z]+|[0-9]+/g);
                deleted = eventBanner.pop();
                localStorage.removeItem("eventBanner");
                localStorage.setItem("eventBanner", JSON.stringify(eventBanner));
                if(eventBanner.length>0){
                    last = eventBanner[eventBanner.length-1]; 
                    if (last[2]==4){
                        eventBannerLast =deleted[0]-1; 
                        localStorage.removeItem("eventBannerLast");
                        localStorage.setItem("eventBannerLast", eventBannerLast);
                    }else if(last[2]==5){
                        eventBannerLast =deleted[2]-1; 
                        localStorage.removeItem("eventBannerLast");
                        localStorage.setItem("eventBannerLast", eventBannerLast);
                    }else{
                        //kann nicht sein!
                    }
                }else{
                    eventBannerLast =deleted[0]-1; 
                    localStorage.removeItem("eventBannerLast");
                    localStorage.setItem("eventBannerLast", eventBannerLast);
                }
            } 
            parent.removeChild(parent.firstElementChild);
            counterE4 = a[0];
            counterE5 = a[a.length-1];
            if (counterE4 >= 10){
                b3 = buttons.getElementsByClassName("button3")[0];
                b3.className = "sinactive";
            }
            if (counterE5 >= 90){
                b1 = buttons.getElementsByClassName("button1")[0];
                b1.className = "chpinactive";
                b2 = buttons.getElementsByClassName("button2")[0];
                b2.className = "wpinactive";
                b3 = buttons.getElementsByClassName("button3")[0];
                b3.className = "sinactive";
            }
            if (counterE4 < 10 & counterE5 < 90){  
                b3 = buttons.getElementsByClassName("sinactive");
                if(b3.length > 0){b3[0].className = "button3";}
                b1 = buttons.getElementsByClassName("chpinactive");
                if(b1.length > 0){b1[0].className = "button1";}
                b2 = buttons.getElementsByClassName("wpinactive");
                if(b2.length > 0){b2[0].className = "button2";}
            }
            if ((eventBannerLast == 0 || eventBannerLast == null) & eventBanner.length==0){
                drop.removeChild(drop.firstElementChild);
                counterE4 = null;
                counterE5 = null;
            }
        }else if(x == 2){
            if(a.includes("3*")){
                a = a.split('3*');
                weaponBannerLast--;
                localStorage.removeItem("weaponBannerLast");
                localStorage.setItem("weaponBannerLast", weaponBannerLast);
            }else{
                a = a.match(/[a-zA-Z]+|[0-9]+/g);
                deleted = weaponBanner.pop();
                localStorage.removeItem("weaponBanner");
                localStorage.setItem("weaponBanner", JSON.stringify(weaponBanner));
                if(weaponBanner.length>0){
                    last = weaponBanner[weaponBanner.length-1]; 
                    if (last[2]==4){
                        weaponBannerLast =deleted[0]-1; 
                        localStorage.removeItem("weaponBannerLast");
                        localStorage.setItem("weaponBannerLast", weaponBannerLast);
                    }else if(last[2]==5){
                        weaponBannerLast =deleted[2]-1; 
                        localStorage.removeItem("weaponBannerLast");
                        localStorage.setItem("weaponBannerLast", weaponBannerLast);
                    }else{
                        //kann nicht sein!
                    }
                }else{
                    weaponBannerLast =deleted[0]-1; 
                    localStorage.removeItem("weaponBannerLast");
                    localStorage.setItem("weaponBannerLast", weaponBannerLast);
                }
            } 
            parent.removeChild(parent.firstElementChild);
            counterW4 = a[0];
            counterW5 = a[a.length-1];
            if (counterW4 >= 10){
                b3 = buttons.getElementsByClassName("button8")[0];
                b3.className = "sinactive";
            }
            if (counterW5 >= 90){
                b1 = buttons.getElementsByClassName("button6")[0];
                b1.className = "chpinactive";
                b2 = buttons.getElementsByClassName("button7")[0];
                b2.className = "wpinactive";
                b3 = buttons.getElementsByClassName("button8")[0];
                b3.className = "sinactive";
            }
            if (counterW4 < 10 & counterW5 < 80){  
                b3 = buttons.getElementsByClassName("sinactive");
                if(b3.length > 0){b3[0].className = "button8";}
                b1 = buttons.getElementsByClassName("chpinactive");
                if(b1.length > 0){b1[0].className = "button6";}
                b2 = buttons.getElementsByClassName("wpinactive");
                if(b2.length > 0){b2[0].className = "button7";}
            }
            if ((weaponBannerLast == 0 || weaponBannerLast == null) & weaponBanner.length==0){
                drop.removeChild(drop.firstElementChild);
                counterW4 = null;
                counterW5 = null;
            }
        }else if(x == 3){
            if(a.includes("3*")){
                a = a.split('3*');
                standardBannerLast--;
                localStorage.removeItem("standardBannerLast");
                localStorage.setItem("standardBannerLast", standardBannerLast);
            }else{
                a = a.match(/[a-zA-Z]+|[0-9]+/g);
                deleted = standardBanner.pop();
                localStorage.removeItem("standardBanner");
                localStorage.setItem("standardBanner", JSON.stringify(standardBanner));
                if(standardBanner.length>0){
                    last = standardBanner[standardBanner.length-1]; 
                    if (last[2]==4){
                        standardBannerLast =deleted[0]-1; 
                        localStorage.removeItem("standardBannerLast");
                        localStorage.setItem("standardBannerLast", standardBannerLast);
                    }else if(last[2]==5){
                        standardBannerLast =deleted[2]-1; 
                        localStorage.removeItem("standardBannerLast");
                        localStorage.setItem("standardBannerLast", standardBannerLast);
                    }else{
                        //kann nicht sein!
                    }
                }else{
                    standardBannerLast =deleted[0]-1; 
                    localStorage.removeItem("standardBannerLast");
                    localStorage.setItem("standardBannerLast", standardBannerLast);
                }
            } 
            parent.removeChild(parent.firstElementChild);
            counterS4 = a[0];
            counterS5 = a[a.length-1];
            if (counterS4 >= 10){
                b3 = buttons.getElementsByClassName("button13")[0];
                b3.className = "sinactive";
            }
            if (counterS5 >= 90){
                b1 = buttons.getElementsByClassName("button11")[0];
                b1.className = "chpinactive";
                b2 = buttons.getElementsByClassName("button12")[0];
                b2.className = "wpinactive";
                b3 = buttons.getElementsByClassName("button13")[0];
                b3.className = "sinactive";
            }
            if (counterS4 < 10 & counterS5 < 80){  
                b3 = buttons.getElementsByClassName("sinactive");
                if(b3.length > 0){b3[0].className = "button13";}
                b1 = buttons.getElementsByClassName("chpinactive");
                if(b1.length > 0){b1[0].className = "button11";}
                b2 = buttons.getElementsByClassName("wpinactive");
                if(b2.length > 0){b2[0].className = "button12";}
            }
            if ((standardBannerLast == 0 || standardBannerLast == null) & standardBanner.length==0){
                drop.removeChild(drop.firstElementChild);
                counterS4 = null;
                counterS5 = null;
            }
        }else if(x == 4){
            if(a.includes("3*")){
                a = a.split('3*');
                newbieBannerLast--;
                localStorage.removeItem("newbieBannerLast");
                localStorage.setItem("newbieBannerLast", newbieBannerLast);
            }else{
                a = a.match(/[a-zA-Z]+|[0-9]+/g);
                deleted = newbieBanner.pop();
                localStorage.removeItem("newbieBanner");
                localStorage.setItem("newbieBanner", JSON.stringify(newbieBanner));
                if(newbieBanner.length>0){
                    last = newbieBanner[newbieBanner.length-1]; 
                    if (last[2]==4){
                        newbieBannerLast =deleted[0]-1; 
                        localStorage.removeItem("newbieBannerLast");
                        localStorage.setItem("newbieBannerLast", newbieBannerLast);
                    }else if(last[2]==5){
                        newbieBannerLast =deleted[2]-1; 
                        localStorage.removeItem("newbieBannerLast");
                        localStorage.setItem("newbieBannerLast", newbieBannerLast);
                    }else{
                        //kann nicht sein!
                    }
                }else{
                    newbieBannerLast =deleted[0]-1; 
                    localStorage.removeItem("newbieBannerLast");
                    localStorage.setItem("newbieBannerLast", newbieBannerLast);
                }
            } 
            parent.removeChild(parent.firstElementChild);
            counterN4 = a[0];
            counterN5 = a[a.length-1];
            if (counterN4 >= 10){
                b3 = buttons.getElementsByClassName("button18")[0];
                b3.className = "sinactive";
            }
            if (counterN5 >= 90){
                b1 = buttons.getElementsByClassName("button16")[0];
                b1.className = "chpinactive";
                b2 = buttons.getElementsByClassName("button17")[0];
                b2.className = "wpinactive";
                b3 = buttons.getElementsByClassName("button18")[0];
                b3.className = "sinactive";
            }
            if (counterN4 < 10 & counterN5 < 80){  
                b3 = buttons.getElementsByClassName("sinactive");
                if(b3.length > 0){b3[0].className = "button18";}
                b1 = buttons.getElementsByClassName("chpinactive");
                if(b1.length > 0){b1[0].className = "button16";}
                b2 = buttons.getElementsByClassName("wpinactive");
                if(b2.length > 0){b2[0].className = "button17";}
            }
            if ((newbieBannerLast == 0 || newbieBannerLast == null) & newbieBanner.length==0){
                drop.removeChild(drop.firstElementChild);
                counterN4 = null;
                counterN5 = null;
            }
        }
        changes = 1;
        localStorage.removeItem("changes");
        localStorage.setItem("changes", changes);
        updown();
}
function parseStorage(x){
    var drop = document.getElementById("buttonArea2"+x);
    if(x == 1){    
        var jason = JSON.parse(localStorage.getItem("eventBanner"));      
        eventBanner.length = 0;
        if(jason!=null){      
            for (var k = 0; k< jason.length; k++) {    
                eventBanner[k] = jason[k];
            }
            for (var i = 0; i < eventBanner.length; i++) {
                if(counterE4==null || counterE5==null){
                    counterE4 = 1;
                    counterE5 = 1;
                    drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(1)">double-click here to delete last entry</button>';
                }
                while(counterE4 < eventBanner[i][0]){
                    addS3(1);
                }
                if(eventBanner[i][2] == 4){
                    addS4(1,eventBanner[i][1]);
                }else if(eventBanner[i][2] == 5){
                    addS5(1,eventBanner[i][1]);
                }              
            }
        }
        eventBannerLast = localStorage.getItem("eventBannerLast");  
        if (eventBannerLast > 0){
            var j;
            for (j = 0; j < eventBannerLast; j++){
                addS3(1);
            }
        }
    }else if(x == 2){       
        var jason2 = JSON.parse(localStorage.getItem("weaponBanner"));
        weaponBanner.length = 0;
        if(jason2!=null){   
            for (var k = 0; k< jason2.length; k++) {
                weaponBanner[k] = jason2[k];
            }
            var i;
            for (i = 0; i < weaponBanner.length; i++) {
                if(counterW4==null || counterW5==null){
                    counterW4 = 1;
                    counterW5 = 1;
                    drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(2)">double-click here to delete last entry</button>';
                }
                while(counterW4 < weaponBanner[i][0]){
                    addS3(2);
                }
                if(weaponBanner[i][2] == 4){
                    addS4(2,weaponBanner[i][1]);
                }else if(weaponBanner[i][2] == 5){
                    addS5(2,weaponBanner[i][1]);
                } 
            }             
        }
        weaponBannerLast = localStorage.getItem("weaponBannerLast");
        if (weaponBannerLast > 0){
            var j;
            for (j = 0; j < weaponBannerLast; j++){
                addS3(2);
            }
        }
    }else if(x == 3){       
        var jason3 = JSON.parse(localStorage.getItem("standardBanner"));
        standardBanner.length = 0;
        if(jason3!=null){ 
            for (var k = 0; k< jason3.length; k++) {
                standardBanner[k] = jason3[k];
            }
            
            for (var i = 0; i < standardBanner.length; i++) {
                if(counterS4==null || counterS5==null){
                    counterS4 = 1;
                    counterS5 = 1;
                    drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(3)">double-click here to delete last entry</button>';
                }
                while(counterS4 < standardBanner[i][0]){
                    addS3(3);
                }
                if(standardBanner[i][2] == 4){
                    addS4(3,standardBanner[i][1]);
                }else if(standardBanner[i][2] == 5){
                    addS5(3,standardBanner[i][1]);
                }
            }
        }
        standardBannerLast = localStorage.getItem("standardBannerLast");
        if (standardBannerLast > 0){
            var j;
            for (j = 0; j < standardBannerLast; j++){
                addS3(3);
            }
        }
    }else if(x == 4){       
        var jason4 = JSON.parse(localStorage.getItem("newbieBanner"));
        newbieBanner.length = 0;
        if(jason4!=null){ 
            for (var k = 0; k< jason4.length; k++) {
                newbieBanner[k] = jason4[k];
            }
            var i;
            for (i = 0; i < newbieBanner.length; i++) {
                if(counterN4==null || counterN5==null){
                    counterN4 = 1;
                    counterN5 = 1;
                    drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(4)">double-click here to delete last entry</button>';
                }
                while(counterN4 < newbieBanner[i][0]){
                    addS3(4);
                }
                if(newbieBanner[i][2] == 4){
                    addS4(4,newbieBanner[i][1]);
                }else if(newbieBanner[i][2] == 5){
                    addS5(4,newbieBanner[i][1]);
                } 
            }             
        }
        newbieBannerLast = localStorage.getItem("newbieBannerLast");
        if (newbieBannerLast > 0){
            var j;
            for (j = 0; j < newbieBannerLast; j++){
                addS3(4);
            }
        }
    }else{}
}

function parseFreeChar(){	
	var jason = JSON.parse(localStorage.getItem("freeChars"));
    if(jason!=null){ 
		
		for (var k = 0; k< jason.length; k++) {    
                freeChars[k] = jason[k];
				addCharS(freeChars[k][0],freeChars[k][1],freeChars[k][2],freeChars[k][3]);
        }
	}else{
		//Amber
		addChar(5,105,1,1);
		//Kaeya
		addChar(5,13,1,1);
		//Lisa
		addChar(5,89,1,1);
		//Barbara
		addChar(5,93,0,2);
		//Xiangling
		addChar(5,57,0,1);
		//Fischl
		addChar(5,113,0,1);
		//Xinyan
		addChar(5,34,0,1);
		//Beidou
		addChar(5,41,0,1);
		//Ningguang
		addChar(5,73,0,1);
		//Xingqiu
		addChar(5,21,0,1);
		//Chongyun
		addChar(5,37,0,1);
		//Diona
		addChar(5,109,0,1);
	}
}
function parseFreeWeapons(){	
	var jason = JSON.parse(localStorage.getItem("freeWeapons"));
    if(jason!=null){ 
		
		for (var k = 0; k< jason.length; k++) {    
                freeWeapons[k] = jason[k];
				addWeaponS(freeWeapons[k][0],freeWeapons[k][1],freeWeapons[k][2],freeWeapons[k][3]);
        }
	}else{
		//craft cercent/compound
		addWeapon(6,136,0,99);
		addWeapon(6,137,0,99);
		addWeapon(6,138,0,99);
		addWeapon(6,139,0,99);
		addWeapon(6,140,0,99);
		//craft prototype
		addWeapon(6,146,0,99);
		addWeapon(6,147,0,99);
		addWeapon(6,148,0,99);
		addWeapon(6,149,0,99);
		addWeapon(6,150,0,99);	
		//craft berg
		addWeapon(6,122,0,99);
		addWeapon(6,123,0,99);
		addWeapon(6,124,0,99);	
		//event
		addWeapon(6,126,0,5);
		addWeapon(6,129,0,5);
		addWeapon(6,130,0,5);	
		//ps4
		addWeapon(6,176,0,1);
	}
}
function parseShopWeapons(){	
	var jason = JSON.parse(localStorage.getItem("shopWeapons"));
    if(jason!=null){ 
		
		for (var k = 0; k< jason.length; k++) {    
                shopWeapons[k] = jason[k];
				addWeaponS(shopWeapons[k][0],shopWeapons[k][1],shopWeapons[k][2],shopWeapons[k][3]);
        }
	}else{
		//shop blackcliff
		addWeapon(8,116,0,99);
		addWeapon(8,117,0,99);
		addWeapon(8,118,0,99);
		addWeapon(8,119,0,99);
		addWeapon(8,120,0,99);
		//shop royal
		addWeapon(8,151,0,99);
		addWeapon(8,152,0,99);
		addWeapon(8,153,0,99);
		addWeapon(8,154,0,99);
		addWeapon(8,155,0,99);	
		//shop bp
		addWeapon(8,111,0,99);
		addWeapon(8,112,0,99);
		addWeapon(8,113,0,99);
		addWeapon(8,114,0,99);
		addWeapon(8,115,0,99);	
	}
}
function parseShopChar(){	
	var jason = JSON.parse(localStorage.getItem("shopChars"));
    if(jason!=null){ 
		
		for (var k = 0; k< jason.length; k++) {    
                shopChars[k] = jason[k];
				addCharS(shopChars[k][0],shopChars[k][1],shopChars[k][2],shopChars[k][3]);
        }
	}else{
		//Amber
		addChar(7,105,0,2);
		//Barbara
		addChar(7,93,0,2);
		//Beidou
		addChar(7,41,0,1);	
		//Bennett
		addChar(7,9,0,1);	
		//Fischl
		addChar(7,113,0,1);		
		//Kaeya
		addChar(7,13,0,2);
		//Lisa
		addChar(7,89,0,2);		
		//Ningguang
		addChar(7,73,0,1);	
		//Noelle
		addChar(7,25,0,1);	
		//Razor
		addChar(7,42,0,1);
		//Xiangling
		addChar(7,57,0,1);		
		//Xingqiu
		addChar(7,21,0,1);	
	}
}
function addChar(x, y, z, n){
	var par;
	var newcontent;	
	if(x==5){
		freeChars.push([x, y, z, n]);
		localStorage.removeItem("freeChars");
		localStorage.setItem("freeChars", JSON.stringify(freeChars));
		if(z > 0){
			par = document.getElementById("container"+x);
			newcontent = document.createElement('div');
			newcontent.innerHTML = '<div class="entry2"><div class="name2" style=" color: #ddd;">'+chars[y][1]+'</div><div class="bempty1" id="b1" onclick="min('+x+','+y+','+z+','+n+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+z+'</div><div class="bempty2" id="b2" onclick="max('+x+','+y+','+z+','+n+')"></div></div>';
		}else{
			par = document.getElementById("container"+x);
			newcontent = document.createElement('div');
			newcontent.innerHTML = '<div class="entry2hide"><div class="name2" style=" color: #ddd;">'+chars[y][1]+'</div><div class="bempty1" id="b1" onclick="min('+x+','+y+','+z+','+n+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+z+'</div><div class="bempty2" id="b2" onclick="max('+x+','+y+','+z+','+n+')"></div></div>';
		}
		par.appendChild(newcontent);
	}else if(x==7){
		shopChars.push([x, y, z, n]);
		localStorage.removeItem("shopChars");
		localStorage.setItem("shopChars", JSON.stringify(shopChars));
		if(z > 0){
			par = document.getElementById("container"+x);
			newcontent = document.createElement('div');
			newcontent.innerHTML = '<div class="entry2"><div class="name2" style=" color: #ddd;">'+chars[y][1]+'</div><div class="bempty1" id="b1" onclick="min('+x+','+y+','+z+','+n+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+z+'</div><div class="bempty2" id="b2" onclick="max('+x+','+y+','+z+','+n+')"></div></div>';
		}else{
			par = document.getElementById("container"+x);
			newcontent = document.createElement('div');
			newcontent.innerHTML = '<div class="entry2hide"><div class="name2" style=" color: #ddd;">'+chars[y][1]+'</div><div class="bempty1" id="b1" onclick="min('+x+','+y+','+z+','+n+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+z+'</div><div class="bempty2" id="b2" onclick="max('+x+','+y+','+z+','+n+')"></div></div>';
		}
		par.appendChild(newcontent);	
	}	
}//blah
function addWeapon(x, y, z, n){
	var par;
	var newcontent;	
	if(x==6){
		freeWeapons.push([x, y, z, n]);
		localStorage.removeItem("freeWeapons");
		localStorage.setItem("freeWeapons", JSON.stringify(freeWeapons));
		if(z > 0){
			par = document.getElementById("container"+x);
			newcontent = document.createElement('div');
			newcontent.innerHTML = '<div class="entry2"><div class="name2" style=" color: #ddd;">'+weapons[y][1]+'</div><div class="bempty1" id="b1" onclick="min('+x+','+y+','+z+','+n+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+z+'</div><div class="bempty2" id="b2" onclick="max('+x+','+y+','+z+','+n+')"></div></div>';
		}else{
			par = document.getElementById("container"+x);
			newcontent = document.createElement('div');
			newcontent.innerHTML = '<div class="entry2hide"><div class="name2" style=" color: #ddd;">'+weapons[y][1]+'</div><div class="bempty1" id="b1" onclick="min('+x+','+y+','+z+','+n+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+z+'</div><div class="bempty2" id="b2" onclick="max('+x+','+y+','+z+','+n+')"></div></div>';
		}
		par.appendChild(newcontent);
	}else if(x==8){
		shopWeapons.push([x, y, z, n]);
		localStorage.removeItem("shopWeapons");
		localStorage.setItem("shopWeapons", JSON.stringify(shopWeapons));
		if(z > 0){
			par = document.getElementById("container"+x);
			newcontent = document.createElement('div');
			newcontent.innerHTML = '<div class="entry2"><div class="name2" style=" color: #ddd;">'+weapons[y][1]+'</div><div class="bempty1" id="b1" onclick="min('+x+','+y+','+z+','+n+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+z+'</div><div class="bempty2" id="b2" onclick="max('+x+','+y+','+z+','+n+')"></div></div>';
		}else{
			par = document.getElementById("container"+x);
			newcontent = document.createElement('div');
			newcontent.innerHTML = '<div class="entry2hide"><div class="name2" style=" color: #ddd;">'+weapons[y][1]+'</div><div class="bempty1" id="b1" onclick="min('+x+','+y+','+z+','+n+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+z+'</div><div class="bempty2" id="b2" onclick="max('+x+','+y+','+z+','+n+')"></div></div>';
		}
		par.appendChild(newcontent);	
	}	
}
function addCharS(x, y, z, n){
	var parent = document.getElementById("container"+x);
	var newcontent = document.createElement('div');
	if(z > 0){
	newcontent.innerHTML = '<div class="entry2"><div class="name2" style=" color: #ddd;">'+chars[y][1]+'</div><div class="bempty1" id="b1"></div><div class="nr" id="nr" style=" color: #ddd;">'+z+'</div><div class="bempty2" id="b2"></div></div>';
    }else{
	newcontent.innerHTML = '<div class="entry2hide"><div class="name2" style=" color: #ddd;">'+chars[y][1]+'</div><div class="bempty1" id="b1"></div><div class="nr" id="nr" style=" color: #ddd;">'+z+'</div><div class="bempty2" id="b2"></div></div>';
	}
	parent.appendChild(newcontent);
}
function addWeaponS(x, y, z, n){
	var parent = document.getElementById("container"+x);
	var newcontent = document.createElement('div');
	if(z > 0){
	newcontent.innerHTML = '<div class="entry2"><div class="name2" style=" color: #ddd;">'+weapons[y][1]+'</div><div class="bempty1" id="b1"></div><div class="nr" id="nr" style=" color: #ddd;">'+z+'</div><div class="bempty2" id="b2"></div></div>';
    }else{
	newcontent.innerHTML = '<div class="entry2hide"><div class="name2" style=" color: #ddd;">'+weapons[y][1]+'</div><div class="bempty1" id="b1"></div><div class="nr" id="nr" style=" color: #ddd;">'+z+'</div><div class="bempty2" id="b2"></div></div>';
	}
	parent.appendChild(newcontent);
}
function editChar(x){
	var container = document.getElementById("container"+x);
	var newcontent;
	var y = x+10;
	var buttons = document.getElementById("buttonArea"+y);
	buttons.innerHTML = '<button onclick="accept('+x+')" id="freeChar" class="ok"></button><button onclick="abort('+x+')" id="freeChar" class="notok"></button> ';
	container.innerHTML = "";
	if(x==5){
	var jason = JSON.parse(localStorage.getItem("freeChars"));
	for (var k = 0; k< jason.length; k++) {
			newcontent = document.createElement('div');  		
			freeChars[k] = jason[k];
			if(freeChars[k][3]==freeChars[k][2]){
				newcontent.innerHTML = '<div class="entry2"><div class="name2" style=" color: #ddd;">'+chars[freeChars[k][1]][1]+'</div><div class="b1" id="b1" onclick="min('+freeChars[k][0]+','+freeChars[k][1]+','+freeChars[k][2]+','+freeChars[k][3]+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+freeChars[k][2]+'</div><div class="bempty2" id="b2"></div></div>';		
			}else if(freeChars[k][2]==0){
				newcontent.innerHTML = '<div class="entry2"><div class="name2" style=" color: #ddd;">'+chars[freeChars[k][1]][1]+'</div><div class="bempty1" id="b1"></div><div class="nr" id="nr" style=" color: #ddd;">'+freeChars[k][2]+'</div><div class="b2" id="b2" onclick="max('+freeChars[k][0]+','+freeChars[k][1]+','+freeChars[k][2]+','+freeChars[k][3]+')"></div></div>';		
			}else{
				newcontent.innerHTML = '<div class="entry2"><div class="name2" style=" color: #ddd;">'+chars[freeChars[k][1]][1]+'</div><div class="b1" id="b1" onclick="min('+freeChars[k][0]+','+freeChars[k][1]+','+freeChars[k][2]+','+freeChars[k][3]+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+freeChars[k][2]+'</div><div class="b2" id="b2" onclick="max('+freeChars[k][0]+','+freeChars[k][1]+','+freeChars[k][2]+','+freeChars[k][3]+')"></div></div>';			
			}
		container.appendChild(newcontent);
       }	
	}else if(x==7){
	var jason = JSON.parse(localStorage.getItem("shopChars"));
	for (var k = 0; k< jason.length; k++) {
			newcontent = document.createElement('div');  		
			shopChars[k] = jason[k];
			if(shopChars[k][3]==shopChars[k][2]){
				newcontent.innerHTML = '<div class="entry2"><div class="name2" style=" color: #ddd;">'+chars[shopChars[k][1]][1]+'</div><div class="b1" id="b1" onclick="min('+shopChars[k][0]+','+shopChars[k][1]+','+shopChars[k][2]+','+shopChars[k][3]+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+shopChars[k][2]+'</div><div class="bempty2" id="b2"></div></div>';		
			}else if(shopChars[k][2]==0){
				newcontent.innerHTML = '<div class="entry2"><div class="name2" style=" color: #ddd;">'+chars[shopChars[k][1]][1]+'</div><div class="bempty1" id="b1"></div><div class="nr" id="nr" style=" color: #ddd;">'+shopChars[k][2]+'</div><div class="b2" id="b2" onclick="max('+shopChars[k][0]+','+shopChars[k][1]+','+shopChars[k][2]+','+shopChars[k][3]+')"></div></div>';		
			}else{
				newcontent.innerHTML = '<div class="entry2"><div class="name2" style=" color: #ddd;">'+chars[shopChars[k][1]][1]+'</div><div class="b1" id="b1" onclick="min('+shopChars[k][0]+','+shopChars[k][1]+','+shopChars[k][2]+','+shopChars[k][3]+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+shopChars[k][2]+'</div><div class="b2" id="b2" onclick="max('+shopChars[k][0]+','+shopChars[k][1]+','+shopChars[k][2]+','+shopChars[k][3]+')"></div></div>';			
			}
		container.appendChild(newcontent);
       }	
	}
}
function editWeapons(x){
	var container = document.getElementById("container"+x);
	var newcontent;
	var y = x+10;
	var buttons = document.getElementById("buttonArea"+y);
	buttons.innerHTML = '<button onclick="accept('+x+')" id="freeChar" class="ok"></button><button onclick="abort('+x+')" id="freeChar" class="notok"></button> ';
	container.innerHTML = "";
	if(x==6){
	var jason = JSON.parse(localStorage.getItem("freeWeapons"));
	for (var k = 0; k< jason.length; k++) {
			var id =  freeWeapons[k][1] + 1000;
			newcontent = document.createElement('div');  		
			freeWeapons[k] = jason[k];
			if(freeWeapons[k][3]==freeWeapons[k][2]){
				newcontent.innerHTML = '<div class="entry2"><div class="name2" style=" color: #ddd;">'+weapons[freeWeapons[k][1]][1]+'</div><div class="b1" id="b1" onclick="min('+freeWeapons[k][0]+','+id+','+freeWeapons[k][2]+','+freeWeapons[k][3]+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+freeWeapons[k][2]+'</div><div class="bempty2" id="b2"></div></div>';		
			}else if(freeWeapons[k][2]==0){
				newcontent.innerHTML = '<div class="entry2"><div class="name2" style=" color: #ddd;">'+weapons[freeWeapons[k][1]][1]+'</div><div class="bempty1" id="b1"></div><div class="nr" id="nr" style=" color: #ddd;">'+freeWeapons[k][2]+'</div><div class="b2" id="b2" onclick="max('+freeWeapons[k][0]+','+id+','+freeWeapons[k][2]+','+freeWeapons[k][3]+')"></div></div>';		
			}else{
				newcontent.innerHTML = '<div class="entry2"><div class="name2" style=" color: #ddd;">'+weapons[freeWeapons[k][1]][1]+'</div><div class="b1" id="b1" onclick="min('+freeWeapons[k][0]+','+id+','+freeWeapons[k][2]+','+freeWeapons[k][3]+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+freeWeapons[k][2]+'</div><div class="b2" id="b2" onclick="max('+freeWeapons[k][0]+','+id+','+freeWeapons[k][2]+','+freeWeapons[k][3]+')"></div></div>';			
			}
		container.appendChild(newcontent);
       }	
	}else if(x==8){
	var jason = JSON.parse(localStorage.getItem("shopWeapons"));
	for (var k = 0; k< jason.length; k++) {
			var id =  shopWeapons[k][1] + 1000;
			newcontent = document.createElement('div');  		
			shopWeapons[k] = jason[k];
			if(shopWeapons[k][3]==shopWeapons[k][2]){
				newcontent.innerHTML = '<div class="entry2"><div class="name2" style=" color: #ddd;">'+weapons[shopWeapons[k][1]][1]+'</div><div class="b1" id="b1" onclick="min('+shopWeapons[k][0]+','+id+','+shopWeapons[k][2]+','+shopWeapons[k][3]+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+shopWeapons[k][2]+'</div><div class="bempty2" id="b2"></div></div>';		
			}else if(shopWeapons[k][2]==0){
				newcontent.innerHTML = '<div class="entry2"><div class="name2" style=" color: #ddd;">'+weapons[shopWeapons[k][1]][1]+'</div><div class="bempty1" id="b1"></div><div class="nr" id="nr" style=" color: #ddd;">'+shopWeapons[k][2]+'</div><div class="b2" id="b2" onclick="max('+shopWeapons[k][0]+','+id+','+shopWeapons[k][2]+','+shopWeapons[k][3]+')"></div></div>';		
			}else{
				newcontent.innerHTML = '<div class="entry2"><div class="name2" style=" color: #ddd;">'+weapons[shopWeapons[k][1]][1]+'</div><div class="b1" id="b1" onclick="min('+shopWeapons[k][0]+','+id+','+shopWeapons[k][2]+','+shopWeapons[k][3]+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+shopWeapons[k][2]+'</div><div class="b2" id="b2" onclick="max('+shopWeapons[k][0]+','+id+','+shopWeapons[k][2]+','+shopWeapons[k][3]+')"></div></div>';			
			}
		container.appendChild(newcontent);
       }	
	}
}
function max(x,y,z,n){
	var container = document.getElementById("container"+x);
	var demo = document.getElementById("demo");
	
	x = x + 10;
	var name;
	var buttonAr = document.getElementById("buttonArea"+x);
	demo.innerHTML= "blah3"+buttonAr.getElementsByClassname("ok");
	if(buttonAr.getElementsByClassname("ok").length != 0){
		
		var arr = container.getElementsByClassname("entry2");
		if (y<1000){
			for (var i = 0; i<arr.length; i++){
				name = arr[i].textContent.match(/[a-zA-Z]+|[0-9]+/g);
				if (name[0] == chars[y][1]){
					x = x-10;
						if(z == n-1){
							z++;	
							arr[i].innerHTML = '<div class="name2" style=" color: #ddd;">'+chars[y][1]+'</div><div class="b1" id="b1" onclick="min('+x+','+y+','+z+','+n+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+z+'</div><div class="bempty2" id="b2"></div>';			
						}else{
						z++;
						arr[i].innerHTML = '<div class="name2" style=" color: #ddd;">'+chars[y][1]+'</div><div class="b1" id="b1" onclick="min('+x+','+y+','+z+','+n+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+z+'</div><div class="b2" id="b2" onclick="max('+x+','+y+','+z+','+n+')"></div>';			
						}				
					break;
				}
			}
		}else if (y>=1000){
			y = y-1000;
			for (var i = 0; i<arr.length; i++){
				name = arr[i].textContent.match(/[a-z A-Z]+|[0-9]+/g);
				if (name[0] == weapons[y][1]){
					x = x-10;
						if(z == n-1){
							z++;	
							arr[i].innerHTML = '<div class="name2" style=" color: #ddd;">'+weapons[y][1]+'</div><div class="b1" id="b1" onclick="min('+x+','+(y+1000)+','+z+','+n+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+z+'</div><div class="bempty2" id="b2"></div>';			
						}else{
						z++;
						arr[i].innerHTML = '<div class="name2" style=" color: #ddd;">'+weapons[y][1]+'</div><div class="b1" id="b1" onclick="min('+x+','+(y+1000)+','+z+','+n+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+z+'</div><div class="b2" id="b2" onclick="max('+x+','+(y+1000)+','+z+','+n+')"></div>';			
						}				
					break;
				}
			}			
		}	
	}
}
function min(x,y,z,n){
	var container = document.getElementById("container"+x);
	x = x + 10;
	var name;
	var buttonAr = document.getElementById("buttonArea"+x);
	if(buttonAr.getElementsByClassname("ok").length != 0){
		var arr = container.getElementsByClassname("entry2");
		if (y<1000){				
			for (var i = 0; i<arr.length; i++){
				name = arr[i].textContent.match(/[a-zA-Z]+|[0-9]+/g);
				if (name[0] == chars[y][1]){
					x = x-10;
					if(z==1){
						z--;
						arr[i].innerHTML = '<div class="name2" style=" color: #ddd;">'+chars[y][1]+'</div><div class="bempty1" id="b1"></div><div class="nr" id="nr" style=" color: #ddd;">'+z+'</div><div class="b2" id="b2" onclick="max('+x+','+y+','+z+','+n+')"></div>';			
					}else{
						z--;
						arr[i].innerHTML = '<div class="name2" style=" color: #ddd;">'+chars[y][1]+'</div><div class="b1" id="b1" onclick="min('+x+','+y+','+z+','+n+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+z+'</div><div class="b2" id="b2" onclick="max('+x+','+y+','+z+','+n+')"></div>';			
					}				
				break;
				}
			}
		}else if (y>=1000){
			y = y-1000;
			for (var i = 0; i<arr.length; i++){
				name = arr[i].textContent.match(/[a-z A-Z]+|[0-9]+/g);
				if (name[0] == weapons[y][1]){
					x = x-10;
					if(z==1){
						z--;
						arr[i].innerHTML = '<div class="name2" style=" color: #ddd;">'+weapons[y][1]+'</div><div class="bempty1" id="b1"></div><div class="nr" id="nr" style=" color: #ddd;">'+z+'</div><div class="b2" id="b2" onclick="max('+x+','+(y+1000)+','+z+','+n+')"></div>';			
					}else{
						z--;
						arr[i].innerHTML = '<div class="name2" style=" color: #ddd;">'+weapons[y][1]+'</div><div class="b1" id="b1" onclick="min('+x+','+(y+1000)+','+z+','+n+')"></div><div class="nr" id="nr" style=" color: #ddd;">'+z+'</div><div class="b2" id="b2" onclick="max('+x+','+(y+1000)+','+z+','+n+')"></div>';			
					}				
				break;
				}
			}			
		}
	}		
}
function accept(x){
	var container = document.getElementById("container"+x);
	var y = x+10;
	var buttons = document.getElementById("buttonArea"+y);
	if(x==5){
		freeChars.length = 0;
		buttons.innerHTML = '<button onclick="editChar(' +x+ ')" id="freeChar" class="freeChar"></button>'; 
		var nr = container.getElementsByClassName("entry2");
		var jason = JSON.parse(localStorage.getItem("freeChars"))
		for (var k = 0; k< jason.length; k++) {
			var a = nr[k].textContent.match(/[a-zA-Z]+|[0-9]+/g);
			freeChars.push([jason[k][0],jason[k][1],a[1],jason[k][3]]);	
		}
		localStorage.removeItem("freeChars");
        localStorage.setItem("freeChars", JSON.stringify(freeChars));
		container.innerHTML = "";
		parseFreeChar();
	}else if(x==7){
		shopChars.length = 0;
		buttons.innerHTML = '<button onclick="editChar(' +x+ ')" id="freeChar" class="freeChar"></button>'; 
		var nr = container.getElementsByClassName("entry2");
		var jason = JSON.parse(localStorage.getItem("shopChars"))
		for (var k = 0; k< jason.length; k++) {
			var a = nr[k].textContent.match(/[a-zA-Z]+|[0-9]+/g);
			shopChars.push([jason[k][0],jason[k][1],a[1],jason[k][3]]);	
		}
		localStorage.removeItem("shopChars");
        localStorage.setItem("shopChars", JSON.stringify(shopChars));
		container.innerHTML = "";
		parseShopChar();
	}else if(x==6){
		freeWeapons.length = 0;
		buttons.innerHTML = '<button onclick="editWeapons(' +x+ ')" id="freeChar" class="freeChar"></button>'; 
		var nr = container.getElementsByClassName("entry2");
		var jason = JSON.parse(localStorage.getItem("freeWeapons"))
		for (var k = 0; k< jason.length; k++) {
			var a = nr[k].textContent.match(/[a-z A-Z]+|[0-9]+/g);
			freeWeapons.push([jason[k][0],jason[k][1],a[1],jason[k][3]]);	
		}
		localStorage.removeItem("freeWeapons");
        localStorage.setItem("freeWeapons", JSON.stringify(freeWeapons));
		container.innerHTML = "";
		parseFreeWeapons();
	}else if(x==8){
		shopWeapons.length = 0;
		buttons.innerHTML = '<button onclick="editWeapons(' +x+ ')" id="freeChar" class="freeChar"></button>'; 
		var nr = container.getElementsByClassName("entry2");
		var jason = JSON.parse(localStorage.getItem("shopWeapons"))
		for (var k = 0; k< jason.length; k++) {
			var a = nr[k].textContent.match(/[a-z A-Z]+|[0-9]+/g);
			shopWeapons.push([jason[k][0],jason[k][1],a[1],jason[k][3]]);	
		}
		localStorage.removeItem("shopWeapons");
        localStorage.setItem("shopWeapons", JSON.stringify(shopWeapons));
		container.innerHTML = "";
		parseShopWeapons();
	}
}
function abort(x){
	var container = document.getElementById("container"+x);
	var y = x + 10;
	var buttons = document.getElementById("buttonArea"+y);	
	if(x==5){
	container.innerHTML = "";
	buttons.innerHTML = '<button onclick="editChar(' +x+ ')" id="freeChar" class="freeChar"></button>'; 
	parseFreeChar();	
	}else if(x==7){
	container.innerHTML = "";
	buttons.innerHTML = '<button onclick="editChar(' +x+ ')" id="freeChar" class="freeChar"></button>'; 
	parseShopChar();	
	}else if(x==6){
	container.innerHTML = "";
	buttons.innerHTML = '<button onclick="editWeapons(' +x+ ')" id="freeChar" class="freeChar"></button>'; 
	parseFreeWeapons();	
	}else if(x==8){
	container.innerHTML = "";
	buttons.innerHTML = '<button onclick="editWeapons(' +x+ ')" id="freeChar" class="freeChar"></button>'; 
	parseShopWeapons();	
	}
	
}