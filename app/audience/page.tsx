'use client'

import { useState } from 'react'
import styles from './page.module.css'

interface Member {
  id: number
  name: string
}

export default function AudiencePage() {
  const [members, setMembers] = useState<Member[]>([])
  const [memberCount, setMemberCount] = useState(0)
  const [showPartyAttendees, setShowPartyAttendees] = useState(false)
  const [partyCount, setPartyCount] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const addMember = () => {
    const newId = memberCount + 1
    setMemberCount(newId)
    setMembers([...members, { id: newId, name: '' }])
  }

  const removeMember = (id: number) => {
    setMembers(members.filter(m => m.id !== id))
  }

  const updateMemberName = (id: number, name: string) => {
    setMembers(members.map(m => m.id === id ? { ...m, name } : m))
  }

  const totalPeople = members.length + 1
  const partyTotal = partyCount * 5000

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      rep_name: formData.get('rep_name'),
      rep_email: formData.get('rep_email'),
      rep_phone: formData.get('rep_phone'),
      members: members.map(m => m.name).join(', '),
      photo_permission: formData.get('photo_permission'),
      after_party: formData.get('after_party'),
      party_count: showPartyAttendees ? partyCount : 0
    }

    try {
      const response = await fetch('/api/audience', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setMessage({ type: 'success', text: 'お申し込みありがとうございます。' })
        e.currentTarget.reset()
        setMembers([])
        setMemberCount(0)
        setShowPartyAttendees(false)
        setPartyCount(1)
      } else {
        throw new Error('送信失敗')
      }
    } catch {
      setMessage({ type: 'error', text: '送信に失敗しました。時間をおいて再度お試しください。' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">オーディエンス参加申込</h1>
          <p className="page-subtitle">TEDx Tsushima Youth 2025 会場参加フォーム</p>
        </div>
      </section>

      <section className={styles.registrationForm}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formSection}>
            <h3>代表者情報</h3>
            <div className={styles.formGroup}>
              <label htmlFor="rep-name">代表者氏名 <span className={styles.required}>*</span></label>
              <input type="text" id="rep-name" name="rep_name" required placeholder="山田 太郎" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="rep-email">メールアドレス <span className={styles.required}>*</span></label>
              <input type="email" id="rep-email" name="rep_email" required placeholder="example@email.com" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="rep-phone">電話番号 <span className={styles.required}>*</span></label>
              <input type="tel" id="rep-phone" name="rep_phone" required placeholder="090-1234-5678" />
            </div>
          </div>

          <div className={styles.formSection}>
            <h3>参加メンバー</h3>
            <p className={styles.formNote}>代表者以外に参加される方がいる場合は、下記から追加してください。</p>

            <div className={styles.membersContainer}>
              {members.map((member, index) => (
                <div key={member.id} className={styles.memberEntry}>
                  <h4>追加メンバー {index + 1}</h4>
                  <button type="button" className={styles.removeMember} onClick={() => removeMember(member.id)}>×</button>
                  <div className={styles.formGroup}>
                    <label>氏名 <span className={styles.required}>*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="氏名"
                      value={member.name}
                      onChange={(e) => updateMemberName(member.id, e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button type="button" className={styles.addMemberBtn} onClick={addMember}>+ メンバーを追加</button>
          </div>

          <div className={styles.formSection}>
            <h3>写真撮影について</h3>
            <div className={styles.formGroup}>
              <label>イベント中の写真撮影・SNS等への掲載について <span className={styles.required}>*</span></label>
              <div className={styles.radioGroup}>
                <label className={styles.radioOption}>
                  <input type="radio" name="photo_permission" value="ok" required />
                  撮影・掲載OK
                </label>
                <label className={styles.radioOption}>
                  <input type="radio" name="photo_permission" value="no-face" />
                  顔が映らなければOK
                </label>
                <label className={styles.radioOption}>
                  <input type="radio" name="photo_permission" value="ng" />
                  撮影・掲載NG
                </label>
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <h3>アフターパーティ</h3>
            <div className={styles.formGroup}>
              <label>アフターパーティへの参加 <span className={styles.required}>*</span></label>
              <div className={styles.radioGroup}>
                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="after_party"
                    value="yes"
                    required
                    onChange={() => setShowPartyAttendees(true)}
                  />
                  参加する
                </label>
                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="after_party"
                    value="no"
                    onChange={() => setShowPartyAttendees(false)}
                  />
                  参加しない
                </label>
              </div>
              <div className={styles.partyInfo}>
                <strong>参加費：1人 5,000円</strong><br />
                イベント終了後、スピーカーや参加者との交流会を予定しています。
              </div>
            </div>

            {showPartyAttendees && (
              <div>
                <div className={styles.formGroup}>
                  <label htmlFor="party-count">アフターパーティ参加人数</label>
                  <select
                    id="party-count"
                    value={partyCount}
                    onChange={(e) => setPartyCount(parseInt(e.target.value))}
                  >
                    {Array.from({ length: totalPeople }, (_, i) => i + 1).map(num => (
                      <option key={num} value={num}>
                        {num === 1 ? '1人（代表者のみ）' : `${num}人`}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.totalDisplay}>
                  <p>アフターパーティ参加費合計</p>
                  <p className={styles.amount}>¥{partyTotal.toLocaleString()}</p>
                </div>
              </div>
            )}
          </div>

          <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
            {isSubmitting ? '送信中...' : '申込を送信する'}
          </button>
        </form>

        {message && (
          <div className={`${styles.formMessage} ${styles[message.type]}`}>
            {message.text}
          </div>
        )}
      </section>
    </main>
  )
}
