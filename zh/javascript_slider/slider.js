var slider=function(){
	var array=[];
	return{
		init:function(t,c){
			var s,ds,l,i,y;
			s=document.getElementById(t); ds=s.getElementsByTagName('div'); l=ds.length; i=y=0;
			for(i=0;i<l;i++){
				var d,did; d=ds[i]; did=d.id;
				if(did.indexOf("header")!=-1){
					y++; d.onclick=new Function("slider.process(this)");
				}else if(did.indexOf("content")!=-1){
					array.push(did.replace('-content','')); d.maxh=d.offsetHeight;
					if(c!=y){d.style.display='none'}
					else{d.style.display='block'}
				} 
			}
		},
		process:function(d){
			var cl,i; cl=array.length; i=0;
			for(i;i<cl;i++){
				var s,h,c,cd;
				s=array[i]; h=document.getElementById(s+'-header');
				c=s+'-content'; cd=document.getElementById(c);
                var me = $('#'+c);
				if(h==d&&!me.is(':visible')){
                    me.slideDown();
				}else{me.slideUp();}
			}
		}
};}();