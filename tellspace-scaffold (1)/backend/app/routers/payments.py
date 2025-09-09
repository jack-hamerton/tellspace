from fastapi import APIRouter
from pydantic import BaseModel
router = APIRouter()

class PayRequest(BaseModel):
    purpose: str
    amount: float

@router.post('/paypal/create')
def create_paypal_order(req: PayRequest):
    # Placeholder: in production call PayPal API and return approval URL
    return {'approval_url': f'https://www.paypal.com/checkoutnow?amount={req.amount}&mock=true'}
