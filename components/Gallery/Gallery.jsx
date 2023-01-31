import Image from 'next/image';
import React from 'react';

export const Gallery = ({ columns, cropImages, items }) => {
  console.log('Gallery', { columns, cropImages, items });
  const columnWidth = 100 / columns;

  return (
    <section className="bg-slate-50 py-10">
      <div className="container">
        <ul className="flex flex-wrap">
          {items.map(item => (
            <li
              key={item.id}
              style={{
                width: `${columnWidth}%`,
              }}
              className="grow p-5"
            >
              <Image
                src={item.attributes.url}
                width={item.attributes.width}
                height={item.attributes.height}
                alt={item.attributes.alt || ''}
                objectFit={cropImages ? 'cover' : 'contain'}
              />
            </li>
          ))}
        </ul>
      </div>
      ;
    </section>
  );
};
