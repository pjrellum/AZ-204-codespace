const { app } = require('@azure/functions');

/**
 * Timer Trigger Function - Runs every minute
 *
 * CRON Expression: 0 * * * * *
 * Format: {second} {minute} {hour} {day} {month} {day-of-week}
 *
 * This runs at second 0 of every minute.
 */
app.timer('RunEveryMinute', {
    schedule: '0 * * * * *',
    handler: (myTimer, context) => {
        const timestamp = new Date().toISOString();
        const randomNumber = Math.floor(Math.random() * 1000);

        context.log('');
        context.log('═══════════════════════════════════════════');
        context.log('⏰ TIMER TRIGGER EXECUTED');
        context.log('═══════════════════════════════════════════');
        context.log(`📅 Timestamp:     ${timestamp}`);
        context.log(`🔢 Execution ID:  ${context.invocationId}`);
        context.log(`🎲 Random Number: ${randomNumber}`);

        if (myTimer.isPastDue) {
            context.log('⚠️  WARNING: Timer is running late!');
        }

        context.log('✅ Execution completed successfully');
        context.log('═══════════════════════════════════════════');
        context.log('');
    }
});
