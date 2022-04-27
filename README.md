# AWS Lambda 上で express を利用して MVC ライクな軽量フレームワークをテストする

## 技術要件

- [Serverless Express by Vendia](https://github.com/vendia/serverless-express)
- [serverless](https://www.serverless.com/)
- [Prettier](https://prettier.io/)

## 初期化

serverless モジュールインスール

```shell
$ npm -g install serverless
```

```shell
$ git clone https://github.com/ys-office-llc/Node.js-serverless-express-lambda
$ npm install
```

## 環境構築

### ローカル

```shell
$ npm start
```

### デプロイ

```shell
$ sls deploy
```

## テスト

```shell
curl https://{apiId}.execute-api.ap-northeast-1.amazonaws.com/dev/
curl https://{apiId}.execute-api.ap-northeast-1.amazonaws.com/dev/users
```

## 参考情報
- [serverless-expressでAPI GatewayからLambdaを実行する](https://zenn.dev/yuta_saito/articles/8b543a1957c375593ee5)
