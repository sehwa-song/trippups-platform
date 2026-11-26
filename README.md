# TripPups

## 개발 서버 실행

Windows PowerShell 터미널을 두 개 열고 각각 프로젝트 루트에서 시작합니다.

### 프런트엔드

```powershell
Set-Location frontend
npm.cmd run dev
```

처음 실행할 때는 `frontend` 폴더에서 `npm.cmd ci`로 의존성을 설치합니다. 기본 주소는 `http://localhost:5173/`입니다.

### 백엔드

```powershell
Set-Location backend
.\.venv\Scripts\python.exe -m uvicorn app.main:app --reload
```

처음 실행할 때는 `backend` 폴더에서 가상환경을 만들고 의존성을 설치합니다.

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
```

서버 실행 후 `http://127.0.0.1:8000/health`에서 상태를 확인할 수 있습니다.
