del /S /Q template\content\AngularSpa\node_modules\*.*
del /S /Q template\content\Server\bin\*.*
del /S /Q template\content\Server\obj\*.*
dotnet restore build\build.csproj
dotnet build build\build.csproj -f netcoreapp1.1