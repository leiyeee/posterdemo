var colors = [ "#fe5000","#000000" ];


function ranBorder() {
  ranBorderSize = Math.floor((Math.random()*500)+1)+"px";
  ranBorderColor = colors[Math.floor((Math.random()*colors.length)+0)];
  document.getElementById("border").style.border = ranBorderSize;
  document.getElementById("border").style.borderColor = ranBorderColor;
  document.getElementById("border").style.borderStyle = 'solid';
}

function ranType() {
  ranTypeSize = Math.floor((Math.random()*300)+50)+"px";
  ranBodySize = Math.floor((Math.random()*100)+10)+"px";
  ranTitleColor = colors[Math.floor((Math.random()*colors.length)+0)];
  ranBodyColor = colors[Math.floor((Math.random()*colors.length)+0)];
  document.getElementById("line").style.color = ranTitleColor;
  document.getElementById("line").style.fontSize = ranTypeSize;
  document.getElementById("body").style.fontSize = ranBodySize;
/*  document.getElementById("body").style.fontSize = ranBodySize;*/
  document.getElementById("body").style.color = ranBodyColor;
   $("#body").last().css({
    "top": Math.floor((Math.random()*800)+1)+"px",
    "left": Math.floor((Math.random()*500)+1)+"px"
  });
  
}

function ranSpacing(){
  ranSpacingAmt = Math.floor((Math.random()*300)+1)+"px";
  document.getElementById("line").style.letterSpacing = ranSpacingAmt;
  document.getElementById("body").style.letterSpacing = ranSpacingAmt;
}

function ranSprinkles() {
  sprinkleNum = Math.floor((Math.random()*20)+2);
  sprinkleColor = colors[Math.floor((Math.random()*colors.length)+0)];
  
  
  for (var i = 0; i < sprinkleNum; i++) {
	  $("#poster").append("<div class='squiggle'></div>");
    $(".squiggle").last().css({
    "top": Math.floor((Math.random()*5000)+1)+"px",
    "left": Math.floor((Math.random()*400)+1)+"px"
    });
  }
  
  $(".squiggle").css({
    "background-color": sprinkleColor,
    "width": 20,
    "height": 80
  });
}

function ranCircles(){
  
  circleColor = colors[Math.floor((Math.random()*colors.length)+0)];
  
for (var i=0; i < 10; i++) {
  console.log("working");
   $("#poster").append("<div class='circle'></div>");
  var randomleft = Math.floor((Math.random()*1000)+1);
  var randomtop = Math.floor((Math.random()*900)+1);
  $(".circle").last().css("margin-left", randomleft+"px");
   $(".circle").last().css("margin-top", randomtop+"px");
}
  $(".circle").css({
    "background-color": circleColor,
  });
}

function ranCross(){
  
  crossColor = colors[Math.floor((Math.random()*colors.length)+0)];
  
for (var i=0; i < 100; i++) {
  console.log("working");
   $("#poster").append("<div class='cross'></div>");
  var randomleft = Math.floor((Math.random()*800)+1);
  var randomtop = Math.floor((Math.random()*800)+1);
  $(".cross").last().css("margin-left", randomleft+"px");
   $(".cross").last().css("margin-top", randomtop+"px");
  
}
  // $(".cross").css({
  //   "background-color": crossColor,
  // });
  // $(".cross:after").css({
  //   "background-color": crossColor,
  // });
  
//     $(".cross").last().css({
//   "margin-top": Math.floor((Math.random()*1000)+1)+"px"})
    
}

// function ranSquares() {
//   squareNum = Math.floor((Math.random()*10)+2);
//   squareColor = colors[Math.floor((Math.random()*colors.length)+0)];
  
  
//   for (var i = 0; i < squareNum; i++) {
//     squareDim = Math.floor((Math.random()*200)+2);
// 	  $("#poster").append("<div class='square'></div>");
//     $(".square").last().css({
//     "top": Math.floor((Math.random()*1000)+1)+"px",
//     "left": Math.floor((Math.random()*700)+1)+"px",
//     "background-color": squareColor,
//     "width": squareDim,
//     "height": squareDim
//     });
//   }
// }



$("#new_poster").on("click", function(){
   ranType();
  
  if ($('input[name="border"]').is(":checked")) {
    ranBorder();
  }
  else {
    document.getElementById("border").style.border = 'none';
  }
  
  if ($('input[name="letter_spacing"]').is(":checked")) {
    ranSpacing();
  }
  else {
    document.getElementById("line").style.letterSpacing = 0;
  }
  
  
  if ($('input[name="underline"]').is(":checked")) {
    document.getElementById("body").style.textDecoration = 'underline';
  }
  
  if ($('input[name="strikethrough"]').is(":checked")) {
    document.getElementById("line").style.textDecoration = 'line-through';
  }
  
  if(!$('input[name="strikethrough"]').is(":checked") && !$('input[name="underline"]').is(":checked")) {
    document.getElementById("line").style.textDecoration = 'none';
  }
  
  if ($('input[name="center_aligned"]').is(":checked")) {
    document.getElementById("line").style.textAlign = 'center';
  }
  else {
    document.getElementById("line").style.textAlign = 'left';
  }
    
  if ($('input[name="tilt"]').is(":checked")) {
    $("#line").addClass("tilted");
    $("#body").addClass("tilted");
  }
  else {
    $("#line").removeClass("tilted");
    $("#body").removeClass("tilted");
  }
  
  if ($('input[name="sprinkles"]').is(":checked")) {
    $(".squiggle").remove();
    ranSprinkles();
  }
  else {
    $(".squiggle").remove();
  }
  
  
  
  if ($('input[name="circle"]').is(":checked")) {
    $(".circle").remove();
    ranCircles();
  } else {
    $(".circle").remove();
  }
  
   if ($('input[name="cross"]').is(":checked")) {
    $(".cross").remove();
    ranCross();
  } else {
    $(".cross").remove();
  }

  
    if ($('input[name="infinity"]').is(":checked")) {
        ranInfinity();
  }
  
});


// 上传图片
upload.onclick = function() {
  console.log('xxxxxxxxxxxx');
  inputFile.click();
}
inputFile.onchange = function() {
  const file = inputFile.files[0];
  const fr = new FileReader();
  fr.readAsDataURL(file);
  fr.onload = function() {
    const img = document.createElement('img');
    img.src=this.result;
    console.log(this.result);
    img.width=200;
    img.height = 200;
    img.className = 'imgSingle';
    $("#poster").append(img);
    $(".imgSingle").lzhDrag();
  }
}


if ($('input[name="strikethrough"]').is(":checked")) {
  document.getElementById("line").style.textDecoration = 'line-through';
  document.getElementById("body").style.textDecoration = 'line-through';
}

$('input[name="line"]').on("keyup", function(){
  lineText = $(this).val(); 
  $("#line").html(lineText);
});
$('textarea[name="body"]').on("keyup", function(){
  lineText = $(this).val();
  $("#body").html(lineText);
}); 

// 点击生成图片
$('#createPoster').on('click', function() {
  // console.log('---createPoster have click---')
  // html2canvas($("#poster")).then(function (canvas) {
  //   var imgUri = canvas.toDataURL("image/png").replace("image/png"); // 获取生成的图片的url
  //   console.log(imgUri);
  //   window.open(imgUri); // 下载图片
  // });

  html2canvas($("#poster"),{
    onrendered: function(canvas) {
      // var imgURL = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      const imgURL = canvas.toDataURL("image/png");
      console.log(imgURL);
      $('#down_upload').attr('download',imgURL);  
      $('#down_upload').attr('href',imgURL);
      console.log($('#down_upload'));
      down_upload.click();
    }
  })
});

// 元素拖拽
$.fn.extend({

  lzhDrag: function (obj) {
    console.log('cxccxcxxcxxc');
      // let max_left = $(this).offsetParent().outerWidth() - $(this).outerWidth(),
      //     max_top = $(this).offsetParent().outerHeight() - $(this).outerHeight();
      $(this).on('mousedown', event => {
        console.log($(this));
        let initT = event.clientY - $(this)[0].offsetTop,
            initL = event.clientX - $(this)[0].offsetLeft;
            console.log(event.clientY , $(this));
          // let ele_x = event.offsetX,
          //     ele_y = event.offsetY;
          //     console.log(ele_x, ele_y);
          $(this).on('mousemove', e => {
            // console.log('---mousemove--', e);
            // return false;
		        let dL=e.clientX-initL;
		        let dT=e.clientY-initT;
              e.preventDefault();
              // let left = e.clientX - ele_x,
              //     top = e.clientY - ele_y;
              // left = left < 0 ? 0 : left;
              // top = top < 0 ? 0 : top;
              // left = left > max_left ? max_left : left;
              // top = top > max_top ? max_top : top;
              // console.log('left--'+left+'--'+'top---'+top);
              // $(this).css({
              //     left, top
              // })
              if(dL<0) {
                dL=0;	
              }else if(dL>$('#poster').offsetWidth-$(this).offsetWidth)
              {
                dL=$('#poster').offsetWidth-$(this).offsetWidth;	
              }
              if(dT<0)
              {
                dT=0;	
              }else if(dT>$('#poster').offsetHeight-$(this).offsetHeight)
              {
                dT=$('#poster').offsetHeight-$(this).offsetHeight;	
              }
              console.log(dL, dT);
              $(this).css('left', dL + 'px');
              $(this).css('top', dT + 'px');
          });
          $(this).on('mouseup', () => {

            $(this).off('mousemove');
            $(this).off('mouseup');
        });
        return this;
      });
    }
});
$("#line").lzhDrag({
  startDown: function () {
      console.log("down");
  },
  startMove: function () {
      console.log("startmove");
  },
  overMove: function () {
      console.log("stopMove");
  }
});
$("#body").lzhDrag({
  startDown: function () {
      console.log("down");
  },
  startMove: function () {
      console.log("startmove");
  },
  overMove: function () {
      console.log("stopMove");
  }
});
$("#border").lzhDrag();
window.onload = function() {
  // set color
  $('#setTitleC1').click(function() {
    console.log('111');
    $('#line').css('color', '#ff7500');
  });
  $('#setTitleC2').click(function() {
    $('#line').css('color', '#c93756');
  });
  $('#setTitleC3').click(function() {
    $('#line').css('color', '#00e500');
  });
  $('#setTitleC4').click(function() {
    $('#line').css('color', '#4c221b');
  });

  $('#setContentC1').click(function() {
    console.log('111');
    $('#body').css('color', '#ff7500');
  });
  $('#setContentC2').click(function() {
    $('#body').css('color', '#c93756');
  });
  $('#setContentC3').click(function() {
    $('#body').css('color', '#00e500');
  });
  $('#setContentC4').click(function() {
    $('#body').css('color', '#4c221b');
  });
  $('#setSkinC1').click(function() {
    $('#poster').css('background', '#44cef6');
  });
  $('#setSkinC2').click(function() {
    $('#poster').css('background', '#c93756');
  });

};




