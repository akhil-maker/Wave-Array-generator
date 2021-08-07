var r = document.getElementById("reset");
r.style.visibility = "hidden";
function addBox(){
	var len = input.value;
	var ele = document.getElementById("arrInput")
	ele.innerHTML = '';
	for(i=0; i<len; i++){
		console.log(ele.innerHTML);
		ele.innerHTML += `<input type="text" name="input" id="input" style="width: 10rem; border: 2px solid black">`;
	}
	if(ele.innerHTML!=''){
		var l = document.getElementById("clean");
		l.style.visibility = "hidden";
		r.style.visibility = "visible";
	}
	body = document.getElementsByTagName("body");
	body[0].innerHTML += `<div>Developed By Akhil Soni</div>`
}

function showBox(){
	var ele = document.getElementById("arrInput")
	ele.innerHTML = '';
	var res = document.getElementById("result")
	res.innerHTML = '';
	input.value = '';
	r.style.visibility = "hidden";
	var l = document.getElementById("clean");
	l.style.visibility = "visible";
}

function wavy(){
	var ele = document.getElementById("arrInput").children;
	arr = []
	for(x=0; x<ele.length; x++)
		arr[x] = ele[x].value;
	for(i=0; i<arr.length; i+=2){
		if(i>0 && arr[i]<arr[i-1]){
			temp = arr[i];
			arr[i] = arr[i-1];
			arr[i-1] = temp;
		}
		if(i<arr.length-1 && arr[i]<arr[i+1]){
			temp = arr[i];
			arr[i] = arr[i+1];
			arr[i+1] = temp;
		}
	}
	var res = document.getElementById("result")
	res.innerHTML = '';
	for(i=0; i<arr.length; i++)
		res.innerHTML += `<label class='box'>`+arr[i]+`</label>`;
}