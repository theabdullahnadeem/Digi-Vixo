@echo off
SET PATH=C:\Program Files\nodejs;%PATH%
node node_modules\next\dist\bin\next dev --turbopack --port %PORT%
