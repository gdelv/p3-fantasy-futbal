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
					placeholder='player name'
					value={roster.imgUlr1}
					name='img1'
					required
					onChange={handleChange}
				/>

				<p>Second Forward</p>

				<input
					placeholder='player name'
					value={roster.player1}
					name='player2'
					required
					onChange={handleChange}
				/>
				<input
					placeholder='player name'
					value={roster.imgUlr1}
					name='img2'
					required
					onChange={handleChange}
				/>

				<p>Third Forward</p>

				<input
					placeholder='player name'
					value={roster.player1}
					name='player3'
					required
					onChange={handleChange}
				/>
				<input
					placeholder='player name'
					value={roster.imgUlr1}
					name='img3'
					required
					onChange={handleChange}
				/>

				<p>First Midfielder</p>
				<input
					placeholder='player name'
					value={roster.player1}
					name='player4'
					required
					onChange={handleChange}
				/>
				<input
					placeholder='player name'
					value={roster.imgUlr1}
					name='img4'
					required
					onChange={handleChange}
				/>

				<p>Second Midfielder</p>
				<input
					placeholder='player name'
					value={roster.player1}
					name='player5'
					required
					onChange={handleChange}
				/>
				<input
					placeholder='player name'
					value={roster.imgUlr1}
					name='img5'
					required
					onChange={handleChange}
				/>

				<p>Third Midfielder</p>
				<input
					placeholder='player name'
					value={roster.player1}
					name='player6'
					required
					onChange={handleChange}
				/>
				<input
					placeholder='player name'
					value={roster.imgUlr1}
					name='img6'
					required
					onChange={handleChange}
				/>

				<p>First Defender</p>
				<input
					placeholder='player name'
					value={roster.player1}
					name='player7'
					required
					onChange={handleChange}
				/>
				<input
					placeholder='player name'
					value={roster.imgUlr1}
					name='img7'
					required
					onChange={handleChange}
				/>

				<p>Second Defender</p>
				<input
					placeholder='player name'
					value={roster.player1}
					name='player8'
					required
					onChange={handleChange}
				/>
				<input
					placeholder='player name'
					value={roster.imgUlr1}
					name='img8'
					required
					onChange={handleChange}
				/>

				<p>Third Defender</p>
				<input
					placeholder='player name'
					value={roster.player1}
					name='player9'
					required
					onChange={handleChange}
				/>
				<input
					placeholder='player name'
					value={roster.imgUlr1}
					name='img9'
					required
					onChange={handleChange}
				/>

				<p>Goalie</p>
				<input
					placeholder='player name'
					value={roster.player1}
					name='player10'
					required
					onChange={handleChange}
				/>
				<input
					placeholder='player name'
					value={roster.imgUlr1}
					name='img10'
					required
					onChange={handleChange}
				/>


				<input
					placeholder='player name'
					value={roster.player1}
					name='player11'
					required
					onChange={handleChange}
				/>
				<input
					placeholder='player name'
					value={roster.imgUlr1}
					name='img11'
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