import Flagsmith from "flagsmith-nodejs";

const featureName = '<feature name>';  // add a valid feature name here
const environmentKey = '<key>';  // add your environment key here

const flagsmith = new Flagsmith({
    environmentKey: environmentKey,
    enableLocalEvaluation: true
});

while (true) {
    console.time('getEnvironmentFlags()');
    const flags = await flagsmith.getEnvironmentFlags();
    console.timeEnd('getEnvironmentFlags()');

    console.time('isFeatureEnabled()')
    flags.isFeatureEnabled(featureName);
    console.timeEnd('isFeatureEnabled()')

    console.time('getFeatureValue()')
    flags.getFeatureValue(featureName);
    console.timeEnd('getFeatureValue()')

    await sleep(1000);
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
