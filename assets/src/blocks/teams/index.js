
import {  useBlockProps, InspectorControls } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"
import { PanelBody, PanelRow, TextControl } from "@wordpress/components";
import metadata from "./block.json";
import icons from "../icons";

function Edit(props) {
  const blockProps = useBlockProps()

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title="Teams settings" initialOpen={true}>
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
        </PanelBody>
      </InspectorControls>
      <div style={{ backgroundColor: "red", textAlign: "center", color: "white", padding: "20px" }}>Teams Layout</div>
    </div>
  )

}

registerBlockType(metadata.name, {
  icon: icons.teams,
  edit: Edit,
})