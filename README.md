# Frida_SearchUI
POC for investigation SearchUI.exe process tries to send local-information to the MS Bing server.


## TL; DR
Discovering the Microsoft Search (SearchUI.exe) has been sending search result data included both the local directory and machine ID back server.


## Testing on environments:
* Windows 10, version 1909
* Python 3 with frida
* WinDBG
* MitMProxy

## Demo 

![alt text](https://raw.githubusercontent.com/thatsa9/Frida_SearchUI/master/Screen%20Shorts/Application%20Path%201.png?token=AOOQV2WOHWOVFQ5PI74ICBK7TKMNE)

![alt text](https://raw.githubusercontent.com/thatsa9/Frida_SearchUI/master/Screen%20Shorts/x-device-machineid.png?token=AOOQV2U7CW57DSCC7KT3PD27TKNAW)

```
Win10 :: ~\Desktop\frida-scripts » python .\SearchUI_frida_hook.py
InternetWriteFile addr: 0x7ffdc32e1c90
Ready
User's Search RawQuery: l
[+] Search Result's type: PP
        [Q] Found: LINE
            [Id] Result: C:\Users\Win10\AppData\Local\LINE\bin\LineLauncher.exe

--------------------------------------------------
User's Search RawQuery: li
[+] Search Result's type: Aggregator

[+] Search Result's type: WebAS
        [Q] Found: linkedin
        [Q] Found: linkedin login
        [Q] Found: lindsey graham
        [Q] Found: library
        [Q] Found: lisinopril
        [Q] Found: liverpool
        [Q] Found: liveleak
        [Q] Found: liberty mutual

[+] Search Result's type: ST
        [Q] Found: Show recently opened items in Jump Lists and in File Explorer
            [Id] Result: AAA_SystemSettings_Start_StoreRecentlyOpenedItems
        [Q] Found: Choose if websites can use your language list
            [Id] Result: AAA_SystemSettings_Language_Web_Content_Control

[+] Search Result's type: PP
        [Q] Found: LINE
            [Id] Result: C:\Users\Win10\AppData\Local\LINE\bin\LineLauncher.exe
        [Q] Found: License
            [Id] Result: {6D809377-6AF0-444B-8957-A3773F02200E}\HxD\license.txt
        [Q] Found: License
            [Id] Result: {7C5A40EF-A0FB-4BFC-874A-C0F2E0B9FA8E}\Dev-Cpp\COPYING.txt

[+] Search Result's type: NonSuggestions
        [Q] Found: li

--------------------------------------------------
User's Search RawQuery: line
[+] Search Result's type: Aggregator

[+] Search Result's type: WebAS
        [Q] Found: line
        [Q] Found: linear
        [Q] Found: line rider
        [Q] Found: lineage
        [Q] Found: linear pair
        [Q] Found: line graph
        [Q] Found: linen
        [Q] Found: line tv

[+] Search Result's type: ST
        [Q] Found: Choose how many lines to scroll with the mouse wheel
            [Id] Result: AAA_SystemSettings_Input_Mouse_SetScrollLines

[+] Search Result's type: PP
        [Q] Found: LINE
            [Id] Result: C:\Users\Win10\AppData\Local\LINE\bin\LineLauncher.exe

[+] Search Result's type: IFF

[+] Search Result's type: NonSuggestions
        [Q] Found: line

--------------------------------------------------
User's Search RawQuery: line
[+] Search Result's type: Aggregator

[+] Search Result's type: PP
        [Q] Found: LINE
            [Id] Result: C:\Users\Win10\AppData\Local\LINE\bin\LineLauncher.exe

[+] Search Result's type: IBA
        [Q] Found: LINE
            [Id] Result: C:\Users\Win10\Desktop\LINE.lnk

[+] Search Result's type: NonSuggestions
        [Q] Found: line

--------------------------------------------------
User's Search RawQuery: line
[+] Search Result's type: Aggregator

[+] Search Result's type: WebAS
        [Q] Found: line
        [Q] Found: linear
        [Q] Found: line rider
        [Q] Found: lineage
        [Q] Found: linear pair
        [Q] Found: line graph
        [Q] Found: linen
        [Q] Found: line tv

[+] Search Result's type: ST
        [Q] Found: Choose how many lines to scroll with the mouse wheel
            [Id] Result: AAA_SystemSettings_Input_Mouse_SetScrollLines

[+] Search Result's type: PP
        [Q] Found: LINE
            [Id] Result: C:\Users\Win10\AppData\Local\LINE\bin\LineLauncher.exe

[+] Search Result's type: IFF

[+] Search Result's type: NonSuggestions
        [Q] Found: line
```


