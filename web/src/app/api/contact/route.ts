import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const getErrorCode = (error: unknown): string => {
  if (typeof error === 'object' && error !== null && 'code' in error) {
    const { code } = error as { code?: unknown }
    if (typeof code === 'string') return code
    if (code !== undefined) return String(code)
  }
  return 'NO_CODE'
}

export async function POST(request: NextRequest) {
  try {
    console.log('=== メール送信API開始 ===')
    const { name, email, subject, message } = await request.json()
    console.log('受信データ:', { name, email, subject, message })

    if (!name || !email || !subject || !message) {
      console.log('バリデーションエラー: 必須フィールドが不足')
      return NextResponse.json(
        { error: 'すべてのフィールドを入力してください' },
        { status: 400 }
      )
    }

    // 環境変数の確認
    console.log('環境変数確認:')
    console.log('EMAIL_USER:', process.env.EMAIL_USER ? '設定済み' : '未設定')
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '設定済み' : '未設定')
    console.log('CONTACT_EMAIL:', process.env.CONTACT_EMAIL ? '設定済み' : '未設定')

    console.log('トランスポーター作成中...')
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
    console.log('トランスポーター作成完了')

    // 接続テスト
    try {
      console.log('SMTP接続テスト開始...')
      await transporter.verify()
      console.log('SMTP接続テスト成功')
    } catch (verifyError) {
      console.error('SMTP接続テスト失敗:', verifyError)
      throw verifyError
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
      subject: `ポートフォリオサイトからのお問い合わせ: ${subject}`,
      html: `
        <h2>ポートフォリオサイトからお問い合わせがありました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>件名:</strong> ${subject}</p>
        <p><strong>メッセージ:</strong></p>
        <div style="border: 1px solid #ddd; padding: 15px; margin-top: 10px; border-radius: 5px;">
          ${message.replace(/\n/g, '<br>')}
        </div>
      `,
    }

    // メール送信
    console.log('メール送信開始...')
    console.log('メール設定:', {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
      subject: mailOptions.subject
    })
    
    const result = await transporter.sendMail(mailOptions)
    console.log('メール送信成功:', result.messageId)

    return NextResponse.json(
      { message: 'メールが正常に送信されました', messageId: result.messageId },
      { status: 200 }
    )
  } catch (error) {
    console.error('=== メール送信エラー詳細 ===')
    console.error('完全なエラー:', error)
    
  const errorMessage = error instanceof Error ? error.message : 'Unknown error'
  const errorCode = getErrorCode(error)
    
    console.error('エラーメッセージ:', errorMessage)
    console.error('エラーコード:', errorCode)
    
    return NextResponse.json(
      { 
        error: 'メールの送信に失敗しました',
        details: errorMessage,
        code: errorCode 
      },
      { status: 500 }
    )
  }
}
