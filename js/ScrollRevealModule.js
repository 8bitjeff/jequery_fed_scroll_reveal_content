//requires jquery
//Jeff Fulton 2015
function ScrollRevealModule() {
   console.log("scroll module constructor");
   this.idsToReveal=[];
   this.allDisplayed=false;
   this.displayCounter=0;
   this.element=null;
} 

ScrollRevealModule.prototype.init=function(ids){
    
    this.ids = ids;
    
    //loop through id and find top[, store it with name
    for (ctr=0;ctr<ids.length;ctr++) {
        var topVal = $("#"+this.ids[ctr].id).offset().top;
        var heightVal = $("#"+this.ids[ctr].id).outerHeight();
        var nameVal=ids[ctr].id;
        var delayVal = ids[ctr].delay;
        var topOffsetVal = ids[ctr].topOffset;
        var tempId={name:nameVal, delay:delayVal, top:topVal, outerHeight:heightVal,topOffset:topOffsetVal };
        this.idsToReveal.push(tempId);        
    }
    
    //loop through and turn off all ids
    for (ctr=0;ctr<this.idsToReveal.length;ctr++){
        var tempId=this.idsToReveal[ctr];
        //make invisible, not hidden. 
        $("#"+tempId.name).animate({ opacity: '0' });
        //move down by offset val so it can animat up
        var topString="+="+tempId.topOffset+"px";
        $("#"+tempId.name).animate({ "top": topString });
    }
   
    this.element=$(window);
    this.element.bind('scroll', this, function(e) {
        e.data.windowScroll(); 
        
    });
    
    
}

ScrollRevealModule.prototype.windowScroll=function() {
    if (!this.allDisplayed) {
        var tempId=this.idsToReveal[this.displayCounter];
        var bottom_of_id = tempId.top + tempId.outerHeight;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        
         //if( bottom_of_window > bottom_of_id ){
        if( bottom_of_window >= tempId.top){
            this.element=$(window);
            var topString="-="+tempId.topOffset+"px";
           $("#"+tempId.name).animate({  opacity: '1', "top": topString }, tempId.delay,  this.openComplete( this.element.data));
            
        }
    }
}

ScrollRevealModule.prototype.openComplete=function(e) {
    //console.log("e", e);
    console.log("complete");
    this.displayCounter++;
    console.log("this.displayCounter", this.displayCounter);
    if (this.displayCounter == this.idsToReveal.length) {
        this.allDisplayed=true;
    }
}