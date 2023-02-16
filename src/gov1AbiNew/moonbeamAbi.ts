import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './moonbeamAbi.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    Delegated: new LogEvent<([who: string, target: string] & {who: string, target: string})>(
        abi, '0x4bc154dd35d6a5cb9206482ecb473cdbf2473006d6bce728b9cc0741bcc59ea2'
    ),
    Proposed: new LogEvent<([proposalIndex: number, deposit: ethers.BigNumber] & {proposalIndex: number, deposit: ethers.BigNumber})>(
        abi, '0xd89e173ca5c9fd0ec38f2b01995c4f1748210f686fa189a6b8d189c210444924'
    ),
    Seconded: new LogEvent<([proposalIndex: number, seconder: string] & {proposalIndex: number, seconder: string})>(
        abi, '0xe1613d7e3f54885ef3ffdb714435193b9b80818bd3381f108a4d4b21e842654a'
    ),
    StandardVote: new LogEvent<([referendumIndex: number, voter: string, aye: boolean, voteAmount: ethers.BigNumber, conviction: number] & {referendumIndex: number, voter: string, aye: boolean, voteAmount: ethers.BigNumber, conviction: number})>(
        abi, '0x057363260bf880d3658601ecff97e75b67a22f38b7066c0e47e2d170477579c3'
    ),
    Undelegated: new LogEvent<([who: string] & {who: string})>(
        abi, '0x42176493fdfcada70cc1bcf321c9a2314e9571a9fe53c54a5385a1eeac8bc1d7'
    ),
}

export const functions = {
    delegate: new Func<[representative: string, conviction: ethers.BigNumber, amount: ethers.BigNumber], {representative: string, conviction: ethers.BigNumber, amount: ethers.BigNumber}, []>(
        abi, '0x0185921e'
    ),
    depositOf: new Func<[propIndex: ethers.BigNumber], {propIndex: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x4767142d'
    ),
    finishedReferendumInfo: new Func<[refIndex: number], {refIndex: number}, [_: boolean, _: ethers.BigNumber]>(
        abi, '0xc75abcce'
    ),
    lowestUnbaked: new Func<[], {}, ethers.BigNumber>(
        abi, '0xd49dccf0'
    ),
    noteImminentPreimage: new Func<[encodedProposal: string], {encodedProposal: string}, []>(
        abi, '0x974791e3'
    ),
    notePreimage: new Func<[encodedProposal: string], {encodedProposal: string}, []>(
        abi, '0xcb00f603'
    ),
    ongoingReferendumInfo: new Func<[refIndex: number], {refIndex: number}, [_: ethers.BigNumber, _: string, _: number, _: ethers.BigNumber, _: ethers.BigNumber, _: ethers.BigNumber, _: ethers.BigNumber]>(
        abi, '0xf033b7cd'
    ),
    propose: new Func<[proposalHash: string, value: ethers.BigNumber], {proposalHash: string, value: ethers.BigNumber}, []>(
        abi, '0x7824e7d1'
    ),
    publicPropCount: new Func<[], {}, ethers.BigNumber>(
        abi, '0x31305462'
    ),
    removeVote: new Func<[refIndex: ethers.BigNumber], {refIndex: ethers.BigNumber}, []>(
        abi, '0x3f68fde4'
    ),
    second: new Func<[propIndex: ethers.BigNumber, secondsUpperBound: ethers.BigNumber], {propIndex: ethers.BigNumber, secondsUpperBound: ethers.BigNumber}, []>(
        abi, '0xc7a76601'
    ),
    standardVote: new Func<[refIndex: ethers.BigNumber, aye: boolean, voteAmount: ethers.BigNumber, conviction: ethers.BigNumber], {refIndex: ethers.BigNumber, aye: boolean, voteAmount: ethers.BigNumber, conviction: ethers.BigNumber}, []>(
        abi, '0x6cd18b0d'
    ),
    unDelegate: new Func<[], {}, []>(
        abi, '0x1eef225c'
    ),
    unlock: new Func<[target: string], {target: string}, []>(
        abi, '0x2f6c493c'
    ),
}

export class Contract extends ContractBase {

    depositOf(propIndex: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.depositOf, [propIndex])
    }

    finishedReferendumInfo(refIndex: number): Promise<[_: boolean, _: ethers.BigNumber]> {
        return this.eth_call(functions.finishedReferendumInfo, [refIndex])
    }

    lowestUnbaked(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.lowestUnbaked, [])
    }

    ongoingReferendumInfo(refIndex: number): Promise<[_: ethers.BigNumber, _: string, _: number, _: ethers.BigNumber, _: ethers.BigNumber, _: ethers.BigNumber, _: ethers.BigNumber]> {
        return this.eth_call(functions.ongoingReferendumInfo, [refIndex])
    }

    publicPropCount(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.publicPropCount, [])
    }
}
