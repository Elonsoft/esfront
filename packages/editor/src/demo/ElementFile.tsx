import { RenderElementProps, useSlateStatic } from 'slate-react';

import { EditorLabels } from './Editor.labels';
import { useEntityState } from './useEntityState';

import { FileElement } from '../testing';
import { EntitiesEditor } from '..';

import { Button } from '@esfront/react';

export interface ElementFileProps extends RenderElementProps {
  element: FileElement;
  labels: EditorLabels;
}

/**
 * Renders an entity node: the file it was created from, how far its upload has got, and a way to try
 * again when it failed.
 *
 * Almost everything shown here comes from the store, including the url the upload answered with — which is
 * why the whole response is kept there rather than only the part the document records. The node itself
 * carries one id.
 */
export const ElementFile = ({ attributes, children, element, labels }: ElementFileProps) => {
  const editor = useSlateStatic();
  const state = useEntityState(element.entityId);

  const percent = Math.round((state?.progress ?? 0) * 100);
  const uploaded = state?.payload;
  // From the response rather than the file: after a reload there is no file, only what was saved.
  const name = uploaded?.name ?? state?.file?.name ?? labels.fileUnknown;
  const isImage = (uploaded?.type ?? state?.file?.type ?? '').startsWith('image/');
  const url = uploaded?.url;

  return (
    <div {...attributes} className="es-editor-demo__file">
      <div contentEditable={false}>
        {url && isImage && <img alt={name} className="es-editor-demo__file-preview" src={url} />}

        <span className="es-editor-demo__file-name">
          {url ? (
            <a href={url} rel="noreferrer" target="_blank">
              {name}
            </a>
          ) : (
            name
          )}
        </span>

        {state?.status === 'uploading' && (
          <span className="es-editor-demo__file-status">
            {labels.fileUploading} {percent}%
          </span>
        )}

        {state?.status === 'done' && <span className="es-editor-demo__file-status">{labels.fileDone}</span>}

        {state?.status === 'error' && (
          <>
            <span className="es-editor-demo__file-status es-editor-demo__file-status--error">{labels.fileFailed}</span>
            <Button
              color="tertiary"
              size="300"
              type="button"
              variant="outlined"
              onClick={() => EntitiesEditor.retryEntityUpload(editor, element.entityId)}
            >
              {labels.fileRetry}
            </Button>
          </>
        )}
      </div>

      {/* Slate needs the children of a void node rendered, even though there is nothing to edit. */}
      {children}
    </div>
  );
};
