"""empty message

Revision ID: 4189aeddab63
Revises: 148ea00cc246
Create Date: 2023-09-15 22:51:10.168956

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '4189aeddab63'
down_revision = '148ea00cc246'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('job', schema=None) as batch_op:
        batch_op.alter_column('time_stamp',
               existing_type=postgresql.TIMESTAMP(timezone=True),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('job', schema=None) as batch_op:
        batch_op.alter_column('time_stamp',
               existing_type=postgresql.TIMESTAMP(timezone=True),
               nullable=False)

    # ### end Alembic commands ###
