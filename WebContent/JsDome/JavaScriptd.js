/**
 * 
 */
function Ages() {
	document.write("希望我的毕业设计顺利通关！！！！ 干掉熊猫你就是国宝！！！");
}
function Array() {
	Array.arguments.length;
	var ary = [ "范平平", "帅的", "有点", "看不懂", "也不知道", "是为什么", "就是", "这么", 6 ];
	for (tmp in ary) {
		console.info(ary[tmp]);// 在控制台打印comsole.info（）；
	}
	console.info(ary.length);
}

function pasta(xin, an, ren, cai, wang) {
	this.xin = xin;
	this.an = an;
	this.ren = ren;
	this.cai = cai;
	this.wang = wang;
	this.toString = pastaToString;
}
function insertBefore() {
	var se = document.createElement("p");
	var input = prompt("请输入你需要插入的内容");
	var rt = document.createTextNode(input);
	se.appendChild(rt);
	var be = document.getElementById("div1");
	var fo = document.getElementById("p2");
	be.replaceChild(fo);
	return false;
}
function Idxuanzeqi() {
	var xuan = document.getElementById("txt");
	alert(document.getElementById("txt").value);
}
function Jqueryid() {
	var jq = $("#txt");
	alert($("#txt").val());
}
function Div() {
	var di = document.getElenment
}
// 按包含过滤
function lihas() {
	$("li:has(span)").css("color", "blue");

}
// 将影藏的显示出来
function none() {
	$("p:hidden").show("slow")
}
// 将显示的影藏起来
function none2() {
	$("p:visible").hide("fast");

}
// 属性选择器
function shuxing() {
	$("input[id=ping]").val("就是这么6");
}
// input选择器
function input1() {
	console.log($("#sel.selected"));
}
// attr1 jquery操作DOM 获取或设置属性
function attr1() {
	console.log($("#myform").attr("action"));
	$("#myform").attr("action", "bar.php");
	console.log($("#myform").attr("action"));
}
// attr2 jQuery操作DOM 删除属性
function attr2() {
	console.log($("#myform").removeAttr("action"));
	$("#myform").removeAttr("action", "bar.php");

}
// html1 沒有參數表示獲取 有參數表示設置
function html1() {
	console.log($("p").html());
	$("p").html("<i>liang</i>");
	console.log($("p").html());
}
// html2
function html2() {
	console.log($("p").text());
	$("p").text("<i>liang</i>");
	console.log($("p").text());
}
// css改变字体颜色
function css1() {
	$("div").css("color", "red");
}
// remove删除
function remove1() {
	$("li").remove(".fruit");
}
// 清空所有 empty
function empty1() {
	$("body").empty();
}
// ready+bind
$(function() {
	$('#btn').bind('chilk', function() {
		$(this).attr("disabled", "true");
	})
	$('#name0001').bind('focus', function() {
		$(this).css("border", "4pt solid red")
	}).bind('blur', function() {
		$(this).css("border", "4pt solid blue")
	}) /* JQuery的链式书写 */
	$("#names").mouseover(function() {
		$(this).val("mouseover--已进入");
	});
	$("#names").mouseout(function() {
		$(this).val("mouseout--已退出");
	});
	$("#btn").hover(function() {
		$(this).val("已进入");
	}), function() {
		$(this).val("已退出");
	}

});
//
function position() {
	// $("button").bind("click",function(){
	$("#div01").animate({
		left : "+=100px",
	    top:"+=100px"
	}, 3000, function() {
		$("#div01").animate({
			left : "-=100px",
		      top:"-=100px"
		}, 3000);
	});
	// }
	// )
};
function position2() {
	// $("button").bind("click",function(){
	$("#div01").animate({
		left : "-=100px"
	}, 30);
	// })
};
//
function bs() {
	$("button").bind("click", function() {
		$("div").animate({
			width : "240px",
			heigth : "320px"
		}, 3000, function() {
			$("div").html("变大10倍");
		});
	})
};
function yingcang() {
	$("#p6").toggle("slow", function() {
		if ($("#p6")[0].style.display == "block") {
			// alert("显示成功");
			$("#p8").attr("value");
			$("#p8").attr("value", "显示");
		} else {
			// alert("影藏成功");
			$("#p8").attr("value");
			$("#p8").attr("value", "影藏");
		}
	});

}