# SearrhUI

A Frida script to hooking windows's SearchUI.exe process.

TL; DR
* Every client to search on Windows Search Function will send data to Bing even local search.
* Every keystroke from the client will be sent to Bing by a separated character.
* They can identify each computer with "X-Device-MachineID" header at the HTTP Request.
* They can know an installation software directory from the related result.