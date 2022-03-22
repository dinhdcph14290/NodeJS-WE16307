# NodeJS-WE16307
Nodejs - SETUP ENVIROMENT
Cài đặt môi trường
1. Download và cài đặt node js
2. Cài đặt file package.json 
            npm init -y
3. Tạo file app.js trong thư mục gốc
4. Vào file package.json thay đổi main thành "main": "app.js"
5. Cài đặt nodemon (công cụ giúp ứng dụng node được tự động restart khi có sự thay đổi)
    npm i -g nodemon
    npm i --save-dev nodemon
6. Cài đặt thư viện express
            npm i express
7. Cài đặt babel
            npm i --save-dev nodemon babel-cli babel-preset-env babel-preset-stage-0
8. Tạo file .babelrc trong thư mục gốc rồi thêm code bên dưới
            { "presets": ["env","stage-0"] }
9. Vào file package.json thiết lập lại câu lệnh start
    "scripts": {
        "start": "nodemon app.js --exec babel-node -e js"
    },
    trường hợp start lỗi: npm i -g babel-cli
Setup mongodb & Robo3T
1.Download MongoDB Community https://www.mongodb.com/try/download/community
2.Download GUI Robo3T (không phải Studio Robo3T) https://robomongo.org/