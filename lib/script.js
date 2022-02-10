// Add your code here
var hiddenColumns= [3, 4, 5];



$( function() {
   $( ".slider" ).slider({
      create: function() {
        var i=$(this).attr("i");
        var j=$(this).attr("j");
        var handle = $( "#custom-handle_"+i+"-"+j );
        handle.text( "0%" );
      },
      slide: function( event, ui ) {
        var i=$(this).attr("i");
        var j=$(this).attr("j");
        var handle = $( "#custom-handle_"+i+"-"+j );
        handle.text( (ui.value)+"%" );
        $("#slider_"+i+"-"+j).css("background", "#"+createColor(ui.value));
      }
    }); 
  } );
function createColor(initialValue)
{
  var color1 = 'cd3618';
  var color2 = '0094FF';
  var ratio = initialValue /100 ;
  var hex = function(x) {
      x = x.toString(16);
      return (x.length == 1) ? '0' + x : x;
  };

  var r = Math.ceil(parseInt(color1.substring(0,2), 16) * ratio + parseInt(color2.substring(0,2), 16) * (1-ratio));
  var g = Math.ceil(parseInt(color1.substring(2,4), 16) * ratio + parseInt(color2.substring(2,4), 16) * (1-ratio));
  var b = Math.ceil(parseInt(color1.substring(4,6), 16) * ratio + parseInt(color2.substring(4,6), 16) * (1-ratio));

  var middle = hex(r) + hex(g) + hex(b);
  return middle; 
}
function hideColumn(column)
{
  $("div.col_dimension[j='"+column+"']").hide();  
  hiddenColumns.push(column);
  hiddenColumns.sort();
}
function showLastHiddenColumn()
{
  var column = hiddenColumns.pop();
  $("div.col_dimension[j='"+column+"']").show(); 
}
function arrayRemove(arr, value) 
{ 
  return arr.filter(function(ele){ 
      return ele != value; 
  });
}
function printPage()
{
  const screenshotTarget = document.body;

  html2canvas(screenshotTarget).then((canvas) => {
      const base64image = canvas.toDataURL("image/png");
      //window.location.href = base64image;
      //window.location.href = 'data:application/octet-stream;base64,' + img;
      var win=window.open();
      win.document.write('<a id="d" download="goals_tool.png" href="'+base64image+'">Descargar</a>');
      win.document.getElementById("d").click();
      win.close();
  });
}
function showHelp()
{
  $("#usage-box").toggle( "slow", function() {
    // Animation complete.
  });
}