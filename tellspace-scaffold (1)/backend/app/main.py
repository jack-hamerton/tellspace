from fastapi import FastAPI
from .routers import auth, posts, admin_auth, payments
from .middleware.ip_restrict import ip_restriction_middleware

app = FastAPI(title='TellSpace API — Scaffold')

# Register middleware (IP restriction middleware is a stub — configure allowed IPs via env)
app.middleware('http')(ip_restriction_middleware)

app.include_router(auth.router, prefix='/auth', tags=['auth'])
app.include_router(posts.router, prefix='/posts', tags=['posts'])
app.include_router(admin_auth.router, prefix='/admin', tags=['admin'])
app.include_router(payments.router, prefix='/payments', tags=['payments'])

@app.get('/')
def root():
    return {'message': 'TellSpace backend (scaffold). Visit /docs for OpenAPI.'}
