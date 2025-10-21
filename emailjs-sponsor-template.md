# EmailJS スポンサー申し込みフォーム テンプレート

## テンプレート設定

### テンプレート名
`sponsor_application`

### From Email
`{{from_email}}` または設定済みのメールアドレス

### To Email
実行委員会のメールアドレス（例: tedx.tsushima.youth@example.com）

### Subject（件名）
```
【TEDx Tsushima Youth】スポンサー申し込み - {{name}}様
```

---

## EmailJS テンプレート本文

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TEDx Tsushima Youth 2025
スポンサー申し込み受付
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

新しいスポンサー申し込みがありました。

■ 申込者情報
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
氏名/法人名：{{name}}
ご担当者名：{{contact_name}}
メールアドレス：{{email}}
電話番号：{{phone}}

■ 支援内容
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{plans_detail}}

合計金額：{{total_amount}}円

■ PR用素材
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{logo}}

■ 当日来場者情報
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
氏名：{{visitor_name}}
連絡先：{{visitor_contact}}
アフターパーティー参加：{{afterparty_attend}}

■ 食物アレルギー等の特記事項
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{allergies}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
申込日時：{{submission_date}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

※このメールは自動送信されています。
※申込者への返信は担当者より別途行ってください。
```

---

## 自動返信テンプレート（オプション）

### テンプレート名
`sponsor_application_reply`

### To Email
`{{email}}`

### Subject（件名）
```
【TEDx Tsushima Youth】スポンサー申し込みを受け付けました
```

### 本文

```
{{name}} 様

この度は、TEDx Tsushima Youth 2025のスポンサーにお申し込みいただき、
誠にありがとうございます。

以下の内容で申し込みを受け付けました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ お申し込み内容
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
氏名/法人名：{{name}}

{{plans_detail}}

合計金額：{{total_amount}}円
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

担当者より2営業日以内に、お支払い方法や詳細についてご連絡させていただきます。
しばらくお待ちください。

ご不明な点がございましたら、下記までお気軽にお問い合わせください。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TEDx Tsushima Youth 実行委員会（岡山大学DS部）
電話：080-6305-4024
公式サイト：https://tedxhp.vercel.app/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

※このメールは自動送信されています。
※返信いただいても確認できませんので、お問い合わせは上記連絡先までお願いします。
```

---

## EmailJS パラメータマッピング

フォームから送信される際に使用するパラメータ名：

| フォームフィールド | EmailJSパラメータ名 | 説明 |
|------------------|-------------------|------|
| name | `name` | 氏名または法人名 |
| contact-name | `contact_name` | 法人の場合の担当者名 |
| email | `email` | メールアドレス |
| phone | `phone` | 電話番号 |
| - | `plans_detail` | 選択されたプランの詳細（複数行テキスト） |
| - | `total_amount` | 合計金額 |
| logo | `logo` | PR用ロゴや素材の情報 |
| visitor-name | `visitor_name` | 来場者氏名 |
| visitor-contact | `visitor_contact` | 来場者連絡先 |
| afterparty-attend | `afterparty_attend` | アフターパーティー参加有無 |
| allergies | `allergies` | 食物アレルギー等 |
| - | `submission_date` | 送信日時（自動生成） |

### plans_detail の形式例

```
🎨 会場装飾・ワークショップ費用支援
  口数：1口
  金額：25,000円

🍽 Speaker向けアフターパーティー支援
  口数：2口
  金額：50,000円
```

---

## EmailJS 設定手順

1. **EmailJSアカウント作成**
   - https://www.emailjs.com/ でアカウント作成

2. **メールサービス追加**
   - Gmail, Outlook等を連携

3. **メールテンプレート作成**
   - 上記のテンプレートを2つ作成（実行委員会宛、申込者宛）
   - テンプレートIDをメモ（例: `sponsor_application`, `sponsor_application_reply`）

4. **必要な情報**
   - Service ID: `service_xxxxxx`
   - Template ID: `sponsor_application`
   - Reply Template ID: `sponsor_application_reply` (オプション)
   - Public Key: `your_public_key`

5. **環境変数として保存**
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
   - `EMAILJS_REPLY_TEMPLATE_ID`
   - `EMAILJS_PUBLIC_KEY`

---

## JavaScript 実装例

フォームデータをEmailJS用に整形する関数：

```javascript
// プラン詳細を整形
const planNames = {
  'decoration': '🎨 会場装飾・ワークショップ費用支援',
  'afterparty': '🍽 Speaker向けアフターパーティー支援',
  'beverage': '💧 Speaker / Audience向け飲料支援'
};

// plans_detail の作成
let plansDetail = '';
data.plans.forEach(plan => {
  plansDetail += `${plan.name}\n`;
  plansDetail += `  口数：${plan.quantity}口\n`;
  plansDetail += `  金額：${plan.amount.toLocaleString()}円\n\n`;
});

// EmailJS送信用のパラメータ
const emailParams = {
  name: data.name,
  contact_name: data.contactName || 'なし',
  email: data.email,
  phone: data.phone,
  plans_detail: plansDetail.trim(),
  total_amount: data.totalAmount.toLocaleString(),
  logo: data.logo || '特になし',
  visitor_name: data.visitorName,
  visitor_contact: data.visitorContact,
  afterparty_attend: data.afterpartyAttend === 'yes' ? '参加する' : '参加しない',
  allergies: data.allergies || '特になし',
  submission_date: new Date().toLocaleString('ja-JP')
};
```
