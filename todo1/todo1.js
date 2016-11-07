$(function(){
	 var add=$(".add")
     var todos=[];
     var ul=$(".ct ul")
//   显示
	if(localStorage.todos){
		todos=JSON.parse(localStorage.todos)
		render();
	}   
//   添加li
     add.on("touchend",function(){
     	var input=$("input")
     	var v=input.val();
     	$.trim(v)
     	if(!v){
     		return;}
     	var todo={
     		name:v,
     		state:0
     	};
     	todos.push(todo);
     	localStorage.todos=JSON.stringify(todos);
     	render();
     	input.val("");
     })
//   滑动
     var startpos;
     ul.on("touchstart","li",function(e){
     	startpos=e.originalEvent.changedTouches[0].clientX;
     	
     })
	 ul.on("touchend","li",function(e){
	 	var endpos=e.originalEvent.changedTouches[0].clientX;
	 	var index=$(this).index();
	 		
	 	 if(endpos-startpos>50){
	 		todos[index].state=1;		
	 		$(this).addClass("done");
	 	}
	  if(endpos-startpos<-50){
	 		todos[index].state=0;
	 		$(this).removeClass("done");
	 	}
	  localStorage.todos=JSON.stringify(todos)
	 })
 function render(){
     	ul.empty();
     	
     	for(var i=0;i<todos.length;i++){
     		var c=(todos[i].state)?"done":""
     		$("<li class='"+c+"'><div class='content'>"+todos[i].name+"</div><div class='delete'></div></li>")
     		.appendTo(ul);
     	}
     }
     
//   删除
	var delete1=$(".delete");
	var li=$("li");
	ul.on("touchend",".delete",function(){
	 	li=$("li");
	 	delete1=$(".delete");
	 	var index=delete1.index($(this));	 	
	 	todos.splice(index,1)
	 	localStorage.todos=JSON.stringify(todos)
	 	li.eq(index).remove();
	 	
	  })
//    最后下面那三个按钮
  
   var footer=$(".footer")
   var divs=$(".footer div");
  footer.on("touchend","div",function(){
  	var index=divs.index($(this))
  	divs.removeClass("active")
  	$(this).addClass("active")
   	
    })
  
   var all=$(".all")
   var foot=$(".foot")
   var divd=$(".foot div");
  foot.on("touchend","div",function(){
  	var index=divd.index($(this))
  	divd.removeClass("ac")
  	$(this).addClass("ac")
   	var li=$("li");
   	li.show();
   	if($(this).attr("data-role")=="com"){
   		var done=$("li:not(.done)")
   		done.hide()
   	}
   if($(this).attr("data-role")=="now"){
   		
   		var nodone=$(".done")
   		nodone.hide()
   	}
    })
  
  //清除所有完成
  var clear=$(".clearall")
  clear.on("touchend",function(){
  	var done=$(".done")
  	done.each(function(i){
  		$(this).delay(i*80).queue(function(){
  			$(this).addClass("dong1").dequeue()
  		}).delay(800).queue(function(){
  			$(this).remove().dequeue();
  		})
  	})
   var newarr=[];
   for(var i=0;i<todos.length;i++){
     	if(todos[i].state!==1){
     		newarr.push(todos[i])
     	}
     } 
     todos=newarr;
     localStorage.todos=JSON.stringify(todos)
  })   
})
$(document).ready(function  () {
	 $(".list").css("background","#D0E2F6");
    $(".aa").click(function  () {
     
      var index=$(this).index(".aa");
      $(".footer .aa").css("background","#fff").eq(index).css("background","#D0E2F6");
     
       $(".bb").each(function(index,obj){obj.style.display="none"})
        .eq(index).css("display","block")
    })
  })
$(document).ready(function  () {	
    $(".ee").click(function  () {    	 
       var index=$(this).index(".ee");     
       $(".dd").eq(index).css("display","block");
    });
   $(".ee").click(function(event){
            return false;
        });
//问题1 点击其它地方让它 
    $(".ct").click(".dian",function() { 
    	      
       $(".foot").css("display","none");
    })
  })









