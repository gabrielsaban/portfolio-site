from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List

class ContactRequest(BaseModel):
    """Schema for contact form submission"""
    name: str = Field(..., min_length=2, max_length=100)
    email: str = Field(..., min_length=5, max_length=100)  # Using str instead of EmailStr for simpler dependencies
    message: str = Field(..., min_length=10, max_length=1000)

class ProjectBase(BaseModel):
    """Base schema for project data"""
    title: str
    description: str
    image_url: str
    technologies: List[str]
    project_url: Optional[str] = None
    github_url: Optional[str] = None

class ProjectResponse(ProjectBase):
    """Schema for returning project data"""
    id: int

class ServiceBase(BaseModel):
    """Base schema for service data"""
    title: str
    description: str
    icon: str  # SVG string or icon identifier

class ServiceResponse(ServiceBase):
    """Schema for returning service data"""
    id: int 