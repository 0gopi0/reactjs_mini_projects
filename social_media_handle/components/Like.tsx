import { FcLike } from 'react-icons/fc';
import { AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';
function Like() {
  const [one, two] = useState(true);
  if (one) return <AiOutlineHeart size="30" onClick={() => two(false)} />;
  return <FcLike  size="30" onClick={() => two(true)} />;
}

export default Like;
