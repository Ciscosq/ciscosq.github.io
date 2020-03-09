<script src="<%- node_modules.typed.js.lib.typed   %>"></script> //引入js文件
<script>
var options = {
    strings: [' <%- config.description %>', ' <%- config.descriptionEN %>'],
    typeSpeed: 120, //打印的速度。数值越大，速度越慢
    loop: true, //开启循环
    loopCount: Infinity, //设置循环次数，值为：Infinity，也可以使用数值
    backSpeed: 20, //延迟时间后才后退，值越大，延迟的时间就越长
    cursorChar: '^' //光标的符号，比如：
};
var typed = new Typed('#description', options);
</script>
