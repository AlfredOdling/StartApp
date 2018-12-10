#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n com.alfredodling.startApp/host.exp.exponent.MainActivity
