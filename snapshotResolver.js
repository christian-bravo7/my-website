/* eslint-disable @typescript-eslint/explicit-function-return-type */

module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    testPath + snapshotExtension,

  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath
      .slice(0, -snapshotExtension.length),

  /* Example test path, used for preflight consistency
     check of the implementation above
  */
  testPathForConsistencyCheck: 'some/test/example.test.js',
};
