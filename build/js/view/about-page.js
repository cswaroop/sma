define(["jquery","backbone","template-loader"],function(e,t,n){return t.View.extend({initialize:function(){this.template=n["about-page"]},render:function(t){return e(this.el).html(this.template()),this}})});