from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.models.schemas import ContactRequest
from app.services.contact_service import process_contact_request
from fastapi.responses import RedirectResponse

app = FastAPI(
    title="Gabriel Saban Portfolio API",
    description="Backend API for Gabriel Saban's portfolio website",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.get("/")
def root():
    """Redirect to API documentation"""
    return {"message": "Welcome to Gabriel Saban's Portfolio API", "docs": "/docs"}

@app.get("/api/hello")
def read_root():
    return {"message": "Hello from Gabriel Saban's portfolio API"}

@app.post("/api/contact")
async def contact(request: ContactRequest):
    """
    Handle contact form submissions
    Processes the contact request and sends appropriate notifications
    """
    try:
        # Process the contact request using the service
        success = await process_contact_request(request)
        
        if not success:
            raise HTTPException(
                status_code=500, 
                detail="There was an issue processing your contact request"
            )
            
        return {"status": "success", "message": "Contact form submitted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 