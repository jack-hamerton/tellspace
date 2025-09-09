# Placeholder for database connection (SQLAlchemy/databases). Use DATABASE_URL env var.
from databases import Database
import os
DATABASE_URL = os.getenv('DATABASE_URL', 'postgresql://postgres:postgres@db:5432/tellspace')
db = Database(DATABASE_URL)
