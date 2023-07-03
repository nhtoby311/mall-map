import { create } from 'zustand';

const STORES = [
	{
		id: 1,
		name: 'ZAWA',
		type: 'clothing shop',
		image: '',
		positions: [-1, 8, 40],
	},
	{
		id: 2,
		name: 'Food 1',
		type: 'food',
		image: '',
		positions: [21, 4, 35],
	},
	{
		id: 3,
		name: 'CBC',
		type: 'clothing shop',
		image: '',
		positions: [38, 8, 35],
	},
	{
		id: 4,
		name: 'BestBit',
		type: '',
		image: '',
		positions: [38, 8, -35],
	},
	{
		id: 5,
		name: 'Food 2',
		type: 'food',
		image: '',
		positions: [23, 6, -45],
	},
];

type StoresState = {
	stores: typeof STORES;
	currentStore: (typeof STORES)[number] | null;
	setCurrentStore: (storeId: number | null) => void;
};

const useStores = create<StoresState>()((set) => ({
	stores: STORES,
	currentStore: null,
	setCurrentStore: (storeId: number | null) => {
		if (storeId === null) {
			return set({ currentStore: null });
		}
		return set({
			currentStore: STORES.find((store) => store.id === storeId),
		});
	},
}));

export default useStores;
