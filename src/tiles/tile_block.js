/**
 * Tile Layout
 *
 * @package: Sword Layouts
 */

/* eslint-disable react/jsx-key */

import './style.scss';
import './editor.scss';
const { __ } = wp.i18n;
const {
	registerBlockType,
	RichText,
	MediaUpload,
	InspectorControls,
	BlockDescription,
	AlignmentToolbar,
	BlockControls,
} = wp.blocks;
const {
	Button,
	Dashicon,
	PanelBody,
	PanelRow,
	FormToggle,
} = wp.components;

registerBlockType( 'swrdlyts/tile', {
	title: __( 'Sword Layouts', 'swrdlyts' ),
	icon: 'shield',
	category: 'layout',
	keywords: [ __( 'tile' ), __( 'stagger' ), __( 'image' ) ],
	attributes: {
		imgURL: {
			type: 'string',
			source: 'attribute',
			selector: '.imageBox',
			attribute: 'data-imgurl',
			default: '',
		},
		imgID: {
			type: 'number',
			default: '',
		},
		content: {
			type: 'array',
			source: 'children',
			selector: '.textBoxContent',
			default: '',
		},
		invert: {
			type: 'boolean',
			default: false,
		},
		alignment: {
			type: 'string',
		},
	},
	getEditWrapperProps( ) {
		return { 'data-align': 'full' };
	},
	// ----
	// EDIT
	// ----
	edit( { attributes, setAttributes, className, focus } ) {
		const onChangeContent = value => {
			setAttributes( { content: value } );
		};
		const togglePosition = () => {
			setAttributes( { invert: ! attributes.invert } );
		};
		const onSelectImage = img => {
			setAttributes( {
				imgID: img.id,
				imgURL: img.url,
			} );
		};
		const onChangeAlignment = value => {
			setAttributes( { alignment: value } );
		};
		const buttonText = ( ! attributes.imgID ) ? 'Select Image' : 'Change Image';
		const buttonIcon = ( ! attributes.imgID ) ? 'add' : 'edit';
		return [
			!! focus && (
				<InspectorControls key="inspector">

					<BlockDescription>
						<p>{ __( 'Block controls.  Do more.' ) }</p>
					</BlockDescription>

					<PanelBody title={ __( 'Invert Layout' ) }>

						<PanelRow>
							<label
								htmlFor="invert-form-toggle"
								className="blocks-base-control__label"
							>
								{ __( 'Invert Layout' ) }
							</label>
							<FormToggle
								id="invert-form-toggle"
								label={ __( 'Invert Layout' ) }
								checked={ !! attributes.invert }
								onChange={ togglePosition }
							/>
						</PanelRow>

					</PanelBody>
				</InspectorControls>
			), (
				<div
					className={ className }
					data-invert={ attributes.invert ? 'true' : 'false' }
					data-align="full"
				>
					<div
						className="imageBox"
						style={ { backgroundImage: 'url(' + attributes.imgURL + ')' } }
						data-imgurl={ attributes.imgURL }
						data-imgid={ attributes.imgID }
						data-hasimg={ !! attributes.imgID ? 'true' : 'false' }
					>
						{
							!! focus ? (
								<MediaUpload
									buttonProps={ {
										className: 'components-button button button-large',
									} }
									onSelect={ onSelectImage }
									type="image"
									value={ attributes.imgID }
									render={ ( { open } ) => (
										<Button
											isLarge
											onClick={ open }
											className="components-button components-icon-button button button-large wp-block-image__upload-button"
										>
											<Dashicon icon={ buttonIcon } />
											{ buttonText }
										</Button>
									) }
								>
								</MediaUpload>
							) : null
						}
					</div>
					<div className="textBox">
						{
							!! focus && (
								<BlockControls key="controls">
									<AlignmentToolbar
										value={ attributes.alignment }
										onChange={ onChangeAlignment }
									/>
								</BlockControls>
							)
						}
						<RichText
							tagname="div"
							multiline="p"
							className="textBoxContent"
							placeholder="...."
							style={ { textAlign: attributes.alignment } }
							value={ attributes.content }
							onChange={ onChangeContent }
							isSelected={ focus }
						/>
					</div>
				</div>
			),
		];
	},
	// ----
	// SAVE
	// ----
	save: function( props ) {
		return ( <div className={ props.className } data-invert={ props.attributes.invert }>
			<div
				className="imageBox"
				data-imgurl={ props.attributes.imgURL }
				data-imgid={ props.attributes.imgID }
				style={ { backgroundImage: 'url(' + props.attributes.imgURL + ')' } }
			></div>
			<div className="textBox">
				<div
					className="textBoxContent"
					style={ { textAlign: props.attributes.alignment } }
				>
					{ props.attributes.content }
				</div>
			</div>
		</div> );
	},
} );
