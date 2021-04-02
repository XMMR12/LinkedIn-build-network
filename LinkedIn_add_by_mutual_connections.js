//using Web link:
//https://www.linkedin.com/mynetwork/
//**Desktop Site**
//basic model:
function build_network(){
var allbts=document.getElementsByClassName("full-width artdeco-button artdeco-button--2 artdeco-button--full artdeco-button--secondary ember-view");
var num_mf=parseInt(prompt("Enter the Number of Mutual friends you want in a connection:\n[[0 for Adding everyone]"));
for (var i=0;i<allbts.length-1;i++){
if (allbts[i].textContent.toLowerCase().search("connect")!=-1)
{
if (num_mf==0){
allbts[i].click();
}
else if(allbts[i].parentElement.parentElement.children[0].textContent.search("mutual connections")!=-1){
var mut_cons=parseInt(allbts[i].parentElement.parentElement.children[0].textContent.replaceAll("\n","").replace("mutual connections","").trim());
if (mut_cons>=num_mf)
{allbts[i].click();}
}
}
}
}
build_network();
