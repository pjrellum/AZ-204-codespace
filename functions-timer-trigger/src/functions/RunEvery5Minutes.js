const { app } = require('@azure/functions');

/**
 * Timer Trigger - Runs every 5 minutes
 *
 * CRON Expression: 0 */5 * * * *
 *
 * Use case: Periodic health checks, data refresh
 */
app.timer('RunEvery5Minutes', {
    schedule: '0 */5 * * * *',
    handler: (myTimer, context) => {
        context.log('🔄 Running 5-minute scheduled task');
        context.log(`   Time: ${new Date().toISOString()}`);

        // Example: Health check logic
        context.log('   Performing health check...');
        context.log('   ✅ All systems operational');
    }
});
