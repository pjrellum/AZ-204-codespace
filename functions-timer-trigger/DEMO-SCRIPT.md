# Timer Trigger Demo Script
## 10-Minute Demo Flow

---

## ⏱️ BEFORE CLASS (5 min prep)

```bash
cd /Users/paulmuller/Source/MCT/AZ-204/demos/functions-timer-trigger
npm install
# Optional: Deploy to Azure now so executions accumulate
```

---

## 📋 DEMO STEPS

### 1. Show Project in VS Code (2 min)

**Say:** "Let me show you how timer triggers work with a live demo."

**Do:**
- Open `src/functions/RunEveryMinute.js`
- Highlight line with `schedule: '0 * * * * *'`

**Explain:**
```javascript
schedule: '0 * * * * *'
//        │ │ │ │ │ │
//        │ │ │ │ │ └─ day of week
//        │ │ │ │ └─── month
//        │ │ │ └───── day
//        │ │ └─────── hour
//        │ └───────── minute
//        └─────────── second
```

**Say:** "This runs every minute at second 0. Azure uses 6 fields - NOT 5 like Unix!"

---

### 2. Explain CRON (2 min)

**Open:** `CRON-CHEATSHEET.md` (keep visible on screen)

**Show examples:**
- `0 * * * * *` = Every minute
- `0 */5 * * * *` = Every 5 minutes
- `0 0 9 * * 1-5` = Weekdays at 9 AM

**Emphasize:** "Don't use crontab.guru - it's for Unix 5-field format. Use Azure docs!"

---

### 3. Test Locally (2 min - OPTIONAL)

**In terminal:**
```bash
npm start
```

**Say:** "Watch this - it runs automatically every minute."

**Wait:** Show first execution in console (~60 seconds max)

**Press:** Ctrl+C to stop

**Say:** "This is running locally. Let's deploy to Azure."

---

### 4. Deploy to Azure (3 min)

**Open:** Azure Extension (Ctrl/Cmd+Shift+A)

**Do:**
1. Right-click subscription → "Create Function App in Azure..."
2. Name: `func-timer-demo-pm-001`
3. Runtime: Node.js 18
4. Region: East US
5. Plan: Consumption
6. Wait ~2 minutes

**While waiting, explain:**
- "Consumption plan = serverless"
- "Pay only per execution - nearly free"
- "Auto-scales, no servers to manage"

**Then deploy:**
1. Right-click function app → "Deploy to Function App"
2. Select this folder
3. Confirm

---

### 5. Show Live Execution in Portal (3 min)

**Open:** Azure Portal → Search for your function app

**Navigate:**
1. Functions → RunEveryMinute
2. Monitor → Logs

**Say:** "Let's watch it execute automatically..."

**Wait:** For next minute boundary (check your watch!)

**Show:** Logs appear with emojis and timestamp

**Highlight:**
- ✅ No manual trigger needed
- ✅ Runs continuously
- ✅ Automatic execution
- ✅ Detailed logging

**Check:** Monitor → Execution log (show multiple runs)

---

### 6. Wrap Up (1 min)

**Say:**
- "Perfect for scheduled tasks: cleanup, reports, health checks"
- "Serverless - costs ~$0.01/month for every-minute execution"
- "Works great with bindings for complex workflows"

**Show:** Other functions in project (RunEvery5Minutes.js)

---

## 🎯 KEY POINTS TO EMPHASIZE

1. ⚠️ **6 fields in Azure** (not 5 like Unix!)
2. ✅ **Automatic execution** - no manual trigger
3. 💰 **Nearly free** - serverless pricing
4. 📅 **CRON syntax** - flexible scheduling
5. 🚀 **Use cases** - cleanup, sync, reports, health checks

---

## ❓ EXPECTED QUESTIONS

**Q: Can it run every second?**
A: Yes! Use `* * * * * *`

**Q: What if execution takes longer than interval?**
A: Next execution waits - no overlapping

**Q: Can I disable it?**
A: Yes - click "Disable" in Portal or edit code

**Q: Time zones?**
A: CRON uses UTC by default

---

## 🧹 AFTER DEMO

**Delete resources:**
```bash
az group delete --name rg-az204-demo --yes --no-wait
```

**Or in Portal:**
Resource Groups → Delete

**⚠️ Remind students** to clean up their resources!

---

## 🔧 BACKUP PLAN

**If deployment fails or takes too long:**
- Show local execution instead
- Explain what would happen in Azure
- Show pre-recorded screenshot/video
- Continue with next topic

---

**Total Time:** 10-12 minutes
**Complexity:** Low
**Wow Factor:** High (automatic execution is impressive!)

🎬 **Good luck!**
