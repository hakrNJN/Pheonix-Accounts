
import React from 'react';
import { createRoot } from  'react-dom/client';
import ErrorModal from '../Models/ErrorModel';


export class ErrorController {
  static handleError(error) {
    // create a container element for the popup
    const container = document.createElement('div');
    document.body.appendChild(container);

    // create a root and render the Popup component into the container element
    const root = createRoot(container);
    root.render(
      <ErrorModal
        error={error}
        onClose={() => {
          // unmount the Popup component and remove the container element when the user closes the popup
          root.unmount();
          container.remove();
        }}
      />
    );
  }
}