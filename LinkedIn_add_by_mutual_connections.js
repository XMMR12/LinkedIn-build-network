//using Web link:
//https://www.linkedin.com/mynetwork/
//**Desktop Site**
//My Special model:
function build_network(){
var num_mf=parseInt(prompt("Enter the Number of Mutual friends you want in a connection:\n[[0 for Adding everyone]"));
var check_filter=parseInt(prompt("Enter Filter mode?\n[Yes:1]\n[No:0 or leave empty]\n"));
if (check_filter){
	var words_filter=prompt("Enter the keywords seperated by commas to filter the connection with the keywords:");
	var wordlist_filter=words_filter.split(",");
	var found_wordlist_filter;
	var scan_info;
}

var allbts=document.getElementsByClassName("artdeco-button artdeco-button--2 artdeco-button--secondary ember-view full-width");

var count=0;
for (var i=0;i<allbts.length-1;i++){
if (allbts[i].textContent.toLowerCase().search("connect")!=-1)
{
	found_wordlist_filter=0;
	if (check_filter){
		scan_info=allbts[i].parentElement.parentElement.parentElement.textContent.toLowerCase();
for (var i2=0;i2<wordlist_filter.length;i2++){
	if (scan_info.search(wordlist_filter[i2].toLowerCase())!=-1){
		//allbts[i].click()
		found_wordlist_filter=1;
		break;
	}
	
	}}
if (check_filter&&found_wordlist_filter||!check_filter){
if (num_mf==0){
allbts[i].click();count++;
}

else if(allbts[i].parentElement.parentElement.children[0].textContent.search("mutual connections")!=-1){
var mut_cons=parseInt(allbts[i].parentElement.parentElement.children[0].textContent.replaceAll("\n","").replace("mutual connections","").trim().split(",").join(""));
if (mut_cons>=num_mf)
{allbts[i].click();count++;}
}
}
}
}
console.log("Mutual connections Added : "+count);
alert("Mutual connections Added : "+count);
}
build_network();
