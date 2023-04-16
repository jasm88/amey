#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_18.x | bash \
    && apt-get install nodejs -yq

WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_18.x | bash \
    && apt-get install nodejs -yq


WORKDIR /src
COPY ["src/amey-test-site/amey-test-site.csproj", "src/amey-test-site/"]
RUN dotnet restore "src/amey-test-site/amey-test-site.csproj"
COPY . .
WORKDIR "/src/src/amey-test-site"
RUN dotnet build "amey-test-site.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "amey-test-site.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "amey-test-site.dll"]
