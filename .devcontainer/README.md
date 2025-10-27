# DevContainer Configuration

This devcontainer is configured for the AZ-204 Azure Storage exercises.

## Base Image

- **Image**: `mcr.microsoft.com/devcontainers/dotnet:1-8.0-bookworm`
- **OS**: Debian Bookworm
- **Pre-installed**: .NET 8.0 SDK

## Additional Features

### Azure CLI (ghcr.io/devcontainers/features/azure-cli:1)
- Latest version of Azure CLI
- Bicep support included
- Used for creating and managing Azure resources

### .NET SDK (ghcr.io/devcontainers/features/dotnet:2)
- .NET 8.0 SDK
- .NET 8.0 Runtime
- ASP.NET Core 8.0 Runtime

## VS Code Extensions

The following extensions are automatically installed:

1. **ms-dotnettools.csharp** - C# language support
2. **ms-dotnettools.csdevkit** - C# Dev Kit for enhanced development
3. **ms-azuretools.vscode-azurestorage** - Azure Storage management
4. **ms-azuretools.vscode-azureresourcegroups** - Azure resource management
5. **ms-vscode.azure-account** - Azure account authentication

## Configuration Details

- **Remote User**: `vscode` (non-root user for security)
- **Default Shell**: Bash
- **Post-Create Command**: Displays welcome message with setup instructions

## Testing the Container

Once the container is built, you can verify the installation:

```bash
# Check .NET version
dotnet --version

# Check Azure CLI version
az --version

# List available .NET runtimes
dotnet --list-runtimes

# List available .NET SDKs
dotnet --list-sdks
```

## Exercise Requirements

This devcontainer satisfies all requirements for the Microsoft Learn exercise:
- ✅ .NET SDK for creating console applications
- ✅ Azure CLI for managing Azure resources
- ✅ Azure authentication support
- ✅ All necessary Azure Storage SDK packages can be installed via `dotnet add package`

## Customization

To customize this devcontainer:

1. Edit `.devcontainer/devcontainer.json`
2. Rebuild the container (Command Palette → "Dev Containers: Rebuild Container")

## Troubleshooting

**Container fails to build:**
- Check Docker is running
- Ensure you have internet connectivity
- Try rebuilding without cache

**Azure CLI login issues:**
- Run `az login` in the terminal
- Follow the device code authentication flow
- Ensure you have an active Azure subscription
