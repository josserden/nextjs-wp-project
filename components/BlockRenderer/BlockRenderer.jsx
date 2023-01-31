import Image from 'next/image';
import PropTypes from 'prop-types';
import { CallToActionBtn } from 'components/CallToActionBtn';
import { Column } from 'components/Column';
import { Columns } from 'components/Columns';
import { Cover } from 'components/Cover';
import { FormspreeForm } from 'components/FormspreeForm';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { PostTitle } from 'components/PostTitle';
import { PropertyFeatures } from 'components/PropertyFeatures';
import { PropertySearch } from 'components/PropertySearch';
import { theme } from 'theme';

export const BlockRenderer = ({ blocks = [] }) => {
  return blocks.map(block => {
    const { id, name, attributes, innerBlocks } = block;

    switch (name) {
      case 'core/cover':
        console.log('COVER', block);
        return (
          <Cover key={id} url={attributes.url}>
            <BlockRenderer blocks={innerBlocks} />
          </Cover>
        );

      case 'core/heading':
        return (
          <Heading
            key={id}
            content={attributes.content}
            textAlign={attributes.textAlign}
            level={attributes.level}
          />
        );

      case 'core/paragraph':
        return (
          <Paragraph
            key={id}
            content={attributes.content}
            textAlign={attributes.align}
            textColor={
              theme[attributes.textColor] ?? attributes.style?.color?.text
            }
          />
        );

      case 'acf/ctabutton':
        return (
          <CallToActionBtn
            key={id}
            label={attributes.data.label}
            destination={attributes.data.destination ?? '/'}
            align={attributes.data.align}
          />
        );

      case 'core/columns':
        return (
          <Columns key={id} isStackedOnMobile={attributes.isStackedOnMobile}>
            <BlockRenderer blocks={innerBlocks} />
          </Columns>
        );

      case 'core/column':
        return (
          <Column key={id} width={attributes.width}>
            <BlockRenderer key={id} blocks={innerBlocks} />
          </Column>
        );

      case 'core/image':
        return (
          <Image
            key={id}
            src={attributes.url}
            width={attributes.width}
            height={attributes.height}
            alt={attributes.alt || ''}
          />
        );

      case 'core/group':
        return <BlockRenderer key={id} blocks={innerBlocks} />;

      case 'core/block':
        return <BlockRenderer key={id} blocks={innerBlocks} />;

      case 'core/post-title':
        return (
          <PostTitle
            key={id}
            level={attributes.level}
            textAlign={attributes.textAlign}
          />
        );

      case 'acf/propertysearch':
        return <PropertySearch key={id} />;

      case 'acf/formspreeform':
        return <FormspreeForm key={id} formId={attributes.data.form_id} />;

      case 'acf/propertyfeatures':
        return <PropertyFeatures key={id} />;

      default: {
        console.log('UNKNOWN', block);
        return null;
      }
    }
  });
};

BlockRenderer.propTypes = {
  blocks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      originalContent: PropTypes.string.isRequired,
      innerBlocks: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
  ).isRequired,
};
