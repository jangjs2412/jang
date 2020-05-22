const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req,res) => {
    res.send([
        {
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/1',
            'name' : '장재용',
            'birthday' : '93XXXX',
            'gender' : '남자',
            'job' : '회사원',
        },
        {
            'id' : 2,
            'image' : 'https://placeimg.com/64/64/2',
            'name' : '김철수',
            'birthday' : '91XXXX',
            'gender' : '남자',
            'job' : '프리랜서',
        },
        {
            'id' : 3,
            'image' : 'https://placeimg.com/64/64/3',
            'name' : '이영희',
            'birthday' : '92XXXX',
            'gender' : '여자',
            'job' : '대학생',
        },
    ])
})

app.listen(port, () => console.log(`Listening on port ${port}`));