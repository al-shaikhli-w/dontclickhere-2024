import apiFetch from "@wordpress/api-fetch"
import { Button, PanelBody, PanelRow, TextControl, BaseControl } from "@wordpress/components"
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck
} from "@wordpress/block-editor"

import { useEffect } from "@wordpress/element"

export default function Edit(props) {
  const blockProps = useBlockProps()

  useEffect(function () {
    if (!props.attributes.imgURLLeft & !props.attributes.imgURLRight) {
      props.setAttributes({ imgURLLeft: ourThemeData.themePath + "/images/library-hero.jpg" })
      props.setAttributes({ imgURLRight: ourThemeData.themePath + "/images/library-hero.jpg" })
    }
  }, [])

  useEffect(
    function () {
      if (props.attributes.imgIDRight) {
        async function get_the_left_image_id() {
          const response = await apiFetch({
            path: `/wp/v2/media/${props.attributes.imgIDLeft}`,
            method: "GET"
          })
          props.setAttributes({ imgURLLeft: response.media_details.sizes.full.source_url })
        }
       
        get_the_left_image_id();
      }
      if(props.attributes.imgIDRight) {
        async function get_the_right_image_id() {
          const responseRight = await apiFetch({
            path: `/wp/v2/media/${props.attributes.imgIDRight}`,
            method: "GET"
          })
         
          props.setAttributes({ imgURLRight: responseRight.media_details.sizes.full.source_url })
        }
        get_the_right_image_id();
      }
    },
    [props.attributes.imgIDLeft, props.attributes.imgIDRight]
  )

  function onFileSelectLeftImage(x) {
    props.setAttributes({ imgIDLeft: x.id })
  }
  function onFileSelectRightImage(x) {
    props.setAttributes({ imgIDRight: x.id })
  }

  const onChangeTheadingField = (headingField) => {
    props.setAttributes({ headingField });
  }

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title="Background Left" initialOpen={true}>
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onFileSelectLeftImage}
                value={props.attributes.imgIDLeft}
                render={({ open }) => {
                  return <Button onClick={open}>Choose Image For Left</Button>
                }}
              />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
        <PanelBody title="Background Right" initialOpen={true}>
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onFileSelectRightImage}
                value={props.attributes.imgIDRight}
                render={({ open }) => {
                  return <Button onClick={open}>Choose Image For Left</Button>
                }}
              />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
        <PanelBody title="Block Content" initialOpen={true}>
          <PanelRow>
          <TextControl
							label="Heading Field"
							value={ props.attributes.headingField }
							onChange={ onChangeTheadingField }
						/>
          </PanelRow>
          <PanelRow>
            <BaseControl help="Block content"style={{ display: 'block', with: '100%'}}>
            <textarea
              value={props.attributes.contentField}
              onChange={(e) => props.setAttributes({ contentField: e.target.value })}
              />
            </BaseControl>
          </PanelRow>
          <PanelBody title="Call to Action" initialOpen={true}>
          <PanelRow>
            <TextControl
              label="Button Text"
              value={props.attributes.buttonText}
              onChange={(x) => props.setAttributes({ buttonText: x })}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="Button Link"
              value={props.attributes.buttonLinkPrimary}
              onChange={(x) => props.setAttributes({ buttonLinkPrimary: x })}
            />
          </PanelRow>
          <PanelRow>
            <TextControl
              label="Button Link Secondary"
              value={props.attributes.buttonLinkSecondary}
              onChange={(x) => props.setAttributes({ buttonLinkSecondary: x })}
            />
          </PanelRow>
          <PanelRow>
            <TextControl 
              label="Button Text Secondary"
              value={props.attributes.buttonTextSecondary}
              onChange={(x) => props.setAttributes({ buttonTextSecondary: x })}
            />
          </PanelRow>
          </PanelBody>
        </PanelBody>
        
      </InspectorControls>
    <section class="about" style={{display:'block', with: '100%', textAlign: 'center', padding: "20px", backgroundColor: 'var(--wp--preset--color--black)', color: '#fff', fontSize: '20px', margin:'20px', cursor: 'pointer', textTransform: 'uppercase' }} >
      about section!
    </section>
    </div>
  )
}
