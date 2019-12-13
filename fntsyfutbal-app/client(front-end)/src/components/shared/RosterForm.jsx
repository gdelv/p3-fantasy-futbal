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
					name='title'
					required
					onChange={handleChange}
				/>
				<p>First Forward</p>
				<input
					placeholder='player name'
					value={roster.player1}
					name='player1'
					required
					onChange={handleChange}
				/>
				<input
					placeholder='Image Url'
					value={roster.imgUlr1}
					name='imgUrl1'
					required
					onChange={handleChange}
				/>

				<p>Second Forward</p>

				<input
					placeholder='player name'
					value={roster.player2}
					name='player2'
					required
					onChange={handleChange}
				/>
				<input
					placeholder='Image Url'
					value={roster.imgUlr1}
					name='imgUrl2'
					required
					onChange={handleChange}
				/>

				<p>Third Forward</p>

				<input
					placeholder='player name'
					value={roster.player3}
					name='player3'
					required
					onChange={handleChange}
				/>
				<input
					placeholder='Image Url'
					value={roster.imgUlr1}
					name='imgUrl3'
					required
					onChange={handleChange}
				/>

				<p>First Midfielder</p>
				<input
					placeholder='player name'
					value={roster.player4}
					name='player4'
					required
					onChange={handleChange}
				/>
				<input
					placeholder='Image Url'
					value={roster.imgUlr1}
					name='imgUrl4'
					required
					onChange={handleChange}
				/>

				<p>Second Midfielder</p>
				<input
					placeholder='player name'
					value={roster.player5}
					name='player5'
					required
					onChange={handleChange}
				/>
				<input
					placeholder='Image Url'
					value={roster.imgUlr1}
					name='imgUrl5'
					required
					onChange={handleChange}
				/>

				<p>Third Midfielder</p>
				<input
					placeholder='player name'
					value={roster.player6}
					name='player6'
					required
					onChange={handleChange}
				/>
				<input
					placeholder='Image Url'
					value={roster.imgUlr1}
					name='imgUrl6'
					required
					onChange={handleChange}
				/>

				<p>First Defender</p>
				<input
					placeholder='player name'
					value={roster.player7}
					name='player7'
					required
					onChange={handleChange}
				/>
				<input
					placeholder='Image Url'
					value={roster.imgUlr1}
					name='imgUrl7'
					required
					onChange={handleChange}
				/>

				<p>Second Defender</p>
				<input
					placeholder='player name'
					value={roster.player8}
					name='player8'
					required
					onChange={handleChange}
				/>
				<input
					placeholder='Image Url'
					value={roster.imgUlr1}
					name='imgUrl8'
					required
					onChange={handleChange}
				/>

				<p>Third Defender</p>
				<input
					placeholder='player name'
					value={roster.player9}
					name='player9'
					required
					onChange={handleChange}
				/>
				<input
					placeholder='Image Url'
					value={roster.imgUlr1}
					name='imgUrl9'
					required
					onChange={handleChange}
				/>

				<p>Goalie</p>
				<input
					placeholder='player name'
					value={roster.player10}
					name='player10'
					required
					onChange={handleChange}
				/>
				<input
					placeholder='Image Url'
					value={roster.imgUlr1}
					name='imgUrl10'
					required
					onChange={handleChange}
				/>

				<button type='submit'>Submit</button>
				<button className='danger' onClick={() => history.push(cancelPath)}>
					Cancel
			</button>
			</form>
		</div>
	)

export default RosterForm