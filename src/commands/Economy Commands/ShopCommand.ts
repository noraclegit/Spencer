import { items } from '../../static/Items';
import pagination from '../../utils/Pagination';
import { RunFunction } from '../../interfaces/Command';
import { Item } from '../../interfaces/Item';

export const run: RunFunction = async (client, message, args) => {
	return pagination(
		message,
		client.utils.limitArray<Item>(items, 5).map((value: Array<Item>) =>
			client.embed(
				{
					fields: value.map((value: Item) => {
						return {
							name: value.name,
							value: `${
								value.description
							}\nPrice: ${value.price.toLocaleString()}`,
						};
					}),
				},
				message
			)
		),
		['⏪', '⏩'],
		30000
	);
};
export const name: string = 'shop';
export const category: string = 'economy';
export const description: string = 'A cool command';
