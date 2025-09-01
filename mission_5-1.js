// 1. APIのURLを定義
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// 2. fetch()を使ってデータを取得する
fetch(apiUrl)
    .then(response => {
        // 3. レスポンスが正常かチェックし、JSONに変換する
        if (!response.ok) {
            throw new Error('ネットワークエラーが発生しました。');
        }
        return response.json();
    })
    .then(users => {
        // 4. 取得したユーザーデータをHTMLに表示する
        const userListElement = document.getElementById('user-list');
        
        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user-card');
            
            const userName = document.createElement('h2');
            userName.textContent = user.name;

            const userEmail = document.createElement('p');
            userEmail.textContent = `Email: ${user.email}`;

            // ユーザー情報をカードに追加
            userDiv.appendChild(userName);
            userDiv.appendChild(userEmail);
            
            // HTMLの指定した場所に挿入
            userListElement.appendChild(userDiv);
        });
    })
    .catch(error => {
        // 5. エラーが発生した場合の処理
        console.error('データの取得中にエラーが発生しました:', error);
        const userListElement = document.getElementById('user-list');
        userListElement.textContent = 'データの読み込みに失敗しました。';
    });