
function updown(){
    var demo = document.getElementById("demo");
    var down = document.getElementById("download");
    var ch = JSON.parse(localStorage.getItem("changes"));
    if(ch == true){
        //demo.innerHTML = "true";
        down.className = "download";
    }else{
        down.className = "downloadl";
        //demo.innerHTML = "false";
    }
}
function downloadJSON(){
    var demo = document.getElementById("demo");
        var e = localStorage.getItem("eventBanner");
        var eL = localStorage.getItem("eventBannerLast"); 
        var datum = new Date();
        var heute = datum.getDate()+ "." + (datum.getMonth()+ 1)+"." + datum.getFullYear()+"_" +datum.getHours() +"." + datum.getMinutes() ; 
        var all = e + "|" + eL; 
        var blob1 = new Blob([all], { type: "text/plain;charset=utf-8" });
        demo.innerHTML = "true" + e;
        var url = window.URL || window.webkitURL;
        link = URL.createObjectURL(blob1);
        var a = document.createElement("a");
        a.download = "gachaBackup_" + heute + ".json";
        a.href = link;        
        document.body.appendChild(a);
        a.click();
        change = false;
        document.body.removeChild(a);
}