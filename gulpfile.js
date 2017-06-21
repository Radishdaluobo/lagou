/**
 * Created by bxq on 2017/4/22.
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();//通过引入这个模块，其他的模块可以直接通过$来引用，就不需通过声明来引用。
                                        // 需要实例化，所以加一个括号，调用这个函数
var open = require('open');

var app = {
    srcPath: 'src/',     //源代码放置的位置
    devPath: 'build/',   //整合之后开发环境放置的目录
    prdPath: 'dist/'      //用于生产部署放置的目录
};

gulp.task('lib',function(){ //lib是任务名字
    gulp.src('bower_components/**/*.js')   //*是对这个文件夹下所有的子文件进行深度遍历
    .pipe(gulp.dest(app.devPath + 'vendor'))  //拷贝到新路径下重新命名为vendor
    .pipe(gulp.dest(app.prdPath + 'vendor'))
    .pipe($.connect.reload());
})  //在控制台用 gulp.任务名 可以执行该任务

gulp.task('html',function(){
    gulp.src(app.srcPath + '**/*.html')
    .pipe(gulp.dest(app.devPath))
    .pipe(gulp.dest(app.prdPath))
    .pipe($.connect.reload());
})

gulp.task('json',function(){
    gulp.src(app.srcPath + 'data/**/*.json')
    .pipe(gulp.dest(app.devPath + 'data'))
    .pipe(gulp.dest(app.prdPath + 'data'))
    .pipe($.connect.reload());
})

gulp.task('less',function(){
    gulp.src(app.srcPath + 'style/index.less')
    .pipe($.plumber())
    .pipe($.less())    //因为上面引用了gulp-load-plugins模块，其他的模块可以直接通过$来引用，就不需通过声明来引用
    .pipe(gulp.dest(app.devPath + 'css'))
    .pipe($.cssmin())
    .pipe(gulp.dest(app.prdPath + 'css'))
    .pipe($.connect.reload());
})

gulp.task('js',function(){
    gulp.src(app.srcPath + 'script/**/*.js')
    .pipe($.plumber())
    .pipe($.concat('index.js'))  //合并生成index.js这样的文件
    .pipe(gulp.dest(app.devPath + 'js'))
    .pipe($.uglify())   //压缩发布到生产环境
    .pipe(gulp.dest(app.prdPath + 'js'))
    .pipe($.connect.reload());
})

gulp.task('image',function(){
    gulp.src(app.srcPath + 'image/**/*')
    .pipe(gulp.dest(app.devPath + 'image'))
    .pipe($.imagemin())
    .pipe(gulp.dest(app.prdPath + 'image'))
    .pipe($.connect.reload());
})

//写一个总的任务，把合并 压缩 发布合并起来,打包整个任务，只需要执行build任务就行
gulp.task('build',['image','js','less','lib','html','json']);


//每次发布的时候需要把之前的目录清除，避免旧的文件对当前项目造成影响，需要编写清除的任务
gulp.task('clean',function(){
    gulp.src([app.devPath,app.prdPath])
    .pipe($.clean());
})


//起服务器
gulp.task('serve',['build'],function(){
    $.connect.server({
        root: [app.devPath],  //从哪个路径开始读取，默认从开发目录读取
        livereload:true,   //自动刷新浏览器。ie8一下不支持
        port:1234
    })

    open('http://localhost:1234');  //启动服务器后自动打开网址

    //希望自动编译，自动执行任务，然后自动刷新浏览器
    gulp.watch('bower_components/**/*',['lib']);
    gulp.watch(app.srcPath + '**/*.html', ['html']);
    gulp.watch(app.srcPath + 'data/**/*.json',['json']);
    gulp.watch(app.srcPath + 'style/**/*.less',['less']);
    gulp.watch(app.srcPath + 'script/**/*.js',['js']);
    gulp.watch(app.srcPath + 'image/**/*',['image']);    //构建完成之后实时预览，需在每个任务后添加connect属性

})

//定义一个默认任务，输入gulp直接执行default,依赖于serve
gulp.task('default',['serve']);