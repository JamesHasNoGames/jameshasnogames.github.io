var eventBanner = [];
var eventBannerLast = 0;
var weaponBanner = [];
var weaponBannerLast = 0;
var standardBanner = [];
var standardBannerLast = 0;
var counterW4;
var counterW5;
var changes;

//Buttons onclick auf +
function addStuff(y) {
    var x = document.getElementById("buttonArea1"+y);
    if(counterW4 >= 10){
        x.innerHTML = '<div id ="buttons5" class ="buttons5"><button class="button1" id="button1" onclick="dropList(1)"></button><button class="button2" id="button2"></button><button class="sinactive" id="button3" onclick="add3(1)"></button><button class="button4" id="button4" onclick="dropList(4)"></button><button class="wginactive" id="button5"></button></div>';
    }else if(counterW5 >= 90){
        x.innerHTML = '<div id ="buttons5" class ="buttons5"><button class="chpinactive" id="button1" onclick="dropList(1)"></button><button class="wpinactive" id="button2"></button><button class="sinactive" id="button3" onclick="add3(1)"></button><button class="button4" id="button4" onclick="dropList(4)"></button><button class="wginactive" id="button5"></button></div>';
    }else{
        x.innerHTML = '<div id ="buttons5" class ="buttons5"><button class="button1" id="button1" onclick="dropList(1)"></button><button class="button2" id="button2"></button><button class="button3" id="button3" onclick="add3(1)"></button><button class="button4" id="button4" onclick="dropList(4)"></button><button class="wginactive" id="button5"></button></div>';
    }
}

//Lädt die Geschichte aus LocalSpeicher und die Dropdowns onload
function prepare(){
    loadDropdowns();
    parseStorage(1);
}

//Lädt dropdowns, ein Attribut muss übergeben werden
function loadDropdowns() {
    a = document.getElementById("myDropdown1");  
    d = document.getElementById("myDropdown4");  
    var i;
    var j;
    var charsnew1 = [];
    var charsnew4 = [];
    for (i = 0; i < chars.length; i++) {
        if (chars[i][1]!='' & chars[i][5]=='5' & (chars[i][65]=='es'||chars[i][65]=='e')){
        charsnew4.push([chars[i][0],chars[i][1]]); 
        }
    }
    charsnew4 = charsnew4.sort((a, b) => a[1].localeCompare(b[1]));
    for (j = 0; j < charsnew4.length; j++) {
        d.innerHTML = d.innerHTML + '<a href="#" onclick = "add5(1,'+charsnew4[j][0]+')">'+charsnew4[j][1]+'</a>';
    }
    for (i = 0; i < chars.length; i++) {
        if (chars[i][1]!='' & chars[i][5]=='4' & (chars[i][65]=='es'||chars[i][65]=='e')){
        charsnew1.push([chars[i][0],chars[i][1]]); 
        }
    }
    charsnew1 = charsnew1.sort((a, b) => a[1].localeCompare(b[1]));
    for (j = 0; j < charsnew4.length; j++) {
        a.innerHTML = a.innerHTML + '<a href="#" onclick = "add4(1,'+charsnew1[j][0]+')">'+charsnew1[j][1]+'</a>';
    }

}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropList(x) {
    d = document.getElementById("myDropdown"+x);   
    d.classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
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
}
function add3(x) {   
    var parent = document.getElementById("container"+x);
    var buttons = document.getElementById("buttonArea1"+x);
    var drop = document.getElementById("buttonArea2"+x);
    var newcontent = document.createElement('div');
    
    if(counterW4==null || counterW5==null){
        counterW4 = 1;
        counterW5 = 1;      
        drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(1)">double-click here to delete last entry</button>';
    }
    if(counterW4>=10){
        //alert('wtf');
    }else if(counterW5>=90){
        //alert('wtf dude');
    }else{
            newcontent.innerHTML = '<div class="entry"><div class="nr4">'+counterW4+'</div><div class="name">3*</div><div class="nr5" id="nr5">'+counterW5+'</div></div>';
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
        counterW4++;
        counterW5++;
        if(counterW4>=10){
            b3 = buttons.getElementsByClassName("button3")[0];
            b3.className = "sinactive";
        }else if(counterW5>=90){
            b1 = buttons.getElementsByClassName("button1")[0];
            b1.className = "chpinactive";
            b2 = buttons.getElementsByClassName("button2")[0];
            b2.className = "wpinactive";
            b3 = buttons.getElementsByClassName("button3")[0];
            b3.className = "sinactive";
        }
    }
    updown();
}  


function add4(x, y) {
    var parent = document.getElementById("container"+x);
    var drop = document.getElementById("buttonArea2"+x);
    var newcontent = document.createElement('div');
    var buttons = document.getElementById("buttonArea1"+x);
    if(counterW4==null || counterW5==null){
        counterW4 = 1;
        counterW5 = 1;
        drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(1)">double-click here to delete last entry</button>';
    }
    if(counterW5>=90){
        //alert('wtf dude');
    }else{
        var i;
        var a;
        for (i = 0; i < chars.length; i++) {
            if (chars[i][0] == y){
                a = chars[i][1]; 
            }
        }
        newcontent.innerHTML = '<div class="entry"><div class="nr4" style="background-color: #887bad; font-weight: bold; color: #111111;">'+counterW4+'</div><div class="name" style="background-color: #887bad; font-weight: bold; color: #111111;">'+a+'</div><div class="nr5" id="nr5">'+counterW5+'</div></div>';
        //event
        eventBanner.push([counterW4,y,4,counterW5]);
        changes = 1;
        localStorage.removeItem("changes");
        localStorage.setItem("changes", changes);
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
        counterW4 = 1;
        counterW5++;
        if(counterW5>=90){
            b1 = buttons.getElementsByClassName("button1")[0];
            b1.className = "chpinactive";
            b2 = buttons.getElementsByClassName("button2")[0];
            b2.className = "wpinactive";
            b3 = buttons.getElementsByClassName("button3")[0];
            b3.className = "sinactive";
        }else if(counterW4 = 1){
            b3 = buttons.getElementsByClassName("sinactive")[0];
            b3.className = "button3";
        }
    }
    updown();
}
function add5(x, y) {
    var parent = document.getElementById("container"+x);
    var drop = document.getElementById("buttonArea2"+x);
    var newcontent = document.createElement('div');
    var buttons = document.getElementById("buttonArea1"+x);
    if(counterW4==null || counterW5==null){
        counterW4 = 1;
        counterW5 = 1;
        drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(1)">double-click here to delete last entry</button>';
    }
    var i;
    var a;
    for (i = 0; i < chars.length; i++) {
        if (chars[i][0] == y){
            a = chars[i][1]; 
        }
    }
    newcontent.innerHTML = '<div class="entry"><div class="nr4">'+counterW4+'</div><div class="name" style="background-color: #b6a16d; font-weight: bold; color: #111111;">'+a+'</div><div class="nr5" id="nr5" style="background-color: #b6a16d; font-weight: bold; color: #111111;">'+counterW5+'</div></div>';
    //event
    eventBanner.push([counterW4,y,5,counterW5]);
    localStorage.removeItem("eventBanner");
    localStorage.setItem("eventBanner", JSON.stringify(eventBanner));
    eventBannerLast = 0;
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
    counterW4++;
    counterW5 = 1;  
    if(counterW5 =1){
        b1 = buttons.getElementsByClassName("chpinactive")[0];
        b1.className = "button1";
        b2 = buttons.getElementsByClassName("wpinactive")[0];
        b2.className = "button2";
        b3 = buttons.getElementsByClassName("sinactive")[0];
        b3.className = "button3";
    }else if(counterW4 = 10){
        b3 = buttons.getElementsByClassName("button3")[0];
        b3.className = "sinactive";
    }
    updown();    
}
//beim starten
function addS3(x) {   
    var parent = document.getElementById("container"+x);
    var drop = document.getElementById("buttonArea2"+x);
    var newcontent = document.createElement('div');
    if(counterW4==null || counterW5==null){
        counterW4 = 1;
        counterW5 = 1;
        drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(1)">double-click here to delete last entry</button>';
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
} 
function addS4(x, y) {
    var parent = document.getElementById("container"+x);
    var drop = document.getElementById("buttonArea2"+x);
    var newcontent = document.createElement('div');
    if(counterW4==null || counterW5==null){
        counterW4 = 1;
        counterW5 = 1;
        drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(1)">double-click here to delete last entry</button>';
    }
    var i;
    var a;
    for (i = 0; i < chars.length; i++) {
        if (chars[i][0] == y){
            a = chars[i][1]; 
        }
    }
    newcontent.innerHTML = '<div class="entry"><div class="nr4" style="background-color: #887bad; font-weight: bold; color: #111111;">'+counterW4+'</div><div class="name" style="background-color: #887bad; font-weight: bold; color: #111111;">'+a+'</div><div class="nr5" id="nr5">'+counterW5+'</div></div>';
    if (parent.hasChildNodes()) {
        parent.insertBefore(newcontent, parent.firstChild);
    }else{
        parent.appendChild(newcontent);
    }
    counterW4 = 1;
    counterW5++;
    
} 
function addS5(x, y) {
    var parent = document.getElementById("container"+x);
    var drop = document.getElementById("buttonArea2"+x);
    var newcontent = document.createElement('div');
    if(counterW4==null || counterW5==null){
        counterW4 = 1;
        counterW5 = 1;
        drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(1)">double-click here to delete last entry</button>';
    }
    var i;
    var a;
    for (i = 0; i < chars.length; i++) {
        if (chars[i][0] == y){
            a = chars[i][1]; 
        }
    }
    newcontent.innerHTML = '<div class="entry"><div class="nr4">'+counterW4+'</div><div class="name" style="background-color: #b6a16d; font-weight: bold; color: #111111;">'+a+'</div><div class="nr5" id="nr5" style="background-color: #b6a16d; font-weight: bold; color: #111111;">'+counterW5+'</div></div>';
    if (parent.hasChildNodes()) {
        parent.insertBefore(newcontent, parent.firstChild);
    }else{
         parent.appendChild(newcontent);
    }
    counterW4++;
    counterW5 = 1;
    
}
function parseStorage(x){
    var drop = document.getElementById("buttonArea2"+x);       
    //localStorage.removeItem("eventBanner");
    var jason = JSON.parse(localStorage.getItem("eventBanner"));
    eventBanner.length = 0;
    for (var k = 0; k< jason.length; k++) {
        eventBanner[k] = jason[k];
    }
    var i;
    for (i = 0; i < eventBanner.length; i++) {
        if(counterW4==null || counterW5==null){
        counterW4 = 1;
        counterW5 = 1;
        drop.innerHTML = '<button class="remove" id ="remove" ondblclick ="drop(1)">double-click here to delete last entry</button>';
        }
        while(counterW4 < eventBanner[i][0]){
            addS3(1);
        }
        if(eventBanner[i][2] == 4){
            addS4(1,eventBanner[i][1]);
        }else if(eventBanner[i][2] == 5){
            addS5(1,eventBanner[i][1]);
        }              
    }
    eventBannerLast = localStorage.getItem("eventBannerLast");
    if (eventBannerLast > 0){
        var j;
        for (j = 0; j < eventBannerLast; j++){
            addS3(1);
        }
    }
}

function drop(x){  
        var parent = document.getElementById("container"+x);
        var buttons = document.getElementById("buttonArea1"+x);
        var drop = document.getElementById("buttonArea2"+x);   
        var deleted;
        var last;
        a = parent.firstElementChild.textContent;
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
        counterW4 = a[0];
        counterW5 = a[a.length-1];
        if (counterW4 >= 10){
            b3 = buttons.getElementsByClassName("button3")[0];
            b3.className = "sinactive";
        }
        if (counterW5 >= 90){
            b1 = buttons.getElementsByClassName("button1")[0];
            b1.className = "chpinactive";
            b2 = buttons.getElementsByClassName("button2")[0];
            b2.className = "wpinactive";
            b3 = buttons.getElementsByClassName("button3")[0];
            b3.className = "sinactive";
        }
        if (counterW4 < 10 & counterW5 < 90){  
            b3 = buttons.getElementsByClassName("sinactive");
            if(b3.length > 0){b3[0].className = "button3";}
            b1 = buttons.getElementsByClassName("chpinactive");
            if(b1.length > 0){b1[0].className = "button1";}
            b2 = buttons.getElementsByClassName("wpinactive");
            if(b2.length > 0){b2[0].className = "button2";}
        }
        if ((eventBannerLast == 0 || eventBannerLast == null) & eventBanner.length==0){
            drop.removeChild(drop.firstElementChild);
            counterW4 = null;
            counterW5 = null;
        }
        changes = 1;
        localStorage.removeItem("changes");
        localStorage.setItem("changes", changes);
        updown();
}
