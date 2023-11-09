import { FcLike } from 'react-icons/fc';
import { AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';

function Like() {
  const [one, two] = useState(true);
  const like_var =
    one === true ? (
      <AiOutlineHeart size="30" onClick={() => two(false)} />
    ) : (
      <FcLike size="30" onClick={() => two(true)} />
    );

  return like_var;
}

export default Like;
