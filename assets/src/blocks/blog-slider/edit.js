import { PanelBody, PanelRow, TextControl, ToggleControl } from "@wordpress/components";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { useState } from 'react';


export default function Edit(props) {
  const blockProps = useBlockProps(); 

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title="Background Left" initialOpen={true}>
        <PanelRow>
        <ToggleControl
            __nextHasNoMarginBottom
            label="Is that Shop Slider?"
            help={
                props.attributes.isShop
                    ? 'YEEE.'
                    : 'NoP.'
            }
            checked={ props.attributes.isShop }
            onChange={ ( isShop ) => props.setAttributes( { isShop } ) }
        />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="Post Style 1 or 2"
              value={props.attributes.style}
              onChange={(style) => props.setAttributes({ style })}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="Post Type"
              value={props.attributes.postType}
              onChange={(postType) => props.setAttributes({ postType })}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="Post Count"
              value={props.attributes.postCount}
              onChange={(postCount) => props.setAttributes({ postCount })}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="Post Order"
              value={props.attributes.postOrder}
              onChange={(postOrder) => props.setAttributes({ postOrder })}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="Post Order By"
              value={props.attributes.postOrderBy}
              onChange={(postOrderBy) => props.setAttributes({ postOrderBy })}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="Post Category"
              value={props.attributes.postCategory}
              onChange={(postCategory) => props.setAttributes({ postCategory })}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="Shop Category"
              value={props.attributes.webshopCategory}
              onChange={(webshopCategory) => props.setAttributes({ webshopCategory })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <section
        className="about"
        style={{
          display: 'block',
          width: '100%',
          textAlign: 'center',
          padding: '20px',
          backgroundColor: 'var(--wp--preset--color--black)',
          color: '#fff',
          fontSize: '20px',
          margin: '20px',
          cursor: 'pointer',
          textTransform: 'uppercase'
        }}
      >
        blog-slider / Shop Slider
      </section>
    </div>
  );
}
