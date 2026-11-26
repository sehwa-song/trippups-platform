from typing import Literal

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="TripPups API")


class HealthResponse(BaseModel):
    status: Literal["ok"]


@app.get("/health", response_model=HealthResponse)
async def health() -> HealthResponse:
    return HealthResponse(status="ok")
