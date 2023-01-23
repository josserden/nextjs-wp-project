import { v4 as uuidv4 } from 'uuid';

export const cleanAndTransformData = blocksJSON => {
  const parsedBlocks = JSON.parse(blocksJSON);

  const assignId = blocks => {
    blocks.forEach(block => {
      block.id = uuidv4();


      if (block.innerBlocks?.length) {
        assignId(block.innerBlocks);
      }
    });
  };

  assignId(parsedBlocks);

  return parsedBlocks;
};
