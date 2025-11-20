# CRON Expression Cheatsheet
## Azure Functions (6 Fields)

```
┌─────────── second (0-59)
│ ┌───────── minute (0-59)
│ │ ┌─────── hour (0-23)
│ │ │ ┌───── day of month (1-31)
│ │ │ │ ┌─── month (1-12)
│ │ │ │ │ ┌─ day of week (0-6) (0=Sunday)
│ │ │ │ │ │
* * * * * *
```

## Common Examples

| Expression | When | Use Case |
|-----------|------|----------|
| `0 * * * * *` | Every minute | Demo, testing |
| `0 */5 * * * *` | Every 5 min | Health checks |
| `*/30 * * * * *` | Every 30 sec | Frequent polling |
| `0 0 * * * *` | Every hour | Data refresh |
| `0 0 0 * * *` | Daily midnight | Cleanup jobs |
| `0 0 9 * * *` | Daily 9 AM | Reports |
| `0 0 9 * * 1-5` | Weekdays 9 AM | Business hours |
| `0 0 0 1 * *` | 1st of month | Monthly tasks |

## Special Characters

- `*` = every (any value)
- `*/N` = every N units
- `N-M` = range (Monday-Friday = 1-5)
- `N,M,O` = list (Mon,Wed,Fri = 1,3,5)

## ⚠️ Important!

- **Azure = 6 fields** (includes seconds)
- **Unix/Linux = 5 fields** (no seconds)
- **crontab.guru = WRONG** (uses 5 fields!)
- **Use Azure docs** instead!

## Official Docs

https://learn.microsoft.com/azure/azure-functions/functions-bindings-timer
