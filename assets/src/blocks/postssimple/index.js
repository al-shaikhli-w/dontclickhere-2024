
import {  useBlockProps, InspectorControls } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"
import { PanelBody, PanelRow, TextControl, CheckboxControl } from "@wordpress/components";
import metadata from "./block.json";
import icons from "../icons";

function Edit(props) {
  const blockProps = useBlockProps()

  return (
    <div {...blockProps}>
       <InspectorControls>
        <PanelBody title="Post settings" initialOpen={true}>
          <PanelRow>
          <CheckboxControl
              label="Show post side image"
              checked={props.attributes.postsideimage}
              onChange={(postsideimage) => props.setAttributes({ postsideimage })}
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
              label="How many posts to show?"
              value={props.attributes.postsToShow}
              onChange={(postsToShow) => props.setAttributes({ postsToShow })}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="Order"
              value={props.attributes.order}
              onChange={(order) => props.setAttributes({ order })}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="order of the post (ASC/DESC)"
              value={props.attributes.orderBy}
              onChange={(orderBy) => props.setAttributes({ orderBy })}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="Post Category"
              value={props.attributes.category}
              onChange={(category) => props.setAttributes({ category })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div style={{ backgroundColor: "blue", textAlign: "center", color: "white", padding: "20px" }}>Blog simple</div>
    </div>
  )

}

registerBlockType(metadata.name, {
  icon: icons.postssimple,
  edit: Edit,
})