/**
 * BLOCK: _sandbox-layouts
 *
 *
 *
 */

/* eslint-disable react/jsx-key */

//import classnames from 'classnames';
import './style.scss';
import './editor.scss';
const { __ } = wp.i18n; // Import __() from wp.i18n
const {
	registerBlockType,
	Editable,
	MediaUpload,
	InspectorControls,
	BlockDescription,
	//AlignmentToolbar,
	//BlockControls,
	//BlockAlignmentToolbar
} = wp.blocks;
const {
	Button,
	Dashicon,
	PanelBody,
	PanelRow,
	FormToggle,
} = wp.components;

registerBlockType( 'cgb/block-sandbox-layouts', {
	title: __( 'Sword Layouts', 'CGB' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( '_sandbox-layouts — CGB Block' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],
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
		}
	},

	// 🔥 not working
	getEditWrapperProps( attributes ) {
		return { 'data-align': 'full' };
	},

	// Edit --------------------------------
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
					>
						{
							focus ? (
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
						<Editable
							tagname="div"
							multiline="p"
							className="textBoxContent"
							placeholder="...."
							value={ attributes.content }
							onChange={ onChangeContent }
						/>
					</div>
				</div>
			),
		];
	},
	// Save --------------------------------
	save: function( props ) {
		return ( <div className={ props.className } data-invert={ props.attributes.invert }>
			<div
				className="imageBox"
				data-imgurl={ props.attributes.imgURL }
				data-imgid={ props.attributes.imgID }
				style={ { backgroundImage: 'url(' + props.attributes.imgURL + ')' } }
			></div>
			<div className="textBox">
				<div className="textBoxContent">
					{ props.attributes.content }
				</div>
			</div>
		</div> );
	},
} );
