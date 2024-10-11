import { PanelBody, CustomSelectControl } from "@wordpress/components";
import { useBlockProps, RichText, MediaPlaceholder, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
  const { layout_variant, image_url, image_id, heading, body, button } = attributes;  

  const handleImageSelect = (image) => {
    setAttributes({ image_url: image.url, image_id: image.id });
  };

  const handleImageRemove = () => {
    setAttributes({ image_url: "", image_id: null });
  };
  const options = [
    { label: "Text Right", value: "text-right" },
    { label: "Text Left", value: "text-left" }
  ];
  const [layoutVariant, setLayoutVariant] = useState(options[0].value);

  return (
    <>
      <InspectorControls>
        {/*
        TODO: Add a custom select control to allow the user to select the layout variant later
        
        <PanelBody title="Settings">
          <CustomSelectControl
            label="About Layout Variant:"
            options={options}
            value={layoutVariant}
            onChange={(newVariant) => {
              setLayoutVariant(newVariant);
              setAttributes({ layout_variant: newVariant });
            }
            }
          />
        </PanelBody> */}
        
      </InspectorControls>
      <div {...useBlockProps({ className: `variant-${layoutVariant}` })}>
        <div className='cta-image-container'>
          {image_url && image_id ? (
            <>
              <img src={image_url} />
              <button className="button-remove" onClick={handleImageRemove}>Remove</button>
            </>
          ) : (
            <MediaPlaceholder
              onSelect={handleImageSelect}
              allowedTypes={['image']}
              multiple={false}
              labels={{ title: 'CTA Image' }}
            />
          )}
        </div>

        <div className='cta-text-container'>
          <RichText
            tagName='h2'
            allowedFormats={[
              'core/bold',
              'core/link'
            ]}
            value={heading}
            onChange={(newHeading) => setAttributes({ heading: newHeading })}
            placeholder='This is the headline'
          />

          <RichText
            tagName='p'
            value={body}
            onChange={(newBody) => setAttributes({ body: newBody })}
            placeholder='This is the body copy'
          />
          <RichText
            tagName='a'
            allowedFormats={
              ['core/bold', 'core/italic', 'core/link']
            }
            value={button}
            onChange={(newButton) => setAttributes({ button: newButton })}
            placeholder='This is the button text'
            rel={button.rel}
          />
          <InnerBlocks />
        </div>
      </div>
    </>
  );
}
