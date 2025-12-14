# DevContainer Configuration

This devcontainer is configured for the AZ-204 Azure Developer course exercises.

## Base Image

- **Image**: `mcr.microsoft.com/devcontainers/universal:5`
- **Pre-installed**: .NET SDK, Python, Node.js, and common development tools

## Additional Features

### Azure CLI (ghcr.io/devcontainers/features/azure-cli:1)
- Latest version of Azure CLI
- Bicep support included
- Used for creating and managing Azure resources

### Azure Functions Core Tools
- Installed via postCreateCommand
- Version 4.x for local Azure Functions development

## VS Code Extensions

The following extensions are automatically installed:

1. **ms-dotnettools.csharp** - C# language support
2. **ms-azuretools.vscode-azurefunctions** - Azure Functions development
3. **ms-azuretools.vscode-azurestorage** - Azure Storage management
4. **ms-azuretools.vscode-azureresourcegroups** - Azure resource management
5. **ms-vscode.azure-account** - Azure account authentication
6. **ms-python.python** - Python language support
7. **humao.rest-client** - REST API testing

## Configuration Details

- **Remote User**: `codespace` (non-root user for security)
- **Default Shell**: Bash
- **Post-Create Command**: Installs Azure Functions Core Tools and displays setup instructions

## Testing the Container

Once the container is built, you can verify the installation:

```bash
# Check .NET version
dotnet --version

# Check Azure CLI version
az --version

# Check Azure Functions Core Tools
func --version

# Check Python version
python --version

# Check Node.js version
node --version
```

## Exercise Requirements

This devcontainer satisfies all requirements for the AZ-204 course exercises:
- .NET SDK for creating console applications and Azure Functions
- Azure CLI for managing Azure resources
- Azure Functions Core Tools for local development
- Python for SDK exercises
- REST Client extension for API testing
- Azure authentication support

## Customization

To customize this devcontainer:

1. Edit `.devcontainer/devcontainer.json`
2. Rebuild the container (Command Palette > "Dev Containers: Rebuild Container")

## Troubleshooting

**Container fails to build:**
- Check Docker is running
- Ensure you have internet connectivity
- Try rebuilding without cache

**Azure CLI login issues:**
- Run `az login` in the terminal
- Follow the device code authentication flow
- Ensure you have an active Azure subscription

**Azure Functions issues:**
- Verify Core Tools installed: `func --version`
- Check for port conflicts on 7071
