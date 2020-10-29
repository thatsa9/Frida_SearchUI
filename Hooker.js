var fn_HttpOpenRequestW_addr = Module.getExportByName ("wininet.dll", "HttpOpenRequestW");
console.log("HttpOpenRequestW > " + fn_HttpOpenRequestW_addr);

var HTTP_Method = null;
var HTTP_URI = null;
var HTTP_HOST = null;
var HTTP_HEADER = null;

Interceptor.attach(fn_HttpOpenRequestW_addr, {
    onEnter: function(args) {
        HTTP_Method = Memory.readUtf16String(args[1]);
        HTTP_URI = Memory.readUtf16String(args[2]);
        console.log(HTTP_Method + " " + HTTP_URI);
    }
})

var fn_HttpOpenRequestA_addr = Module.getExportByName ("wininet.dll", "HttpOpenRequestA");
console.log("HttpOpenRequestA > " + fn_HttpOpenRequestA_addr);

Interceptor.attach(fn_HttpOpenRequestA_addr, {
    onEnter: function(args) {
        HTTP_Method = Memory.readUtf16String(args[1]);
        HTTP_URI = Memory.readUtf16String(args[2]);
        console.log(HTTP_Method + " " + HTTP_URI);
    }
})

//-----------------------------------------------------

var fn_HttpAddRequestHeadersW_addr = Module.getExportByName ("wininet.dll", "HttpAddRequestHeadersW");
console.log("HttpAddRequestHeadersW > " + fn_HttpAddRequestHeadersW_addr);

Interceptor.attach(fn_HttpAddRequestHeadersW_addr, {
    onEnter: function(args) {
        HTTP_HEADER = Memory.readUtf16String(args[1]);
        console.log(HTTP_HEADER);
    }
})

var fn_HttpAddRequestHeadersA_addr = Module.getExportByName ("wininet.dll", "HttpAddRequestHeadersA");
console.log("HttpAddRequestHeadersA > " + fn_HttpAddRequestHeadersA_addr);

Interceptor.attach(fn_HttpAddRequestHeadersA_addr, {
    onEnter: function(args) {
        HTTP_HEADER = Memory.readUtf8String(args[1]);
        //console.log(HTTP_HEADER);
    }   
})

//-----------------------------------------------------

var fn_InternetConnectW_addr = Module.getExportByName ("wininet.dll", "InternetConnectW");
console.log("InternetConnectW > " + fn_InternetConnectW_addr);

Interceptor.attach(fn_InternetConnectW_addr, {
    onEnter: function(args) {
        HTTP_HOST = Memory.readUtf16String(args[1]);
        console.log("\n" + "Host: " + HTTP_HOST);
    }
})


var fn_InternetConnectA_addr = Module.getExportByName ("wininet.dll", "InternetConnectA");
console.log("InternetConnectA > " + fn_InternetConnectA_addr);

Interceptor.attach(fn_InternetConnectA_addr, {
    onEnter: function(args) {
        HTTP_HOST = Memory.readUtf8String(args[1]);
        console.log("\n" + "Host: " + HTTP_HOST);
    }
})
