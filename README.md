# angular-cli.dotnet
dotnet new template for angular-cli and ASP.Net core 
## Install
Download the [nuget package](https://github.com/aguacongas/angular-cli.dotnet/raw/master/angular-cli.dotnet.0.0.1-unstable0001.nupkg)  
Run `dotnet new -i {path to the downloaded nuget package}`
```
C:\Projects\angular-cli.dotnet>dotnet new -i angular-cli.dotnet.0.0.1-unstable00
01.nupkg
Templates                 Short Name              Language      Tags

--------------------------------------------------------------------------------
--
Console Application       console                 [C#], F#      Common/Console

Class library             classlib                [C#], F#      Common/Library

Unit Test Project         mstest                  [C#], F#      Test/MSTest

xUnit Test Project        xunit                   [C#], F#      Test/xUnit

ASP.NET Core Empty        web                     [C#]          Web/Empty

ASP.NET Core Web App      mvc                     [C#], F#      Web/MVC

ASP.NET Core Web API      webapi                  [C#]          Web/WebAPI

angular-cli.dotnet        angular-cli.dotnet                    Angular-cli dotn
et
Solution File             sln                                   Solution


Examples:
    dotnet new mvc --auth None --framework netcoreapp1.1
    dotnet new classlib
    dotnet new --help
```
## Use
Run `dotnet new angular-cli.dotnet -n {Your Solution Name} -o {Path to the new Solution}`  
It will create a VS 2017 solution containing an Angular web site used for development and an ASP.Net core project used to serve the application in production.  
### Angular application
Under AngularSpa folder, the Angular application was created by the angula-cli tool.  
Run `npm install` to install dependencies.  
Then you can start it with `npm start`, the application is compiled with AOT and support the Hot Module Replacement (HMR) to speed up your development.   
### ASP.Net Core
Under Server folder, the ASP.Net Core project is used to deploy the application.
Run `dotnet pubish`, it will compile the Angular application to the `wwwroor` folder.  
If you want to test the deployment just build the project in debug, in will compile the Angular application to `wwwroor` as well.  
