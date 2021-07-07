function updown(){
    var demo = document.getElementById("demo");
    var down = document.getElementById("download");
    var ch = JSON.parse(localStorage.getItem("changes"));
    if(ch == 1){
        down.className = "download";
    }else{
        down.className = "downloadl";
    }
}
function downloadJSON(){

        var e = localStorage.getItem("eventBanner");
        var eL = localStorage.getItem("eventBannerLast"); 
        var w = localStorage.getItem("weaponBanner");
        var wL = localStorage.getItem("weaponBannerLast"); 
        var s = localStorage.getItem("standardBanner");
        var sL = localStorage.getItem("standardBannerLast"); 
        var n = localStorage.getItem("newbieBanner");
        var nL = localStorage.getItem("newbieBannerLast"); 
		var fC = localStorage.getItem("freeChars");
		var sC = localStorage.getItem("shopChars");
		var fW = localStorage.getItem("freeWeapons");
		var sW = localStorage.getItem("shopWeapons");
        var down = document.getElementById("download");
        var datum = new Date();
        var heute = datum.getDate()+ "." + (datum.getMonth()+ 1)+"." + datum.getFullYear()+"_" +datum.getHours() +"." + datum.getMinutes() ; 
        var all = e + "|" + eL + "~" + w + "|" + wL + "~" + s + "|" + sL + "~" + n + "|" + nL + "~" + fC + "~" + sC + "~" + fW + "~" + sW; 
        var blob1 = new Blob([all], { type: "text/plain;charset=utf-8" });
        
        var url = window.URL || window.webkitURL;
        link = URL.createObjectURL(blob1);
        var a = document.createElement("a");
        a.download = "gachaBackup_" + heute + ".json";
        a.href = link;        
        document.body.appendChild(a);
        a.click();
        changes = 0;
        localStorage.removeItem("changes");
        localStorage.setItem("changes", changes);
        down.className = "downloadl";
        document.body.removeChild(a);
}

function readFile(input) {
	var demo = document.getElementById("demo");
	let file = input.files[0];
	let reader = new FileReader();
	reader.readAsText(file);   
	reader.onload = function() {
		a = reader.result;
		a = a.split('~');
		//case when no weapon banner
		a[0] = a[0].split('|');   
		a[1] = a[1].split('|');  
		a[2] = a[2].split('|');
		a[3] = a[3].split('|');
		localStorage.removeItem("eventBanner");
		localStorage.removeItem("eventBannerLast"); 
		localStorage.removeItem("weaponBanner");
		localStorage.removeItem("weaponBannerLast"); 
		localStorage.removeItem("standardBanner");
		localStorage.removeItem("standardBannerLast"); 
		localStorage.removeItem("newbieBanner");
		localStorage.removeItem("newbieBannerLast"); 
		localStorage.removeItem("freeChars"); 
		localStorage.removeItem("shopChars"); 
		localStorage.removeItem("freeWeapons"); 
		localStorage.removeItem("shopWeapons"); 
		localStorage.setItem("eventBanner", a[0][0]);
		localStorage.setItem("eventBannerLast",a[0][1]); 
		localStorage.setItem("weaponBanner",a[1][0]);
		localStorage.setItem("weaponBannerLast",a[1][1]); 
		localStorage.setItem("standardBanner",a[2][0]);
		localStorage.setItem("standardBannerLast",a[2][1]); 
		localStorage.setItem("newbieBanner",a[3][0]);
		localStorage.setItem("newbieBannerLast",a[3][1]);
		localStorage.setItem("freeChars",a[4]);
		localStorage.setItem("shopChars",a[5]);
		localStorage.setItem("freeWeapons",a[6]);
		localStorage.setItem("shopWeapons",a[7]);
		location.reload();		
		/*parseStorage(1);
		parseStorage(2);
		parseStorage(3);
		parseStorage(4);
		parseFreeChar();
		parseShopChar();
		parseFreeWeapons();
		parseShopWeapons();
		location.reload();*/
	};
}
