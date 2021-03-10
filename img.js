var $objects = $("img");
Draggable.create($objects, {
	type:"x,y",
	edgeResistance:0.1,
	bounds:"body",
	throwProps:true
});

$('button#done').click(function(e){
	html2canvas($('#poster'),{
		allowTaint : true,
    onrendered: function(canvas) {
				$('body').addClass('saved').append(canvas);
				$('#download').attr('href',document.querySelector('canvas').toDataURL()).attr('download','poster.png');
		}		
	});
	e.preventDefault();
});