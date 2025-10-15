# GitHub Pages デプロイメント設定

## 手動設定が必要です

GitHub Pagesを有効にするため、以下の手順に従ってください：

### 1. リポジトリ設定へアクセス
1. GitHubのリポジトリページに移動
2. 「Settings」タブをクリック

### 2. GitHub Pages設定
1. 左サイドバーで「Pages」をクリック
2. 「Source」セクションで「GitHub Actions」を選択
3. 「Save」をクリック

### 3. Actions権限設定
1. 左サイドバーで「Actions」→「General」をクリック
2. 「Workflow permissions」セクションで「Read and write permissions」を選択
3. 「Allow GitHub Actions to create and approve pull requests」にチェック
4. 「Save」をクリック

### 4. デプロイメント確認
- 設定完了後、masterブランチへのプッシュで自動デプロイが開始されます
- 「Actions」タブでワークフローの実行状況を確認できます
- デプロイ完了後、`https://[username].github.io/[repository-name]`でサイトにアクセス可能

## トラブルシューティング

### よくあるエラー
- **"Resource not accessible by integration"**: Actions権限が不足しています。上記の手順3を確認してください
- **"Get Pages site failed"**: Pages設定が無効です。上記の手順2を確認してください

### 確認事項
- リポジトリがpublicであること（privateの場合はGitHub Pro以上が必要）
- masterブランチにindex.htmlが存在すること
- GitHub ActionsがリポジトリでONになっていること