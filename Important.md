dumpsys usagestats --daily | grep "com.instagram.android" | grep "totalTimeUsed" | head -n 1
used to get the daily hours
husky:/ $ dumpsys usagestats --daily | grep "com.instagram.android" | grep "totalTimeUsed" | head -n 1
      package=com.instagram.android **totalTimeUsed="11:37"** lastTimeUsed="2025-09-26 22:18:29" totalTimeVisible="11:38" lastTimeVisible="2025-09-26 22:18:29" lastTimeComponentUsed="2025-09-26 22:17:14" totalTimeFS="00:00" lastTimeFS="1970-01-01 01:00:00" appLaunchCount=3
Failed to write while dumping service usagestats: Broken pipe
