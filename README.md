# AZ-204 Development Environment

A development container pre-configured with tools needed for AZ-204 (Developing Solutions for Microsoft Azure) exercises and labs.

## What's Included

| Category | Tools |
|----------|-------|
| **Runtime** | .NET 8.0 SDK |
| **Azure Tools** | Azure CLI, Bicep |
| **VS Code Extensions** | C#, Azure Storage, Azure Resources, REST Client |

## Getting Started

### Option 1: GitHub Codespaces (Recommended)

1. Click the green **Code** button on this repository
2. Select the **Codespaces** tab
3. Click **Create codespace on main**
4. Wait for the container to build (~1-2 minutes)

### Option 2: VS Code Dev Containers

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop) or [Podman](https://podman.io/)
2. Install the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
3. Clone this repository
4. Open in VS Code and click **Reopen in Container**

> **Note**: This container supports both AMD64 and ARM64 (Apple Silicon).

## First Steps

Once your environment is ready:

```bash
# Authenticate with Azure
az login

# Verify tools are installed
az --version
dotnet --version
```

## Azure Services Covered

This environment is configured for working with:

- Azure Storage (Blobs, Queues, Tables)
- Azure Cosmos DB
- Azure API Management
- Azure Event Grid
- Azure Event Hubs
- Azure Service Bus
- Azure Application Insights

## Notes

- You need an active Azure subscription
- Remember to clean up resources after exercises to avoid charges
- The devcontainer uses the `vscode` user for security
