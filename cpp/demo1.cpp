
#include <cstdio>
#include <iostream>
#include <memory>
#include <array>

int main() {
    const char* cmd = "node ./demo.js";

    std::array<char, 256> buffer{};
    std::string result;

    std::unique_ptr<FILE, decltype(&pclose)> pipe(popen(cmd, "r"), pclose);
    if (!pipe) {
        std::cerr << "Failed to run node command\n";
        return 1;
    }

    while (fgets(buffer.data(), buffer.size(), pipe.get()) != nullptr) {
        result += buffer.data();
    }

    std::cout << "Node output:\n" << result << std::endl;
    return 0;
}