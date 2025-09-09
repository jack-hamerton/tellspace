from fastapi import Request, Response
import os

ALLOWED_IP = os.getenv('ADMIN_ALLOWED_IP', '')  # set in your environment for production

async def ip_restriction_middleware(request: Request, call_next):
    # Very small middleware: only blocks /admin/external routes when ALLOWED_IP is set.
    if request.url.path.startswith('/admin/external') and ALLOWED_IP:
        client = request.client.host
        if client != ALLOWED_IP:
            return Response('Forbidden', status_code=403)
    return await call_next(request)
