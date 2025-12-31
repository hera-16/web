// ブラウザのコンソールで実行できるメール送信テスト関数

// 基本的なテスト関数
window.testEmailSend = async function(testData = {}) {
  const defaultData = {
    name: 'テストユーザー',
    email: 'test@example.com',
    subject: 'テストメール',
    message: 'これはテストメッセージです。'
  };
  
  const data = { ...defaultData, ...testData };
  
  console.log('=== メール送信テスト開始 ===');
  console.log('送信データ:', data);
  console.log('現在時刻:', new Date().toLocaleString());
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    console.log('レスポンスステータス:', response.status);
    console.log('レスポンスヘッダー:', Object.fromEntries(response.headers.entries()));
    
    const result = await response.json();
    console.log('レスポンスボディ:', result);
    
    if (response.ok) {
      console.log('✅ メール送信成功!');
      return { success: true, data: result };
    } else {
      console.log('❌ メール送信失敗:', result.error);
      return { success: false, error: result };
    }
  } catch (error) {
    console.error('❌ リクエスト送信エラー:', error);
    return { success: false, error: error.message };
  }
};

// 環境変数をチェックする関数
window.checkEmailConfig = async function() {
  console.log('=== 環境変数チェック ===');
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: '',
        email: '',
        subject: '',
        message: ''
      }),
    });
    
    const result = await response.json();
    console.log('設定チェック結果:', result);
    
    // サーバーのログを確認するようにユーザーに案内
    console.log('詳細なサーバーログは、ターミナル（npm run dev実行中）で確認してください。');
    
  } catch (error) {
    console.error('設定チェックエラー:', error);
  }
};

// 使用方法の表示
console.log(`
=== メール送信デバッグコマンド ===

1. 基本テスト:
   testEmailSend()

2. カスタムデータでテスト:
   testEmailSend({
     name: 'あなたの名前',
     email: 'your@email.com',
     subject: 'カスタム件名',
     message: 'カスタムメッセージ'
   })

3. 環境変数チェック:
   checkEmailConfig()

実行後は、ブラウザのコンソールとターミナル（npm run dev）の両方でログを確認してください。
`);