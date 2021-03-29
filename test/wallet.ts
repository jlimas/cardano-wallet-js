   // "axios": "^0.19.2",
import { expect } from 'chai';
import 'mocha';

import { WalletServer } from '../wallet-server';

describe('Cardano wallet API', function() {
		describe('wallet', function() {
			let walletServer = WalletServer.init('http://localhost:8090/v2');
			it("should create/resotre a wallet", async function() {
				let name = "empty-balance";
				let passphrase = '1234567890';
				let recoverPhrase = ["joy","private","elder","ocean","mobile","orient","arrest","assume","monkey","once","thought","like","warfare","spread","stable",];
				
				let wallet = await walletServer.createOrGetShelleyWallet(name, recoverPhrase, passphrase);
				expect(wallet).be.a("object");
				expect(wallet).have.property('id').lengthOf(40);
				expect(wallet).have.property('passphrase').with.property('last_updated_at').be.a('string');
				expect(wallet).have.property('name').equal(name);
			});

			it("should get a wallet", async function() {
				let id = '16f129e025b97f907a760a4cf7b0740d7b4e7993';
				
				let wallet = await walletServer.getShelleyWallet(id);
				expect(wallet).be.a("object");
				expect(wallet).have.property('id').equal(id);
				expect(wallet).have.property('name').be.a('string');
				expect(wallet).have.property('passphrase').with.property('last_updated_at').be.a('string');
			});

		});
});