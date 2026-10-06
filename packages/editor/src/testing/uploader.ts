import { EntityUploadContext, EntityUploader } from '../plugins/entities';

export interface DeferredUpload<TPayload> extends EntityUploadContext {
  file: File;
  resolve: (payload: TPayload) => void;
  reject: (error: unknown) => void;
}

/**
 * Builds an uploader whose every call is held open until the test resolves or rejects it.
 *
 * Deferred rather than timed: progress, failure, retry and abort each become a line in the test
 * instead of a wait, so none of it depends on how long anything takes.
 */
export const createDeferredUploader = <TPayload>() => {
  const calls: DeferredUpload<TPayload>[] = [];

  const upload: EntityUploader<TPayload> = (file, context) => {
    return new Promise<TPayload>((resolve, reject) => {
      calls.push({ file, ...context, resolve, reject });
    });
  };

  return { upload, calls };
};

/** Lets every already-settled promise run its callbacks before the test looks again. */
export const flush = async () => {
  await Promise.resolve();
  await Promise.resolve();
  await Promise.resolve();
};
