# Firebase 연결 준비

Firebase Authentication은 회원가입과 로그인에, Cloud Firestore는 사용자와 여행 데이터 저장에 사용할 예정입니다. Firebase 프로젝트 생성, SDK 초기화, 인증과 데이터베이스 연결은 후속 단계에서 진행합니다.

- `.env.example`은 Firebase 웹 앱 설정 항목을 기록합니다. 연결 단계에서 `frontend/.env.local`로 복사한 뒤 해당 프로젝트의 값으로 채웁니다. `VITE_` 변수는 브라우저 번들에 노출되므로 서버 비밀값을 넣지 않습니다.
- `firestore.rules`는 클라이언트 읽기와 쓰기를 모두 차단하는 초안입니다. 현재 배포되지 않았습니다. 데이터 모델과 접근 권한이 정해지면 규칙을 작성하고 검증한 뒤 적용합니다. [Cloud Firestore 보안 규칙 공식 문서](https://firebase.google.com/docs/firestore/security/get-started?hl=ko)
- 서비스 계정 키가 필요한 경우 JSON 파일은 저장소 밖에 보관합니다. Git은 예제 파일을 제외한 로컬 `.env` 파일과 일반적인 서비스 계정 키 파일명을 무시합니다.
