const express = require('express');
const app = express();
const port = 8080;
const methodOverride = require('method-override')

// server.js에서 css파일을 사용하기 위한 코드 
// .css .js .jpg 파일들은 보통 static파일들 이라고 한다.
app.use(express.static(__dirname + "/public"));


// html 파일에 데이터를 넣고 싶으면 .ejs 파일로 만들면 가능.
app.set("view engine", "ejs");
// 요청.body 사용할려면 필수
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));



app.listen(port, () => {
    try{
        console.log("localhost:" + port + " 로 서버가 실행중....");
    } catch(e){
        console.log('서버연결 실패...')
    }
    
})



//blog main 페이지 엔드포인트
app.get('/', (req,res) => {
    res.render('main/main.ejs')
})




