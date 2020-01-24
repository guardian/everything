import React, { FC } from 'react';

type ListItemProps = {
	result: any;
};

export const ListItem: FC<ListItemProps> = ({ result }) => {
	return (
		<div>
			<div>
				<img
					src={`https://i.guim.co.uk/img/media/e23aefbb96da5750996aa6e19490225b3ca7fe37/0_142_2600_1560/master/2600.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=95c5b0ef3e78555acad3550c9c5ac110`}
				/>
			</div>
			<div>
				<div>
					Jeff Bezos: UN calls for investigation into alleged Saudi hack
				</div>
				<div>Stephanie Kirchgaessner in Washington</div>
				<div>
					Special rapporteurs ‘gravely concerned’ about possible involvement of
					crown prince in surveillance of Amazon boss
				</div>
			</div>
		</div>
	);
};
