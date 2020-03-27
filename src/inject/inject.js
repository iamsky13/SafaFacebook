setInterval(function() {		
    		if(document.readyState === "complete"){
			runScript();
		}	
}, 1000);


function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}
function GetThresHoldDate(){
    var ourDate = new Date();
    var pastDate = ourDate.getDate() - 30
    ourDate.setDate(pastDate);
    return ourDate;
}
function runScript(){
	var eleList = document.querySelectorAll('[hidden="true"]')
	for(var i =0;i<eleList.length;i++){
		var date = new Date(eleList[i].textContent);
		
		if(date<GetThresHoldDate()){
			
			var remEle=document.querySelector('[aria-labelledby="'+eleList[i].id+'"]');
			if(remEle){
			console.log("removed post from:"+ date);
			findAncestor(remEle,'_4ikz').remove();}
		}
	}
}
