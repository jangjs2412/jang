module.exports = {
    entry : {
        //app : 나중에 하나로 합쳐질 파일의 이름
        //ex) app
        app : './main.js',
    },
    //module : 웹팩의 핵심
    module : {},
    plugin : [],
    output : {
        filename:'[name].js',
        //ex) './dist'
        path:'./dist',
    },
};