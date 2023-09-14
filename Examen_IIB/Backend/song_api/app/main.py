from fastapi import FastAPI
from src.Shared.ic import configure_ic
from src.Shared.api import api_router


configure_ic()
app = FastAPI(
    title="Song API", description="Song API", openapi_url="/openapi.json", docs_url="/"
)

app.include_router(api_router)
