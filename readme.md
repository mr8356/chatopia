# Chatopia - 친구와 채팅 서비스

## 사용 기술
- NestJS
- Vue.js
- Socket.IO
- MongoDB


## 프론트엔드 서버 실행 (VueJS)
```
cd chatopia-fe/
npm i
npm run serve
```

## 백엔드 서버 실행 (NestJS)
```
cd chatopia-be/
npm i
npm run start
```

## 기능
- 사용자 인증 (로그인/로그아웃)
- 친구 추가/삭제
- 친구 목록 조회
- 채팅 메시지 전송/수신

## 백엔드 구조
```
├── src/
│   ├── auth/
│   │   ├── dto/
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   └── auth.service.ts
│   ├── chat/
│   │   ├── dto/
│   │   ├── chat.controller.ts
│   │   ├── chat.gateway.ts
│   │   ├── chat.module.ts
│   │   └── chat.service.ts
│   ├── user/
│   │   ├── dto/
│   │   ├── user.controller.ts
│   │   ├── user.module.ts
│   │   └── user.service.ts
│   ├── app.module.ts
│   ├── app.controller.ts
│   └── main.ts
├── test/
├── package.json
└── tsconfig.json
```


## 공동 루트
