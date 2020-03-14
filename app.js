function myfunction(){
    var allid,getvalue,element,area;
    allid ={
        field:'#todovalue',
        btn:'#btn',
        todoarea:'.todoarea'
    };
    getvalue = document.querySelector(allid.field).value;
   /*  var para = document.createElement("P");
  para.innerHTML = getvalue;
    element = document.querySelector(allid.todoarea).appendChild(para); */
    area = document.querySelector(allid.todoarea);
 var html = '<div id="two"><p>%value%</p><button onclick="del()">Delelte</button></div>';
var newhtml = html.replace('%value%',getvalue);    
   area.insertAdjacentHTML('beforeend', newhtml);
    
    
}
function del(){
   Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};
    document.querySelector('#two').remove();
};