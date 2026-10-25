import uuid
from datetime import date, datetime
from sqlmodel import Field, Relationship, SQLModel

from .contact import Contact
from .company import Company





class ListingBase(SQLModel):
    title: str
    description: str
    created_at: datetime = Field(default_factory=lambda: datetime.now())
    start_date: date = Field()

class Listing(ListingBase, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)

    company_id : uuid.UUID | None = Field(foreign_key="company.id")
    company: Company | None = Relationship(back_populates="listings")

    contact_id: uuid.UUID | None = Field(foreign_key="contact.id")
    contact: Contact | None = Relationship(back_populates="listings")

class ListingWithRelated(ListingBase):
    id: uuid.UUID
    company: Company # Explicit definition to inline it
    contact: Contact # Explicit definition to inline it
