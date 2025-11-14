from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = ["https://bob-app.onrender.com"]

app.add_middleware(CORSMiddleware, 
    allow_origins= origins,
    allow_headers= ["*"],
    allow_methods = ["*"],
    allow_credentials = True
)


@app.get("/")
async def home():
    return {"msg" : "*Test Backend FastAPI*: Ceci est mon 1er site déployé"}
