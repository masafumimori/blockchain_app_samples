import { ethers } from 'ethers';
import { metamaskConnector } from './metamask';
import { WalletType } from './types';

export * as metamask from './metamask';
export * from './types';

export const getConnector = (type: WalletType) => {
	switch (type) {
		case 'Metamask':
		default:
			return metamaskConnector;
	}
};

export const getLibrary = (provider: any): ethers.providers.Web3Provider => {
	const library = new ethers.providers.Web3Provider(
		provider,
		typeof provider.chainId === 'number'
			? provider.chainId
			: typeof provider.chainId === 'string'
			? parseInt(provider.chainId)
			: 'any'
	);
	return library;
};
