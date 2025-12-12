# AZ-204 Development Environment

A development container pre-configured with all tools needed for AZ-204 (Developing Solutions for Microsoft Azure) exercises and labs.

## What's Included

| Category | Tools |
|----------|-------|
| **Runtimes** | .NET 8.0, Node.js 20, Python 3.11 |
| **Azure Tools** | Azure CLI, Bicep, Azure Functions Core Tools 4.x, Azure Developer CLI |
| **VS Code Extensions** | C# Dev Kit, Azure Functions, Azure Storage, Azure Resources, API Management, Python, REST Client |

## Getting Started

### Option 1: GitHub Codespaces (Recommended)

1. Click the green **Code** button on this repository
2. Select the **Codespaces** tab
3. Click **Create codespace on main**
4. Wait for the container to build (~2-3 minutes)

### Option 2: VS Code Dev Containers

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
2. Install the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
3. Clone this repository
4. Open in VS Code and click **Reopen in Container**

## First Steps

Once your environment is ready:

```bash
# Authenticate with Azure
az login

# Verify tools are installed
az --version
func --version
dotnet --version
python --version
node --version
```

## Supported Languages

The environment supports multiple programming languages for Azure development:

| Language | Version | Use For |
|----------|---------|---------|
| .NET | 8.0 | Azure Functions, Console apps, Web APIs |
| Python | 3.11 | Azure Functions, Scripts, SDKs |
| Node.js | 20 | Azure Functions, Scripts, SDKs |

## Azure Services Covered

This environment is configured for working with:

- Azure Functions
- Azure Storage (Blobs, Queues, Tables)
- Azure API Management
- Azure Event Grid
- Azure Event Hubs
- Azure Service Bus
- Azure Application Insights
- Azure Cosmos DB

## Notes

- You need an active Azure subscription
- Remember to clean up resources after exercises to avoid charges
- The devcontainer uses the `vscode` user for security
