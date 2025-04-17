from app.models.schemas import ContactRequest
from app.utils.email_utils import send_contact_notification, send_confirmation_email
import logging

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

async def process_contact_request(contact_data: ContactRequest) -> bool:
    """
    Processes a contact form submission by:
    1. Sending notification to the site owner
    2. Sending confirmation to the user
    3. (Future) Storing the contact in a database
    
    Args:
        contact_data: The validated contact request data
        
    Returns:
        bool: True if processing successful, False otherwise
    """
    try:
        # Send notification email to portfolio owner
        owner_notified = await send_contact_notification(contact_data.dict())
        
        # Send confirmation email to user
        user_confirmed = await send_confirmation_email(contact_data.email, contact_data.name)
        
        # Log the results
        if not owner_notified:
            logger.warning("Failed to send owner notification email")
        
        if not user_confirmed:
            logger.warning("Failed to send user confirmation email")
        
        # Return success if at least one notification was sent
        return owner_notified or user_confirmed
        
    except Exception as e:
        logger.error(f"Error processing contact request: {str(e)}")
        return False 