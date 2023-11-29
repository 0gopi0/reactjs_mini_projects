import { useState } from 'react';

interface Props {
  children: string;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar = 100 }: Props) => {
  const [one, two] = useState(false);
  function doIt() {
    two(one ? false : true);
  }
  if (children.length <= maxChar) {
    return (
      <>
        <p>{children}</p>
      </>
    );
  }
  const text = children.substring(0, one ? children.length : maxChar);
  return (
    <>
      <p>
        {text}
        {'...'}
        <button
          type="button"
          className="bg-gray-400  rounded p-1 hover:bg-green-400 font-semibold  "
          onClick={doIt}
        >
          {one ? 'less' : 'more'}
        </button>
      </p>
    </>
  );
};

export default ExpandableText;
