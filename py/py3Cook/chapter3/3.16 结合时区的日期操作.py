from datetime import datetime
from pytz import timezone
loc_d = datetime(2012, 12, 21, 9, 30, 0)
print(loc_d)
bang_d = loc_d.astimezone(timezone('Asia/Kolkata'))
print(bang_d)