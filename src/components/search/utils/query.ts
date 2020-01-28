export const getQuery = (id = '0') => `
	{
		character(id: ${id}) {
			name
			species
			status
			origin {
				name
			}
			image
		}
	}
`;
