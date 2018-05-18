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
	title: __( 'Tile Layout' ),
	description: __('Creates two columns, half image, half padded text. Use multiple, invert to tile.'),
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
	getEditWrapperProps( attributes ) {
		const moveToolBar = attributes.invert ? 'false' : 'true';
		return {
			'data-align': 'full',
			'data-move-toolbar-right': moveToolBar,
		};
	},
	// ----
	// EDIT
	// ----
	edit( { attributes, setAttributes, className, isSelected } ) {
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
			!! isSelected && (
				<InspectorControls key="inspector">

					<PanelBody>

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
							!! isSelected ? (
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
							!! isSelected && (
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
							isSelected={ isSelected }
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
