import os
import logging
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Email configuration
EMAIL_HOST = os.getenv("EMAIL_HOST", "smtp.gmail.com")
EMAIL_PORT = int(os.getenv("EMAIL_PORT", "587"))
EMAIL_USE_TLS = os.getenv("EMAIL_USE_TLS", "True").lower() == "true"
EMAIL_HOST_USER = os.getenv("EMAIL_HOST_USER", "")
EMAIL_HOST_PASSWORD = os.getenv("EMAIL_HOST_PASSWORD", "")
DEFAULT_FROM_EMAIL = os.getenv("DEFAULT_FROM_EMAIL", "contact@gabrielsaban.com")
CONTACT_EMAIL = os.getenv("CONTACT_EMAIL", "contact@gabrielsaban.com")  # Where to send notifications

def send_email(subject: str, body: str, to_email: str, from_email: str = DEFAULT_FROM_EMAIL, is_html: bool = False) -> bool:
    """
    Send an email using the configured email service
    
    Args:
        subject: Email subject
        body: Email body content
        to_email: Recipient email
        from_email: Sender email (defaults to configured value)
        is_html: Whether the body contains HTML
        
    Returns:
        bool: True if email sent successfully, False otherwise
    """
    if not all([EMAIL_HOST_USER, EMAIL_HOST_PASSWORD]):
        logger.warning("Email credentials not set. Email sending skipped.")
        return True  # Return true for development purposes
    
    try:
        msg = MIMEMultipart('alternative')
        msg['Subject'] = subject
        msg['From'] = from_email
        msg['To'] = to_email
        
        # Attach the body
        content_type = 'html' if is_html else 'plain'
        msg.attach(MIMEText(body, content_type))
        
        # Connect to server and send
        with smtplib.SMTP(EMAIL_HOST, EMAIL_PORT) as server:
            if EMAIL_USE_TLS:
                server.starttls()
            
            if EMAIL_HOST_USER and EMAIL_HOST_PASSWORD:
                server.login(EMAIL_HOST_USER, EMAIL_HOST_PASSWORD)
            
            server.send_message(msg)
        
        logger.info(f"Email sent to {to_email}")
        return True
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False

async def send_contact_notification(contact_data: Dict[str, Any]) -> bool:
    """
    Utility to send an email notification when contact form is submitted.
    
    Args:
        contact_data: Dictionary containing contact form information
        
    Returns:
        bool: True if email sent successfully, False otherwise
    """
    try:
        subject = f"Portfolio Contact Form: {contact_data['name']}"
        
        # Create email body
        body = f"""
        New contact form submission:
        
        Name: {contact_data['name']}
        Email: {contact_data['email']}
        
        Message:
        {contact_data['message']}
        """
        
        # Log the contact request
        logger.info(
            f"Contact form submission received:\n"
            f"From: {contact_data['name']} ({contact_data['email']})\n"
            f"Message: {contact_data['message']}"
        )
        
        # Send the notification email
        if not os.getenv("EMAIL_HOST_USER"):
            # Development mode - don't actually try to send
            logger.info("DEV MODE: Would send notification email")
            return True
            
        return send_email(subject, body, CONTACT_EMAIL)
    except Exception as e:
        logger.error(f"Failed to process contact notification: {str(e)}")
        return False

async def send_confirmation_email(to_email: str, name: str) -> bool:
    """
    Send a confirmation email to the user who submitted the contact form.
    
    Args:
        to_email: Recipient email address
        name: Recipient name
        
    Returns:
        bool: True if email sent successfully, False otherwise
    """
    try:
        subject = "Thank you for your message"
        
        # Create email body with HTML
        body = f"""
        <html>
        <body>
            <p>Hi {name},</p>
            
            <p>Thank you for contacting me. I have received your message and will get back to you as soon as possible.</p>
            
            <p>Best regards,<br>
            Gabriel Saban</p>
        </body>
        </html>
        """
        
        # Log the confirmation
        logger.info(f"Sending confirmation email to {name} <{to_email}>")
        
        # Send the confirmation email
        if not os.getenv("EMAIL_HOST_USER"):
            # Development mode - don't actually try to send
            logger.info("DEV MODE: Would send confirmation email")
            return True
            
        return send_email(subject, body, to_email, is_html=True)
    except Exception as e:
        logger.error(f"Failed to send confirmation email: {str(e)}")
        return False 