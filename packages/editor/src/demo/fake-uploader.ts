import { UploadedFile } from '../testing';
import { EntityUploader } from '..';

export interface FakeUploaderOptions {
  /** Fails every upload, so that the error and retry states are reachable in the demo. */
  fail?: boolean;
  /** Roughly how long an upload takes, in milliseconds. */
  duration?: number;
}

const STEPS = 20;

let uploaded = 0;

/**
 * Builds an uploader that reports progress and then resolves or fails, without a network.
 *
 * It resolves with a whole response rather than just an id, the way an API would: the url is what a view
 * needs in order to show the file, and it is not the part the document keeps. Here that url points at the
 * file the browser already has, so the demo works offline.
 *
 * It honours the abort signal, which is what makes removing a block mid-upload visible: the ticking stops
 * rather than running on against a node that is no longer there.
 */
export const createFakeUploader = ({
  fail = false,
  duration = 2000,
}: FakeUploaderOptions = {}): EntityUploader<UploadedFile> => {
  return (file, { signal, onProgress }) => {
    return new Promise<UploadedFile>((resolve, reject) => {
      let step = 0;

      const timer = setInterval(() => {
        step += 1;
        onProgress(step / STEPS);

        if (step < STEPS) {
          return;
        }

        clearInterval(timer);

        if (fail) {
          reject(new Error(`Could not upload ${file.name}`));
          return;
        }

        uploaded += 1;

        // A real uploader would hand back a url from the server. The object url is never revoked, which a
        // demo can live with and an application cannot.
        resolve({ id: `file-${uploaded}`, name: file.name, type: file.type, url: URL.createObjectURL(file) });
      }, duration / STEPS);

      signal.addEventListener('abort', () => {
        clearInterval(timer);
        reject(new Error('Aborted'));
      });
    });
  };
};
