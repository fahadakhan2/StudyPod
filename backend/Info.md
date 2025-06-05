cd into backend/src

npm prisma generate

Make sure you CD into backend
npm run build 
npm run dev


curl -X POST http://localhost:5008/tts-stream \
  -H "Content-Type: application/json" \
  -d '{"text":"Hello world"}' --output hello.mp3

$body = @{
>>   text     = 'Testing a server-side save'                                                        
>>   filename = 'my_first_tts'
>> } | ConvertTo-Json
>> 
>> Invoke-WebRequest `
>>   -Uri http://localhost:8080/tts-server `
>>   -Method POST `   
>>   -ContentType "application/json" `
>>   -Body $body `
>>   | ConvertFrom-Json