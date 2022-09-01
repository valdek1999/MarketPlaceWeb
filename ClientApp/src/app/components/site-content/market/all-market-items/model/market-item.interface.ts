export interface MarketItem {
	id?: number;
	title?: string;
	description?: string;
	body?: string;
	headerImage?: string;
}

export interface PaginationData {
	totalItems: number;
	totalPages: number;
	itemsPerPage: number;
	currentPage: number;
}

export interface PagesLinksData {
	first: string;
	previous: string;
	next: string;
	last: string;
}

export interface ProductItemsPageable {
	items: MarketItem[];
	meta: PaginationData;
	links: PagesLinksData;
}