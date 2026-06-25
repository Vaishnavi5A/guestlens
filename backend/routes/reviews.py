from fastapi import APIRouter, HTTPException
from models.review import ReviewCreate, ReviewUpdate
from data.store import reviews_db
from datetime import datetime
import uuid

router = APIRouter()

# Endpoint 1: GET all reviews
@router.get("/reviews")
def get_all_reviews():
    return {"status": "success", "data": reviews_db, "count": len(reviews_db)}

# Endpoint 2: GET single review by ID
@router.get("/reviews/{review_id}")
def get_review(review_id: str):
    review = next((r for r in reviews_db if r["id"] == review_id), None)
    if not review:
        raise HTTPException(status_code=404, detail=f"Review with id '{review_id}' not found")
    return {"status": "success", "data": review}

# Endpoint 3: POST create review
@router.post("/reviews", status_code=201)
def create_review(review: ReviewCreate):
    new_review = {
        "id": str(uuid.uuid4())[:8],
        "guest_name": review.guest_name,
        "homestay": review.homestay,
        "rating": review.rating,
        "review_text": review.review_text,
        "sentiment": review.sentiment,
        "created_at": datetime.now().isoformat()
    }
    reviews_db.append(new_review)
    return {"status": "success", "message": "Review created", "data": new_review}

# Endpoint 4: PUT update review
@router.put("/reviews/{review_id}")
def update_review(review_id: str, updated: ReviewUpdate):
    review = next((r for r in reviews_db if r["id"] == review_id), None)
    if not review:
        raise HTTPException(status_code=404, detail=f"Review with id '{review_id}' not found")
    if updated.guest_name:  review["guest_name"] = updated.guest_name
    if updated.homestay:    review["homestay"] = updated.homestay
    if updated.rating:      review["rating"] = updated.rating
    if updated.review_text: review["review_text"] = updated.review_text
    if updated.sentiment:   review["sentiment"] = updated.sentiment
    return {"status": "success", "message": "Review updated", "data": review}

# Endpoint 5: DELETE review
@router.delete("/reviews/{review_id}", status_code=204)
def delete_review(review_id: str):
    review = next((r for r in reviews_db if r["id"] == review_id), None)
    if not review:
        raise HTTPException(status_code=404, detail=f"Review with id '{review_id}' not found")
    reviews_db.remove(review)
    return None

# Endpoint 6: GET search reviews
@router.get("/reviews/search/query")
def search_reviews(q: str = "", homestay: str = "", sentiment: str = ""):
    results = reviews_db
    if q:
        results = [r for r in results if q.lower() in r["review_text"].lower() or q.lower() in r["guest_name"].lower()]
    if homestay:
        results = [r for r in results if homestay.lower() in r["homestay"].lower()]
    if sentiment:
        results = [r for r in results if r["sentiment"] == sentiment]
    if not results:
        raise HTTPException(status_code=404, detail="No reviews found matching the criteria")
    return {"status": "success", "data": results, "count": len(results)}