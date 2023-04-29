const path = require("path");
module.exports = {

    name : 'React-webpack-setting', // 웹팩 설정 이름
    mode : 'development', //실서비스 : Production
    devtool : 'eval',
    resolve : {
        extensions : ['.js', '.jsx']
    },
    entry:{ // 합쳐질 파일 요소들 입력
        app : ['./src/index.jsx'], 
    },
    output:{// 최종적으로 만들어질 js
        path: path.join(__dirname, '/build'), //빌드 위치
        filename : 'app.js'  //웹팩 빌드 후 최종적으로 만들어질 파일
    },
    module : { //모듈 연결 설정
        rules : [{
            test: /\.jsx?/, // 대상 설정 정규식
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
        }],
    },
};

/*
- module.exports = {} : 선언된 객체를 모듈로 출력
- entry : 사용될 js (배열을 이용한 복수설정)
- output :  합쳐질 결과물에 대한 설정
- module : 모듈 설정
- plugins : 플러그인 활용

*/
