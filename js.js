function first() {
	var n = parseInt(document.forms["a"]["n"].value);
	if ((!check(n))||(n<0)){
		alert("что-то не так");
		return(false);
	}
	n*=n;
	document.getElementById("first").innerHTML = "Площадь квадрата " + n;
}
function second() {
	var n = parseInt(document.forms["b"]["n"].value);
	if ((!check(n))||(n<0)){
		alert("что-то не так");
		return(false);
	}
	n = Math.PI * Math.pow(n,2);
	document.getElementById("second").innerHTML = "Площадь круга " + n;
}
function third() {
	var a = parseInt(document.forms["c"]["n1"].value);
	var b = parseInt(document.forms["c"]["n2"].value);
	if ((!check(a))||(a<0)||(!check(b))||(b<0)){
		alert("что-то не так");
		return(false);
	}
	a = Math.PI * a * b;
	document.getElementById("third").innerHTML = "Площадь элипса " + a;
}
function fourth() {
	var a = parseInt(document.forms["d"]["n1"].value);
	var b = parseInt(document.forms["d"]["n2"].value);
	if ((!check(a))||(a<0)||(!check(b))||(b<0)){
		alert("что-то не так");
		return(false);
	}
	a = a * b;
	document.getElementById("fourth").innerHTML = "Площадь параллелограмма " + a;
}
function fifth() {
	var a = parseInt(document.forms["e"]["n"].value);
	var b = parseInt(document.forms["e"]["n1"].value);
	var c = parseInt(document.forms["e"]["n2"].value);
	if ((!check(a))||(a<0)||(!check(b))||(b<0)||(!check(c))||(c<0)){
		alert("что-то не так");
		return(false);
	}
	a = (a * b) / 2 * c;
	document.getElementById("fifth").innerHTML = "Площадь трапеции " + a;
}
function sixth() {
	var a = parseInt(document.forms["f"]["n1"].value);
	var b = parseInt(document.forms["f"]["n2"].value);
	if ((!check(a))||(a<0)||(!check(b))||(b<0)){
		alert("что-то не так");
		return(false);
	}
	a = a / 2 * b;
	document.getElementById("sixth").innerHTML = "Площадь треугольника " + a;
}


function a1(){
	var a = 1;
	var b = 1;
	for (var i=0; i<8; i++){
		a = a+b;
		b = a-b;
	}
    document.getElementById("a1").innerHTML = a;
}
function a2(){
	var a = 1;
	var b = 1;
	var c = 2;
	for (var i=0; i<8; i++){
		a = a+b;
		b = a-b;
		c+=a;
	}
    document.getElementById("a2").innerHTML = c;
}
function a3(){
	var a = 1;
	var b = 1;
	var c = 2;
	for (var i=0; i<10; i++){
		a = a+b;
		b = a-b;
		c+=a;
	}
	c=c/12;
    document.getElementById("a3").innerHTML = c;
}
function a4(){
	var a = parseInt(document.forms["g"]["n"].value);
	if (!check(a)){
		alert("что-то не так");
		return(false);
	}
	var b = 11;
	var c = 1;
	for (var i=0; i<10; i++){
		c*=(Math.pow(a,i+1)+i+2);
	}
    document.getElementById("a4").innerHTML = c;
}
function a5(){
	var a = parseInt(document.forms["h"]["n"].value);
	if (!check(a)){
		alert("что-то не так");
		return(false);
	}
	var c = 1;
	var b = 0;
	for (var i=0; i<19; i++){
		b += a / c;
		c += 2;
	}
    document.getElementById("a5").innerHTML = b;
}
function a6(){
	var c = 0;
	var b = 0;
	for (var i=0; i<11; i++){
		c += (i+1)*3;
	}
	for (var i=0; i<10; i++){
		b+=i+1;
	}
	c/=b;
    document.getElementById("a6").innerHTML = c;
}
function a7(){
	var c = (1+40)*20;
	var b = 0;
	var a = 0;
	for (var i=0; i<15; i++){
		b+=i*5;
		a+=b;
	}
	c*=b;
    document.getElementById("a7").innerHTML = c;
}
function a8(){
	var a = parseInt(document.forms["i"]["n"].value);
	if ((!check(a))||(a>=1)){
		alert("что-то не так");
		return(false);
	}
	a*=a;
	var c = 2;
	var b = 0;
    while ((Math.abs(a/c))>0.0005){
		b += a/c;
		c+=4;
	}
    document.getElementById("a8").innerHTML = b;
}
function a9(){
	var a = parseInt(document.forms["j"]["n"].value);
	if (!check(a)){
		alert("что-то не так");
		return(false);
	}
	var b = 0;
	for (var i=2; i<15; i++){
		b+=Math.abs(Math.pow(a,i*4+1)/((i-1)*4));
	}
    document.getElementById("a9").innerHTML = b;
}
function a10(){
	var b = 0;
	var s = "";
	var i = -800;
	while (i<801){
		if (i%31==0){
			s += i + " ";
			b+=1;
		}
		i+=1;
	}
	s += b;
    document.getElementById("a10").innerHTML = s;
}
function a11(){
	var a = parseInt(document.forms["k"]["n"].value);
	if ((!check(a))||(a>=1)){
		alert("что-то не так");
		return(false);
	}
	var i = 1;
	var b = 0;
	while ((Math.abs(Math.pow(a,i)/i))>=0.005){
		b += Math.pow(a,i)/i;
		i += 2;
	}
    document.getElementById("a11").innerHTML = b;
}
function a12(){
	var a = parseInt(document.forms["l"]["n"].value);
	if ((!check(a))||(a>=1)){
		alert("что-то не так");
		return(false);
	}
	a += 1;
	var i = 2;
	var g = 2;
	var b = 0;
	while ((Math.abs(Math.pow(a,i)/g))>=0.0003){
		b += Math.pow(a,i)/g;
		g = g*(i+1);
	}
    document.getElementById("a12").innerHTML = b;
}
function a13(){
	var c = 1;
	var a = 0;
	var i = 101;
	while (c <=100){
		a += c;
		c += 2;
	}
	c = 0;
	while ( i <=200 ){
		c+=i;
		i+=2;
	}
	a/=c;
    document.getElementById("a13").innerHTML = a;
}
function a17(){
	var a = parseInt(document.forms["m"]["n"].value);
	if (!check(a)){
		alert("что-то не так");
		return(false);
	}
	var b = 0;
	for (var i=2; i<12; i++){
		b+=Math.abs(Math.pow(a,i*3)/(i*4));
	}
    document.getElementById("a17").innerHTML = b ;
}
function b1(){	
	var a = document.forms["o"]["n"].value;	
	var n = parseInt(document.forms["n"]["n"].value);
	var s = a.split(" ");
	a = ""; 
	if ((!check(n))||(n<=0)||(parseInt(n*n)!=s.length)){
		alert("что-то не так");
		return(false);
	}
	for (var i=0; i<n*n; i++){
		if ((!check(s[i]))||(s[i]<0)){
		alert("что-то не так");
		return(false);
	}
	}
	for(var i=0; i<n; i++){
		for(var j=0; j<n; j++){
			a+=s[i*n+j] + " " ;
		}
		a+="<br>"
	}	
	document.getElementById("b1").innerHTML = a;
	for(var i=0; i<n*n; i++){
		s[i]=parseInt(s[i], 10);
	}
	var c = 0;
	var b = 0;
	document.getElementById("b2").innerHTML = "Yes";
	var m = 0;
    for (var i = 0; i<n; i++){
		m += s[i];
	}
	for(var i=0; i<n; i++){
		for(var j=0; j<n; j++){
			c += s[i*n+j];
			b += s[j*n+i];
		}
		if ((m != c) && (m != b)){
			document.getElementById("b2").innerHTML = "No";
		}
		b = 0;
		c = 0;
	}
	for(var i=0; i<n; i++){
		b += s[n*i+i];
		c += s[(n-1)*(i+1)];
	}
	if ((m != c) && (m != b)){
		document.getElementById("b2").innerHTML = "No" ;
	}
}
function mi(){
	var size = parseInt(document.forms["size"]["n"].value);
	if ((!check(size))||(size<=0)){
		alert("что-то не так");
		return(false);
	}
	a = getArray(size);
	a = getResultArray(a);
	
	table = document.createElement('table')
	tableBody = document.createElement('tbody')
	table.appendChild(tableBody); 
	for (var i = size-1; i >=0; i--) { 
		tr = document.createElement('tr')
		tableBody.appendChild(tr); 
		if (i%2!=0){
			for (var j=size-1; j>=0; j--){
				td = document.createElement('td')
				td.innerHTML = a[i*size+j];
				tr.appendChild(td);  
			}
		}
		else{
			for (var j=0; j<size; j++){
				td = document.createElement('td')
				td.innerHTML = a[i*size+j];	
				tr.appendChild(td);  
			}
		} 
	}
	document.body.appendChild(table)
}

function getResultArray(arr) {
    arr.sort(function(a, b){return a-b});
    return arr;
}
function getArray(size) {
	var a = new Array(size*size);
	var min = parseInt(document.forms["min"]["n"].value);
	var max = parseInt(document.forms["max"]["n"].value);
	if ((!check(min))||(!check(max))||(min>=max)){
		alert("что-то не так");
		return(false);
	}
	for (var i=0; i<size*size; i++){
		a[i]=getRandomInt(min, max);
	}
	return a;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function check(element){
	if(isNaN(element)){
		return(false);
	}
	else{
		return(true);
	}
}