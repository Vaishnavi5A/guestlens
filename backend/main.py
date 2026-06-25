from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from routes.reviews import router as reviews_router
import os

load_dotenv()

app = FastAPI(
    title="GuestLens API",
    description="AI-powered guest review intelligence for eco-homestays",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(reviews_router, prefix="/api")

@app.get("/")
def root():
    return {"message": "GuestLens API is running!", "version": "1.0.0"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}