# Timer Trigger Demo - Instructor Guide

Quick demo project for showing Azure Functions Timer Triggers in VS Code.

---

## 🚀 Quick Start

### 1. Open Project in VS Code

```bash
cd /Users/paulmuller/Source/MCT/AZ-204/demos/functions-timer-trigger
code .
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Test Locally (Optional)

```bash
npm start
# or
func start
```

**What you'll see:**
- Function runs every minute automatically
- Console shows execution logs
- Press Ctrl+C to stop

---

## 📤 Deploy to Azure (During Demo)

### Option A: VS Code Extension (Recommended)

1. **Open Azure Extension** (Ctrl/Cmd+Shift+A)
2. **Sign in to Azure** (if not already)
3. **Create Function App:**
   - Click "+" next to "RESOURCES"
   - Select "Create Function App in Azure... (Advanced)"
   - Name: `func-timer-demo-pm-001` (use your initials)
   - Runtime: Node.js 18
   - Region: East US (or your preferred)
   - Hosting: Consumption plan
   - Storage: Create new
   - Application Insights: Skip for now
4. **Deploy:**
   - Right-click the function app → "Deploy to Function App"
   - Select this folder
   - Confirm deployment
5. **Done!** Takes ~2-3 minutes

### Option B: Azure CLI

```bash
# Create resource group
az group create --name rg-az204-demo --location eastus

# Create storage account
STORAGE_NAME="staz204demopm$(date +%s | tail -c 5)"
az storage account create \
  --name $STORAGE_NAME \
  --resource-group rg-az204-demo \
  --location eastus \
  --sku Standard_LRS

# Create function app
az functionapp create \
  --name func-timer-demo-pm-001 \
  --resource-group rg-az204-demo \
  --storage-account $STORAGE_NAME \
  --consumption-plan-location eastus \
  --runtime node \
  --runtime-version 18 \
  --functions-version 4

# Deploy
func azure functionapp publish func-timer-demo-pm-001
```

---

## 🎓 Demo Flow (10 minutes)

### 1. Show the Project in VS Code (2 min)

**Open these files:**
- `src/functions/RunEveryMinute.js` - Main demo function
- Point out CRON syntax: `'0 * * * * *'`
- Explain 6 fields (Azure specific!)

**Key Points:**
- Clean, simple timer trigger
- CRON expression defines schedule
- Automatic execution - no manual trigger

### 2. Explain CRON Syntax (2 min)

Show this on screen:
```
Azure Functions CRON: 6 fields (NOT 5 like Unix!)

{second} {minute} {hour} {day} {month} {day-of-week}

Examples:
  0 * * * * *     = Every minute
  0 */5 * * * *   = Every 5 minutes
  */30 * * * * *  = Every 30 seconds
  0 0 9 * * 1-5   = Weekdays at 9 AM
```

**Emphasize:**
- ⚠️ 6 fields (Azure) NOT 5 (Unix)
- Don't use crontab.guru (wrong format!)
- Use Azure docs instead

### 3. Deploy to Azure (3 min)

**In VS Code:**
1. Azure Extension → Sign in
2. Right-click subscription → Create Function App
3. Configure (see above)
4. Deploy (wait ~2 min)

**While deploying, explain:**
- Consumption plan = serverless
- Pay only per execution
- Auto-scales to zero when idle
- No infrastructure management

### 4. Monitor in Azure Portal (3 min)

**Navigate:**
1. Open Portal → Search for function app
2. Functions → RunEveryMinute
3. Monitor → Logs (live stream)
4. Wait for next minute boundary
5. Show execution appearing!

**Highlight:**
- Automatic execution
- Execution log shows details
- No manual trigger needed
- Runs continuously

---

## 📋 Functions Included

| Function | Schedule | Description |
|----------|---------|-------------|
| **RunEveryMinute** | `0 * * * * *` | Main demo - runs every minute |
| **RunEvery5Minutes** | `0 */5 * * * *` | Example for health checks |
| **RunEvery30Seconds** | `*/30 * * * * *` | Disabled by default (too frequent) |

**To enable/disable functions:**
- Edit the file and change `runOnStartup: false` to `true`
- Or comment out the entire function

---

## 🔧 Customization

### Change Schedule

Edit `RunEveryMinute.js`:
```javascript
schedule: '0 */2 * * * *'  // Now runs every 2 minutes
```

### Add Custom Logic

```javascript
handler: (myTimer, context) => {
    // Your custom code here
    context.log('Doing something useful...');

    // Example: Call an API
    // Example: Clean up old data
    // Example: Generate a report
}
```

---

## 🧹 Cleanup After Demo

### VS Code Method:
1. Azure Extension → Find your function app
2. Right-click → Delete
3. Confirm

### CLI Method:
```bash
az group delete --name rg-az204-demo --yes --no-wait
```

**⚠️ Important:** Remind students to delete resources!

---

## 💡 Teaching Tips

1. **Prepare early:** Deploy 10-15 min before class so executions accumulate
2. **Show logs live:** Open Monitor → Logs and wait for next minute
3. **Emphasize 6 fields:** Mention multiple times - common confusion point!
4. **Real-world use cases:**
   - Nightly cleanup jobs
   - Hourly data sync
   - Daily reports
   - Health checks every 5 min
5. **Cost:** Show it's nearly free (~$0.01/month for every-minute execution)

---

## 📂 Project Structure

```
functions-timer-trigger/
├── src/
│   └── functions/
│       ├── RunEveryMinute.js      ⭐ Main demo function
│       ├── RunEvery5Minutes.js     📊 Health check example
│       └── RunEvery30Seconds.js    ⚡ Fast execution (disabled)
├── host.json
├── local.settings.json
├── package.json
└── README.md (this file)
```

---

## ⚠️ Troubleshooting

**"npm install" fails:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Local testing not working:**
- Check Azure Functions Core Tools: `func --version`
- Should be v4.x
- Install: `npm install -g azure-functions-core-tools@4`

**Deployment fails:**
- Verify Azure CLI login: `az account show`
- Check function app name is unique
- Ensure VS Code Azure extension is installed

**Function not executing in Azure:**
- Check Monitor → Logs for errors
- Verify function is enabled (not disabled)
- Wait 1-2 minutes for first execution

---

## 📖 CRON Quick Reference

Keep this visible during demo:

```
0 * * * * *       Every minute
0 */5 * * * *     Every 5 minutes
*/30 * * * * *    Every 30 seconds
0 0 * * * *       Every hour
0 0 0 * * *       Every day at midnight
0 0 9 * * 1-5     Weekdays at 9 AM
```

**Format:** `{sec} {min} {hour} {day} {month} {weekday}`

---

**Demo Duration:** 10-12 minutes
**Preparation:** 5 minutes (install deps + optional deploy)

Good luck! 🚀
