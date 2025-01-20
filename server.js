const express = require('express');
const app = express();
const port = 8080;


app.listen(port, () => {
    try{
        console.log("localhost:" + port + " 로 서버가 실행중....");
    } catch(e){
        console.log('서버연결 실패...')
    }
    
})



//blog main 페이지 엔드포인트
app.get('/', (req,res) => {
    res.json({message: '메인페이지 입니다...'})
})
