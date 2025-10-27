# AZ-204-codespace

A development container configured for working with Azure Storage and completing the Microsoft Learn exercise: [Create Blob storage resources with the .NET client library](https://microsoftlearning.github.io/mslearn-azure-developer/instructions/azure-storage/01-blob-storage-resources-dotnet.html).

## What's Included

This devcontainer comes pre-configured with:

- **.NET 8.0 SDK** - For building .NET console applications
- **Azure CLI** - For managing Azure resources from the command line
- **Bicep** - For Azure Infrastructure as Code (included with Azure CLI)
- **VS Code Extensions**:
  - C# Dev Kit
  - Azure Storage
  - Azure Resources
  - Azure Account

## Getting Started

### Using GitHub Codespaces

1. Click the green **Code** button on this repository
2. Select the **Codespaces** tab
3. Click **Create codespace on main** (or your desired branch)
4. Wait for the container to build and start

### Using VS Code with Dev Containers Extension

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
2. Install the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) for VS Code
3. Clone this repository
4. Open the repository in VS Code
5. When prompted, click **Reopen in Container** (or use Command Palette: "Dev Containers: Reopen in Container")

## Follow the Exercise

Once your devcontainer is running:

1. **Authenticate with Azure**:
   ```bash
   az login
   ```

2. **Follow the Microsoft Learn exercise**:
   - Visit: https://microsoftlearning.github.io/mslearn-azure-developer/instructions/azure-storage/01-blob-storage-resources-dotnet.html
   - All required tools are already installed
   - You can execute all commands directly in the terminal

3. **Quick Start with the Exercise**:
   ```bash
   # Create a resource group (adjust name and location as needed)
   az group create --location eastus2 --name myResourceGroup
   
   # Set variables
   resourceGroup=myResourceGroup
   location=eastus2
   accountName=storageacct$RANDOM
   
   # Create storage account
   az storage account create --name $accountName \
       --resource-group $resourceGroup \
       --location $location \
       --sku Standard_LRS
   
   # Continue with the rest of the exercise...
   ```

## What You'll Learn

By following the exercise, you will:
- Create Azure Storage accounts
- Build a .NET console application using Azure Storage Blob client library
- Upload files to blob storage
- List blobs in containers
- Download files from blob storage
- Clean up Azure resources

## Notes

- You need an active Azure subscription to complete the exercise
- Remember to clean up resources after completing the exercise to avoid charges
- The devcontainer uses the `vscode` user for better security