from __future__ import print_function
import frida
import sys
from xml.dom import minidom
import json

def handle_json(tree):
    for elem in tree.getElementsByTagName('requestInfo'):
        if elem.attributes['key'].value == 'RawQuery':
            RawQuery = elem.attributes['value'].value
            print (f'User\'s Search RawQuery: {RawQuery}')

    for ds in tree.getElementsByTagName('DS'):
        body = ds.firstChild.data # it is json body
        data = json.loads(body)

        for _data in data:
            #Type = _data['T']
            Scenario = _data['Scenario']
            print (f"[+] Search Result\'s type: {Scenario}")

            for q in _data['DS']:
                Q = q.get('Q')
                if Q:
                    print (f'\t[Q] Found: {Q}')
                Id = q.get('DeviceSignals')
                if Id:
                    Id = Id.get('Id')
                    if Id:
                        print (f'\t    [Id] Result: {Id}')
            print ()
        print ('-'*50)

def on_message(message, data):
    #print(f"[{message}] => {data}") #Show sending data before parse
    if message['type'] == 'send':
        data = message['payload']
        if data['fn'] == 'WriteFile':
            #print(data['val'])
            tree = minidom.parseString(data['val'])
            
            for group in tree.getElementsByTagName('Group'):
                handle_json(group)
            
def main():
    target_process = "SearchUI.exe"
    session = frida.attach(target_process)

    script = session.create_script("""
        var fn_InternetWriteFile_addr = Module.getExportByName("wininet.dll", "InternetWriteFile");
        console.log('InternetWriteFile addr: ' + fn_InternetWriteFile_addr);

        Interceptor.attach(fn_InternetWriteFile_addr, {
            // When function is called, print out its parameters
            onEnter: function (args) {
                var buf = args[1].readAnsiString(args[2].toInt32());
                //console.log(buf);
                send({'fn': 'WriteFile', 'val': buf});
            },
        });
    """)
    print ('Pressing the start button')
    script.on('message', on_message)
    script.load()
    #print("[!] Ctrl+D on UNIX, Ctrl+Z on Windows/cmd.exe to detach from instrumented program.\n\n")
    print('Ready')
    sys.stdin.read()
    session.detach()

if __name__ == '__main__':
    main()
