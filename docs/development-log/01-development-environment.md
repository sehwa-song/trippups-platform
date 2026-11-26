# 1단계 개발 환경 구축

2026년 11월 27일에 Windows PowerShell 환경에서 작업했습니다. 시작 시 저장소는 첫 커밋 전의 `main` 브랜치였으며, `origin`은 `https://github.com/sehwa-song/trippups-platform.git`으로 설정되어 있었습니다. 기존 프로젝트 파일은 없었습니다.

## 프런트엔드

프로젝트 루트에서 실행합니다. 의존성이 설치된 상태라면 `npm.cmd ci`를 생략할 수 있습니다. 검증에 사용한 버전은 Node.js `24.22.3`, npm `11.19.1`, React `19.3.1`, TypeScript `5.9.3`, Vite `8.4.0`입니다.

```powershell
Set-Location frontend
npm.cmd ci
npm.cmd run dev
```

개발 서버는 기본적으로 `http://localhost:5173/`에서 실행됩니다. `src/main.tsx`가 React를 HTML의 `root` 요소에 연결하고, `src/App.tsx`가 서비스명과 소개 문장을 표시합니다.

빌드하려면 `frontend/`에서 `npm.cmd run build`를 실행합니다. 이 명령은 TypeScript 검사 후 `dist/`에 정적 파일을 생성합니다. [Vite 공식 문서](https://vite.dev/guide/)

## 백엔드

별도의 PowerShell 터미널에서 프로젝트 루트를 기준으로 실행합니다. 검증에 사용한 버전은 Python `3.13.3`입니다. `.venv`와 의존성은 이 작업 폴더에 이미 준비되어 있습니다. 새 작업 폴더에서는 다음 명령으로 동일한 환경을 구성할 수 있습니다.

```powershell
Set-Location backend
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m uvicorn app.main:app --reload
```

`app/main.py`는 FastAPI 인스턴스와 `GET /health`를 정의합니다. Pydantic의 `HealthResponse` 모델은 응답의 `status` 필드를 `ok`로 제한합니다. 기본 주소는 `http://127.0.0.1:8000/health`입니다. [FastAPI 공식 문서](https://fastapi.tiangolo.com/ko/deployment/manually/)

## Firebase와 문서

`firebase/.env.example`에는 Firebase 웹 앱의 설정 항목을, `firebase/firestore.rules`에는 클라이언트 읽기와 쓰기를 차단하는 미배포 초안을 기록했습니다. Firebase 프로젝트 생성, 인증과 데이터베이스 연결, 보안 규칙 적용은 후속 단계의 작업입니다.

`docs/architecture/`에는 화면, API, 비즈니스 로직, 데이터 접근의 책임을 기록합니다. `docs/design-patterns/`에는 실제 기능에 적용한 패턴을 기록하고, `docs/development-log/`에는 단계별 개발 결과를 기록합니다.

## 검증 결과

| 항목 | 결과 |
| --- | --- |
| `npm.cmd run dev` | Vite가 `http://127.0.0.1:5173/`에서 HTTP 200을 반환했습니다. 브라우저에서 `TripPups` 제목과 한국어 소개 문장을 확인했습니다. |
| `npm.cmd run build` | TypeScript 검사와 Vite 빌드가 통과했습니다. `frontend/dist/`에 HTML, CSS, JavaScript가 생성되었습니다. |
| Uvicorn 및 `GET /health` | `http://127.0.0.1:8000/health`에서 HTTP 200과 `{"status":"ok"}`를 확인했습니다. |
| Python 의존성 | 가상환경에서 `pip check`를 통과했습니다. |
| Git 제외 규칙 | 로컬 환경 변수와 대표 자격 증명 파일명, 의존성 폴더, 빌드 결과가 제외되고 `firebase/.env.example`은 추적할 수 있는지 확인했습니다. |
