from datetime import datetime

reviews_db = [
    {
        "id": "1",
        "guest_name": "Vaishnavi Rudrappa Gari",
        "homestay": "Green Valley Eco Stay",
        "rating": 5,
        "review_text": "Amazing experience! The nature trails were breathtaking and the hosts were incredibly warm.",
        "sentiment": "positive",
        "created_at": datetime(2025, 6, 1).isoformat()
    },
    {
        "id": "2",
        "guest_name": "Pavan Kalyan",
        "homestay": "Riverside Bamboo Hut",
        "rating": 3,
        "review_text": "Good location but the facilities were basic. Expected better amenities for the price.",
        "sentiment": "neutral",
        "created_at": datetime(2025, 6, 5).isoformat()
    },
    {
        "id": "3",
        "guest_name": "Brahmini Gorava",
        "homestay": "Green Valley Eco Stay",
        "rating": 4,
        "review_text": "Peaceful retreat with beautiful surroundings. Food was organic and delicious!",
        "sentiment": "positive",
        "created_at": datetime(2025, 6, 10).isoformat()
    }
]