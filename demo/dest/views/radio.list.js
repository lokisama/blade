define(["View",getViewTemplatePath("radio.list"),"UIRadioList"],function(a,b,c){return _.inherit(a,{onCreate:function(){this.$el.html(b)},events:{"click .demo1":"demo1","click .demo-input1":"demo_input1","click .demo-input2":"demo_input2","click .demo-input3":"demo_input3","click .demo2":"demo2","click .demo3":"demo3"},demo_input1:function(){this.demo1()},demo_input2:function(){this.demo2()},demo_input3:function(){this.demo3()},demo1:function(){if(!this.radio1){var a=[{id:"华语"},{id:"欧美"},{id:"工作学习"},{id:"粤语"},{id:"轻音乐"},{id:"咖啡"}],b=this;this.radio1=new c({datamodel:{title:"豆瓣fm",data:a},displayNum:5,selectId:4,index:4,onClick:function(a,c){0,b.$(".demo-input1").val(c.id),this.hide()}})}this.radio1.show()},demo2:function(){if(!this.radio2){var a=[{id:"红茶"},{id:"绿茶"},{id:"菊花茶"},{id:"茉莉茶"},{id:"铁观音"},{id:"乌龙茶"},{id:"奶茶"},{id:"打奶茶"}],b=this;this.radio2=new c({datamodel:{title:"茶",data:a},events:{"click .cui-select-view> li":"myClickAction"},myClickAction:function(a){var c=$(a.target),d=c.attr("data-index");this.setIndex(d),b.$(".demo-input2").val(this.getSelected().id),0,this.hide()}})}this.radio2.show()},demo3:function(){if(this.radio3&&(this.radio3.$el.next(".cui-mask").detach(),this.radio3.$el.detach(),this.radio3=null),!this.radio3){var a=[{id:"红茶"},{id:"绿茶"},{id:"菊花茶"},{id:"茉莉茶"},{id:"铁观音"},{id:"乌龙茶"},{id:"奶茶"},{id:"打奶茶"}],b=[{id:"冰红茶"},{id:"冰绿茶"},{id:"玫瑰花茶"},{id:"薄荷茶"}],d=this,e={title:"set茶",data:b};this.radio3=new c({datamodel:{title:"1秒改变茶",data:a},onClick:function(a,b){d.$(".demo-input3").val(b.id),this.hide()}})}this.radio3.show(),setTimeout(function(){this.radio3.setDatamodel(e)}.bind(this),1e3)},onPreShow:function(){this.turning()},onShow:function(){},onHide:function(){}})});