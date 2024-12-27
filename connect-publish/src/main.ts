import * as core from '@actions/core';
import { connectPublish, loadArgs } from './connect-publish';

export function run(): void {
  const args = loadArgs();
  const checkCertificate = core.getInput('check-certificate') === 'true';

  // Pass the checkCertificate to connectPublish
  connectPublish({ ...args, checkCertificate }).catch((err: any) => core.setFailed(err));
}

run();