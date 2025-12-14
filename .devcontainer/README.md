# DevContainer Configuration

This devcontainer is configured for the AZ-204 Azure Developer course exercises.

## Base Image

- **Image**: `mcr.microsoft.com/devcontainers/dotnet:1-8.0`
- **OS**: Debian with .NET 8.0 SDK
- **Architecture**: Supports both AMD64 and ARM64 (Apple Silicon)

## Additional Features

### Azure CLI (ghcr.io/devcontainers/features/azure-cli:1)
- Latest version of Azure CLI
- Bicep support included
- Used for creating and managing Azure resources

## VS Code Extensions

The following extensions are automatically installed:

1. **ms-dotnettools.csharp** - C# language support
2. **ms-azuretools.vscode-azurestorage** - Azure Storage management
3. **ms-azuretools.vscode-azureresourcegroups** - Azure resource management
4. **ms-vscode.azure-account** - Azure account authentication
5. **humao.rest-client** - REST API testing

## Configuration Details

- **Remote User**: `vscode` (non-root user for security)
- **Default Shell**: Bash

## Testing the Container

Once the container is built, you can verify the installation:

```bash
# Check .NET version
dotnet --version

# Check Azure CLI version
az --version
```

## Customization

To customize this devcontainer:

1. Edit `.devcontainer/devcontainer.json`
2. Rebuild the container (Command Palette > "Dev Containers: Rebuild Container")

## Troubleshooting

**Container fails to build:**
- Check Docker/Podman is running
- Ensure you have internet connectivity
- Try rebuilding without cache

**Azure CLI login issues:**
- Run `az login` in the terminal
- Follow the device code authentication flow
- Ensure you have an active Azure subscription
