from pydantic import BaseModel, Field
from typing import Optional

class ReviewCreate(BaseModel):
    guest_name: str
    homestay: str
    rating: int = Field(..., ge=1, le=5)
    review_text: str
    sentiment: Optional[str] = "neutral"

class ReviewUpdate(BaseModel):
    guest_name: Optional[str] = None
    homestay: Optional[str] = None
    rating: Optional[int] = Field(None, ge=1, le=5)
    review_text: Optional[str] = None
    sentiment: Optional[str] = None