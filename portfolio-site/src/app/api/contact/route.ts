import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'すべてのフィールドを入力してください' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.me.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

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

    const result = await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'メールが正常に送信されました' },
      { status: 200 }
    )
  } catch (error) {
    console.error('メール送信エラー:', error)
    return NextResponse.json(
      { error: 'メールの送信に失敗しました' },
      { status: 500 }
    )
  }
}
