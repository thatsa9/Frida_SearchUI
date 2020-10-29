import frida
import sys
from collections import OrderedDict
import json
import logging as log

def on_message(message, data):
    if message['type'] == 'send':
        HTTP_Method     = message['payload']['Method']
        HTTP_URI        = message['payload']['URI']
        print(f'{HTTP_Method} {HTTP_URI}')
        
def main():
    PROCESS_NAME = 'SearchUI.exe'

    session = frida.attach(PROCESS_NAME)
    data    = open("./Hooker.js", 'r', encoding="UTF8").read()
    script  = session.create_script(data)
    script.on('message', on_message)
    script.load()
    log.info('Ready..')
    sys.stdin.read()
    session.detach()

if __name__ == '__main__':
    main()