---
sidebar_position: 4
---

# Test Planning

[テスト種別＆テスト観点カタログ](https://fintan.jp/page/1456/)に下記を加えてテスト方法や合格基準を決めています。

## Review

- テスト方法
  - 全成果物のピアレビュー
  - GitHub のブランチ設定で Approve なしでのマージを制限
  - 1 人以上の承認、全ての Conversation の Resolved がマージ条件
- 合格基準
  - 全 FB 対応済み

## Syntax check

- テスト方法
  - ESLint による静的解析と prettier による自動整形
- 合格基準
  - エラーなし

## Functional test

- テスト方法
  - 手動テスト
  - テストケース
- 合格基準
  - 全件合格、テストカバレッジ 100％

## Data compatibility test

対象なし。

## Business scenario test

機能テストと合わせて実施します。

## Configuration test

- テスト方法
  - Chrome,Edge,Safari での手動構成テスト
  - テストケース
- 合格基準
  - 全件合格、テストカバレッジ 100％

## Security test

- テスト方法
  - [React security best practice](https://snyk.io/jp/blog/10-react-security-best-practices/)のセルフチェック
  - [OWASP Top10 2023](https://owasp.org/API-Security/editions/2023/en/0x11-t10/)のセルフチェック
- 合格基準
  - 問題なし

## Pefromance test

- テスト方法
  - 同じスポットに 10 人参加した状態で 1.5 時間実行します。
  - テスト用アプリケーションでアクセス数を確保します。
    - テスト用アプリケーションでは UI を無くしプレイヤー操作のみを実施します。
  - 手元の PC でアプリケーションの合格基準を目視で判断します。
  - アプリケーションの CPU 使用率/メモリ使用量を監視してデータから合格基準を判断します。
- 合格基準
  - アプリケーションのフレーム落ちや停止が発生しないこと
  - アプリケーションの CPU 使用率/メモリ使用量が一定の範囲に収まり、メモリリーク等の問題がないこと

## Stress test

性能テストと合わせて実施します。

## Volume test

対象なし。

## Long run test

性能テストと合わせて実施します。

## Failure test

- テスト方法
  - 手動テスト
    - 障害事象を手動で発生させる
- 合格基準
  - 全件合格

## Operational scenario test

本番運用しないため未実施です。

## Migration test

次のような観点がありますがリリースしないため未実施です。

- 次のバージョンと現行のバージョンが本番環境で動作すること
- バージョンアップできること

## Current vs. new comparison test

対象なし。

## Usability test

サンプルアプリケーションのため未実施です。
