from fastapi import APIRouter, Depends, HTTPException, Query
from sqlmodel import select
from uuid import UUID

from ..models.listing import Listing, ListingWithRelated
from ..db import get_session, Session


router = APIRouter()

@router.get("/listings", tags=["listings"])
async def get_listings(
    session: Session = Depends(get_session),
    offset: int = 0,
    limit: int = Query(default=100, le=100),
) -> list[ListingWithRelated]:
    listings = session.exec(select(Listing).offset(offset).limit(limit)).all()
    return listings

@router.get("/listings/{listing_id}", tags=["listings"])
async def get_listing(
    listing_id: UUID,
    session: Session = Depends(get_session),
) -> ListingWithRelated:
    listing = session.get(Listing, listing_id)
    if not listing:
           raise HTTPException(status_code=404, detail="Listing not found")
    return listing


