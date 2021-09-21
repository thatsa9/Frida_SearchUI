# Frida script to hooking windows's SearchUI.exe process.

TL; DR
* Every client to search on Windows Search Function will send data to Bing even local search.
* Every keystroke from the client will be sent to Bing by a separated character.
* They can identify each computer with "X-Device-MachineID" header at the HTTP Request.
* They can know an installation software directory from the related result.

Read more in Thai version: [แอบส่อง Windows Search ส่งข้อมูลอะไรบ้าง](https://datafarm-cybersecurity.medium.com/%E0%B9%81%E0%B8%AD%E0%B8%9A%E0%B8%AA%E0%B9%88%E0%B8%AD%E0%B8%87-windows-search-%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%87-3318ab153880)
