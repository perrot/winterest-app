$(document).ready(function() {
$.loadWins=function (title,source,user){
	$.loadWin(title,source,user);
}
$.loadWin=function (title,source,user){
	    var id="";
	    id=$('#board').children().length+1;
	    var html = "";
	    //html += '<div id="item'+id+'" class="grid-item grid-item--height2" style="margin-left:5px"><img src="' + source + '" onerror="$.imgError($(this));"  style="width:100%;border-top-left-radius: 25px;border-top-right-radius: 25px;padding:0px"><br/><br/>' + title;
	    html += '<div id="item'+id+'" class="grid-item grid-item--height2" style="margin-left:5px"><img src="' + source + '" onerror="this.onerror=null;this.src=\'http://images6.fanpop.com/image/articles/183000/broken-hearts_183406_1.jpg?cache=1347779564\'"  style="width:100%;border-top-left-radius: 25px;border-top-right-radius: 25px;padding:0px"><br/><br/>' + title;
	    html += '<br/><div class="row">';
	    html += '<div class="col-xs-6">';
if(user.length>0){
	    html += '<p style=\'word-break: break-word;\'>'+user+'</p>';
}else{
	    html += '<a href="javascript:';
	///Try later. Need some times
	//Function: show a delete dialog
	//html+='$(\'#delete-dialog\').dialog(\'open\');';
	html+='       var str = {};  ';
	html+='       str.index= ($(\'div\').index($(\'#item'+id+'\'))-12)/4;  ';
	//html+='       console.log($(\'#item'+id+'\'));  ';
	html+='       str.isdelete=true;';
	html+='       $.post(\'/your-winboard\',str,function(data){  ';
	html+='	    $(\'#item\'+data.id+\'\').remove();';
	html+='	     });  ';
	    html += '$(\'#item'+id+'\').remove();console.log($(this).parent());';
	    html += '"><i class="fa fa-circle-o fa-stack-2x"></i><i class="fa fa-remove fa-lg fa-stack-1x"></i></a>';
}
html+='</div>';
	    html += '<div class="col-xs-6">';
	    html += '<i class="fa fa-heart"></i>0';
	    html += ' <i class="fa fa-refresh"></i>0</div>';
	    html += '</div><!--end of div row--></div>';
	    $('#board').append(html);
};
$.addWin=function (title,source){
///alert('add-win');
	$.loadWin(title,source,'');
       var str = {};  
       str.title= title;  
       str.source= source;  
       str.isdelete=false;
       $.post("/your-winboard",str,function(data){  
	     });  
       $('#dialog').dialog('close');
};
  $('#add-win').click(function() {
	$.addWin($('#image-title').val(),$('#source').val());
  });
  $("#opener").click(function() {
    $("#preview").attr("src","");
    $("#image-title").val("");
    $("#source").val("");
    $("#dialog").dialog("open");
  });
  $('#source').on('input', function() {
    $('#preview').attr('src', $('#source').val());
  });
  $("#dialog").dialog({
    width: 600,
    autoOpen: false,
    closeOnEscape: false,
    open: function(event, ui) {
      $('.ui-dialog-titlebar-close', ui.dialog | ui).hide();
    },
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    }
  });
$("#delete-dialog").dialog({
    autoOpen: false,
    closeOnEscape: false,
    open: function(event, ui) {
      $('.ui-dialog-titlebar-close', ui.dialog | ui).hide();
    },
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    }
  });
});
