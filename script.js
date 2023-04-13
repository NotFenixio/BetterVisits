<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            
$.getJSON("https://api.ipify.org?format=json", function(data) {
    var ip = data.ip;
})

function hash(input) {
             
    var hash = 0;
     
    if (input.length == 0) return hash;
     
    for (i = 0; i < input.length; i++) {
        char = input.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
     
    return hash;
}
 function bvManager() {
    document.getElementById("p1").innerHTML = "lol";
 }
/*
<html>
<body onload="bvManager()">
<h1 id="p1">Hi!<h1/>
</body>
</html>
*/