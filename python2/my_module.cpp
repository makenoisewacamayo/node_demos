#define NODE_ADDON_API_DISABLE_CPP_EXCEPTIONS
#include <napi.h>
#include <cstdlib>

Napi::String RunPythonScript(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    
    // Ejecuta el script de Python
    system("python3 my_script.py"); // Cambia "my_script.py" al nombre de tu script de Python

    return Napi::String::New(env, "Script de Python ejecutado");
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set(Napi::String::New(env, "runPythonScript"), Napi::Function::New(env, RunPythonScript));
    return exports;
}

Napi::Object InitAll(Napi::Env env, Napi::Object exports) {
    return Init(env, exports);
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, InitAll);