import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-python';

const CodeBlock = ({ language, content }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className="rounded-3 p-3 bg-dark text-light">
      <code className={`language-${language}`}>
        {content}
      </code>
    </pre>
  );
};

export default CodeBlock;