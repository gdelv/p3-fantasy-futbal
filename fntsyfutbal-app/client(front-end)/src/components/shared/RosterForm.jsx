import React from 'react'

const RosterForm = ({
	roster,
	handleSubmit,
	handleChange,
	cancelPath,
	history
}) => (
	<div className='form-container'>
		<form onSubmit={handleSubmit}>
			<label>Roster Title</label>
			<input
				placeholder='Roster Title.'
				value={roster.title}
				name='roster title'
				required
				onChange={handleChange}
			/>

			{/* <label>Link</label>
			<input
				placeholder='http://acoolitem.com'
				value={item.link}
				name='link'
				required
				onChange={handleChange}
			/> */}

			<button type='submit'>Submit</button>
			<button className='danger' onClick={() => history.push(cancelPath)}>
				Cancel
			</button>
		</form>
	</div>
)

export default RosterForm