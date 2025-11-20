const { app } = require('@azure/functions');

/**
 * Timer Trigger - Runs every 30 seconds
 *
 * CRON Expression: */30 * * * * *
 *
 * Note: This is DISABLED by default (runOnStartup: false)
 * Uncomment to enable during demo if needed
 */
app.timer('RunEvery30Seconds', {
    schedule: '*/30 * * * * *',
    runOnStartup: false,  // Set to true to enable
    handler: (myTimer, context) => {
        context.log('⚡ Fast execution - every 30 seconds!');
        context.log(`   Time: ${new Date().toISOString()}`);
    }
});
