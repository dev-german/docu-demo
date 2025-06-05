    // src/theme/Root.js
    import React from 'react';
    import FloatingChat from '@site/src/components/FloatingChat'; // Asegúrate que la ruta sea correcta

    // Default implementation, that you can customize
    export default function Root({children}) {
      return (
        <>
          {children}
          {typeof window !== 'undefined' && <FloatingChat />} 
          {/* Renderiza FloatingChat solo en el cliente */}
        </>
      );
    }
    